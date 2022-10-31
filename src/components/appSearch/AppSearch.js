import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { searchFetching, searchFetched, searchFetchingError } from './searchSlice';
import imdbServiece from '../../services/imdbService';

import Spinner from '../spinner/Spinner';
import FilmListItem from '../filmListItem/FilmListItem';



const AppSearch = () => {
   const dispatch = useDispatch();

   const searchStatus = useSelector(state => state.search.searchStatus);
   const searchItems = useSelector(state => state.search.searchItems);

   const {getSearch} = imdbServiece();

   // useEffect(() => {
   //    dispatch()
   // }, [])

   const onSubmitForm = (event) => {
      event.preventDefault();
  }

  const [request, setRequest] = useState('')

  const onChangeHandler = event => {
      const {value} = event.target;
      setRequest(value)
   }
   

   const getFilm = () => {
      console.log(`Ты гуглишь ${request}`);
      getSearch(request)
         .then(dispatch(searchFetching))
         .then(data => dispatch(searchFetched(data)))
         .catch(dispatch(searchFetchingError))
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
      <>
         <form className="" onSubmit={onSubmitForm}>
               <div className="">
                  <label htmlFor="name" className="">Введите запрос</label>
                  <input 
                     required
                     type="text" 
                     name="search" 
                     className="" 
                     id="search" 
                     placeholder="Как меня зовут?"
                     value={request}
                     onChange={onChangeHandler}
                     />
               </div>
               <button type="submit" className="" onClick={getFilm}>Найти</button>
         </form>
         <ul>
            <TransitionGroup component={null}>
                  {elements}
            </TransitionGroup>
         </ul>
      </>
   )

}

export default AppSearch;



