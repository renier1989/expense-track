/* eslint-disable no-unused-vars */

import { useState } from "react";
import Message from "./Message";

/* eslint-disable react/prop-types */
const NewBudget = ({ presupuesto, setPresupuesto }) => {
  const [mensaje, setMensaje] = useState("");
  const handleBudget = (e) => {
    e.preventDefault();

    if (!Number(presupuesto) || Number(presupuesto) < 0) {
        setMensaje('Please entre a valid Budget')
    }

  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label htmlFor="">Set Butget</label>
          <input
            type="text"
            className="nuevo-presupuesto"
            placeholder="Set your budget"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
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
