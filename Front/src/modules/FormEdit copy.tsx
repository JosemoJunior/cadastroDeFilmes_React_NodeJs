import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  titulo: string;
  ator: string;
  faixaEtaria: string;
  genero: string;
};

export const FormEdit: React.FC = () => {
  const { id } = useParams<any>(); 
  const [filme, setFilme] = useState<Inputs | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/filmes/${id}`);
        setFilme(response.data); 
      } catch (error) {
        console.error("Erro ao buscar filme:", error);
      }
    };

    fetchData();
  }, [id]);

  const navigate = useNavigate();

  const handleFormSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (id !== undefined) {
        console.log(data);
        await editarFilme(id, data);
        reset();
        navigate('/listar');
        
      } else {
        console.error("ID está undefined");
      }
    } catch (error) {
      console.error("Erro ao editar:", error);
    }
  };

  async function editarFilme(id: string, data: Inputs) {
    try {
      const response = await axios.put(`http://localhost:5000/filmes/${id}`, data);
      if (response.status === 200) {
        console.log("Editado com sucesso!");
      } else {
        console.log("Erro ao editar!");
        throw new Error("Erro ao editar filme");
      }
    } catch (error) {
      console.error("Erro ao editar filme:", error);
    }
  }

  if (!filme) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="card p-3">
        <h2 className="card-header">Editar Filme:</h2>
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
                  placeholder="Informe um ator"
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
            Editar
          </button>
        </div>
      </form>
    </div>
  );
};
