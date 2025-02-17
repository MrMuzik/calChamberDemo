import Header from "../components/Header.tsx";
import Tabs from "../islands/Tabs.tsx";
import Product from "../components/Product.tsx";
import Promo from "../components/Promo.tsx";
export default function Home() {
  return (
    <>
      <Header />
      <main class="container mx-auto mt-8 px-4">
        <Promo />
        <Product />
        <Tabs />
      </main>
    </>
  );
}
