import React from "react";
import { FormEmployees } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMyHook } from "../../context";

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
      .min(11, "O cpf precisa ter 11 digitos")
      .max(11, "O cpf precisa ter 11 digitos")
      .required("O número de cpf é preciso"),
    pis: yup
      .string()
      .min(12, "O pis precisa ter 12 digitos")
      .max(12, "O pis precisa ter 12 digitos")
      .required("Campo obrigatorio"),
    birthday: yup
      .date()
      .typeError("Coloque uma data válida")
      .required("Informe uma data válida"),
    admissionDate: yup
      .date("Informe uma data válida")
      .typeError("Coloque uma data válida")
      .required("Campo obrigatório"),
    register: yup.string(),
    companyAdmissionDate: yup
      .date("Informe uma data válida")
      .typeError("Coloque uma data válida")
      .required("Campo obrigatório"),
    clt: yup.boolean(),
  })
  .required();

function Employee() {
  const { postEmployee } = useMyHook();
  // Parans ReactForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    email,
    cpf,
    firstname,
    lastname,
    birthday,
    admissionDate,
    register,
    companyAdmissionDate,
    clt,
    pis,
  }) => {
    const jsonData = {
      "disableMandril": true,
      "employees": [
          {
              "email": email,
              "cpf": cpf,
              "firstName": firstname,
              "lastName": lastname,
              "admissionDate": admissionDate,
              "birthdate": birthday,
              "registration": register,
              "pis": pis,
              "pointWithPicture": false,
              "companyAdmissionDate": companyAdmissionDate,
              "clt": clt
          }
      ]
  }

    postEmployee(JSON.stringify(jsonData));
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
            Segundo nome:
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
            Pis:
            <input type="text" {...register("pis")} />
            {<span>{errors.pis?.message}</span>}
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

export default Employee;
