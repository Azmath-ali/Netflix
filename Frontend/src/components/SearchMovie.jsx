import axios from "axios";
import React, { useState } from "react";
import { options } from "../utils/constant.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getMovieSearch } from "../redux/searchSlice.jsx";
import { setIsLoading } from "../redux/userSlice.jsx";
import MovieList from "./MovieList.jsx";
import Variants from "./Variants.jsx";

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");

  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const { searchedMovie, movieName } = useSelector((store) => store.searchMovie);




  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(setIsLoading(true));

    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}`,
        options)

      console.log(res.data.results);

      const movies = res?.data?.results;

      dispatch(getMovieSearch({ searchMovie, movies }));

    } 
    catch (error) {
      console.log(error);
    } 

    finally {
      dispatch(setIsLoading(false));
    }

    setSearchMovie("");


  };


  
  return  (
    <>
      <div className="w-[100%] pt-[10%] flex justify-center">
        <form className="w-[50%]" onSubmit={submitHandler} >
          <div className="p-2 flex items-center w-[100%] border-2 border-gray-200 rounded-md shadow-md ">
            <input
              value={searchMovie}
              onChange={(val) => setSearchMovie(val.target.value)}
              className="w-full  outline-none  text-lg "
              type="text"
              placeholder="Search Movie..."
            />

            <button
          
              className="bg-red-800 px-4 py-2 text-white font-bold"
            >
              {isLoading ? "Loading..." : "Search"}{" "}
            </button>
          </div>
        </form>
      </div>

    {movieName ?  <MovieList title={searchedMovie} movies= {movieName} searchMovie={true}  /> : <Variants/>}




    </>
  ) 
};

export default SearchMovie;
