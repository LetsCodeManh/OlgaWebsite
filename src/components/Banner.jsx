import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
  return (
    <div
      className="fixed bg-secondary text-white top-[8px] left-0 z-50 p-4 w-full uppercase flex items-center gap-2 justify-center md:flex-row"
      id="banner"
    >
      <FontAwesomeIcon icon={faInfoCircle} />
      <p className="text-base">Coaching & Beratung jetzt auch online!</p>
      <a
        className="bg-white text-black px-2 py-1 rounded-lg hover:bg-black hover:text-primary transition-colors duration-300 border-2 border-black text-lg"
        href="#contact"
      >
        Kontaktformular
      </a>
    </div>
  );
};

export default Banner;
