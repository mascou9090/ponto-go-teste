import React, { useState } from "react";
import { FormEmployees } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Schema de validações de formulário
const schema = yup
  .object({
    firstname: yup
      .string()
      .min(3, "O nome precisa ser maior que 3 digitos")
      .max(30, "O nome precisa ter 30 digitos")
      .required("O nome é obrigatorio"),
    lastname: yup
      .string()
      .min(3, "O nome precisa ser maior que 3 digitos")
      .max(30, "O nome precisa ter 30 digitos")
      .required("O nome é obrigatorio"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatorio"),
    cpf: yup
      .string()
      .min(11, "O número precisa ter 11 digitos")
      .max(11, "O número precisa ter 11 digitos")
      .required("Campo obrigatorio"),
    birthday: yup.date().required("Informe uma data válida"),
    admissionDate: yup.date("Informe uma data válida").required("Campo obrigatório"),
    register: yup.string(),
    companyAdmissionDate: yup.date("Informe uma data válida").required("Campo obrigatório"),
    clt: yup.boolean()
  })
  .required();

function Companys() {
  const [company, setCompany] = useState(null);

  // Parans ReactForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    try {
      setCompany(data);
      console.log(company);
    } catch(err) {
      console.log(err, 'err')
    }
/* 
    fetch("https://pontogo-api.herokuapp.com/register-company", {
      method: "POST",
      headers: {
        Authorization: "E09FBC2D-C866-4FEF-94F5-CD5738418454",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(company),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error)); */
  };

  return (
    <div>
      <FormEmployees>
        <h1>Cadastro de funcionário</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Primeiro nome:
            <input type="text" {...register("firstname")} />
            {<span>{errors.firstname?.message}</span>}
          </label>
          <label>
            Segundo Nome:
            <input type="text" {...register("lastname")} />
            {<span>{errors.lastname?.message}</span>}
          </label>
          <label>
            Email:
            <input type="text" {...register("email")} />
            {<span>{errors.email?.message}</span>}
          </label>
          <label>
            CPF:
            <input type="text" {...register("cpf")} />
            {<span>{errors.cpf?.message}</span>}
          </label>
          <label>
            Data de nascimento:
            <input type="date" {...register("birthday")} />
            {<span>{errors.birthday?.message}</span>}
          </label>
          <label>
            Data de admissão:
            <input type="date" {...register("admissionDate")} />
            {<span>{errors.admissionDate?.message}</span>}
          </label>
          <label>
            Registro:
            <input type="text" {...register("register")} />
            {<span>{errors.register?.message}</span>}
          </label>
          <label>
            Data de contratação:
            <input type="date" {...register("companyAdmissionDate")} />
            {<span>{errors.companyAdmissionDate?.message}</span>}
          </label>
          <div>
            <label style={{ flexDirection: "row" }}>
             CLT:
              <input
                style={{ width: "25px" }}
                type="checkbox"
                {...register("clt")}
              />
            </label>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </FormEmployees>
    </div>
  );
}

export default Companys;
