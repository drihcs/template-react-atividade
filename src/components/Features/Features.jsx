import "./Features.css"

export default function Features() {
  const featuresList = [
    {
      id: 1,
      title: "Component-Based",
      description: "Build encapsulated components that manage their own state.",
    },
    {
      id: 2,
      title: "Declarative",
      description: "React makes it painless to create interactive UIs.",
    },
    {
      id: 3,
      title: "Learn Once, Write Anywhere",
      description: "Develop new features without rewriting existing code.",
    },
  ]

  return (
    <section className="features" id="features">
      <h2>Key Features</h2>
      <div className="features-grid">
        {featuresList.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}