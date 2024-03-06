import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  titulo: string;
  ator: string;
  faixaEtaria: string;
  genero: string;
};

export const FormInput = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    cadastrarFilme(data);
    reset();
    navigate(0);
  };

  async function cadastrarFilme(data: Inputs) {
    const response = await axios.post("http://localhost:5000/filmes", data);
    if (response.status === 201) {
      console.log("Cadastrado com sucesso!");
    } else {
      console.log("Erro ao cadastrar!");
    }
  }

  return (
    <div>
      <section className="section">
        <div className="container mt-5">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="card">
            <h2 className="card-header">Cadastrar Filme:</h2>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="titulo" className="form-label">
                  Título:
                </label>
                <input
                  {...register("titulo", { required: true })}
                  type="text"
                  className={`form-control ${
                    errors.titulo ? "is-invalid" : ""
                  }`}
                  placeholder="Informe um título"
                />
                {errors.titulo && (
                  <div className="invalid-feedback">O campo é obrigatório</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="ator" className="form-label">
                  Atores:
                </label>
                <input
                  {...register("ator", { required: true })}
                  type="text"
                  className={`form-control ${errors.ator ? "is-invalid" : ""}`}
                  placeholder="Informe dois atores"
                />
                {errors.ator && (
                  <div className="invalid-feedback">O campo é obrigatório</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="faixaEtaria" className="form-label">
                  Faixa Etária:
                </label>
                <input
                  {...register("faixaEtaria", { required: true })}
                  type="text"
                  className={`form-control ${
                    errors.faixaEtaria ? "is-invalid" : ""
                  }`}
                  placeholder="Informe a Faixa Etária"
                />
                {errors.faixaEtaria && (
                  <div className="invalid-feedback">
                    O campo é obrigatório
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="genero" className="form-label">
                  Gênero:
                </label>
                <input
                  {...register("genero", { required: true })}
                  type="text"
                  className={`form-control ${errors.genero ? "is-invalid" : ""}`}
                  placeholder="Informe um gênero"
                />
                {errors.genero && (
                  <div className="invalid-feedback">O campo é obrigatório</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
