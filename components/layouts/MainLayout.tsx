import Navbar from "../Navbar";
import Head from "next/head";
import styles from "./MainLayout.module.css";
import { FC } from "react";

type Props = {
  children?: React.ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${styles.main}`}>{children}</main>
    </>
  );
};
