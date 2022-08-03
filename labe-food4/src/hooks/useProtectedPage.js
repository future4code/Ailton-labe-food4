import { useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/Coordenator";

export const useProtectedPage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        if(!token) {
            alert("Não autorizado. Faço o Login")
            goToLogin(navigate)
        }
    }, [navigate])
}