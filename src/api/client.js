const DOMAIN = process.env.REACT_APP_API_DOMAIN

function get(endPoint, params, fromJsonDecoder) {
    const url =
        Object.keys.length === 0
            ? `${DOMAIN}${endPoint}`
            : `${DOMAIN}${endPoint}?${new URLSearchParams(params).toString()}`

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
        },
    }

    return fetch(url, options)
        .then((res) => res.json())
        .then((apiResponse) => fromJsonDecoder(apiResponse))
}

export const ENDPOINTS = {
    listings: 'rentalPrice',
    // Other API Endpoints...
}

const APIClient = { get }
export default APIClient
