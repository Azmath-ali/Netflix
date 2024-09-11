import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlaying from "../hook/useNowPlaying";
import usePopularMovie from "../hook/usePopularMovie";
import useTopRated from "../hook/useTopRated";
import useUpComing from "../hook/useUpComing";
import SearchMovie from "./SearchMovie";

import Variants from "./Variants";

const Browse = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.app.user);

  const search = useSelector((store) => store.movie.search);

  // custom Hook...

  useNowPlaying();
  usePopularMovie();
  useTopRated();
  useUpComing();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);



  return user  ? (
    <div>
      <Header />
      <div>
        {search ? (
          <SearchMovie />
        ) : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </div>
  ) : <Variants/>
};

export default Browse;
