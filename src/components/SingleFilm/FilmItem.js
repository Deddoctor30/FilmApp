import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filmDisFetched, fetchFilm, filmFetched } from './FilmItemSlice';
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header';
import Spinner from '../skeleton/Spinner';

import './filmItem.scss';
import Slider from "react-slick";
import '../../libs/slick/slick.css';
import '../../libs/slick/slick-theme.css';


const item = {
  "id": "tt0462499",
  "title": "Rambo",
  "originalTitle": "",
  "fullTitle": "Rambo (2008)",
  "type": "Movie",
  "year": "2008",
  "image": "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_Ratio0.6762_AL_.jpg",
  "releaseDate": "2008-01-25",
  "runtimeMins": "92",
  "runtimeStr": "1h 32min",
  "plot": "In Thailand, John Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.",
  "plotLocal": "",
  "plotLocalIsRtl": false,
  "awards": "Awards, 1 win & 1 nomination",
  "directors": "Sylvester Stallone",
  "directorList": [
    {
      "id": "nm0000230",
      "name": "Sylvester Stallone"
    }
  ],
  "writers": "Art Monterastelli, Sylvester Stallone, David Morrell",
  "writerList": [
    {
      "id": "nm0599393",
      "name": "Art Monterastelli"
    },
    {
      "id": "nm0000230",
      "name": "Sylvester Stallone"
    },
    {
      "id": "nm0606251",
      "name": "David Morrell"
    }
  ],
  "stars": "Sylvester Stallone, Julie Benz, Matthew Marsden",
  "starList": [
    {
      "id": "nm0000230",
      "name": "Sylvester Stallone"
    },
    {
      "id": "nm0004748",
      "name": "Julie Benz"
    },
    {
      "id": "nm0550452",
      "name": "Matthew Marsden"
    }
  ],
  "actorList": [
    {
      "id": "nm0000230",
      "image": "https://m.media-amazon.com/images/M/MV5BMTQwMTk3NDU2OV5BMl5BanBnXkFtZTcwNTA3MTI0Mw@@._V1_Ratio1.0000_AL_.jpg",
      "name": "Sylvester Stallone",
      "asCharacter": "John Rambo"
    },
    {
      "id": "nm0004748",
      "image": "https://m.media-amazon.com/images/M/MV5BNDkwNWJkM2EtMWJmMi00ODUwLWIxMGYtZjBlMzEyOTQxMzhlXkEyXkFqcGdeQXVyMjMwNTM1OQ@@._V1_Ratio1.0000_AL_.jpg",
      "name": "Julie Benz",
      "asCharacter": "Sarah"
    },
    {
      "id": "nm0550452",
      "image": "https://m.media-amazon.com/images/M/MV5BNjg1ZWIxNTMtNDhmNS00OGRmLTg3ZmQtMmNhOGZjOWZjNWY4XkEyXkFqcGdeQXVyNjYxMTkxNTE@._V1_Ratio1.0000_AL_.jpg",
      "name": "Matthew Marsden",
      "asCharacter": "School Boy"
    },
    {
      "id": "nm0574615",
      "image": "https://m.media-amazon.com/images/M/MV5BMjk5MzQ4NzQwN15BMl5BanBnXkFtZTgwNTMwMTg4NTM@._V1_Ratio1.0000_AL_.jpg",
      "name": "Graham McTavish",
      "asCharacter": "Lewis"
    },
    {
      "id": "nm1274545",
      "image": "https://m.media-amazon.com/images/M/MV5BYWFkNzhkZDEtYTI0Ny00OThhLTk2MGMtOGYyZDY0MzA0MTRmXkEyXkFqcGdeQXVyMTUwNjc0NTM@._V1_Ratio1.0000_AL_.jpg",
      "name": "Reynaldo Gallegos",
      "asCharacter": "Diaz"
    },
    {
      "id": "nm0478403",
      "image": "https://m.media-amazon.com/images/M/MV5BYjY0NzI1NTAtYmI5Zi00MDgyLWExNGItYjk3YTVlYmVjNzIzXkEyXkFqcGdeQXVyNDA4ODg2NA@@._V1_Ratio1.3429_AL_.jpg",
      "name": "Jake La Botz",
      "asCharacter": "Reese"
    },
    {
      "id": "nm1085727",
      "image": "https://m.media-amazon.com/images/M/MV5BMTQ3MzEwODc1MV5BMl5BanBnXkFtZTcwMzQxNDk3Mw@@._V1_Ratio1.0000_AL_.jpg",
      "name": "Tim Kang",
      "asCharacter": "En-Joo"
    },
    {
      "id": "nm2678196",
      "image": "https://imdb-api.com/images/original/nopicture.jpg",
      "name": "Maung Maung Khin",
      "asCharacter": "Tint"
    },
    {
      "id": "nm0776584",
      "image": "https://m.media-amazon.com/images/M/MV5BMTAyODc4MDMyMjVeQTJeQWpwZ15BbWU3MDQ4MDE4MjE@._V1_Ratio1.0000_AL_.jpg",
      "name": "Paul Schulze",
      "asCharacter": "Michael Burnett"
    },
    {
      "id": "nm0669212",
      "image": "https://m.media-amazon.com/images/M/MV5BNjExN2RkNmMtZWY0ZS00MzQxLWI4ZmQtZWQyODZlMWE4MzhkXkEyXkFqcGdeQXVyMTQ0MjI3NTc@._V1_Ratio1.0000_AL_.jpg",
      "name": "Cameron Pearson",
      "asCharacter": "Missionary #4 (Jeff)"
    },
    {
      "id": "nm2880249",
      "image": "https://imdb-api.com/images/original/nopicture.jpg",
      "name": "Thomas Peterson",
      "asCharacter": "Missionary #2 (Dentist)"
    },
    {
      "id": "nm2879107",
      "image": "https://imdb-api.com/images/original/nopicture.jpg",
      "name": "Tony Skarberg",
      "asCharacter": "Missionary #3 (Videographer)"
    },
    {
      "id": "nm0999139",
      "image": "https://m.media-amazon.com/images/M/MV5BZTEyYjc4NzEtOGUwZi00NTFiLWJmMGItZTg2ZTQ2YTk3NDJjXkEyXkFqcGdeQXVyMTQ0OTk0NTU1._V1_Ratio1.0000_AL_.jpg",
      "name": "James With",
      "asCharacter": "Missionary #5 (Preacher)"
    },
    {
      "id": "nm2878863",
      "image": "https://imdb-api.com/images/original/nopicture.jpg",
      "name": "Kasikorn Niyompattana",
      "asCharacter": "Snake Hunter #2"
    },
    {
      "id": "nm2879982",
      "image": "https://imdb-api.com/images/original/nopicture.jpg",
      "name": "Shaliew 'Lek' Bamrungbun",
      "asCharacter": "Snake Hunter #1"
    },
    {
      "id": "nm0457753",
      "image": "https://imdb-api.com/images/original/nopicture.jpg",
      "name": "Supakorn Kitsuwon",
      "asCharacter": "Myint"
    },
    {
      "id": "nm2878590",
      "image": "https://imdb-api.com/images/original/nopicture.jpg",
      "name": "Aung Aay Noi",
      "asCharacter": "Lt. Aye"
    },
    {
      "id": "nm0397432",
      "image": "https://m.media-amazon.com/images/M/MV5BMTgwOTU1OTY1Ml5BMl5BanBnXkFtZTgwNjA1NjM3OTE@._V1_Ratio1.0000_AL_.jpg",
      "name": "Ken Howard",
      "asCharacter": "Arthur Marsh"
    }
  ],
  "fullCast": null,
  "genres": "Documentary, Short",
  "genreList": [
    {
      "key": "Documentary",
      "value": "Documentary"
    },
    {
      "key": "Short",
      "value": "Short"
    }
  ],
  "companies": "Mirage Productions",
  "companyList": [
    {
      "id": "co0056944",
      "name": "Mirage Productions"
    }
  ],
  "countries": "USA",
  "countryList": [
    {
      "key": "USA",
      "value": "USA"
    }
  ],
  "languages": "English",
  "languageList": [
    {
      "key": "English",
      "value": "English"
    }
  ],
  "contentRating": null,
  "imDbRating": "7.1",
  "imDbRatingVotes": "38",
  "metacriticRating": null,
  "ratings": null,
  "wikipedia": null,
  "posters": null,
  "images": null,
  "trailer": null,
  "boxOffice": {
    "budget": "",
    "openingWeekendUSA": "",
    "grossUSA": "",
    "cumulativeWorldwideGross": ""
  },
  "tagline": null,
  "keywords": "character name in title",
  "keywordList": [
    "character name in title"
  ],
  "similars": [
    {
      "id": "tt0488273",
      "title": "10 Year Retrospective: Cast and Crew Look Back",
      "image": "https://m.media-amazon.com/images/M/MV5BZDgyNDA3NTgtOGZiYS00OWVlLWI1Y2EtNTQ2MzE3ZDVkY2NlXkEyXkFqcGdeQXVyMjA5NjIxNDU@._V1_Ratio0.6763_AL_.jpg",
      "imDbRating": "7.4"
    },
    {
      "id": "tt0110413",
      "title": "Léon: The Professional",
      "image": "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6763_AL_.jpg",
      "imDbRating": "8.5"
    }
  ],
  "tvSeriesInfo": null,
  "tvEpisodeInfo": null,
  "errorMessage": ""
}


const FilmItem = () => {
  const params = useParams();                         // Просто получаем id страницы
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
    dispatch(filmFetched(item))            // для верстки


    // dispatch(fetchFilm(params.id));                   // Async Thunk
    // return () => {
    //   dispatch(filmDisFetched())
    // }


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