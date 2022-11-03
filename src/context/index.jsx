import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export const Context = ({ children }) => {
  const [tokenCompany, setTokenCompany] = useState();
  const [tokenEmployee, setTokenEmployee] = useState();

  //POST Company
  const postCompany = async (data) => {
    const url = "https://pontogo-api.herokuapp.com/register-company";

    await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": "E09FBC2D-C866-4FEF-94F5-CD5738418454",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setTokenCompany(json);
      })
      .catch((error) => console.log(error));
  };

  //POST Employee
  const postEmployee = (data) => {
    const url = `https://pontogo-api.herokuapp.com/register-employees?company-token-pg=${tokenCompany.companyId}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Authorization": "E09FBC2D-C866-4FEF-94F5-CD5738418454",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTokenEmployee(result)
      })
      .catch((error) => console.log("error", error));
  };


  //POST AddPoint
  const postPoint = (data) => {
    const url = `https://pontogo-api.herokuapp.com/add-point?company-token-pg=${tokenCompany.companyId}&employee-token-pg=${tokenEmployee.employees[0].id}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Authorization": "E09FBC2D-C866-4FEF-94F5-CD5738418454",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTokenEmployee(result)
      })
      .catch((error) => console.log("error", error));
  };




  return (
    <GlobalContext.Provider value={{ postCompany, tokenCompany, postEmployee, tokenEmployee, postPoint }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useMyHook = () => useContext(GlobalContext);
