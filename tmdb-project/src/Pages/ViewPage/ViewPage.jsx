import { useState, useEffect } from "react";
import { Loader } from "../../Components/Loader/Loader";
import { getMoviesByNameService } from "../../Services/movies.service";
import { setMovieToMyWatchlistService } from "../../Services/movies.service";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./ViewPage.css";

const filmApprovalPercentage = (numberReview) => {
  return (numberReview / 10) * 100;
};

export function ViewPage() {
  const [moviesViewDetails, setMoviesViewDetails] = useState({
    title: "",
    synopsis: "",
    banner: "",
    background: "",
    review: "",
    parentalRating: false,
    releaseDate: "",
    movieId: "",
    promise: false,
  });
  const [upModal, setUpModal] = useState(false);

  const { name } = useParams();

  const openModalToAddMovie = () => {
    setUpModal(true);
  };

  const { register, handleSubmit, getValues } = useForm();

  const onSubmit = async () => {
    const { tmdbId } = getValues();

    const response = await setMovieToMyWatchlistService(
      tmdbId,
      moviesViewDetails.movieId
    );

    console.log(response);

    setUpModal(false);
  };

  useEffect(() => {
    const getMoviesDetails = async () => {
      const response = await getMoviesByNameService(name);

      console.log(response);

      setMoviesViewDetails(response);
    };

    getMoviesDetails();
  }, []);
  return (
    <>
      <section className="section-settings">
        <img
          src={moviesViewDetails.background}
          className="img-fluid background-settings"
          alt="Background Image"
        ></img>
        <h1 className="movie-title-settings">{moviesViewDetails.title}</h1>
        {upModal ? (
          <span className="modal-box">
            <p className="text-modal">Submit Your TMDB Account ID:</p>
            <div className="modal-submit-form">
              <form
                className="modal-submit-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  placeholder="ex.: 21218973"
                  className="input-text-style"
                  {...register("tmdbId")}
                />
                <button className="modal-button" onClick={() => onSubmit()}>
                  Add
                </button>
              </form>
            </div>
          </span>
        ) : (
          <button
            className="button-style"
            onClick={() => openModalToAddMovie()}
          >
            Add to Your TMDB Watchlist
          </button>
        )}
        <p className="synopsis-settings">{moviesViewDetails.synopsis}</p>
        <div className="container section-settings">
          <div className="row">
            <div className="col-sm">
              <p className="details-text-style">
                Approval:{" "}
                <b>{filmApprovalPercentage(moviesViewDetails.review)}%</b>
              </p>
            </div>
            <div className="col-sm">
              <p className="details-text-style">
                R – Restricted:{" "}
                {moviesViewDetails.parentalRating ? <b>Yes</b> : <b>No</b>}
              </p>
            </div>
            <div className="col-sm">
              <p className="details-text-style">
                Release Date: <b>{moviesViewDetails.releaseDate}</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
