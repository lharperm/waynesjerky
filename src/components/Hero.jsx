import './Hero.css'

const Hero = () => {
  const emailTemplate = `Your Address:
Your Name:
Your Order:`

  return (
    <div className="hero">
      <h1>Wayne's Premium Jerky</h1>
      <p className="subtitle">Handmade Small Batch Difference</p>
      <div className="hero-logo">
        <img src="/logo.png" alt="Wayne's Jerky Logo" />
      </div>
      <div className="button-group">
        <a 
          href={`mailto:WaynesPremiumJerky@gmail.com?subject=Order&body=${encodeURIComponent(emailTemplate)}`} 
          className="order-button"
        >
          Place an Order
        </a>
      </div>
    </div>
  )
}

export default Hero 