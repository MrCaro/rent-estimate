// Address {
//     street: String,
//     city: String,
//     state: String,
//     zip: String
// }

function fromJson(json) {
    return {
        street: json.street,
        city: json.city,
        state: json.state,
        zip: json.zip,
    }
}

function toString({ street, city, state, zip }) {
    return `${street}, ${city}, ${state} ${zip}`
}

function street({ street }) {
    return street
}
function city({ city }) {
    return city
}
function state({ state }) {
    return state
}
function zip({ zip }) {
    return zip
}

const Address = { fromJson, toString, street, city, state, zip }
export default Address
