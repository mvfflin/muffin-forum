import { CATEGORIES } from "@/constants";

const NavigationSection = () => {
  return (
    <section className="w-full justify-center items-center top-24 bg-zinc-300 py-2 sm:py-3 sticky z-10 shadow-md">
      <ul className="flex flex-row items-center justify-around px-4 sm:px-8 lg:px-20 gap-2 sm:gap-4">
        {CATEGORIES.map((category, index) => (
          <li
            key={category}
            className="cursor-pointer transition-all duration-300 hover:text-green-600 hover:scale-110 font-medium text-gray-700 hover:font-bold text-sm sm:text-base px-2 py-1 rounded-md hover:bg-green-100"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NavigationSection;
