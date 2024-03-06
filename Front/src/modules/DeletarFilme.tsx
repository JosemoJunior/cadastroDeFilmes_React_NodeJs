import React from "react";
import axios from "axios";

type DeletarFilmeProps = {
  id: number;
  onDelete: () => void;
};

const DeletarFilme: React.FC<DeletarFilmeProps> = ({ id, onDelete }) => {
  const handleDeletar = async () => {
    try {
      await axios.delete(`http://localhost:5000/filmes/${id}`);
      console.log(`Filme com ID ${id} deletado com sucesso.`);
      onDelete();
    } catch (error) {
      console.error("Erro ao deletar o filme:", error);
    }
  };

  return (
    <button onClick={handleDeletar} className="btn2">
      Deletar
    </button>
  );
};

export default DeletarFilme;
