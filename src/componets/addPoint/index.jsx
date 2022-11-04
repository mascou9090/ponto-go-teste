import React from "react";
import { useMyHook } from "../../context";
import {
  ButtonAddPoint,
  ButtonShowPoint,
  ComponentPoint,
  DivShow,
} from "./style";

function AddPoint() {
  const { postPoint, getPoints, pointsCatch, timeNow, realTime } = useMyHook();

  const handleAddPoint = () => {
    const stringData = timeNow.toISOString();

    const datas = {
      "date": stringData,
      "latitude": null,
      "longitude": null,
      "userData": {
        "device": "iPhone 13",
        "gatewayMac": null,
        "ip": "192.168.15.13",
        "operatingSystem": "iOS",
      },
    };

    const resDatasPoint = JSON.stringify(datas);

    //POST AddPoint
    postPoint(resDatasPoint);
  };

  const handleShowPoint = () => {
    getPoints();
  };

  return (
    <>
      <ComponentPoint>
        <ButtonAddPoint onClick={handleAddPoint}>Bater Ponto</ButtonAddPoint>
        <ButtonShowPoint onClick={handleShowPoint}>
          Espelho de Ponto
        </ButtonShowPoint>
      </ComponentPoint>
      <DivShow>
        <ul>
          {pointsCatch &&
            pointsCatch.map((el) => <li key={el.id}>{realTime(el.date)}</li>)}
        </ul>
      </DivShow>
    </>
  );
}

export default AddPoint;
