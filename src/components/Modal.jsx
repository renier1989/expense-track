/* eslint-disable react/prop-types */
import closeModalIcon from '../img/cerrar.svg'
const Modal = ({setModal, animateModal, setAnimateModal}) => {
    const closeModal = () => {
        setAnimateModal(false)
        setTimeout(() => {
            setModal(false);
        }, 500);
    }
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img onClick={closeModal} src={closeModalIcon} alt="close-modal-icon" />
        </div>
        <form className={`formulario ${animateModal ? 'animar':'cerrar'}`}>
            <legend>New Expense</legend>
        </form>
    </div>
  )
}

export default Modal