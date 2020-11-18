const API_BASE_URL = "https://api.tvmaze.com"

export async function apiGet(queryString){
    // from https://www.tvmaze.com/api :
    // https://api.tvmaze.com/search/shows?q=girls
    const response = await fetch(`${API_BASE_URL}${queryString}`).then((r) => r.json())
    return response
}