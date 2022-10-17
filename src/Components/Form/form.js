import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function Form() {
  const schemaForm = yup.object().shape({
    name: yup.string().required("Coloque seu nome!"),
    age: yup.number(),
    job: yup.string(),
    likes: yup.string(),
    email: yup.string().email(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForm),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Fomulario onSubmit={handleSubmit(onSubmit)}> 
      <Opcao>
        Digite seu nome:
        <input name="name" {...register("name")} />
      </Opcao>

      <Opcao>   
        Digite sua idade:
      <input name="age" {...register("age")} /></Opcao> 

      <Opcao>   
        Digite seu e-mail:
      <input name="email" {...register("email")} /></Opcao> 

      {errors.name && <p>{errors.name?.message}</p>}

      <Opcao>   
        Qual a sua área de atuação?
      <select name="job" {...register("job")}>
        <option value="Educação">Educação</option>
        <option value="Vendas">Vendas</option>
        <option value="Saúde">Saúde</option>
        <option value="Tecnologia">Tecnologia</option>
        <option value="Informação">Informação</option>
        <option value="Serviços">Serviços</option>
        <option value="Beleza">Beleza e estética</option>
        <option value="Alimentação">Alimentação</option>
        <option value="Geral">Outros</option>
      </select> </Opcao>

      <Opcao>   
        No que você tem interesse?
      <select name="likes" {...register("likes")}>
        <option value="Tecnologia">Tecnologia</option>
        <option value="ambiente">Meio ambiente</option>
        <option value="Sociedade">Sociedade</option>
        <option value="Negócios">Negócios</option>
        <option value="Gastronomia">Gastronomia</option>
        <option value="Moda">Moda e beleza</option>
      </select> </Opcao>

      <button type="submit" > Send </button>
    </Fomulario>
  );
}

export default Form;


const Fomulario = styled.form`
    background-color: gray;
    padding: 30px;
    display: grid;
    align-content: center;

    @media (max-width: 951px) {
        padding: 30px 18px;
    }
`

const Opcao = styled.label`
    margin-bottom: 20px;
`
