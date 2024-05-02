import Image from "next/image";
import { Inter } from "next/font/google";
import Pricing from "../components/Pricing";
import Stats from "../components/Stats";
import People from "../components/People";
import Awkward from "../components/Awkward";
import Carousel from "../components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-2 lg:p-24 ${inter.className}`}
    >
      <header>
        <div className="flex items-end mb-24">
          <p className="text-8xl">Ferme ta gueule.</p>
          <p>(stp)</p>
        </div>
        <p className="text-lg mb-24">
          Toi avec l&apos;esprit bruyant.
          <br /> Prends un moment pour te taire et écouter. Apprécie la douce
          symphonie du silence. Fais confiance, ton cerveau te remerciera.
          Maintenant, boucle-la et profite de la tranquillité.
          <br />
          <br /> Chut...
        </p>
      </header>
      <div className="grid grid-cols-1 gap-4 mb-24 w-full lg:grid-cols-2">
        <Awkward />
        <Stats />
      </div>
      <Carousel />
      <div className="flex gap-4 w-full flex-wrap mb-24 items-center justify-center">
        <People />
        <p className="basis-1/2 text-center text-2xl">
          Donc pense a fermer ta gueule.
        </p>
      </div>
      <Pricing />
    </main>
  );
}
