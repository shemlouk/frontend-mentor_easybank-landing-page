import { CallToActionButton } from "./call-to-action-button";

export function Hero() {
  return (
    <section className="relative px-4">
      <img
        src="/bg-intro-mobile.svg"
        alt="hero background"
        className="absolute right-0 top-0 -z-10"
      />

      <div className="flex -translate-y-16 flex-col items-center gap-6">
        <img src="/image-mockups.png" alt="hero mockups images" />

        <h1 className="text-center text-4xl leading-snug text-darkBlue">
          Next generation digital banking
        </h1>

        <p className="text-center text-grayishBlue">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <CallToActionButton />
      </div>
    </section>
  );
}
