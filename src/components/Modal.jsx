/* eslint-disable react/prop-types */
import closeModalIcon from "../img/cerrar.svg";
const Modal = ({ setModal, animateModal, setAnimateModal }) => {
  const closeModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img onClick={closeModal} src={closeModalIcon} alt="close-modal-icon" />
      </div>
      <form className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
        <legend>New Expense</legend>
        <div className="campo">
          <label htmlFor="expense_name">Expense Name</label>
          <input
            id="expense_name"
            type="text"
            placeholder="Entre the Expense Name"
          />
        </div>
        <div className="campo">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="text"
            placeholder="Amount of the Expense Ex: $1000"
          />
        </div>
        <div className="campo">
          <label htmlFor="amount">Category</label>
          <select name="" id="category">
            <option value="">-- Select --</option>
            <option value="save">Save</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="misc_expenses">Misc. Expenses</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
        <input type="submit" value="Add Expense" />
      </form>
    </div>
  );
};

export default Modal;
