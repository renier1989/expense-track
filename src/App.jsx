/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./components/Header";
import newExpenseIcon from "./img/nuevo-gasto.svg";
function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
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
        <div className="nuevo-gasto">
          <img
            src={newExpenseIcon}
            alt="new-expense-icon"
            onClick={handleModal}
          />
        </div>
      )}

      {modal && <p>Muesto el modal</p>}
    </div>
  );
}

export default App;
