import { MainLayout } from "../components/layouts/MainLayout";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <h2>Home Page</h2>
      <h1>
        Ir a <Link href="/about">About</Link>
      </h1>
    </MainLayout>
  );
}
