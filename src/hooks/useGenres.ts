import genres from "../data/genres";
import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useData<Genre>("/genres");
//we can instead of get genres from server, put them by coping them from network (result from genre) into a new component(data -> genres.ts) and calling them here instead of useData. we can do this because increase speed of loading page. like below:
// const useGenres = () => ({data: genres, isLoading: false, error: null});

export default useGenres;
