/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const NewBudget = ({presupuesto, setPresupuesto}) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
            <label htmlFor="">Set Butget</label>
            <input type="text" className="nuevo-presupuesto" placeholder="Set your budget" value={presupuesto} onChange={(e)=>setPresupuesto(e.target.value)} />
            <input type="submit" value="Start Planning 💲" />
        </div>
      </form>
    </div>
  );
};

export default NewBudget;
