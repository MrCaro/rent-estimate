const DOMAIN = process.env.REACT_APP_API_DOMAIN

async function get(endPoint, params, fromJsonDecoder) {
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

    try {
        const res = await fetch(url, options)
        const apiResponse = await res.json()
        return await fromJsonDecoder(apiResponse)
    } catch (err) {
        console.error(err)
    }
}

export const ENDPOINTS = {
    listings: 'rentalPrice',
}

const APIRentClient = { get }
export default APIRentClient
