// Función para obtener el chiste de Chuck Norris
const getChuckNorrisJoke = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    if (!response.ok) {
      throw new Error("No se pudo obtener el chiste de Chuck Norris.");
    }
    const data = await response.json();
    const { value } = data;
    return { value };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const getChuckNorrisCategories = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/categories");
    if (!response.ok) {
      throw new Error("No se pudo obtener la lista de categorías.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const getChuckNorrisJokeByCategory = async (category) => {
  try {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    if (!response.ok) {
      throw new Error(
        `No se pudo obtener una broma de la categoría ${category}.`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export default getChuckNorrisJoke;
