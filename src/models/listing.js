import APIClient, { ENDPOINTS } from '../api/client'
import Address from './address'
// Listing {
//     id: String,
//     address: Address,
//     price: Number,
//     propertyType: String
// }

// Currently assuming the shape of the API Response and that every field is always present
// We could introduce validation on the fields for these `fromJson` functions
function fromJson(json) {
    return {
        id: json.id,
        address: Address.fromJson({
            street: json.address,
            city: json.city,
            state: json.state,
            zip: json.zipcode,
        }),
        price: json.price,
        propertyType: json.propertyType,
    }
}

// Accessors
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
    const decoder = (response) => response.listings.map(fromJson)
    return APIClient.get(
        ENDPOINTS.listings,
        { address: Address.toString(address) },
        decoder
    )
}

const Listing = { fetchListingsNearAddress, address, price, propertyType }
export default Listing
