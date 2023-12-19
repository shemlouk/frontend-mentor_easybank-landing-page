import { Articles } from "@/components/articles";
import { Benefits } from "@/components/benefits";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export function LandingPage() {
  return (
    <div className="flex h-full w-full flex-col text-center text-grayishBlue">
      <Header />

      <main className="flex flex-col pt-16">
        <Hero />
        <Benefits />
        <Articles />
      </main>

      <Footer />
    </div>
  );
}
