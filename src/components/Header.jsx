import './Header.css'

const Header = () => {
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
          <a href="#instagram" className="nav-link">Instagram</a>
          <a href="#order" className="nav-link">Place an Order</a>
          <a href="#about" className="nav-link">About</a>
        </nav>
      </div>
    </header>
  )
}

export default Header 