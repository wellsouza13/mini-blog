import { AuthProvider } from "./contexts/AuthContext";
import { RoutesConfig } from "./routes";

function App() {

  return (
    <div>
      <AuthProvider>
        <RoutesConfig />
      </AuthProvider>
    </div>
  );
}

export default App;
