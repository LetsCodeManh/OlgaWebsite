import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
  return (
    <div
      className="fixed bg-orange-200 text-orange-700 top-[8px] left-0 z-50 p-4 w-full uppercase flex items-center gap-2 justify-center"
      id="banner"
    >
      <FontAwesomeIcon icon={faInfoCircle} />
      <p>Jetzt auch Online verfügbar!</p>
    </div>
  );
};

export default Banner;
