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
          <div id='github' className='slider'> Github </div>
          <div id='linkedIn' className='slider'> LinkedIn </div>
          <div id='gmail' className='slider'> Gmail </div>
          <div id='phone' className='slider'> Phone </div>
        </div>
      </div>
    </>
  )
}

export default ContactMe
