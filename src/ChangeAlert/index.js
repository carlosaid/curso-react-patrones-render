import React from "react";
import "./changeAlert.css"
import { withLocalStorageListener } from "./withStorageListener"

function ChangeAlert({show, toggleShow}){
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parce que cambiaste tus TODO's en otro pestaña o ventana del navegador</p>
          <p>¿Quieres sincronizar tu TODO's</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={ ()=> toggleShow(toggleShow)}
          >
            Refrescar
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withLocalStorageListener(ChangeAlert);
export { ChangeAlertWithStorageListener };

