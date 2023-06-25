import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'c0cf134f179f42b08e9edc95be56eb4e'
    }
})