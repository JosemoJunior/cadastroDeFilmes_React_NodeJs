import { Link } from "react-router-dom";
import './css/reset.css'
import './css/bootstrap-5.3.2-dist/css/bootstrap.min.css';

export const Index = () => {
  return (
    <div className="card m-5 p-4 text-center">
      <header>
        <h1 className="display-4 text-primary">
          Sistema de Gerenciamento de Filmes (SGF_SPI.2023)
        </h1>
      </header>
      <main className="mt-4">
        <h4 className="lead text-secondary">
          Para acessar nosso catálogo, clique no botão abaixo:
        </h4>
        <button className="btn btn-primary">
          <Link to="/home" className="text-white text-decoration-none">
            Entrar
          </Link>
        </button>
      </main>
    </div>
  );
};