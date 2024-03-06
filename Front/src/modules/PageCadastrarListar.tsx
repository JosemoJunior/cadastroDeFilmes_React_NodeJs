import { Link } from "react-router-dom";
import './css/reset.css'
import './css/bootstrap-5.3.2-dist/css/bootstrap.min.css';
import { UniquePage } from "./UniquePage";

export const CadastrarListarPage = () => {
  return (
    <div className="card m-5 p-4 text-center">
      <header>
        <h1 className="display-4 text-primary">
          Sistema de Gerenciamento de Filmes (SGF_SPI.2023)
        </h1>
      </header>
      <main className="mt-4">
        <h4 className="lead text-secondary">
          Escolha uma das opções abaixo:
        </h4>
        <nav className="nav">
          <a className="nav-link active" aria-current="page"> <Link to={`/cadastrar`} className="text-blue text-decoration-none"> Cadastrar</Link></a>
          <a className="nav-link active" aria-current="page"><Link to={`/listar`} className="text-blue text-decoration-none"> Listar</Link></a>
          <a className="nav-link active" aria-current="page"><Link to={`/cadastrarelistar`} className="text-blue text-decoration-none"> Cadastrar e Listar</Link></a>
          <a className="nav-link active" aria-current="page"><Link to={`/equipe`} className="text-blue text-decoration-none"> Equipe</Link></a>        </nav>
        <div>
          <UniquePage />
        </div>
      </main>
    </div>
  );
};