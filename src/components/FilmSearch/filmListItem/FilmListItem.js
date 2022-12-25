import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { filmFetching, filmFetched } from '../../SingleFilm/FilmItemSlice';
import ImdbService from '../../../services/imdbService';

import './filmListItem.scss';

const FilmListItem = ({thumbnail, title, description, id}) => {
   const navigate = useNavigate()
   const dispatch = useDispatch();
   const {getSearchMovieInfo} = ImdbService();

   const filmLoader = () => {
      // getSearchMovieInfo(id)
      // .then(dispatch(filmFetching()))
      // .then(data => dispatch(filmFetched(data)))
      // .then(navigate(`/film/${id}`))
      navigate(`/film/${id}`);
   }

   const img = thumbnail ? thumbnail : 'https://imdb-api.com/images/original/nopicture.jpg'
   return (
      <div className="search__item item">
         <div className="item__img">
            <img onClick={filmLoader} src={img} alt={`${title}-img`}/>
         </div>
         <div className="item__inner">
            <h1 className="item__title">{title}</h1>
            <p className="item__description">{description}</p>
         </div>
      </div>
   )
}

export default FilmListItem;

{/* <li><NavLink style={({isActive}) => isActive ? activePage : undefined} to='/'>Главная</NavLink></li> */}