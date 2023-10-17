import data from '../data/productos.json';

export const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data)
      resolve(data);
    }, 500); 
  });
};

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.find((el) => el.id === id);

    if (item) {
      resolve(item);
    } else {
      reject({
        error: "No se encontró el producto que usted busca",
      });
    }
  });
};

