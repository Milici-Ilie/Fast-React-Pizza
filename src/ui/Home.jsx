import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      {/* 🧯🧯[MEDIA QUERIES]🧯🧯 here we applied the "sm" = "small" = "640 px screen", also please go and check the documentation from the "Tailwind" website and see all the beneffinits from there and how to use them ====== also note that on the page about media queries you will find at the bottom of this page how you can create you'r own break points for the page 🧯🧯[MEDIA QUERIES]🧯🧯*/}
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
