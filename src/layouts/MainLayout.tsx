import type {FC, PropsWithChildren} from "react";
import Providers from "../providers/Providers";
import Nav from "../components/Nav/Nav";

export const MainLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <Providers>
      <Nav />
      {children}
    </Providers>
  );
};
