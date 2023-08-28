import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from "react";
import { formatCurrency } from "../helpers";

/* eslint-disable react/prop-types */
const PlanBudget = ({presupuesto, gastos, setGastos, setPresupuesto ,setIsValidBudget}) => {
    const [porcentaje , setPorcentaje] = useState(0);
    const [disponible , setDisponible] = useState(0);
    const [gastado , setGastado] = useState(0);
    const handleResetApp = ()=>{
        const resultado = confirm('Are you sure you want to reset?');

        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidBudget(false)
        }
    }
    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidad + total  , 0 );
        const totalDisponible = presupuesto - totalGastado;
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
        setDisponible(totalDisponible);
        setGastado(totalGastado);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1000);
    }, [gastos]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        
      <div>
        <CircularProgressbar
        styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
        })}
            value={porcentaje}
            text={`${porcentaje}% Spent`}
        />
      </div>
      <div className="contenido-presupuesto">
      <button className='reset-app' type='button' onClick={handleResetApp}>Reset App</button>
        <p>
          <span>Your Budget: </span> {formatCurrency(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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
