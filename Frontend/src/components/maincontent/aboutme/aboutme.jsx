import './styles.css'

const AboutMe = () => {
  return (
    <div id='aboutme'>
      <section className='section'>
        <div id='firstpart'>
          <div className='imageContainer'>
            <img className='image' src='https://i.imgur.com/g72dl9P.jpg' />
          </div>
          <h1 id='mainHeader'>Hello! I am Jimi Jukkala</h1>
          <p className='sectionText'>
            Second-year student at the University of Jyväskylä, diving into the
            world of computer science.
          </p>
          <h2 className='subheading'>About me</h2>
          <p className='sectionText'>
            I am 22 years old, I love playing disc golf and love to learn new
            technologies. Currently tinkering with arduino projects
          </p>
        </div>
      </section>
    </div>
  )
}


export default AboutMe