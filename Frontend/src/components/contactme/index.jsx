import './styles.css'

// eslint-disable-next-line react/prop-types
const ContactMe = ({ open, setOpen }) => {
  if (!open) return

  const closeModal = () => {
    
    setOpen(false)
  }

  return (
    <>
      <div id='overlay' onClick={closeModal}></div>
      <div id='popup'>
        <h3>My Contact Info</h3>
        <div>
          <a href='https://github.com/Jimpsoni' target="_blank" rel="noopener noreferrer"><div id='github' className='slider'> Github </div></a>
          <a href='https://linkedin.com/in/jimi-jukkala-820877261' target="_blank" rel="noopener noreferrer"><div id='linkedIn' className='slider'> LinkedIn </div></a>
          <a href='mailto: jukkalajimi@gmail.com' target="_blank" rel="noopener noreferrer"><div id='gmail' className='slider'> Gmail </div></a>
          <a><div id='phone' className='slider' target="_blank" rel="noopener noreferrer"> Phone </div></a>
        </div>
      </div>
    </>
  )
}

export default ContactMe
