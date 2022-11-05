import Address from '../models/address'

// API is configured
const restEndPoint = 'https://realtymole-rental-estimate-v1.p.rapidapi.com/'

// rentalEstimate : Address -> Promise (List Listing)
// Takes an address and returns comparable rental listings
function getRentalEstimate(address) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com',
        },
    }
    return fetch(
        `${restEndPoint}rentalPrice?address=${encodeURI(
            Address.toString(address)
        )}`,
        options
    )
        .then((res) => res.json())
        .then((apiResponse) => apiResponse.listings)
}

const APIClient = { getRentalEstimate }
export default APIClient
