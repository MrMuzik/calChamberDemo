import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Tabs from "../islands/Tabs.tsx";

export default function Home() {
  return (
    <div class="bg-gray-50">
      <Header />
      <div class="bg-green-100 py-2 text-center text-green-800">
        Preferred or higher level members save up to 20% year-round on products and training.
      </div>
      <main class="container mx-auto mt-8 px-4">
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
      <Footer />
    </div>
  );
}
