/* eslint-disable react/prop-types */
import closeModalIcon from '../img/cerrar.svg'
const Modal = ({setModal}) => {
    const closeModal = () => {
        setModal(false)
    }
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img onClick={closeModal} src={closeModalIcon} alt="close-modal-icon" />
        </div>
    </div>
  )
}

export default Modal