import React, { useEffect, useState } from "react";
import { FormCompany } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "O nome precisa ser maior que 3 digitos")
      .max(30, "O nome precisa ter 30 digitos")
      .required("O nome é obrigatorio"),
    phone: yup
      .string()
      .min(9, "O número precisa ser maior que 9 digitos")
      .max(11, "O número precisa ter 11 digitos")
      .required("O telefone é obrigatorio"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatorio"),
    cnpj: yup
      .string()
      .min(11, "O número precisa ter 11 digitos")
      .max(11, "O número precisa ter 11 digitos")
      .required("Campo obrigatorio"),
    socialreason: yup.string().required(),
  })
  .required();

function Companys() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [company, setCompany] = useState(null);
  
  const onSubmit = (data) => {
    setCompany(data);
  };

  useEffect(() => {
    fetch('https://pontogo-api.herokuapp.com/register-company',{
      method: 'POST',
      header: {
        'Content-Type': 'application/json;',
        Authentication: '8888-8888-8888-8888-8888',
      },
      body: JSON.stringify(company),
    })
  },[company]);

  return (
    <div>
      <FormCompany>
        <h1>Cadastro de empresa</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome:
            <input
              type="text"
              {...register("name")}
            />
            {<span>{errors.name?.message}</span>}
          </label>
          <label>
            Telefone:
            <input
              type="text"
              {...register("phone")}
            />
            {<span>{errors.phone?.message}</span>}
          </label>
          <label>
            Email:
            <input
              type="text"
              {...register("email", { required: true })}
            />
            {<span>{errors.email?.message}</span>}
          </label>
          <label>
            CNPJ:
            <input
              type="text"
              {...register("cnpj", { required: true })}
            />
            {<span>{errors.cnpj?.message}</span>}
          </label>
          <label>
            Razão Social:
            <input
              type="text"
              {...register("socialreason")}
            />
          </label>
          <button type="submit">
            Cadastrar
          </button>
        </form>
      </FormCompany>
    </div>
  );
}

export default Companys;
