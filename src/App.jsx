/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./components/Header";
import newExpenseIcon from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import ExpenesesList from "./components/ExpenesesList";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleModal = () => {
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const setExpenses = (expenses) => {
    expenses.id = generarId();
    setGastos([...gastos, expenses]);
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
    // console.log(expenses);
  };

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpenesesList gastos={gastos} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={newExpenseIcon}
              alt="new-expense-icon"
              onClick={handleModal}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          setExpenses={setExpenses}
        />
      )}
    </div>
  );
}

export default App;
