import './Gallery.css'

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="/jerky1.jpeg" alt="Wayne's Jerky Product 1" />
        </div>
        <div className="gallery-item">
          <img src="/jerky2.jpeg" alt="Wayne's Jerky Product 2" />
        </div>
        <div className="gallery-item">
          <img src="/jerky3.jpeg" alt="Wayne's Jerky Product 3" />
        </div>
      </div>
    </div>
  )
}

export default Gallery 