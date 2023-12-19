import { CallToActionButton } from "./call-to-action-button";

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden px-4 md:flex md:h-[600px] md:items-center md:justify-center">
        <img
          src="/bg-intro-mobile.svg"
          alt="hero background"
          className="absolute right-0 top-0 w-full md:hidden"
        />

        <img
          src="/bg-intro-desktop.svg"
          alt="hero background"
          className="absolute -bottom-1/2 -right-[calc(40%+(1500px-100%))] hidden md:block"
        />

        <div className="max-w-screen-lg">
          <div className="flex -translate-y-16 flex-col items-center gap-6 md:w-1/2 md:translate-y-0 md:items-start md:gap-8">
            <img
              src="/image-mockups.png"
              alt="hero mockups images"
              className="md:hidden"
            />

            <h1 className="text-4xl leading-snug text-darkBlue md:text-start md:text-6xl md:font-light">
              Next generation digital banking
            </h1>

            <p className="md:text-start md:text-lg">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>

            <CallToActionButton />
          </div>
        </div>
      </section>

      <img
        src="/image-mockups.png"
        alt="hero mockups images"
        className="absolute -right-[calc(550px-30%)] -top-28 hidden md:block"
      />
    </>
  );
}
