import "./styles.css"

const Jobexperience = () => {
  return (
    <div id='jobexperience'>
      <h2 id='jobsubheading'>Job experience</h2>

      <div className='job'>
        <h2 className='jobheader'>Self-employed</h2>
        <p className='date'>03-2023 to Now</p>
        <p className='jobSectionText'>
          Being my own boss has taught me so much about being independent.
        </p>
      </div>

      <div className='job'>
        <h2 className='jobheader'>Jyväsmuutot</h2>
        <p className='date'>07-2019 to 03-2023</p>
        <p className='jobSectionText'>
          During my 4 years at there I learned customer service, to train new
          employees, plan ahead, and to work together as a team even through
          hardest days of work.
        </p>
      </div>

      <div className='job'>
        <h2 className='jobheader'>Paperboy</h2>
        <p className='date'>09-2017 to 09-2018</p>
        <p className='jobSectionText'>
          Worked for one year, Really learned independent work from here
        </p>
      </div>
    </div>
  )
}

export default Jobexperience
