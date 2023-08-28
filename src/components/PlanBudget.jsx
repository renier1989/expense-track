import { formatCurrency } from "../helpers";

/* eslint-disable react/prop-types */
const PlanBudget = ({presupuesto}) => {



  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Aqui va la grafica</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Your Budget: </span> {formatCurrency(presupuesto)}
        </p>
        <p>
          <span>Available: </span> {formatCurrency(presupuesto)}
        </p>
        <p>
          <span>Spent: </span> {formatCurrency(presupuesto)}
        </p>
      </div>
    </div>
  );
};

export default PlanBudget;
