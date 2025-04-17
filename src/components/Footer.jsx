import './Footer.css'

const Footer = () => {
  const sections = [
    {
      title: 'Use cases',
      links: ['UI design', 'UX design', 'Wireframing', 'Diagramming', 'Brainstorming', 'Online whiteboard', 'Team collaboration']
    },
    {
      title: 'Explore',
      links: ['Design', 'Prototyping', 'Development features', 'Design systems', 'Collaboration features', 'Design process', 'FigJam']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Best practices', 'Colors', 'Color wheel', 'Support', 'Developers', 'Resource library']
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo">⬡</span>
        </div>
        <div className="footer-links">
          {sections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer 