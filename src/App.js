import React from "react";

export default function App() {
  const isGoingOut = true;
  let answer = isGoingOut ? "Si" : "No";
  /* la respuesta se guarda en answer  */
  /* si isGoingOut === true guarda Si de lo contrario No */

  return (
    <div className="state">
      <h1 className="state--title">¿Tenes ganas de salir esta noche?</h1>
      <div className="state--value">
        <h1>{answer}</h1>
      </div>

      <div className="state--value">
        <h1>{isGoingOut ? "Si" : "No"}</h1>
      </div>
    </div>
  );
}
