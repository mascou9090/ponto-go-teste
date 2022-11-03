import React, { useState } from "react";
import { useMyHook } from "../../context";
import { ButtonAddPoint, ButtonShowPoint, ComponentPoint } from "./style";

function AddPoint() {
  const [timePoint, setTimePoint] = useState();
  const { postPoint } = useMyHook();

  const datas = {
    date: timePoint,
    latitude: null,
    longitude: null,
    userData: {
      device: "iPhone 13",
      gatewayMac: null,
      ip: "192.168.15.13",
      operatingSystem: "iOS",
    },
  };

  const handleAddPoint = () => {
    const timeNow = new Date("0000-00-00T00:00:00.0000000Z");
    const horaAtual = timeNow
    setTimePoint(horaAtual);
    console.log(timePoint);
    console.log(datas);
  }

  return (
    <ComponentPoint>
      <ButtonAddPoint onClick={handleAddPoint}>Bater Ponto</ButtonAddPoint>
      <ButtonShowPoint>Espelho de Ponto</ButtonShowPoint>
    </ComponentPoint>
  );
}

export default AddPoint;






