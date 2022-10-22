import './App.css'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'

function App() {
    return (
        <div className="bg-white">
            <Header />
            <main>
                <Hero />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
