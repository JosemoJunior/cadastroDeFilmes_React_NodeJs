// ListarFilmes.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeletarFilme from "./DeletarFilme";


type Filme = {
  id: number;
  titulo: string;
  ator: string;
  faixaEtaria: string;
  genero: string;
};

export const ListarFilmes = () => {
  const [filmes, setFilmes] = useState<Array<Filme>>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    const response = await axios.get("http://localhost:5000/filmes");
    setFilmes(response.data.filmes);
    console.log(response.data.filmes);
  };

  const handleDeleteSuccess = () => {
    findAll();
  };

  return (
    <div>
      <div className="container mt-3">
        {/*<button onClick={findAll} className="btn btn-primary mb-3">
          Listar
  </button> */}
        <div className="card">
        <h2 className="card-header">Filmes Cadastrados:</h2>
        {filmes && (
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Título</th>
                <th scope="col">Ator</th>
                <th scope="col">Classificação</th>
                <th scope="col">Gênero</th>
                <th scope="col">Opções</th>
              </tr>
            </thead>
            <tbody>
              {filmes.map((f) => (
                <tr key={f.id}>
                  <td>{f.id}</td>
                  <td>{f.titulo}</td>
                  <td>{f.ator}</td>
                  <td>{f.faixaEtaria}</td>
                  <td>{f.genero}</td>
                  <td>
                    <button><Link to={`/editar/${f.id}`} className="text-black text-decoration-none">
                      Editar
                    </Link></button>
                    <DeletarFilme id={f.id} onDelete={handleDeleteSuccess} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </div>
      </div>
    </div>
  );
};
