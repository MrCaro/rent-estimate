import { useState } from 'react'
import Address from '../../models/address'

function AddressForm({ handleSubmit }) {
    // Managing the address Form
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zip: '',
    })
    // Handling Form Events
    const handleChange = (e) => {
        const value = e.target.value
        setAddress({
            ...address,
            [e.target.name]: value,
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleSubmit(Address.fromJson(address))
    }

    // Rendering the Form
    return (
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 mt-9">
            <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-grape-500 focus-within:ring-1 focus-within:ring-grape-500">
                <label
                    htmlFor="street"
                    className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                    Address
                </label>
                <input
                    value={address.street}
                    type="text"
                    name="street"
                    id="street"
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="5500 Grand Lake
                                    Drive"
                    onChange={handleChange}
                />
            </div>
            <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-grape-500 focus-within:ring-1 focus-within:ring-grape-500">
                <label
                    htmlFor="city"
                    className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                    City
                </label>
                <input
                    value={address.city}
                    type="text"
                    name="city"
                    id="city"
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="San Antonio"
                    onChange={handleChange}
                />
            </div>
            <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-grape-500 focus-within:ring-1 focus-within:ring-grape-500">
                <label
                    htmlFor="state"
                    className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                    State
                </label>
                <input
                    value={address.state}
                    type="text"
                    name="state"
                    id="state"
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="TX"
                    onChange={handleChange}
                />
            </div>
            <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-grape-500 focus-within:ring-1 focus-within:ring-grape-500">
                <label
                    htmlFor="zip"
                    className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                    Zip
                </label>
                <input
                    value={address.zip}
                    type="text"
                    name="zip"
                    id="zip"
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="78244"
                    onChange={handleChange}
                />
            </div>
            <div className="pt-5">
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-grape-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddressForm
