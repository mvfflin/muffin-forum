const InvitationSection = () => {
  return (
    <section className="flex my-16 sm:my-24 lg:my-32 w-full px-4 sm:px-8">
      <div className="mx-auto text-center">
        <h1 className="text-green-950 text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold mb-4">
          So~ what are you waiting for?
        </h1>
        <h2 className="text-green-950 text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center mb-8">
          Join{" "}
          <span className="text-green-500 font-bold font-walaweh">
            Muffin Forum
          </span>{" "}
          Now!
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button className="button-dark-green w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
            Sign up
          </button>
          <button className="button-dark-green w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
