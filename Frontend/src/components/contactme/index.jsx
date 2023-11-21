import Slider from "./slider"
import "./styles.css"

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
          <Slider> Github </Slider>
          <Slider> LinkedIn </Slider>
          <Slider> Gmail </Slider>
          <Slider> Phone </Slider>
        </div>
      </div>
    </>
  )
}

export default ContactMe
