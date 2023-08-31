import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { singleActorDisFetched, fetchActor } from './ActorItemSlice';
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header';
import Skeleton from '../skeleton/Skeleton';

import './actorItem.scss';
import { useState } from 'react';
import MySelect from '../UI/select/MySelect';

const ActorItem = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const singleActorStatus = useSelector(state => state.singleActor.singleActorStatus);
  const navigate = useNavigate();
  const [castType, setCastType] = useState('Producer');
  const [castShowAll, setCastShowAll] = useState(false);

  const count = 6;
  const singleActorItem = useSelector(state => {
    if (singleActorStatus === 'idle') {
      if (state.singleActor.singleActorItem.castMovies?.length > count) {
        let newCastList = null;
        if (!castShowAll) {
          newCastList = state.singleActor.singleActorItem.castMovies.filter(item => item.role === castType).slice(0, count);
        } else {
          newCastList = state.singleActor.singleActorItem.castMovies.filter(item => item.role === castType);
        }
        return {...state.singleActor.singleActorItem, castMovies: newCastList}
      } else {
        return state.singleActor.singleActorItem
      }
    }
  });
  const castItemsDefault = useSelector(state => state.singleActor.singleActorItem.castMovies);
  
  useEffect(() => {
      dispatch(fetchActor(params.id))
      return () => {
           dispatch(singleActorDisFetched())
        }
  }, [])

  return (
    <>
      <Header/>
        { singleActorStatus === 'loading'
          ?
            <Skeleton/>
          :
            <>
              { singleActorItem.name === null 
                ?
                  <>
                    <h1 className='actor__error'>Контент находится в разработке</h1>
                    <Skeleton/>
                  </>
                :
                  <div className="actor">
                    <img src={singleActorItem.image} alt={singleActorItem.name}/>
                    <div className="actor__info info">
                      <h1 className="info__title">{singleActorItem.name}</h1>
                      <div>
                        <div>Роль:</div>
                        <div>{singleActorItem.role}</div>
                      </div>
                      <div>
                        <div>Дата рождения:</div>
                        <div>{singleActorItem.birthDate}</div>
                      </div>
                      {singleActorItem.deathDate 
                        ?
                        <div>
                          <div>Дата смерти:</div>
                          <div>{singleActorItem.deathDate}</div>
                        </div>
                        :
                        null
                      }
                      <div>
                        <div>Награды:</div>
                        <div>{singleActorItem.awards}</div>
                      </div>
                      <div>
                        <div>Рост:</div>
                        <div>{singleActorItem.height}</div>
                      </div>
                      <div>
                        <div>Описание:</div>
                        <div>{singleActorItem.summary}</div>
                      </div>
                    </div>
                    <div className="actor__right-bar">
                      <div className="actor__known-for">
                        <div>Лучшие фильмы:</div>
                        <div>{singleActorItem.knownFor.map(item => {
                          return (
                            <div className='link' onClick={() => navigate(`/film/${item.id}`)} key={item.id}>
                              {item.title}
                            </div>
                          )
                        })}</div>
                      </div>
                    </div>
                    <div className="actor__cast cast">
                      <label className='cast__title' htmlFor="role">Каст:</label>

                      <MySelect
                        value={castType} 
                        onChange={value => setCastType(value)} 
                        options={castItemsDefault.reduce((result, item) => {
                          return result.includes(item.role) ? result : [...result, item.role]
                        }, [])}
                      />
                      <div className='cast__items'>{singleActorItem.castMovies.map((item, i) => {
                        return (
                          <div className='cast__item' key={i} onClick={() => navigate(`/film/${item.id}`)}>
                                <div>{item.title} {item.year}</div>
                                <div>{item.description}</div>
                                <div>{item.role}</div>
                          </div>
                        )
                      })}</div>
                      {!castShowAll &&
                        <button 
                          className='cast__btn' 
                          onClick={() => setCastShowAll(true)}
                          >
                            Показать все
                          </button>          
                        }

                    </div>
                  </div>
              }
            </>
        }
    </>
  )
}

export default ActorItem