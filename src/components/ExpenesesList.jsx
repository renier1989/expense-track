import Expense from "./Expense";

/* eslint-disable react/prop-types */
const ExpenesesList = ({gastos}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? 'Your Expenses' : "You haven't make Expenses yet."}</h2>
      {gastos.map(gasto  => (
        <Expense gasto={gasto} key={gasto.id} />
      ))}
    </div>
  );
};

export default ExpenesesList;
