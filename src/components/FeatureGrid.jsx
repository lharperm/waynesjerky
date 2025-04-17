import './FeatureGrid.css'

const FeatureGrid = () => {
  const features = [
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Title",
      description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    }
  ]

  return (
    <div className="feature-grid">
      <div className="subheading">Wayne's</div>
      <div className="grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">○</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureGrid 