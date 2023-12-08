import './styles.css'

const AboutMe = () => {
  return (
    <div id='aboutme'>
      <section id='aboutmeContent'>
        <div id='textContent'>
          <h1 id='mainHeader'>Hello! I am Jimi Jukkala</h1>
          <h2 id='me'>Second-year student at the University of Jyväskylä</h2>
          <h2 className='subheading'>About me</h2>

          <p className='sectionText'>
            Second-year student at the University of Jyväskylä, diving into the
            world of computer science. I am 22 years old, I love playing disc
            golf and love to learn new technologies. Currently tinkering with
            arduino projects
          </p>
        </div>

        <div className='imageContainer'>
          <img className='image' src='https://i.imgur.com/g72dl9P.jpg' />
        </div>
      </section>
    </div>
  )
}

export default AboutMe
