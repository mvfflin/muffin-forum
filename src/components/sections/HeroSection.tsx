const HeroSection = () => (
  <section className="flex flex-col h-max p-4 sm:p-5 lg:p-8">
    <div className="w-full text-center py-8 sm:py-12 lg:py-16 items-center bg-zero flex flex-col h-1/4 justify-center rounded-xl transform transition-all duration-700 hover:scale-105">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-green-500 font-bold font-walaweh animate-fade-in">
        Muffin Forum
      </h1>
      <h2 className="text-base sm:text-lg text-green-800 animate-fade-in-delay mt-2">
        Talk about anything!
      </h2>
    </div>
    <div className="my-12 sm:my-16 lg:my-20 text-center animate-slide-up px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-green-950 font-montserrat mb-4">
        About
      </h1>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, possimus?
        Eaque error, consequuntur, quo delectus illum nisi maxime blanditiis
        deserunt quisquam voluptates dolorem impedit assumenda veniam? Itaque
        nisi ut reprehenderit hic ex maiores cupiditate quas quo minus cum. Modi
        saepe qui rerum sunt dolores officiis magnam vitae nihil quod corrupti.
      </p>
    </div>
  </section>
);

export default HeroSection;
