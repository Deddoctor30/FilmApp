import Header from "../../Header/Header";
import AppForm from "../../Form/AppForm";
import { useSelector } from 'react-redux';

import ActorList from "../actorList/ActorList";

import './appActor.scss';

const AppActor = () => {
   const reSizer = useSelector(state => state.actor.actorItems);
   return (
      <>
         <Header/>
         <div className="search">
            <div style={reSizer.length ? {marginTop: '-250px'} : null}  className="search__wrapper">
               <AppForm method={'getSearchActor'}/>
            </div>
            <ul className='search__actors actors'>
                  <ActorList/>
            </ul>
         </div>
      </>
   )
}

export default AppActor;