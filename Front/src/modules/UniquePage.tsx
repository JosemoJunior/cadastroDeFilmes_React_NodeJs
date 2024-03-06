import { Routes } from "react-router-dom";
import { FormInput } from "./FormInput";
import { ListarFilmes } from "./ListarFilmes";

export const UniquePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-15">
          <FormInput />
        </div>
        <div className="col-md-8 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <ListarFilmes />
          </div>
        </div>
      </div>
    </div>
  );
};
