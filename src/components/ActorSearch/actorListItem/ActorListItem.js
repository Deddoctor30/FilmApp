import './actorListItem.scss';
import { useNavigate } from 'react-router-dom'


const ActorListItem = ({thumbnail, title, description, id}) => {
   const navigate = useNavigate();

   const img = thumbnail ? thumbnail : 'https://imdb-api.com/images/original/nopicture.jpg'
   return (
      <div onClick={() => navigate(`/actor/${id}`)} className="actors__item">
         <div className="actors__img"><img src={img} alt={`${title}-img`} /></div>
         <div className="actors__inner">
            <h1 className="actors__title">{title}</h1>
            <p className="actors__description">{description}</p>
         </div>
      </div>
   )
}

export default ActorListItem;