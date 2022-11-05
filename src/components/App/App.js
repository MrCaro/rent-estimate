import './App.css'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import { useState } from 'react'
import APIClient from '../../api/client'

function App() {
    const [listings, setListings] = useState([])
    const handleAddress = async (address) => {
        const newListings = await APIClient.getRentalEstimate(address)
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
