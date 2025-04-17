import './Header.css'

const Header = () => {
  const emailTemplate = `Your Address:
Your Name:
Your Order:`

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img 
            src="/wj.png?v=1" 
            alt="Wayne's Jerky Logo" 
            className="logo-image"
            key="header-logo" 
          />
        </div>
        <nav className="nav-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="nav-link">Instagram</a>
          <a 
            href={`mailto:WaynesPremiumJerky@gmail.com?subject=Order&body=${encodeURIComponent(emailTemplate)}`} 
            className="nav-link"
          >
            Place an Order
          </a>
          <a href="#about" className="nav-link">About</a>
        </nav>
      </div>
    </header>
  )
}

export default Header 