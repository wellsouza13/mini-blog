import { ContainerProps } from "../../interface/components/container";

export const Container = ({ children }: ContainerProps) => {
  return <div className="container">{children}</div>;
};
