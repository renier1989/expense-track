/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import NewBudget from "./NewBudget";
import PlanBudget from "./PlanBudget";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidBudget,
  setIsValidBudget,
}) => {
  return (
    <header>
      <h1>Expanse Planner</h1>
      {isValidBudget ? (
        <PlanBudget presupuesto={presupuesto} />
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
