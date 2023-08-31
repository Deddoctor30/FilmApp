import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filmDisFetched, fetchFilm } from './FilmItemSlice';
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header';
import Spinner from '../skeleton/Spinner';
import Slider from "react-slick";
import './filmItem.scss';
import '../../libs/slick/slick.css';
import '../../libs/slick/slick-theme.css';

const FilmItem = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const filmStatus = useSelector(state => state.film.filmStatus);
  const filmItem = useSelector(state => {
    if (filmStatus === 'idle') {
      if (state.film.filmItem.actorList?.length > 16) {
        const newActorsList = state.film.filmItem.actorList.slice(0, 16)
        return { ...state.film.filmItem, actorList: newActorsList }
      } else {
        return state.film.filmItem
      }
    }
  });
  const navigate = useNavigate();

  const howToShow = 7;
  const howToScroll = 7;

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: howToShow,
    slidesToScroll: howToScroll,
  }

  useEffect(() => {
    dispatch(fetchFilm(params.id));
    return () => {
      dispatch(filmDisFetched())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return (
    <>
      <Header/>
      {filmStatus === 'loading'
        ?
        <Spinner/>
        :
        <>
          {filmItem.fullTitle === null 
          ?
          <>
            <h1 style={{margin: 50, textAlign: 'center', fontSize: 36, fontWeight: 700}}>Контент находится в разработке</h1>
            <Spinner/>
          </>
          :
            <div className='film'>
              <img className='film__img' src={filmItem.image} alt={filmItem.fullTitle} />
              <div className="film__info info">
                <h1 className='info__title'>{filmItem.fullTitle}</h1>
                <div>
                  <div>Жанр:</div>
                  <div>{filmItem.genres}</div>
                </div>
                <div>
                  <div>Продолжительность:</div>
                  <div>{filmItem.runtimeStr}</div>
                </div>
                <div>
                  <div>Режесер:</div>
                  <div className='link'>{filmItem.directorList.map(item => {
                    return (
                      <div onClick={() => navigate(`/actor/${item.id}`)} key={item.id}>{item.name}</div>
                    )
                  })}</div>
                </div>
                <div>
                  <div>Сценаристы:</div>
                  <div className='link'>{filmItem.writerList.map(item => {
                    return (
                      <div onClick={() => navigate(`/actor/${item.id}`)} key={item.id}>{item.name}</div>
                    )
                  })}</div>
                </div>
                <div>
                  <div>Производство:</div>
                  <div>{filmItem.companies}</div>
                </div>
                <div>
                  <div>Страна:</div>
                  <div>{filmItem.countries}</div>
                </div>
                <div>
                  <div>Бюджет:</div>
                  <div>{filmItem.boxOffice.budget}</div>
                </div>
                <div>
                  <div>Сборы в первый уикенд: </div>
                  <div>{filmItem.boxOffice.openingWeekendUSA}</div>
                </div>
                <div>
                  <div>Сборы в США:</div>
                  <div>{filmItem.boxOffice.grossUSA}</div>
                </div>
                <div>
                  <div>Сборы в мире: </div>
                  <div>{filmItem.boxOffice.cumulativeWorldwideGross}</div>
                </div>
                <div>
                  <div className='info__descr'>Описание:</div>
                  <div>{filmItem.plot}</div>
                </div>
              </div>
              <div className="film__right-bar">
                <div className='film__ratio'>
                  <div>
                    <div>Возрастной рейтинг:</div>
                    <div>{filmItem.contentRating}</div>
                  </div>
                  <div>
                    <div>IMDB рейтинг:</div>
                    <div style={Number(filmItem.imDbRating) >= 7.0 ? { color: 'teal' } : null}>{filmItem.imDbRating}</div>
                  </div>
                  <div>
                    <div>Metacritic рейтинг:</div>
                    <div style={Number(filmItem.metacriticRating) >= 70 ? { color: 'teal' } : null}>{filmItem.metacriticRating}</div>
                  </div>
                </div>
                <div className='film__actors'>
                  <div>B главных ролях:</div>
                  <div>{filmItem.actorList.map(item => {
                    return (
                      <div className='link' onClick={() => navigate(`/actor/${item.id}`)} key={item.id}>{item.name}</div>
                    )
                  })}</div>
                </div>
              </div>
              <div className="film__similars similars">
                <Slider {...sliderSettings}>{filmItem.similars.map(item => {
                  return (
                    <div onClick={() => navigate(`/film/${item.id}`)} className='similars__item link' key={item.id}>
                      <img src={item.image} alt={item.title} />
                      <h3>{item.title}</h3>
                      <span>IMDB рейтинг{item.imDbRating}</span>
                    </div>
                  )
                })}
                </Slider>
              </div>
            </div>
        }
        </>
      }
      
    </>
  )
}

export default FilmItem;