import { CardStyled } from "./CardSCSS";
import banner from "../../../public/banner.jpg";
import { useNavigate } from "react-router-dom";

const bannerImage = (props) => {
  return `https://image.tmdb.org/t/p/original${props}`;
};

export function Card({ props }) {
  const navigate = useNavigate();

  const viewMoviePage = (name) => {
    navigate(`/view/${name}`);
  };
  return (
    <>
      <CardStyled>
        <h6>{props.original_title}</h6>
        <img src={bannerImage(props.poster_path)} alt="Banner Image" />
        <button onClick={() => viewMoviePage(props.original_title)}>
          View
        </button>
      </CardStyled>
    </>
  );
}
