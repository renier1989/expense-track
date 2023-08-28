/* eslint-disable react/prop-types */
import NewBudget from "./NewBudget";

const Header = ({ presupuesto, setPresupuesto }) => {
  return (
    <header>
      <h1>Expanse Planner</h1>
      <NewBudget presupuesto={presupuesto} setPresupuesto={setPresupuesto} />
    </header>
  );
};

export default Header;
