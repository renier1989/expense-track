/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import newExpenseIcon from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import ExpenesesList from "./components/ExpenesesList";

function App() {
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem("presupuesto")) ?? 0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      handleModal();
    }
  }, [gastoEditar]);

  useEffect(()=>{
    localStorage.setItem('presupuesto', presupuesto);
  },[presupuesto])

  useEffect(()=>{
    const presupuestoLS  = Number(localStorage.getItem('presupuesto'));
    if(presupuestoLS > 0){
      setIsValidBudget(true)
    }else{
      setIsValidBudget(false)
    }
  },[])

  const handleModal = () => {
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  // esta es una funcion para crear o editar los gastos
  const setExpenses = (expenses) => {
    if (expenses.id) {
      console.log("edito", expenses);
      // aqui hago la edicion de los gastos
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === expenses.id ? expenses : gastoState
      );
      setGastos(gastosActualizados);
    } else {
      // aqui crao los gastos
      expenses.id = generarId();
      expenses.fecha = Date.now();
      setGastos([...gastos, expenses]);
    }
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
    setGastoEditar({});
    // console.log(expenses);
  };

  const eliminarExpenses = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
    setGastos(gastosActualizados);
  }


  return (
    <div className={modal ? "fijar" : null}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpenesesList gastos={gastos} setGastoEditar={setGastoEditar} eliminarExpenses={eliminarExpenses} />
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
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
