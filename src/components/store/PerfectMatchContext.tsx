import { createContext, useState, useEffect } from "react";

export const matchContext = createContext({
  provider: [] as string[],
  setProviderHandler: (value: string) => {},
  removeProviderHandler: (value: string) => {},
  sortby: "popularity.desc",
  setSortByHandler: (value: string) => {},
  countrys: [] as string[],
  setCountryHandler: (value: string) => {},
  removeCountryHandler: (value: string) => {},
  genres: [] as string[],
  setGenresHandler: (value: string) => {},
  removeGenresHandler: (value: string) => {},
  relaseYear: [] as number[],
  setRelaseYearHandler: (from: number, to: number) => {},
  tags: [] as string[],
  setTagsHandler: (value: string) => {},
  removeTagsHandler: (value: string) => {},
  voteAverage: [] as number[],
  setVoteAverageHandler: (from: number, to: number) => {},
});

import { FC, ReactNode } from "react";

const MatchContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [provider, setProvider] = useState<string[]>([]);
  const [sortby, setSortBy] = useState("popularity.desc");
  const [countrys, setCountry] = useState<string[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [relaseYear, setRelaseYear] = useState<number[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [voteAverage, setVoteAverage] = useState<number[]>([0, 10]);

  const setProviderHandler = (value: string) => {
    setProvider((prev) => [...prev, value]);
  };
  const removeProviderHandler = (value: string) => {
    const index = provider.findIndex((el) => el === value);
    const newProvider = [...provider];
    newProvider.splice(index, 1);
    setProvider(newProvider);
  };

  const setSortByHandler = (value: string) => {
    setSortBy(value);
  };

  const setCountryHandler = (value: string) => {
    setCountry((prev) => [...prev, value]);
  };
  const removeCountryHandler = (value: string) => {
    const index = countrys.findIndex((el) => el === value);
    const newCountrys = [...countrys];
    newCountrys.splice(index, 1);
    setCountry(newCountrys);
  };

  const setGenresHandler = (value: string) => {
    setGenres((prev) => [...prev, value]);
  };
  const removeGenresHandler = (value: string) => {
    const index = genres.findIndex((el) => el === value);
    const newGenres = [...genres];
    newGenres.splice(index, 1);
    setGenres(newGenres);
  };
  const setRelaseYearHandler = (from: number, to: number) => {
    setRelaseYear([from, to]);
  };
  const setTagsHandler = (value: string) => {
    setTags((prev) => [...prev, value]);
  };
  const removeTagsHandler = (value: string) => {
    const index = tags.findIndex((el) => el === value);
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const setVoteAverageHandler = (from: number, to: number) => {
    setVoteAverage([from, to]);
  };

  useEffect(() => {
    console.log("provider", provider);
    console.log("sortby", sortby);
    console.log("countrys", countrys);
    console.log("genres", genres);
    console.log("relaseYear", relaseYear);
    console.log("tags", tags);
    console.log("voteAverage", voteAverage);
  }, [provider, sortby, countrys, genres, relaseYear, tags, voteAverage]);

  return (
    <matchContext.Provider
      value={{
        provider,
        setProviderHandler,
        removeProviderHandler,
        sortby,
        setSortByHandler,
        countrys,
        setCountryHandler,
        removeCountryHandler,
        genres,
        setGenresHandler,
        removeGenresHandler,
        relaseYear,
        setRelaseYearHandler,
        tags,
        setTagsHandler,
        removeTagsHandler,
        voteAverage,
        setVoteAverageHandler,
      }}
    >
      {children}
    </matchContext.Provider>
  );
};

export default MatchContextProvider;
