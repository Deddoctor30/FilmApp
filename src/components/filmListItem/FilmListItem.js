// import '../../app.scss';
import './filmListItem.scss';

const FilmListItem = ({thumbnail, title, description}) => {

   return (
      <div className="search__item item">
         <div className="item__img"><img src={thumbnail} alt={`${title}-img`} /></div>
         <div className="item__inner">
            <h1 className="item__title">{title}</h1>
            <p className="item__description">{description}</p>
         </div>
      </div>
   )
}

export default FilmListItem;