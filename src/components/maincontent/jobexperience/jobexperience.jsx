import './styles.css'

const Jobexperience = () => {
  return (
    <div id='jobexperience'>
      <h2 id='jobsubheading'>Job experience</h2>

      <div className='job'>
        <h2 className='jobheader'>Self-employed</h2>
        <p className='date'>03-2023 to Now</p>
        <p className='jobSectionText'>
          Being my own boss has taught me all about discipline, scheduling and
          to seek information on my own. Ive had the opportinity to work with
          Jyväsmuutot as an independent contractor and learn valuable skills
          about managing myself.
        </p>
      </div>

      <div className='job'>
        <h2 className='jobheader'>Jyväsmuutot</h2>
        <p className='date'>07-2019 to 03-2023</p>
        <p className='jobSectionText'>
          I worked as a mover at Jyväsmuutot, where I gained valuable experience
          in various aspects of the job. My responsibilities included
          efficiently packing and loading items onto the moving truck, ensuring
          their safe transportation to the designated location. My
          responsibilities also included training and guiding new employees.
        </p>
      </div>

      <div className='job'>
        <h2 className='jobheader'>Paperboy</h2>
        <p className='date'>09-2017 to 09-2018</p>
        <p className='jobSectionText'>
          Worked for one year, the job was independent and you was responsible
          for your own scheduling and work.
        </p>
      </div>
    </div>
  )
}

export default Jobexperience
