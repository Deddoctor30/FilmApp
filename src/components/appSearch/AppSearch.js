import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { searchFetching, searchFetched, searchShowAll, searchFetchingError } from './searchSlice';
import imdbServiece from '../../services/imdbService';

import FilmListItem from '../filmListItem/FilmListItem';
import Spinner from '../spinner/Spinner';
import './appSearch.scss';


const AppSearch = () => {
   const dispatch = useDispatch();

   const searchStatus = useSelector(state => state.search.searchStatus);
   // const searchItems = useSelector(state => state.search.searchItems);
   const searchItems = useSelector(state => {
      if (!state.search.searchShowAll) {
         return state.search.searchItems.slice(0, 3);
      } else {
         return state.search.searchItems;
      }
   });

   const {getSearch} = imdbServiece();

   const marginTopChanger = () => {
      const form = document.querySelector('.search__form');
            // switcher = document.querySelector('.search__switch');
      form.style.marginTop = '7vh';
      // switcher.style.top = '5%';
   }

   useEffect(() => {
      const input = document.querySelector('.form__input');
      const label = document.querySelector('.form__label');
      input.addEventListener('click', () => label.style.opacity = 0);
      input.addEventListener('transitionend', () => (label.style.display = 'none'));
   }, [])

   const onSubmitForm = (event) => {
      event.preventDefault();
  }

  const [request, setRequest] = useState('')

  const onChangeHandler = event => {
      const {value} = event.target;
      setRequest(value)
   }
   

   const getFilm = () => {
      getSearch(request)
         .then(dispatch(searchFetching()))
         .then(data => dispatch(searchFetched(data)))
         // .catch(dispatch(searchFetchingError()));
         marginTopChanger();
   }

   const showAllFilms = () => {
      console.log('da');
      dispatch(searchShowAll());
   }

   if (searchStatus === "loading") {
        return <Spinner/>;
   } else if (searchStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
   }


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

   const elements = renderFilms(searchItems);

   return (
      <div className='search'>
         <div className="search__wrapper">
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
                        value={request}
                        onChange={onChangeHandler}
                        />
                  </div>
                  <button type="submit" className="form__button btn btn_white" onClick={getFilm}>Найти</button>
            </form>
            <div className='search__switch' onClick={showAllFilms}>Показывать все</div>
         </div>

         <ul className='search__items'>
            <TransitionGroup component={null}>
                  {elements}
            </TransitionGroup>
         </ul>
      </div>
   )

}

export default AppSearch;



