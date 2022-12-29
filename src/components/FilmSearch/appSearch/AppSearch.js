import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchShow } from './searchFilmSlice';


import Header from '../../Header/Header';
import AppForm from '../../form/AppForm';
import FilmList from '../filmList/FilmList';
import './appSearch.scss';


const AppSearch = () => {
   const dispatch = useDispatch();
   const searchShowAll = useSelector(state => state.search.searchShowAll);
   const showSwitcher = useSelector(state => state.search.searchItems);
   const [swithContent, setSwithContent] = useState('');

   const showAllFilms = () => {
      dispatch(searchShow());
   }

   useEffect(() => {
         if (searchShowAll) {
            setSwithContent(swithContent => swithContent = 'Показать часть');
         } else {
            setSwithContent(swithContent => swithContent = 'Показать все');
         }
         console.log('appSearch_Effect');
   }, [searchShowAll]);

   return (
      <>
         <Header/>
         <div className='search'>
            <div style={showSwitcher.length ? {marginTop: '-250px'} : null} className="search__wrapper">
               <AppForm method={'getSearch'}/>
               <div style={showSwitcher.length ? {visibility: 'visible'} : {visibility: 'hidden'}} className='search__switch btn btn_white' onClick={showAllFilms}>{swithContent}</div>
            </div>

            <ul className='search__items'>
               <FilmList/>
            </ul>
         </div>
      </>
   )
}

export default AppSearch;



