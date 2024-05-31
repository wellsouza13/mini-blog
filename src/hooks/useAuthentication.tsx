import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  User,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { AuthData } from "../interface/pages/useAuthentication";

type ErrorType = string | null;
type LoadingType = boolean;

export const useAuthentication = () => {
  const [error, setError] = useState<ErrorType>(null);
  const [loading, setLoading] = useState<LoadingType>(false);

  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  const checkIfIsCancelled = () => {
    if (cancelled) {
      return true;
    }
    return false;
  };

  const createUser = async (data: AuthData): Promise<User | void> => {
    if (checkIfIsCancelled()) return;

    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      if (data.displayName) {
        await updateProfile(user, {
          displayName: data.displayName,
        });
      }

      setLoading(false);
      return user;
    } catch (error: unknown) {
      setLoading(false);

      if (error instanceof Error) {
        let systemErrorMessage;

        if (error.message.includes("Password")) {
          systemErrorMessage =
            "A senha precisa conter pelo menos 6 caracteres.";
        } else if (error.message.includes("email-already")) {
          systemErrorMessage = "E-mail já cadastrado.";
        } else {
          systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
        }

        setError(systemErrorMessage);
      }
    }
  };

  const logout = async (): Promise<void> => {
    if (checkIfIsCancelled()) return;

    try {
      await signOut(auth);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError("Ocorreu um erro ao sair, por favor tente mais tarde.");
      }
    }
  };

  const login = async (data: AuthData): Promise<void> => {
    if (checkIfIsCancelled()) return;

    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error: unknown) {
      setLoading(false);

      if (error instanceof Error) {
        let systemErrorMessage;

        if (error.message.includes("user-not-found")) {
          systemErrorMessage = "Usuário não encontrado.";
        } else if (error.message.includes("wrong-password")) {
          systemErrorMessage = "Senha incorreta.";
        } else {
          systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
        }

        setError(systemErrorMessage);
      }
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    logout,
    login,
    loading,
  };
};
