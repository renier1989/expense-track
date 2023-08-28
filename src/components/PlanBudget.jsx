import { useEffect, useState } from "react";
import { formatCurrency } from "../helpers";

/* eslint-disable react/prop-types */
const PlanBudget = ({presupuesto, gastos}) => {
    const [disponible , setDisponible] = useState(0);
    const [gastado , setGastado] = useState(0);
    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidad + total  , 0 );
        setGastado(totalGastado)
    }, [gastos]);

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
          <span>Available: </span> {formatCurrency(disponible)}
        </p>
        <p>
          <span>Spent: </span> {formatCurrency(gastado)}
        </p>
      </div>
    </div>
  );
};

export default PlanBudget;
