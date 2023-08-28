import {formarFecha, formatCurrency} from '../helpers'
const Expense = ({ gasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">Created : {''}
          <span>{formarFecha(fecha)}</span>
          </p>
        </div>
      </div>
      <p className='cantidad-gasto'>{formatCurrency(Number(cantidad))}</p>
    </div>
  );
};

export default Expense;
