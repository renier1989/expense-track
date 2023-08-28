const NewBudget = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
            <label htmlFor="">Set Butget</label>
            <input type="text" className="nuevo-presupuesto" placeholder="Set your budget" />
            <input type="submit" value="Set" />
        </div>
      </form>
    </div>
  );
};

export default NewBudget;
