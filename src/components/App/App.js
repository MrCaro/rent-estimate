import './App.css'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import { useState } from 'react'
import Listing from '../../models/listing'

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
                <Contact handleSubmit={handleAddress} listings={listings} />
            </main>
            <Footer />
        </div>
    )
}

export default App
