import React from "react";
import { FormCompany } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMyHook } from "../../context";

//Schema de validações de formulário
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
      .min(14, "O número precisa ter 14 digitos")
      .max(14, "O número precisa ter 14 digitos")
      .required("Campo obrigatorio"),
    socialreason: yup.string().required(),
  })
  .required();
    
  function Companys() {
  const {postCompany} = useMyHook();

  

  //Paramentros do useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  

  const onSubmit = (data) => {
    postCompany(data)
  };

  return (
    <div>
      <FormCompany >
        <h1>Cadastro de empresa</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Nome:
            <input type="text" {...register("name")} />
            {<span>{errors.name?.message}</span>}
          </label>
          <label>
            Telefone:
            <input type="text" {...register("phone")} />
            {<span>{errors.phone?.message}</span>}
          </label>
          <label>
            Email:
            <input type="text" {...register("email")} />
            {<span>{errors.email?.message}</span>}
          </label>
          <label>
            CNPJ:
            <input type="text" {...register("cnpj")} />
            {<span>{errors.cnpj?.message}</span>}
          </label>
          <label>
            Razão Social:
            <input type="text" {...register("socialreason")} />
          </label>
          <button type="submit">Cadastrar</button>
        </form>
      </FormCompany>
    </div>
  );
}

export default Companys;
