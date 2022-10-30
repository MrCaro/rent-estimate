import './App.css'
import Contact from '../Contact'
import Footer from '../Footer'
import Header from '../Header'
import Hero from '../Hero'

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
