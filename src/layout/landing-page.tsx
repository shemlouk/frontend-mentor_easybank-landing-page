import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function LandingPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />

      <main className="flex flex-col px-6 pt-[68px]"></main>

      <Footer />
    </div>
  );
}
