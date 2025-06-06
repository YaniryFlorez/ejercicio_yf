import axios from "axios";

const obtenerProducto = async () => {
  try {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    return {
      nombre: respuesta.data.name,
      imagen: respuesta.data.sprites.other['official-artwork'].front_default,
    };
  } catch (error) {
    console.error("Error al obtener Producto:", error);
    return null;
  }
};

export const obtenerProductoFachada = async () => {
  return await obtenerProducto();
};
