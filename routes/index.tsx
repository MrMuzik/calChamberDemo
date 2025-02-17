import Header from "../components/Header.tsx";
import Tabs from "../islands/Tabs.tsx";
import Promo from "../components/Promo.tsx";
export default function Home() {
  return (
    <div class="bg-gray-50">
      <Header />
      <main class="container mx-auto mt-8 px-4">
        <Promo />
        <div class="flex">
          <div class="w-1/3">
            <img
              alt="San Francisco Labor Law Posters 4-Poster set"
              class="shadow-md rounded-md"
              src="https://replicate.delivery/xezq/63PUbCyHTAI4FFsO6TAFp0T80zXwD8rlO1QRwKoDcZxQFAEF/out-0.png"
              width="100%"
            />
          </div>
          <div class="w-2/3 pl-8">
            <h1 class="text-2xl font-bold text-calchamber-blue">San Francisco Labor Law Posters</h1>
            <Tabs />
          </div>
        </div>
      </main>
    </div>
  );
}
