import { useEffect, useContext} from "react"
import { useNavigate } from "react-router-dom";
import { goToLogin, goToCadastroEndereco } from "../routes/Coordenator";
import { GlobalContext } from "../componentes/global/GlobalContext";

export const useProtectedPage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const {states, requests} = useContext(GlobalContext)
    const {perfil} = states
    const {PegarPerfil} = requests

    useEffect(() => {
        if(!token) {
            alert("Não autorizado. Faça o Login.")
            goToLogin(navigate)
        }      
    }, [navigate])
}