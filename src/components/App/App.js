import './App.css'
import AddressForm from '../AddressForm'
import Footer from '../Footer'
import Header from '../Header'
import { useState } from 'react'
import Listing from '../../models/listing'
import Address from '../../models/address'

function App() {
    const [listings, setListings] = useState([])
    const handleAddress = async (address) => {
        const newListings = await Listing.fetchListingsNearAddress(address)
        setListings(newListings)
    }

    return (
        <div className="bg-white">
            <Header />
            <main>
                <Hero />
                <Contact handleAddress={handleAddress} listings={listings} />
            </main>
            <Footer />
        </div>
    )
}

function Hero() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-center text-4xl font-bold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
                    Rent Estimate API
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal text-gray-500">
                    Get instant access to 140+ million real-time property rent
                    estimates and comparable rental listings with the Realty
                    Mole rental data API. Available nationwide in the US.
                </p>
            </div>
        </div>
    )
}

function Contact({ handleAddress, listings }) {
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
                        <AddressForm handleSubmit={handleAddress} />
                    </div>
                </div>
            </div>
            <div className="relative py-16 px-4 sm:py-12 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8 bg-gray-50">
                <h3 className="text-3xl font-bold tracking-tight sm:text-3xl">
                    Results
                </h3>
                <ul className="divide-y divide-gray-200">
                    {listings.map((listing, i) => (
                        <RentalListing key={`listing-${i}`} listing={listing} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

function RentalListing({ listing, i }) {
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

export default App
