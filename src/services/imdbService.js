import {useHttp} from '../hooks/http.hooks';

const ImdbService = () => {
   // const {request, clearError, process, setProcess} = useHttp();
   const {request} = useHttp();

   // https://imdb-api.com/API/Search/k_ja7liwom/thor
   // https://imdb-api.com/ru/API/SearchName/k_ja7liwom/Jean Reno

   const _apiBase = 'https://imdb-api.com/API';
   const _apiKey = 'k_ja7liwom';


   const getSearch = async (search) => {
      const res = await request(`${_apiBase}/Search/${_apiKey}/${search}`);
      return res.results.map(_transformSearch);
   }


   const getSearchActor = async (search) => {
      const res = await request(`${_apiBase}/SearchName/${_apiKey}/${search}`);
      return res.results.map(_transformSearch);
   }


   // const getAllCharacters = async (offset = _baseOffset) => {
   //    const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
   //    return res.data.results.map(_transformCharacter);
   // }

   // const getCharacter = async (id) => {
   //    const res = await request(`${_apiBase}characters/${id}?&${_apiKey}`);
   //    return _transformCharacter(res.data.results[0]);
   // }

   // const getCharacterByName = async (name) => {
   //    const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
   //    return res.data.results.map(_transformCharacter);
   // }

   // const getAllComics = async (offset = _baseOffset) => {
   //    const res = await request(`${_comics}limit=8&offset=${offset}&${_apiKey}`);
   //    return res.data.results.map(_transformComics);
   // }


   // const getComics = async (id) => {
   //    const res = await request(`${_apiBase}comics/${id}?&${_apiKey}`);
   //    return _transformComics(res.data.results[0]);
   // }




   const _transformSearch = (item) => {
      return {
         id: item.id,
         thumbnail: `${item.image}`,
         title: item.title,
         description: item.description,
      }
   }



   // const _transformCharacter = (item) => {
   //    const nameLength = 26;
   //    return {
   //       id: item.id,
   //       name: item.name.length > nameLength ? `${item.name.slice(0, nameLength)}...` : item.name,
   //       description: item.description,
   //       thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
   //       homepage: item.urls[0].url,
   //       wiki: item.urls[1].url,
   //       comics: item.comics.items.length > 5 ? item.comics.items.slice(0, 5) : item.comics.items,
   //    }
   // }



   // const _transformComics = (item) => {
   //    return {
   //       id: item.id,
   //       title: item.title,
   //       description: item.description || 'Находится в разработке',
   //       thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
   //       pages: item.pageCount || 'Не найдено',
   //       price: item.prices[0].price || 'Не доступно',
   //       language: item.textObjects.language || 'Английский',
   //    }
   // }

   return {
      getSearch,
      getSearchActor,
      // getAllCharacters, 
      // getCharacter, 
      // clearError, 
      // process, 
      // getAllComics, 
      // getComics, 
      // getCharacterByName,
      // setProcess
   }
}

export default ImdbService;