import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchFetching, searchFetched, searchSetRequest } from '../FilmSearch/appSearch/searchFilmSlice';
import { actorFetching, actorFetched, actorSetRequest } from '../ActorSearch/appActor/searchActorSlice';
import imdbServiece from '../../services/imdbService';

import './appForm.scss';

const AppForm = (method) => {
   const dispatch = useDispatch();

   const searchRequest = useSelector(state => state.search.searchRequest);
   const actorRequest = useSelector(state => state.actor.actorRequest);


   const formRequest = () => {
      if (method.method === 'getSearch') {
         return searchRequest
      } else if (method.method === 'getSearchActor') {
         return actorRequest
      }
   }

   const {getSearch, getSearchActor} = imdbServiece();


   useEffect(() => {
      const input = document.querySelector('.form__input');
      const label = document.querySelector('.form__label');
      input.addEventListener('click', () => label.style.opacity = 0);
      input.addEventListener('transitionend', () => (label.style.display = 'none'));
   }, [])

   const onSubmitForm = (event) => {
      event.preventDefault();
   }

   const onChangeHandler = event => {
      const {value} = event.target;
      if (method.method === 'getSearch') {
         dispatch(searchSetRequest(value));
      } else if (method.method === 'getSearchActor') {
         dispatch(actorSetRequest(value));
      }
      
   }
   

   const getSearchMethod = () => {
      if (method.method === 'getSearch') {
         getSearch(searchRequest)
         .then(dispatch(searchFetching()))
         .then(data => dispatch(searchFetched(data)))
         // .catch(dispatch(searchFetchingError()));
      } else if (method.method === 'getSearchActor') {
         getSearchActor(actorRequest)
         .then(dispatch(actorFetching()))
         .then(data => dispatch(actorFetched(data)))
         // .catch(dispatch(actorFetchingError()));
      }
   }

   return (
      <>
         <form className="search__form form" onSubmit={onSubmitForm}>
               <div className="form__inner">
                  <label htmlFor="name" className="form__label">Писать сюда:</label>
                  <input 
                     required
                     type="text" 
                     name="search" 
                     className="form__input" 
                     id="search" 
                     placeholder="введите..."
                     value={formRequest()}
                     onChange={onChangeHandler}
                     />
               </div>
               <button className="form__button btn btn_white" type="submit" onClick={getSearchMethod}>Найти</button>
         </form>
      </>
   )
}

export default AppForm;



