import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <h1>Wayne's Premium Jerky</h1>
      <p className="subtitle">Handmade Small Batch Difference</p>
      <div className="hero-logo">
        <img src="/logo.png" alt="Wayne's Jerky Logo" />
      </div>
      <div className="button-group">
        <button className="order-button">Place an Order</button>
      </div>
    </div>
  )
}

export default Hero 