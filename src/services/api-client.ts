import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "7ccec9b182d849429e6b52df86e66df1",
    },
});
