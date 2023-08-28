/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import NewBudget from "./NewBudget";
import PlanBudget from "./PlanBudget";

const Header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  isValidBudget,
  setIsValidBudget,
}) => {
  return (
    <header>
      <h1>Expense Planner</h1>
      {isValidBudget ? (
        <PlanBudget
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          gastos={gastos}
          setGastos={setGastos}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
