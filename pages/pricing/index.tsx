import { MainLayout } from "../../components/layouts/MainLayout";
import Link from "next/link";

export default function Pricing() {
  return (
    <>
      <h2>Pricing Page</h2>
      <h1>
        Ir a <Link href="/">Home</Link>
      </h1>
    </>
  );
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};
