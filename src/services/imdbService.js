import {useHttp} from '../hooks/http.hooks';

const ImdbService = () => {
   // const {request, clearError, process, setProcess} = useHttp();
   const {request} = useHttp();

   // https://imdb-api.com/API/Search/k_ja7liwom/thor
   // https://imdb-api.com/ru/API/SearchName/k_ja7liwom/Jean Reno

   // const _apiBase = 'https://imdb-api.com/API';
   const _apiBase = 'https://imdb-api.com';
   const _lang = 'en';
   const _apiKey = 'k_ja7liwom';


   const getSearch = async (search) => {
      const res = await request(`${_apiBase}/API/Search/${_apiKey}/${search}`);
      return res.results.map(_transformSearch);
   }


   const getSearchActor = async (search) => {
      const res = await request(`${_apiBase}/API/SearchName/${_apiKey}/${search}`);
      return res.results.map(_transformSearch);
   }

// title
//https://imdb-api.com/en/API/Title/k_ja7liwom/tt10648342
   const getSearchMovieInfo = async (id) => {
      const res = await request(`${_apiBase}/${_lang}/API/Title/${_apiKey}/${id}`);
      return _transformMovie(res);
   }

// API/name
// https://imdb-api.com/API/Name/k_ja7liwom/nm0634240
   const getSearchActorInfo = async (id) => {
      const res = await request(`${_apiBase}/API/Name/${_apiKey}/${id}`);
      return _transformActor(res);
   }

   

   const _transformSearch = (item) => {
      return {
         id: item.id,
         thumbnail: `${item.image}`,
         title: item.title,
         description: item.description,
      }
   }


   const _transformMovie = (item) => {
      return {
         id: item.id,
         fullTitle: item.fullTitle,
         image: item.image,
         releaseDate: item.releaseDate,
         runtimeStr: item.runtimeStr,
         plot: item.plot,
         directorList: item.directorList,          // массив с id и именем (для поиска по клику)
         writerList: item.writerList,              // массив
         actorList: item.actorList,                // массив
         genres: item.genres,
         companies: item.companies,
         countries: item.countries,
         contentRating: item.contentRating,
         imDbRating: item.imDbRating,
         metacriticRating: item.metacriticRating,
         boxOffice: item.boxOffice,                // массив
         similars: item.similars                   // массив
      }
   }


   const _transformActor = (item) => {
      return {
         id: item.id,
         name: item.name,
         role: item.role,
         image: item.image,
         summary: item.summary,
         birthDate: item.birthDate,
         deathDate: item.deathDate,
         awards: item.awards,
         height: item.height,
         knownFor: item.knownFor,              // массив
         castMovies: item.castMovies,                // массив
      }
   }


   return {
      getSearch,
      getSearchActor,
      getSearchMovieInfo,
      getSearchActorInfo,
   }
}

export default ImdbService;