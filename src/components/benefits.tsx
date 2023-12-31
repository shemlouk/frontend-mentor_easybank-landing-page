import ApiIcon from "@/assets/icon-api.svg?react";
import BudgetingIcon from "@/assets/icon-budgeting.svg?react";
import OnBoardingIcon from "@/assets/icon-onboarding.svg?react";
import OnlineIcon from "@/assets/icon-online.svg?react";

const benefits = [
  {
    title: "Online Banking",
    content:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    icon: OnlineIcon,
  },
  {
    title: "Simple Budgeting",
    content:
      "See exactly where your money goes each month. Receive notifications when you're close to your hiting limits.",
    icon: BudgetingIcon,
  },
  {
    title: "Fast Onboarding",
    content:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    icon: OnBoardingIcon,
  },
  {
    title: "Open API",
    content:
      "Manage your saving, investments, pension, and much more from one account. Tracking your money has never been easier.",
    icon: ApiIcon,
  },
];

export function Benefits() {
  return (
    <section className="bg-lightGrayishBlue px-4 py-16 md:flex md:justify-center md:py-24">
      <div className="flex max-w-screen-lg flex-col items-center gap-16 md:items-start">
        <div className="flex flex-col gap-4 px-4 md:w-1/2 md:gap-8 md:text-start">
          <h2 className="text-3xl font-light leading-snug text-darkBlue md:text-4xl">
            Why choose Easybank?
          </h2>

          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <ul className="flex flex-col gap-8 md:flex-row">
          {benefits.map((benefit, index) => (
            <li key={index}>
              <div className="flex flex-col items-center gap-4 md:w-64 md:items-start md:gap-6 md:text-start">
                <benefit.icon className="mb-2" />

                <h3 className="text-xl font-light text-darkBlue">
                  {benefit.title}
                </h3>

                <p>{benefit.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
