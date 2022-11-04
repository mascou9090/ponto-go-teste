import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export const Context = ({ children }) => {
  const [tokenCompany, setTokenCompany] = useState();
  const [tokenEmployee, setTokenEmployee] = useState();
  const [pointsCatch, setPointsCatch] = useState();


  const timeNow = new Date();

  //POST Company
  const postCompany = async (data) => {
    const url = "https://pontogo-api.herokuapp.com/register-company";

    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "E09FBC2D-C866-4FEF-94F5-CD5738418454",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setTokenCompany(json);
        alert("Empresa criada!");
      })
      .catch((error) => console.log(error));
  };

  //POST Employee
  const postEmployee = (data) => {
    const url = `https://pontogo-api.herokuapp.com/register-employees?company-token-pg=${tokenCompany.companyId}`;



    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "E09FBC2D-C866-4FEF-94F5-CD5738418454",
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTokenEmployee(result);
        alert("Funcionário criado!");
      })
      .catch((error) => console.log("error", error));
  };

  //POST AddPoint
  const postPoint = (data) => {
    const url = `https://pontogo-api.herokuapp.com/add-point?company-token-pg=${tokenCompany.companyId}&employee-token-pg=${tokenEmployee.employees[0].id}`;

    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "E09FBC2D-C866-4FEF-94F5-CD5738418454",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        alert("Ponto batido!");
      })
      .catch((error) => {
        console.log("error", error);
        alert("Algo errado aconteceu!");
      });
  };

  


  //GET Point
  const getPoints = () => {

    const day = timeNow.getDate();
    const month = timeNow.getMonth() + 1;
    const year = timeNow.getFullYear();

    const today = day > 9 ? day : `0${day}`;
    const thisMonth = month > 9 ? month : `0${month}`;

    const days = [today,thisMonth,year].join("/");


    const url = `https://pontogo-api.herokuapp.com/get-points?initialDate=${days}&endDate=04/11/2022&company-token-pg=${tokenCompany.companyId}&employee-token-pg=${tokenEmployee.employees[0].id}`;

    
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "E09FBC2D-C866-4FEF-94F5-CD5738418454",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => {   
        console.log(result);
        setPointsCatch(result);
      })
      .catch((error) => console.log("error", error));
  };

  const realTime = (time) => {
      const timeNow = new Date(time)
      const timeH = timeNow.getHours() > 9 ? timeNow.getHours() : `0${timeNow.getHours()}` ;
      const timeM = timeNow.getMinutes() > 9 ? timeNow.getMinutes() : `0${timeNow.getMinutes()}`;
      const timeS = timeNow.getSeconds() > 9 ? timeNow.getSeconds() : `0${timeNow.getSeconds()}`;
  
      const timeNowFull = [timeH, timeM, timeS].join(":");
      return timeNowFull;
  }
  
  

  return (
    <GlobalContext.Provider
      value={{
        postCompany,
        tokenCompany,
        postEmployee,
        tokenEmployee,
        postPoint,
        getPoints,
        pointsCatch,
        timeNow,
        realTime
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useMyHook = () => useContext(GlobalContext);
