import './FeatureGrid.css'

const FeatureGrid = () => {
  const features = [
    {
      title: "Hand Made",
      description: "Each batch made with that one of a kind hand made love, every single time."
    },
    {
      title: "Perfectly Smoked",
      description: "Smoked in Wayne's proffesinal grade smoker, perfect quality everytime. "
    },
    {
      title: "The Local Option",
      description: "Now more then ever its important to buy local. Wayne's Jerky: The local option for your jerky needs."
    }
  ]

  return (
    <div className="feature-grid">
      <div className="subheading">Wayne's Signature Process</div>
      <div className="grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureGrid 