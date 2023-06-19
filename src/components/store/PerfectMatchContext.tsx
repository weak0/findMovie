import { createContext, useState} from "react";

export const matchContext = createContext({
  provider: [] as string[],
  setProviderHandler: (value: string) => { value},
  removeProviderHandler: (value: string) => { value},
  sortby: "popularity.desc",
  setSortByHandler: (value: string) => { value},
  country: '',
  setCountryHandler: (value: string) => { value},
  genres: [] as number[],
  setGenresHandler: (value: number) => { value},
  removeGenresHandler: (value: number) => { value},
  relaseYear: [] as number[],
  setRelaseYearHandler: (value: number[]) => { value},
  tags: [] as string[],
  setTagsHandler: (value: string) => { value},
  removeTagsHandler: (value: string) => { value},
  voteAverage: [] as number[],
  setVoteAverageHandler: (value: number[]) => { value},
});

import { FC, ReactNode } from "react";

const MatchContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [provider, setProvider] = useState<string[]>([]);
  const [sortby, setSortBy] = useState("popularity.desc");
  const [country, setCountry] = useState("");
  const [genres, setGenres] = useState<number[]>([]);
  const [relaseYear, setRelaseYear] = useState<number[]>([1950,2023]);
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
    setCountry(value);
  };
  const setGenresHandler = (value: number) => {
    setGenres((prev) => [...prev, value]);
  };
  const removeGenresHandler = (value: number) => {
    const index = genres.findIndex((el) => el === value);
    const newGenres = [...genres];
    newGenres.splice(index, 1);
    setGenres(newGenres);
  };
  const setRelaseYearHandler = (years : number[]) => {
    setRelaseYear(years);
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

  const setVoteAverageHandler = (value : number[]) => {
    setVoteAverage(value);
  };

  return (
    <matchContext.Provider
      value={{
        provider,
        setProviderHandler,
        removeProviderHandler,
        sortby,
        setSortByHandler,
        country,
        setCountryHandler,
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
