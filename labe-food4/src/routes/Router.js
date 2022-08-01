import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Busca from "../paginas/Busca/Busca"
import Cadastro from "../paginas/Cadastro/Cadastro"
import Carrinho from "../paginas/Carrinho/Carrinho"
import CadastroEndereco from "../paginas/CadastroEndereco/CadastroEndereco"
import Default from "../paginas/Default/Default"
import EditarEndereco from "../paginas/CadastroEndereco/CadastroEndereco"
import EditarPerfil from "../paginas/EditarPerfil/EditarPerfil"
import Feed from "../paginas/Feed/Feed"
import Login from "../paginas/Login/Login"
import Perfil from "../paginas/Perfil/Perfil"
import Restaurante from "../paginas/Restaurante/Restaurante"

const Router = () =>{
    return (
      
        <BrowserRouter>
            <Routes>
                <Route index element={<Feed/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/cadastro/endereco" element={<CadastroEndereco/>}/>
                <Route path="/restaurante" element={<Restaurante/>}/>
                <Route path="/carrinho" element={<Carrinho/>}/>
                <Route path="/busca" element={<Busca/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/editar/endereco" element={<EditarEndereco/>}/>
                <Route path="/editar/perfil" element={<EditarPerfil/>}/>
                <Route path="/default" element={<Default/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}

export default Router