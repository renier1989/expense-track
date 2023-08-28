/* eslint-disable no-unused-vars */

import { useState } from "react";
import Message from "./Message";

/* eslint-disable react/prop-types */
const NewBudget = ({ presupuesto, setPresupuesto , setIsValidBudget}) => {
  const [mensaje, setMensaje] = useState("");
  const handleBudget = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
        setMensaje('Please entre a valid Budget');
        setIsValidBudget(false);
        return;
    }

    setMensaje('');
    setIsValidBudget(true);

  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label htmlFor="">Set Butget</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Set your budget"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
          <input type="submit" value="Start Planning 💲" />
          {
            mensaje && <Message type='error'>{mensaje}</Message>
          }
          
        </div>
      </form>
    </div>
  );
};

export default NewBudget;
