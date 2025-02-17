import { type PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en" class="h-full">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CalChamber Store Demo</title>
        <link rel="stylesheet" href="/styles.css" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
      </Head>
      <body class="h-full flex flex-col font-sans">
        <main class="flex-1">
          <Component />
        </main>
        <Footer />
      </body>
    </html>
  );
}
