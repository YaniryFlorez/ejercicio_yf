import axios from "axios";
 
const consumirAPI = async () => {
    const respuesta = await axios.get("https://randomuser.me/api/")
    
    return  respuesta.data;
} 


export const consumirAPIFachada = async () => {
    return await consumirAPI()
}