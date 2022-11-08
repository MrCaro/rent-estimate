import APIRentClient, { ENDPOINTS } from '../api/rentClient'
import Address from './address'

function fromJson(json) {
    return {
        id: json.id,
        address: Address.fromJson({
            street: json.address,
            city: json.city,
            state: json.state,
            zip: json.zip,
        }),
        price: json.price,
        propertyType: json.propertyType,
    }
}

function address({ address }) {
    return address
}

function price({ price }) {
    return price
}

function propertyType({ propertyType }) {
    return propertyType
}

function fetchListingsNearAddress(address) {
    const decoder = (res) => res.listings.map(fromJson)
    return APIRentClient.get(
        ENDPOINTS.listings,
        { address: Address.toString(address) },
        decoder
    )
}

const Listing = { fetchListingsNearAddress, address, price, propertyType }
export default Listing
