import { Toolbar } from "./NavbarSCSS";
import tmdb from "../../../public/tmdb.png";

export function Navbar() {
  return (
    <>
      <Toolbar>
        <img src={tmdb} alt="TMDB Project Personal Logo" />
      </Toolbar>
    </>
  );
}
