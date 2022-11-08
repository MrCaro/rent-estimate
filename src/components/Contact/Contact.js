import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Address from '../../utils/address'
import Listing from '../../utils/listing'

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [listings, setListings] = useState([])
    const handleAddress = async (address) => {
        const newListings = await Listing.fetchListingsNearAddress(address)
        setListings(newListings)
    }

    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zip: '',
    })

    const handleChange = (e) => {
        const value = e.target.value
        setAddress({
            ...address,
            [e.target.name]: value,
        })
    }

    const handleFormSubmit = () => {
        handleAddress(Address.fromJson(address))
    }

    return (
        <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover lg:absolute lg:h-full"
                        src="https://source.unsplash.com/RFDP7_80v5A"
                        alt=""
                    />
                </div>
            </div>
            <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
                <div className="lg:pr-8">
                    <div
                        id="estimateForm"
                        className="mx-auto max-w-md sm:max-w-lg lg:mx-0"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Get estimates in Realtime
                        </h2>
                        <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                            The Realty Mole real estate and rental data API
                            provides on-demand access to real-time property rent
                            estimates and comparable rental listings. We have
                            nationwide coverage for nearly all residential and
                            commercial properties in the US.
                        </p>
                        <p className="mt-4 text-md text-gray-500 sm:mt-3">
                            The API will return a list of 5 comparable rentals
                            for each property, including their attributes like
                            Address, Price and Type.
                        </p>
                        <p className="mt-4 text-sm text-gray-500 sm:mt-3">
                            This is a sample address <br /> 5500 Grand Lake
                            Drive, San Antonio, TX, 78244
                        </p>
                        <form
                            onSubmit={handleSubmit(handleFormSubmit)}
                            className="flex flex-col gap-6 mt-9"
                        >
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
                                    placeholder="5500 Grand Lake Drive"
                                    {...register('street', { required: true })}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.street && (
                                <span className="text-sm text-red-500">
                                    *address field is required
                                </span>
                            )}
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
                                    {...register('city', { required: true })}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.city && (
                                <span className="text-sm text-red-500">
                                    *city field is required
                                </span>
                            )}
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
                                    {...register('state', { required: true })}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.state && (
                                <span className="text-sm text-red-500">
                                    *state field is required
                                </span>
                            )}
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
                                    {...register('zip', { required: true })}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.zip && (
                                <span className="text-sm text-red-500">
                                    *zip field is required
                                </span>
                            )}
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
                    </div>
                </div>
            </div>
            <div className="relative py-16 px-4 sm:py-12 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8 bg-gray-50">
                <h3 className="text-3xl font-bold tracking-tight sm:text-3xl">
                    Results
                </h3>
                <ul className="divide-y divide-gray-200">
                    {listings.map((listing, i) => (
                        <ListingRentals
                            key={`listing-${i}`}
                            listing={listing}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

function ListingRentals({ listing, i }) {
    return (
        <li key={`listing-${i}`} className="py-4">
            <div className="flex space-x-3">
                <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">
                            {Address.street(Listing.address(listing))}
                        </h3>
                        <p className="text-md font-bold text-grape-500">
                            US${Listing.price(listing)}
                        </p>
                    </div>
                    <p className="text-sm font-medium text-left text-gray-500">
                        {Listing.propertyType(listing)}
                    </p>
                </div>
            </div>
        </li>
    )
}

export default Contact
