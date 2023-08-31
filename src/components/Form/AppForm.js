import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchFetching, searchFetched, searchSetRequest } from '../FilmSearch/appSearch/searchFilmSlice';
import { actorFetching, actorFetched, actorSetRequest } from '../ActorSearch/appActor/searchActorSlice';
import imdbServiece from '../../services/imdbService';
import './appForm.scss';

const AppForm = (method) => {
   const dispatch = useDispatch();
   const searchRequest = useSelector(state => state.search.searchRequest);
   const actorRequest = useSelector(state => state.actor.actorRequest);
   const ref = useRef()
   const formRequest = () => {
      if (method.method === 'getSearch') {
         return searchRequest
      } else if (method.method === 'getSearchActor') {
         return actorRequest
      }
   }
   const {getSearch, getSearchActor} = imdbServiece();
   const onSubmitForm = (event) => {
      event.preventDefault();
   }
   const handlerClick = () => {
      ref.current.style.width = 0;
      ref.current.style.opacity = 0;
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
      } else if (method.method === 'getSearchActor') {
         getSearchActor(actorRequest)
         .then(dispatch(actorFetching()))
         .then(data => dispatch(actorFetched(data)))
      }
   }

   return (
      <>
         <form className="search__form form" onSubmit={onSubmitForm}>
            <div className="form__inner">
               <div ref={ref} className="form__wrapper"><label htmlFor="name" className="form__label">Писать сюда:</label></div>
               <input 
                  onClick={() => handlerClick()}
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



