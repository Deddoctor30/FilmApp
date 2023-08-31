import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ActorListItem from '../actorListItem/ActorListItem';
import Skeleton from '../../skeleton/Skeleton';
import './actorList.scss';

const ActorList = () => {
   const actorStatus = useSelector(state => state.actor.actorStatus);
   const actorItems = useSelector(state =>  state.actor.actorItems);
   const renderFilms = (arr) => {
      return arr.map(({...props}) => {
         return (
            <CSSTransition
            key={props.id}
            timeout={500}
            classNames="my-node">
                <ActorListItem {...props}/>
            </CSSTransition>
         )
      })
   }
   let elements = '';
   if (actorStatus === "loading") {
      return <Skeleton/>;
   } else if (actorStatus === "error") {
      return <h5 className="text-center mt-5">Ошибка загрузки</h5>
   } else if (actorStatus === "idle") {
      elements = renderFilms(actorItems);
   }
   
   return (
      <TransitionGroup component={null}>
            {elements}
      </TransitionGroup>
   )
}

export default ActorList;



