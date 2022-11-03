import { Route, Routes } from 'react-router-dom'
import AddPoint from '../componets/addPoint';
import Cadastro from '../componets/Cadastro';
import Main from '../componets/Main';
import Companys from '../componets/Rcompany';
import Employees from '../componets/Remploees';

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/cadastro" element={<Cadastro />}/>
      <Route path="/addpoint" element={<AddPoint />}/>
      <Route path="/companys" element={<Companys />}/>
      <Route path="/employees" element={<Employees />}/>
      <Route path="/*" element={
        <main style={{ fontSize:'10rem', textAlign:'center' }}>
          <p>There's nothing here!</p>
        </main>
      }/>
    </Routes>
  )
}

export default Rotas;