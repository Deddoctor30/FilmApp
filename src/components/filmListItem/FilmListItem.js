const FilmListItem = ({thumbnail, title, description}) => {

   return (
      <div className="search__container">
         <div className="search__inner">
            <div className="search__img"><img src={thumbnail} alt={`${title}-img`} /></div>
            <h1 className="search__title">{title}</h1>
            <p className="search__description">{description}</p>
         </div>
      </div>
   )
}

export default FilmListItem;