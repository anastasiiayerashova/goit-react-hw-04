import axios from "axios";
const key = 'Ntb7ulS5phjdxl1cvjDHbMhqQB2gD795DPpovtLfED8';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchData = async (query, page = 1) => {
    const params = new URLSearchParams({
        query: query,
        per_page: 12,
        page,
    })
    const response = await axios.get(`/search/photos?client_id=${key}&${params}`)
    return response.data.results
}
