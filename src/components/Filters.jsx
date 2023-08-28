/* eslint-disable react/prop-types */
const Filters = ({filtros, setFiltro}) => {
  return (
    <div className="filtros contenedor sombra">
      <form>
        <div className="campo">
          <label >Expenses Filter</label>
          <select 
          value={filtros}
          onChange={(e)=>setFiltro(e.target.value)}
          >
          <option value="">-- All Categories --</option>
            <option value="save">Save</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="expenses">Misc. Expenses</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
