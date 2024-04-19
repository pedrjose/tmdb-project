import { useEffect, useState } from "react";
import { HomepageStyled } from "./HomepageSCSS";
import { getMoviesPlayingService } from "../../Services/movies.service";
import { Loader } from "../../Components/Loader/Loader";
import { Card } from "../../Components/Card/Card";

export function Homepage() {
  const [homepageMoviesList, setHomepageMoviesList] = useState({
    playingMoviesList: [],
    promise: false,
  });

  useEffect(() => {
    const getHomePageMovies = async () => {
      const response = await getMoviesPlayingService();

      setHomepageMoviesList(response);
    };

    getHomePageMovies();
  }, []);

  console.log(homepageMoviesList);
  return (
    <>
      <HomepageStyled>
        {homepageMoviesList.promise ? (
          homepageMoviesList.playingMoviesList.map((item, index) => {
            return <Card key={index} props={item} />;
          })
        ) : (
          <Loader />
        )}
      </HomepageStyled>
    </>
  );
}
