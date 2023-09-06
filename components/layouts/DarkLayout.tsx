import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
