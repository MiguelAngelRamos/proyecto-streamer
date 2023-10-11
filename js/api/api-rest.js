export const fetchMovies = async (endpoint, params = {}) => {
  
  const BASE_URL = "https://api.themoviedb.org/3/movie/";
  
  //* Crear un objeto URL
  const url = new URL(BASE_URL + endpoint);
  //* BASE_URL + endpoint = https://api.themoviedb.org/3/movie/popular

  //* Definir los parametros de consulta las credenciales
  const defaultParams = {
    api_key: '1865f43a0549ca50d341dd9ab8b29f49',
    language: 'es-ES'
  };
 //* 2 formas de acceder al valor de llave
  // defaultParams.api_key
  // defaultParams[api_key]
  //* combinar ambos 
  //* { api_key: '1865f43a0549ca50d341dd9ab8b29f49', language: 'es-ES'} , { page: 2}
  const finalParams = {...defaultParams, ...params};
  //* { api_key: '1865f43a0549ca50d341dd9ab8b29f49', language: 'es-ES', page: 2}
  //* Añadir los parametros de la consulta a la URL

  //* Object.keys(finalParams) genera esto: [api_key, language, page]
  Object.keys(finalParams).forEach(key => url.searchParams.append(key, finalParams[key]));
  // [api_key, language, page].forEach( api_key => console.log(api_key));
  // [api_key, language, page].forEach( language => console.log(language));
  // [api_key, language, page].forEach( page => console.log(page));
  //* Nuestra URL construida.
  //* console.log(url);
  //* https://api.themoviedb.org/3/movie/popular?api_key=1865f43a0549ca50d341dd9ab8b29f49&language=es-ES&page=2

  try {
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error('Network response was not ok ' + 'error: ' +response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }

};
