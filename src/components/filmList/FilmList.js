
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import { searchFetching, searchFetched, searchShowAll, searchFetchingError } from '../appSearch/searchSlice';
// import imdbServiece from '../../services/imdbService';

import FilmListItem from '../filmListItem/FilmListItem';
import Skeleton from '../skeleton/Skeleton';
import './filmList.scss';


const FilmList = () => {


   // const searchItems = useSelector(state => state.search.searchItems);
   const searchStatus = useSelector(state => state.search.searchStatus);
   const searchItems = useSelector(state => {
      if (!state.search.searchShowAll) {return state.search.searchItems.slice(0, 3)}
         return state.search.searchItems;
   });


   useEffect(() => {
      const input = document.querySelector('.form__input');
      const label = document.querySelector('.form__label');
      input.addEventListener('click', () => label.style.opacity = 0);
      input.addEventListener('transitionend', () => (label.style.display = 'none'));
   }, [])


   const renderFilms = (arr) => {
      return arr.map(({id, ...props}) => {
         return (
            <CSSTransition
            key={id}
            timeout={500}
            classNames="my-node">
                <FilmListItem {...props}/>
                {/* <FilmListItem {...props} onDelete={() => deleteHero(id)}/> */}
            </CSSTransition>
         )
      })
   }

   let elements = '';
       
   if (searchStatus === "loading") {
      return <Skeleton/>;
  } else if (searchStatus === "error") {
      return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  } else if (searchStatus === "idle") {
      elements = renderFilms(searchItems);
  }

   return (
      <TransitionGroup component={null}>
            {elements}
      </TransitionGroup>
   )

}

export default FilmList;



