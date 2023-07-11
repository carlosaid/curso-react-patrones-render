import React from "react";
import "./changeAlert.css"
import { useLocalStorageListener } from "./useStorageListener"

function ChangeAlert({sincronize}){

  const {show, toggleShow} = useLocalStorageListener(sincronize)

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

export { ChangeAlert };

