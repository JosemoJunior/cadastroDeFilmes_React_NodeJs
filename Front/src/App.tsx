import { NotFound } from './modules/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import { Index } from './modules/Index';
import { HomePage } from './modules/PageHome';
import { CadastrarPage } from './modules/PageCadastrar';
import { EditPage } from './modules/PageEditar';
import { ListarPage } from './modules/PageListar';
import { CadastrarListarPage } from './modules/PageCadastrarListar';
import { EquipePage } from './modules/PageEquipe';


function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/cadastrar' element={<CadastrarPage />} />
          <Route path='/listar' element={<ListarPage />} />
          <Route path="/editar/:id" element={<EditPage />} />
          <Route path='/cadastrarelistar' element={<CadastrarListarPage />} />
          <Route path="/equipe" element={<EquipePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

  )
}

export default App
