import Expense from "./Expense";

/* eslint-disable react/prop-types */
const ExpenesesList = ({
  gastos,
  setGastoEditar,
  eliminarExpenses,
  gastosFiltrados,
  filtro,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length ? "Your Expenses" : "Can't find Expenses in this Category"}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Expense
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarExpenses={eliminarExpenses}
              key={gasto.id}
            />
          ))}
        </>
      ) : (
        <>
          <h2>
            {gastos.length ? "Your Expenses" : "You haven't make Expenses yet."}
          </h2>
          {gastos.map((gasto) => (
            <Expense
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarExpenses={eliminarExpenses}
              key={gasto.id}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpenesesList;
