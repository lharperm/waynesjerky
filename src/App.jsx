import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import FeatureGrid from './components/FeatureGrid'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <Gallery />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
