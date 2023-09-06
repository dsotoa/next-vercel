import { MainLayout } from "../../components/layouts/MainLayout";
import Link from "next/link";

export default function Contact() {
  return (
    <MainLayout>
      <h2>Contact Page</h2>
      <h1>
        Ir a <Link href="/Contact">Home</Link>
      </h1>
    </MainLayout>
  );
}
