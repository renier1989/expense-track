/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formarFecha, formatCurrency } from "../helpers";
import IconSave from "../img/icono_ahorro.svg";
import IconHome from "../img/icono_casa.svg";
import IconFood from "../img/icono_comida.svg";
import IconExpenses from "../img/icono_gastos.svg";
import IconLeisure from "../img/icono_ocio.svg";
import IconHealth from "../img/icono_salud.svg";
import IconSus from "../img/icono_suscripciones.svg";

const listIcons = {
  save: IconSave,
  home: IconHome,
  food: IconFood,
  expenses: IconExpenses,
  leisure: IconLeisure,
  health: IconHealth,
  subscriptions: IconSus,
};

const Expense = ({ gasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;
  const leadingActions = () =>{
      console.log('algo1');
    }
  const trailingActions = () =>{
      console.log('algo2');
    }
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions}
        trailingActions={trailingActions}
        >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={listIcons[categoria]} alt={`icon-${categoria}`} />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">
                Created : {""}
                <span>{formarFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">{formatCurrency(Number(cantidad))}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;
