import { useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../routes/Coordenator";

export const useUnprotectedPage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        if(token) {
            alert("Voce já esta Logado!")
            goToFeed(navigate)
        }
    }, [navigate])
}