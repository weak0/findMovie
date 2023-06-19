import { NavBar } from "../navbar";
import OriginCountry from "./originCountry";
import ProvidersFilter from "./providers";
import RelaseYear from "./relaseYear";
import WithGenres from "./withGenres";
import { Box, Button } from "@mui/material";
import VoteAvg from "./vote_average";
import SortBy from "./sortBy";
// import Tags from "./tags";
import { matchContext } from "../store/PerfectMatchContext";
import { useContext, useEffect, useState } from "react";
import { options } from "../config/api";
import { MovieInterface } from "../config/interfaces";

const PerfectMatch = () => {
  const matchCtx = useContext(matchContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const handleRequest = () => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}` +
      `&sort_by=${matchCtx.sortby}` +
      `&vote_average.gte=${matchCtx.voteAverage[0]}` +
      `&vote_average.lte=${matchCtx.voteAverage[1]}` +
      `&watch_region=PL` +
      `${matchCtx.genres.length !== 0 ? `&with_genres=${matchCtx.genres.join(",")}` : ""}` +
      `${matchCtx.relaseYear.length !== 0 ? `&primary_release_date.gte=${matchCtx.relaseYear[0]}-01-01&primary_release_date.lte=${matchCtx.relaseYear[1]}-12-31` : ""}` +
      `${matchCtx.country.length !== 0 ? `&with_origin_country=${matchCtx.country}` : ""}` +
      // `${matchCtx.tags.length !== 0 ? `&with_keywords=${matchCtx.tags.join(",")}` : ""}`+
      `${matchCtx.provider.length !== 0 ? `&with_watch_providers=${matchCtx.provider.join(",")}` : ""}`, options)
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        setTotalPages(response.total_pages);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    handleRequest();
  }, [page]);

  return (
    <>
      <NavBar />
      <ProvidersFilter />
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          justifyContent: { lg: "flex-end", md: "center" },
          flexWrap: "wrap",
        }}
      >
        <SortBy />
        <OriginCountry />
        <WithGenres />
        <RelaseYear />
        {/* <Tags /> */}
        <VoteAvg />
        <Button variant="outlined" onClick={handleRequest}>
          Search
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}></Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {!isLoading &&
          movies.length !== 0 &&
          movies.map((movie) => {
            return (
              <Box key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.vote_average}</p>
              </Box>
            );
          })}
        {movies.length !== 0 && totalPages > 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {page > 1 && (
              <Button
                variant="outlined"
                onClick={() => setPage((prev) => prev + -1)}
              >
                Prev Page
              </Button>
            )}
            {page < totalPages && (
              <Button
                variant="outlined"
                onClick={() => setPage((prev) => prev + 1)}
              >
                Next Page
              </Button>
            )}
          </Box>
        )}
      </Box>
    </>
  );
};
export default PerfectMatch;
