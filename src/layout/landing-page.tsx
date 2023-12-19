import { Articles } from "@/components/articles";
import { Benefits } from "@/components/benefits";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export function LandingPage() {
  return (
    <div className="flex h-full w-full flex-col bg-veryLightGray text-center text-grayishBlue md:min-w-[1300px]">
      <Header />

      <main className="relative flex flex-col overflow-hidden pt-16 md:pt-24">
        <Hero />
        <Benefits />
        <Articles />
      </main>

      <Footer />
    </div>
  );
}
