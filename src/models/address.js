const DEFAULT_ADDRESS = {
    street: '',
    city: '',
    state: '',
    zip: '',
}

function build(addressObject = {}) {
    return Object.assign(DEFAULT_ADDRESS, addressObject)
}

function toString({ street, city, state, zip }) {
    return `${street}, ${city}, ${state} ${zip}`
}

const Address = { build, toString }
export default Address
