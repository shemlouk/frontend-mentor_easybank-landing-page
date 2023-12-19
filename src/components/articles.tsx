const articles = [
  {
    title: "Receive money in any currency with no fees",
    author: "Claire Robinson",
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
    imageHref: "/image-currency.jpg",
    imageAlt: "money bills from many countries",
  },
  {
    title: "Treat yourself without worrying about money",
    author: "Wilson Hutton",
    content:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
    imageHref: "/image-restaurant.jpg",
    imageAlt: "restaurante table full of food",
  },
  {
    title: "Take your Easybank card wherever you go",
    author: "Wilson Hutton",
    content:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
    imageHref: "/image-plane.jpg",
    imageAlt: "flying airplane wing view",
  },
  {
    title: "Our invite-only Beta accounts are now live!",
    author: "Claire Robinson",
    content:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
    imageHref: "/image-confetti.jpg",
    imageAlt: "confetti",
  },
];

export function Articles() {
  return (
    <section className="flex flex-col gap-8 bg-veryLightGray px-4 py-16">
      <h2 className="text-3xl font-light leading-snug text-darkBlue">
        Latest Articles
      </h2>

      <ul className="flex flex-col gap-8">
        {articles.map((article, index) => (
          <li key={index}>
            <div className="overflow-hidden rounded-md bg-white shadow-[0_8px_30px_rgb(0,0,0,0.01)]">
              <a href="#">
                <figure className="overflow-hidden transition-all hover:brightness-75">
                  <img
                    src={article.imageHref}
                    alt={article.imageAlt}
                    className="w-full transition-transform hover:scale-105"
                  />
                </figure>
              </a>

              <div className="flex flex-col gap-2 p-6 text-start">
                <p className="text-sm">By {article.author}</p>

                <a href="#">
                  <h3 className="text-xl text-darkBlue/90 hover:text-darkBlue">
                    {article.title}
                  </h3>
                </a>

                <p>{article.content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
