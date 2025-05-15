import "./Hero.css"

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Welcome to Our React Application</h2>
        <p>A simple React app with components in separate files</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  )
}