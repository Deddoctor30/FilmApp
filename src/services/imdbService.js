import {useHttp} from '../hooks/http.hooks';

const ImdbService = () => {
   const {request} = useHttp();
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
   const getSearchMovieInfo = async (id) => {
      const res = await request(`${_apiBase}/${_lang}/API/Title/${_apiKey}/${id}`);
      return _transformMovie(res);
   }
   const getSearchActorInfo = async (id) => {
      const res = await request(`${_apiBase}/API/Name/${_apiKey}/${id}`);
      return _transformActor(res);
   }

   const _transformSearch = (item) => {
      return {
         id: item.id,
         thumbnail: item.image,
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
         directorList: item.directorList, 
         writerList: item.writerList, 
         actorList: item.actorList,   
         genres: item.genres,
         companies: item.companies,
         countries: item.countries,
         contentRating: item.contentRating,
         imDbRating: item.imDbRating,
         metacriticRating: item.metacriticRating,
         boxOffice: item.boxOffice,   
         similars: item.similars      
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
         knownFor: item.knownFor,   
         castMovies: item.castMovies,     
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