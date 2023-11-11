import { useForm } from "react-hook-form";

const Formulario = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {};

  return (
    <div className="container">
      <h1 className="titulo">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Ingresa tu e-mail"
          {...register("email")}
        />
        <input
          type="tel"
          placeholder="Ingresa tu telefono"
          {...register("telefono")}
        />
        <button className="enviar" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
