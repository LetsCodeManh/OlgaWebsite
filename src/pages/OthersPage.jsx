import { Link } from "react-router-dom";
import Terms from "../components/Footer/Terms";
import Privacy from "../components/Footer/privacy";
import Impressum from "../components/Footer/impressum";

const OthersPage = () => {
  return (
    <main className={`flex flex-col gap-[1.5rem] p-[1.5rem]`}>
      <Link to="/">
        <svg
          width="34"
          height="24"
          viewBox="0 0 34 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="arrow"
            d="M32 13.5C32.8284 13.5 33.5 12.8284 33.5 12C33.5 11.1716 32.8284 10.5 32 10.5V13.5ZM0.939338 10.9393C0.353551 11.5251 0.353551 12.4749 0.939338 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.939338 10.9393ZM32 10.5L2 10.5V13.5L32 13.5V10.5Z"
          />
        </svg>
      </Link>

      <Terms />
      <Impressum />
      <Privacy />
    </main>
  );
};

export default OthersPage;
