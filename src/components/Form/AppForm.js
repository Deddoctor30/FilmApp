import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchFetching, searchFetched, searchShow, searchFetchingError, searchSetRequest } from '../appSearch/searchSlice';
import imdbServiece from '../../services/imdbService';

// import './appSearch.scss';
import '../appSearch/appSearch.scss';

const AppForm = (method) => {
   const dispatch = useDispatch();

   const searchRequest = useSelector(state => state.search.searchRequest);
   const searchStatus = useSelector(state => state.search.searchStatus);
   // const searchItems = useSelector(state => state.search.searchItems);

   const {getSearch, getSearchActor} = imdbServiece();

   const form = document.querySelector('.search__form'),
         switcher = document.querySelector('.search__switch');

   const marginTopChanger = () => {
      form.style.marginTop = '5%';
      switcher.style.top = '5%';
   }

   // const searchShowAll = useSelector(state => state.search.searchShowAll);
   // const [swithContent, setSwithContent] = useState('');

   useEffect(() => {
      const input = document.querySelector('.form__input');
      const label = document.querySelector('.form__label');
      input.addEventListener('click', () => label.style.opacity = 0);
      input.addEventListener('transitionend', () => (label.style.display = 'none'));
   }, [])

   const onSubmitForm = (event) => {
      event.preventDefault();
  }



//   const [request, setRequest] = useState('')



  const onChangeHandler = event => {
      const {value} = event.target;
      dispatch(searchSetRequest(value));
   }
   



   const getSearchMethod = () => {
      if (method.method === 'getSearch') {
         getSearch(searchRequest)
         .then(dispatch(searchFetching()))
         .then(data => dispatch(searchFetched(data)))
         // .catch(dispatch(searchFetchingError()));
         if (searchStatus === 'idle') {
            marginTopChanger();
         }
      } else if (method.method === 'getSearchActor') {
         getSearchActor(searchRequest)
         .then(dispatch(searchFetching()))
         .then(data => dispatch(searchFetched(data)))
         // .catch(dispatch(searchFetchingError()));
         if (searchStatus === 'idle') {
            marginTopChanger();
         }
      }
   }








   // const showAllFilms = () => {
   //    dispatch(searchShow());
   // }

   // useEffect(() => {
   //    if (searchShowAll) {
   //       setSwithContent(swithContent => swithContent = 'Показать 3');
   //    } else {
   //       setSwithContent(swithContent => swithContent = 'Показать все');
   //    }
   // }, [searchShowAll]);


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
                     value={searchRequest}
                     onChange={onChangeHandler}
                     />
               </div>
               <button className="form__button btn btn_white" type="submit" onClick={getSearchMethod}>Найти</button>
         </form>
         {/* <div className='search__switch btn btn_white' onClick={showAllFilms}>{swithContent}</div> */}
      </>
   )
}

export default AppForm;



