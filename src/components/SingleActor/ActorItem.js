import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { singleActorDisFetched, fetchActor, singleActorFetched } from './ActorItemSlice';
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header';
import Skeleton from '../skeleton/Skeleton';

import './actorItem.scss';
import { useState } from 'react';
import { current } from '@reduxjs/toolkit';
import MySelect from '../UI/select/MySelect';

// import SkeletonItem from '../skeletonItem/SkeletonItem';

const ActorItem = () => {
  const params = useParams();                         // Просто получаем id страницы
  const dispatch = useDispatch();
  const singleActorStatus = useSelector(state => state.singleActor.singleActorStatus);
  const navigate = useNavigate();
  const [castType, setCastType] = useState('Producer');
  const [castItems, setCastItems] = useState('');
  const [castShowAll, setCastShowAll] = useState(false);

  const count = 6;
  const singleActorItem = useSelector(state => {
    if (singleActorStatus === 'idle') {
      if (state.singleActor.singleActorItem.castMovies && state.singleActor.singleActorItem.castMovies.length > count) {
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
  
  const actor = {
    "id": "nm0000204",
    "name": "Natalie Portman",
    "role": "Actress, Producer, Soundtrack",
    "image": "https://m.media-amazon.com/images/M/MV5BYzU0ZGRhZWItMGJlNy00YzlkLWIzOWYtNDA2NzlhMDg3YjMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.6751_AL_.jpg",
    "summary": "Natalie Portman is the first person born in the 1980s to have won the Academy Award for Best Actress (for Black Swan (2010)). Natalie was born Natalie Hershlag on June 9, 1981, in Jerusalem, Israel. She is the only child of Avner Hershlag, an Israeli-born doctor, and Shelley Stevens, an American-born artist (from Cincinnati, Ohio), who also acts as...",
    "birthDate": "1981-06-09",
    "deathDate": null,
    "awards": "Won 1 Oscar. | Another 93 wins & 146 nominations.",
    "height": "5' 3\" (1.6 m)",
    "knownFor": [
      {
        "id": "tt0947798",
        "title": "Black Swan",
        "fullTitle": "Black Swan (2010)",
        "year": "2010",
        "role": "Nina Sayers / The Swan Queen",
        "image": "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_Ratio0.6852_AL_.jpg"
      },
      {
        "id": "tt0434409",
        "title": "V for Vendetta",
        "fullTitle": "V for Vendetta (2005)",
        "year": "2005",
        "role": "Evey",
        "image": "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_Ratio0.6852_AL_.jpg"
      },
      {
        "id": "tt0110413",
        "title": "Léon: The Professional",
        "fullTitle": "Léon: The Professional (1994)",
        "year": "1994",
        "role": "Mathilda",
        "image": "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6852_AL_.jpg"
      },
      {
        "id": "tt0376541",
        "title": "Closer",
        "fullTitle": "Closer (2004)",
        "year": "2004",
        "role": "Alice",
        "image": "https://m.media-amazon.com/images/M/MV5BN2I0Y2JmZjQtNjEyOC00ODhkLWE5YWUtOWFkOGQwMGYyODRiXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_Ratio0.6852_AL_.jpg"
      }
    ],
    "castMovies": [
      {
        "id": "tt5940184",
        "role": "Actress",
        "title": "We Are All Completely Beside Ourselves",
        "year": "",
        "description": "(TV Mini Series) (announced) Rosemary Cooke"
      },
      {
        "id": "tt7637954",
        "role": "Actress",
        "title": "Foxy Trotter",
        "year": "",
        "description": "(pre-production) Ronnie"
      },
      {
        "id": "tt14022668",
        "role": "Actress",
        "title": "Lady in the Lake",
        "year": "",
        "description": "(TV Mini Series) (filming) Maddie Schwartz - Episode #1.7 ... Maddie Schwartz - Episode #1.6 ... Maddie Schwartz - Episode #1.5 ... Maddie Schwartz - Episode #1.3 ... Maddie Schwartz - Episode #1.2 ... Maddie Schwartz Show all 7 episodes"
      },
      {
        "id": "tt13651794",
        "role": "Actress",
        "title": "May December",
        "year": "",
        "description": "(filming) Elizabeth Berry"
      },
      {
        "id": "tt10648342",
        "role": "Actress",
        "title": "Thor: Love and Thunder",
        "year": "2022",
        "description": "Jane Foster / The Mighty Thor"
      },
      {
        "id": "tt22267838",
        "role": "Actress",
        "title": "Dior Forever: New Generation Clean Foundation",
        "year": "2022",
        "description": "(Video short)"
      },
      {
        "id": "tt7678620",
        "role": "Actress",
        "title": "Bluey",
        "year": "2021",
        "description": "(TV Series) Whale Doco Narrator - Whale Watching (2021) ... Whale Doco Narrator (voice)"
      },
      {
        "id": "tt10168312",
        "role": "Actress",
        "title": "What If...?",
        "year": "2021",
        "description": "(TV Series) Jane Foster - What If... Thor Were an Only Child? (2021) ... Jane Foster (voice)"
      },
      {
        "id": "tt15684770",
        "role": "Actress",
        "title": "Dior: Miss Dior",
        "year": "2021",
        "description": "(Short) Miss Dior"
      },
      {
        "id": "tt4682804",
        "role": "Actress",
        "title": "Lucy in the Sky",
        "year": "2019",
        "description": "Lucy Cola"
      },
      {
        "id": "tt4042818",
        "role": "Actress",
        "title": "The Death & Life of John F. Donovan",
        "year": "2018",
        "description": "Sam Turner"
      },
      {
        "id": "tt5960374",
        "role": "Actress",
        "title": "Vox Lux",
        "year": "2018",
        "description": "Celeste"
      },
      {
        "id": "tt2798920",
        "role": "Actress",
        "title": "Annihilation",
        "year": "2018/I",
        "description": "Lena"
      },
      {
        "id": "tt9881938",
        "role": "Actress",
        "title": "Saturday Night Live: Cut for Time",
        "year": "2018",
        "description": "(TV Series) Mother - My Little Step Children (2018) ... Mother"
      },
      {
        "id": "tt7976862",
        "role": "Actress",
        "title": "The Lonely Island: Natalie's Rap 2.0",
        "year": "2018",
        "description": "(Music Video short) Natalie Portman"
      },
      {
        "id": "tt8918080",
        "role": "Actress",
        "title": "Dior: Miss Dior - What would you do for love?",
        "year": "2017",
        "description": "(Video short) Miss Dior"
      },
      {
        "id": "tt3597790",
        "role": "Actress",
        "title": "Angie Tribeca",
        "year": "2017",
        "description": "(TV Series) Christina Craft - This Sounds Unbelievable, But CSI: Miami Did It (2017) ... Christina Craft"
      },
      {
        "id": "tt6673574",
        "role": "Actress",
        "title": "James Blake: My Willing Heart",
        "year": "2017",
        "description": "(Music Video short) Natalie Portman"
      },
      {
        "id": "tt2062700",
        "role": "Actress",
        "title": "Song to Song",
        "year": "2017/I",
        "description": "Rhonda"
      },
      {
        "id": "tt4680196",
        "role": "Actress",
        "title": "Planetarium",
        "year": "2016",
        "description": "Laura Barlow"
      },
      {
        "id": "tt1619029",
        "role": "Actress",
        "title": "Jackie",
        "year": "2016/V",
        "description": "Jackie Kennedy"
      },
      {
        "id": "tt2140037",
        "role": "Actress",
        "title": "Jane Got a Gun",
        "year": "2015",
        "description": "Jane Hammond"
      },
      {
        "id": "tt1135989",
        "role": "Actress",
        "title": "A Tale of Love and Darkness",
        "year": "2015",
        "description": "Fania"
      },
      {
        "id": "tt4076926",
        "role": "Actress",
        "title": "The Heyday of the Insensitive Bastards",
        "year": "2015",
        "description": "Laura"
      },
      {
        "id": "tt2101383",
        "role": "Actress",
        "title": "Knight of Cups",
        "year": "2015",
        "description": "Elizabeth"
      },
      {
        "id": "tt8524038",
        "role": "Actress",
        "title": "Dior: Miss Dior",
        "year": "2015",
        "description": "(Video short) The Bride"
      },
      {
        "id": "tt1981115",
        "role": "Actress",
        "title": "Thor: The Dark World",
        "year": "2013",
        "description": "Jane Foster"
      },
      {
        "id": "tt3227144",
        "role": "Actress",
        "title": "Illusions & Mirrors",
        "year": "2013",
        "description": "(Short) Young Woman"
      },
      {
        "id": "tt8918266",
        "role": "Actress",
        "title": "Dior: Miss Dior Blooming Bouquet",
        "year": "2013",
        "description": "(Video short) Miss Dior"
      },
      {
        "id": "tt0096697",
        "role": "Actress",
        "title": "The Simpsons",
        "year": "2007-2012",
        "description": "(TV Series) Darcy - Moonshine River (2012) ... Darcy (voice) - Little Big Girl (2007) ... Darcy (voice)"
      },
      {
        "id": "tt19866670",
        "role": "Actress",
        "title": "Paul McCartney: My Valentine (Natalie Portman Version)",
        "year": "2012",
        "description": "(Music Video short) Natalie Portman"
      },
      {
        "id": "tt8918222",
        "role": "Actress",
        "title": "Dior: Miss Dior",
        "year": "2011",
        "description": "(Video short) Miss Dior"
      },
      {
        "id": "tt0800369",
        "role": "Actress",
        "title": "Thor",
        "year": "2011",
        "description": "Jane Foster"
      },
      {
        "id": "tt1240982",
        "role": "Actress",
        "title": "Your Highness",
        "year": "2011",
        "description": "Isabel"
      },
      {
        "id": "tt1411238",
        "role": "Actress",
        "title": "No Strings Attached",
        "year": "2011/I",
        "description": "Emma"
      },
      {
        "id": "tt1356864",
        "role": "Actress",
        "title": "I'm Still Here",
        "year": "2010/I",
        "description": "Natalie Portman"
      },
      {
        "id": "tt0947798",
        "role": "Actress",
        "title": "Black Swan",
        "year": "2010",
        "description": "Nina Sayers / The Swan Queen"
      },
      {
        "id": "tt1403177",
        "role": "Actress",
        "title": "Hesher",
        "year": "2010",
        "description": "Nicole"
      },
      {
        "id": "tt0765010",
        "role": "Actress",
        "title": "Brothers",
        "year": "2009/I",
        "description": "Grace Cahill"
      },
      {
        "id": "tt1032825",
        "role": "Actress",
        "title": "The Other Woman",
        "year": "2009",
        "description": "Emilia"
      },
      {
        "id": "tt0808399",
        "role": "Actress",
        "title": "New York, I Love You",
        "year": "2008",
        "description": "Rifka (segment \"Mira Nair\")"
      },
      {
        "id": "tt0467200",
        "role": "Actress",
        "title": "The Other Boleyn Girl",
        "year": "2008",
        "description": "Anne Boleyn"
      },
      {
        "id": "tt0457419",
        "role": "Actress",
        "title": "Mr. Magorium's Wonder Emporium",
        "year": "2007",
        "description": "Molly Mahoney, The Composer"
      },
      {
        "id": "tt1094249",
        "role": "Actress",
        "title": "Hotel Chevalier",
        "year": "2007",
        "description": "(Short) Jack's Girlfriend"
      },
      {
        "id": "tt0838221",
        "role": "Actress",
        "title": "The Darjeeling Limited",
        "year": "2007",
        "description": "Jack's Ex-Girlfriend"
      },
      {
        "id": "tt6688792",
        "role": "Actress",
        "title": "Paul McCartney: Dance Tonight",
        "year": "2007",
        "description": "(Music Video short) Ghost"
      },
      {
        "id": "tt0765120",
        "role": "Actress",
        "title": "My Blueberry Nights",
        "year": "2007",
        "description": "Leslie"
      },
      {
        "id": "tt0455957",
        "role": "Actress",
        "title": "Goya's Ghosts",
        "year": "2006",
        "description": "Inés / Alicia"
      },
      {
        "id": "tt0401711",
        "role": "Actress",
        "title": "Paris, je t'aime",
        "year": "2006",
        "description": "Francine (segment \"Faubourg Saint-Denis\")"
      },
      {
        "id": "tt6503364",
        "role": "Actress",
        "title": "The Lonely Island, feat Natalie Portman & Chris Parnell: Natalie's Rap",
        "year": "2006",
        "description": "(Music Video) Natalie Portman"
      },
      {
        "id": "tt0434409",
        "role": "Actress",
        "title": "V for Vendetta",
        "year": "2005",
        "description": "Evey"
      },
      {
        "id": "tt0441761",
        "role": "Actress",
        "title": "Free Zone",
        "year": "2005",
        "description": "Rebecca"
      },
      {
        "id": "tt0121766",
        "role": "Actress",
        "title": "Star Wars: Episode III - Revenge of the Sith",
        "year": "2005",
        "description": "Padmé"
      },
      {
        "id": "tt0446683",
        "role": "Actress",
        "title": "Domino One",
        "year": "2005",
        "description": "Dominique Bellamy"
      },
      {
        "id": "tt0063951",
        "role": "Actress",
        "title": "Sesame Street",
        "year": "2004",
        "description": "(TV Series) Natalie - Episode #35.4 (2004) ... Natalie"
      },
      {
        "id": "tt0376541",
        "role": "Actress",
        "title": "Closer",
        "year": "2004/I",
        "description": "Alice"
      },
      {
        "id": "tt0397693",
        "role": "Actress",
        "title": "True",
        "year": "2004",
        "description": "(Short) Francine"
      },
      {
        "id": "tt0333766",
        "role": "Actress",
        "title": "Garden State",
        "year": "2004",
        "description": "Sam"
      },
      {
        "id": "tt0159365",
        "role": "Actress",
        "title": "Cold Mountain",
        "year": "2003",
        "description": "Sara"
      },
      {
        "id": "tt12247528",
        "role": "Actress",
        "title": "Star Wars: Episode II - Attack of the Clones: Deleted Scenes",
        "year": "2002",
        "description": "(Video short) Padmé"
      },
      {
        "id": "tt0121765",
        "role": "Actress",
        "title": "Star Wars: Episode II - Attack of the Clones",
        "year": "2002",
        "description": "Padmé"
      },
      {
        "id": "tt0196229",
        "role": "Actress",
        "title": "Zoolander",
        "year": "2001",
        "description": "Natalie Portman"
      },
      {
        "id": "tt0198021",
        "role": "Actress",
        "title": "Where the Heart Is",
        "year": "2000",
        "description": "Novalee Nation"
      },
      {
        "id": "tt0149691",
        "role": "Actress",
        "title": "Anywhere But Here",
        "year": "1999",
        "description": "Ann August"
      },
      {
        "id": "tt0120915",
        "role": "Actress",
        "title": "Star Wars: Episode I - The Phantom Menace",
        "year": "1999",
        "description": "Queen Amidala / Padmé"
      },
      {
        "id": "tt0116996",
        "role": "Actress",
        "title": "Mars Attacks!",
        "year": "1996",
        "description": "Taffy Dale"
      },
      {
        "id": "tt0116242",
        "role": "Actress",
        "title": "Everyone Says I Love You",
        "year": "1996",
        "description": "Laura"
      },
      {
        "id": "tt0115639",
        "role": "Actress",
        "title": "Beautiful Girls",
        "year": "1996",
        "description": "Marty"
      },
      {
        "id": "tt0113277",
        "role": "Actress",
        "title": "Heat",
        "year": "1995",
        "description": "Lauren Gustafson"
      },
      {
        "id": "tt0185275",
        "role": "Actress",
        "title": "Developing",
        "year": "1994",
        "description": "(Short) Nina"
      },
      {
        "id": "tt0110413",
        "role": "Actress",
        "title": "Léon: The Professional",
        "year": "1994",
        "description": "Mathilda"
      },
      {
        "id": "tt5940184",
        "role": "Producer",
        "title": "We Are All Completely Beside Ourselves",
        "year": "",
        "description": "(TV Mini Series) (executive producer) (announced)"
      },
      {
        "id": "tt7637954",
        "role": "Producer",
        "title": "Foxy Trotter",
        "year": "",
        "description": "(producer) (pre-production)"
      },
      {
        "id": "tt14022668",
        "role": "Producer",
        "title": "Lady in the Lake",
        "year": "",
        "description": "(TV Mini Series) (executive producer - 1 episode) (filming) - Pilot ... (executive producer)"
      },
      {
        "id": "tt13651794",
        "role": "Producer",
        "title": "May December",
        "year": "",
        "description": "(producer) (filming)"
      },
      {
        "id": "tt2282957",
        "role": "Producer",
        "title": "Scruples",
        "year": "",
        "description": "(TV Movie) (executive producer)"
      },
      {
        "id": "tt5960374",
        "role": "Producer",
        "title": "Vox Lux",
        "year": "2018",
        "description": "(executive producer)"
      },
      {
        "id": "tt2180351",
        "role": "Producer",
        "title": "Eating Animals",
        "year": "2017",
        "description": "(Documentary) (producer)"
      },
      {
        "id": "tt1374989",
        "role": "Producer",
        "title": "Pride and Prejudice and Zombies",
        "year": "2016",
        "description": "(producer)"
      },
      {
        "id": "tt2140037",
        "role": "Producer",
        "title": "Jane Got a Gun",
        "year": "2015",
        "description": "(producer)"
      },
      {
        "id": "tt3263548",
        "role": "Producer",
        "title": "The Seventh Fire",
        "year": "2015",
        "description": "(Documentary) (executive producer)"
      },
      {
        "id": "tt1411238",
        "role": "Producer",
        "title": "No Strings Attached",
        "year": "2011/I",
        "description": "(executive producer)"
      },
      {
        "id": "tt1403177",
        "role": "Producer",
        "title": "Hesher",
        "year": "2010",
        "description": "(producer - produced by)"
      },
      {
        "id": "tt1032825",
        "role": "Producer",
        "title": "The Other Woman",
        "year": "2009",
        "description": "(executive producer)"
      },
      {
        "id": "tt20660580",
        "role": "Director",
        "title": "Haute Saison",
        "year": "2022",
        "description": "(Music Video)"
      },
      {
        "id": "tt1135989",
        "role": "Director",
        "title": "A Tale of Love and Darkness",
        "year": "2015",
        "description": ""
      },
      {
        "id": "tt0808399",
        "role": "Director",
        "title": "New York, I Love You",
        "year": "2008",
        "description": "(segment \"Natalie Portman\")"
      },
      {
        "id": "tt1278345",
        "role": "Director",
        "title": "Eve",
        "year": "2008/IV",
        "description": "(Short)"
      },
      {
        "id": "tt7262670",
        "role": "Soundtrack",
        "title": "The Ben Shapiro Show",
        "year": "2020",
        "description": "(Podcast Series) (performer - 1 episode) - What the Hell Happens Now? (2020) ... (performer: \"Imagine\")"
      },
      {
        "id": "tt12256762",
        "role": "Soundtrack",
        "title": "Imagine",
        "year": "2020",
        "description": "(Video short) (performer: \"Imagine\")"
      },
      {
        "id": "tt5960374",
        "role": "Soundtrack",
        "title": "Vox Lux",
        "year": "2018",
        "description": "(performer: \"Blinded by Love\", \"Firecracker\", \"Private Girl\", \"Sweat and Tears\", \"Wrapped Up\", \"EKG\")"
      },
      {
        "id": "tt1619029",
        "role": "Soundtrack",
        "title": "Jackie",
        "year": "2016/V",
        "description": "(performer: \"Happy Birthday\")"
      },
      {
        "id": "tt3444938",
        "role": "Soundtrack",
        "title": "The Tonight Show Starring Jimmy Fallon",
        "year": "2016",
        "description": "(TV Series) (performer - 1 episode) - Natalie Portman/John Oliver/Sia (2016) ... (performer: \"Iko Iko\" - uncredited)"
      },
      {
        "id": "tt1135989",
        "role": "Soundtrack",
        "title": "A Tale of Love and Darkness",
        "year": "2015",
        "description": "(performer: \"Cossack Lullaby\" (Traditional))"
      },
      {
        "id": "tt0400016",
        "role": "Soundtrack",
        "title": "Rage",
        "year": "2008",
        "description": "(TV Series) (1 episode) - Rage 'Ready for My Close Up' Special (2008) ... (\"Carmensita\")"
      },
      {
        "id": "tt0072562",
        "role": "Soundtrack",
        "title": "Saturday Night Live",
        "year": "2006",
        "description": "(TV Series) (performer - 1 episode) - Natalie Portman/Fall Out Boy (2006) ... (performer: \"Natalie Raps\")"
      },
      {
        "id": "tt0116242",
        "role": "Soundtrack",
        "title": "Everyone Says I Love You",
        "year": "1996",
        "description": "(performer: \"I'm Thru Love\")"
      },
      {
        "id": "tt0110413",
        "role": "Soundtrack",
        "title": "Léon: The Professional",
        "year": "1994",
        "description": "(performer: \"Like a Virgin\", \"Happy Birthday\", \"Singing in the Rain\")"
      },
      {
        "id": "tt1135989",
        "role": "Writer",
        "title": "A Tale of Love and Darkness",
        "year": "2015",
        "description": "(screenplay by)"
      },
      {
        "id": "tt0808399",
        "role": "Writer",
        "title": "New York, I Love You",
        "year": "2008",
        "description": "(segment \"Natalie Portman\")"
      },
      {
        "id": "tt1278345",
        "role": "Writer",
        "title": "Eve",
        "year": "2008/IV",
        "description": "(Short) (written by)"
      },
      {
        "id": "tt17158126",
        "role": "Thanks",
        "title": "Strong Enough",
        "year": "2022",
        "description": "(special thanks) (completed)"
      },
      {
        "id": "tt1371111",
        "role": "Thanks",
        "title": "Cloud Atlas",
        "year": "2012",
        "description": "(special thanks)"
      },
      {
        "id": "tt1980920",
        "role": "Thanks",
        "title": "Below the Line",
        "year": "2011",
        "description": "(special thanks)"
      },
      {
        "id": "tt1356864",
        "role": "Thanks",
        "title": "I'm Still Here",
        "year": "2010/I",
        "description": "(special thanks)"
      },
      {
        "id": "tt1408972",
        "role": "Thanks",
        "title": "Plan B",
        "year": "2009/I",
        "description": "(thanks)"
      },
      {
        "id": "tt0448618",
        "role": "Thanks",
        "title": "The Making of 'Heat'",
        "year": "2005",
        "description": "(Video documentary) (special thanks)"
      },
      {
        "id": "tt0277317",
        "role": "Thanks",
        "title": "SiN",
        "year": "1998",
        "description": "(Video Game) (thanks)"
      },
      {
        "id": "tt14094206",
        "role": "Self",
        "title": "Marvel Studios: Assembled",
        "year": "2022",
        "description": "(TV Series documentary) Self - Jane Foster / The Mighty Thor - The Making of Thor: Love and Thunder (2022) ... Self - Jane Foster / The Mighty Thor"
      },
      {
        "id": "tt21623998",
        "role": "Self",
        "title": "BBC Sport: UEFA Women's Euro 2022",
        "year": "2022",
        "description": "(TV Mini Series) Self - England vs. Germany (2022) ... Self"
      },
      {
        "id": "tt3816666",
        "role": "Self",
        "title": "Running Wild with Bear Grylls",
        "year": "2022",
        "description": "(TV Series) Self - Natalie Portman in Southern Utah (2022) ... Self"
      },
      {
        "id": "tt21277542",
        "role": "Self",
        "title": "D23 Inside Disney",
        "year": "2022",
        "description": "(Podcast Series) Self - Guest - Natalie Portman on \"Thor: Love and Thunder\" (2022) ... Self - Guest"
      },
      {
        "id": "tt0167515",
        "role": "Self",
        "title": "Access Hollywood",
        "year": "2016-2022",
        "description": "(TV Series) Self - Fashion Flashback/New Jonas Brothers TV (2022) ... Self - Episode #26.245 (2022) ... Self - Episode dated 17 October 2016 (2016) ... Self"
      },
      {
        "id": "tt0081857",
        "role": "Self",
        "title": "Entertainment Tonight",
        "year": "2010-2022",
        "description": "(TV Series) Self - Episode #41.254 (2022) ... Self - Episode #41.250 (2022) ... Self - Episode #41.247 (2022) ... Self - Episode #41.245 (2022) ... Self - Episode #38.29 (2018) ... Self Show all 17 episodes"
      },
      {
        "id": "tt0844203",
        "role": "Self",
        "title": "The One Show",
        "year": "2022",
        "description": "(TV Series) Self - Episode dated 4 July 2022 (2022) ... Self"
      },
      {
        "id": "tt1973047",
        "role": "Self",
        "title": "Dish Nation",
        "year": "2022",
        "description": "(TV Series) Self - Episode #10.213 (2022) ... Self"
      },
      {
        "id": "tt0320037",
        "role": "Self",
        "title": "Jimmy Kimmel Live!",
        "year": "2016-2022",
        "description": "(TV Series) Self - Guest / Self - Chelsea Handler/Paris Hilton/Matteo Lane/Aespa (2022) ... Self - Sean Hayes/Natalie Portman/B. Scott/Meghan Trainer & Teddy Swims (2022) ... Self - Natalie Portman/Russell Dickerson (2020) ... Self - Guest - Natalie Portman/Kyrie Irving (2018) ... Self - Guest - Natalie Portman/Morris Chestnut/Keyshia Cole (2017) ... Self - Guest Show all 6 episodes"
      },
      {
        "id": "tt16278122",
        "role": "Self",
        "title": "Captured Moment: The Master's Process",
        "year": "2021",
        "description": "(TV Mini Series documentary) Self - Inspiration (2021) ... Self"
      },
      {
        "id": "tt8638066",
        "role": "Self",
        "title": "Hollywood Insider",
        "year": "2019-2021",
        "description": "(TV Series) Self - Venice Film Festival is the Protector of Cinema - CEO Pritan Ambroase's Love Letter to Venice (2021) ... Self - A Tribute To George Lucas - One of the Greatest Storytellers of Our Time (2021) ... Self - Actors That Took It Too Far: The Dangers Of Stunt Work and Method Acting (2021) ... Self - It's Not Art, It's Abuse: When Abusive Directors Hide Their Toxicity Behind Their Brilliant Art (2021) ... Self - Crafting A Movie Franchise - An Examination of the Ingredients That Make Film Series Successful (2021) ... Self Show all 12 episodes"
      },
      {
        "id": "tt10827252",
        "role": "Self",
        "title": "The Drew Barrymore Show",
        "year": "2020",
        "description": "(TV Series) Self - Guest - Natalie Portman/Damona Hoffman (2020) ... Self - Guest"
      },
      {
        "id": "tt15460322",
        "role": "Self",
        "title": "Work in Progress with Sophia Bush",
        "year": "2020",
        "description": "(Podcast Series) Self - Guest - Natalie Portman (2020) ... Self - Guest"
      },
      {
        "id": "tt11857594",
        "role": "Self",
        "title": "Armchair Expert with Dax Shepard",
        "year": "2020",
        "description": "(Podcast Series) Self - Natalie Portman (2020) ... Self"
      },
      {
        "id": "tt9022950",
        "role": "Self",
        "title": "The Kelly Clarkson Show",
        "year": "2020",
        "description": "(TV Series) Self - Natalie Portman/Wendi McLendon-Covey/Joey McIntyre (2020) ... Self"
      },
      {
        "id": "tt3513388",
        "role": "Self",
        "title": "Late Night with Seth Meyers",
        "year": "2018-2020",
        "description": "(TV Series) Self - Natalie Portman/Cindy McCain/Dave Matthews (2020) ... Self - Natalie Portman/Adam Pally/Pistol Annies/Todd Sucherman (2018) ... Self"
      },
      {
        "id": "tt0123366",
        "role": "Self",
        "title": "The View",
        "year": "2007-2020",
        "description": "(TV Series) Self - Guest / Self - Dr. Jill Biden/Natalie Portman (2020) ... Self - Episode dated 25 November 2009 (2009) ... Self - Guest - Episode dated 4 May 2007 (2007) ... Self - Guest - Episode dated 1 May 2007 (2007) ... Self - Guest"
      },
      {
        "id": "tt0044298",
        "role": "Self",
        "title": "Today",
        "year": "2002-2020",
        "description": "(TV Series) Self - Guest - Episode dated 21 October 2020 (2020) ... Self - Guest - Episode dated 12 December 2018 (2018) ... Self - Guest - Episode dated 15 October 2018 (2018) ... Self - Guest - Episode dated 1 December 2016 (2016) ... Self - Guest - Episode dated 29 November 2016 (2016) ... Self - Guest Show all 8 episodes"
      },
      {
        "id": "tt0072506",
        "role": "Self",
        "title": "Good Morning America",
        "year": "2003-2020",
        "description": "(TV Series) Self - Guest - Episode dated 20 October 2020 (2020) ... Self - Guest - Episode dated 3 October 2019 (2019) ... Self - Guest - Episode dated 15 August 2016 (2016) ... Self - Guest - Episode dated 27 January 2016 (2016) ... Self - Guest - Episode dated 7 November 2013 (2013) ... Self - Guest Show all 6 episodes"
      },
      {
        "id": "tt3444938",
        "role": "Self",
        "title": "The Tonight Show Starring Jimmy Fallon",
        "year": "2016-2020",
        "description": "(TV Series) Self / Self - Guest - Natalie Portman/Billy Porter/Lous and the Yakuza (2020) ... Self - Natalie Portman/Henry Winkler/Robbie Robertson (2019) ... Self - Natalie Portman/Dennis Miller/Braison Cyrus (2018) ... Self - Natalie Portman/J.J. Abrams/Neil Diamond (2016) ... Self - Guest - Natalie Portman/John Oliver/Sia (2016) ... Self - Guest"
      },
      {
        "id": "tt13682032",
        "role": "Self",
        "title": "2020 TIFF Tribute Awards",
        "year": "2020",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt12503616",
        "role": "Self",
        "title": "Variety's Power of Women: Frontline Heroes",
        "year": "2020",
        "description": "(TV Special)"
      },
      {
        "id": "tt12205920",
        "role": "Self",
        "title": "AFI Movie Club",
        "year": "2020",
        "description": "(TV Series documentary) Self - Natalie Portman announces Dirty Dancing (2020) ... Self"
      },
      {
        "id": "tt12256762",
        "role": "Self",
        "title": "Imagine",
        "year": "2020",
        "description": "(Video short) Self - Singer"
      },
      {
        "id": "tt10305932",
        "role": "Self",
        "title": "The Oscars",
        "year": "2020",
        "description": "(TV Special) Self - Presenter"
      },
      {
        "id": "tt12110382",
        "role": "Self",
        "title": "Masterclass: Natalie Portman Teaches Acting",
        "year": "2019",
        "description": "(TV Mini Series) Self - Active Empathy (2019) ... Self - Advice for Actors (2019) ... Self - Green-Screen Acting (2019) ... Self - Demo: Working With the Set, Props, and Camera (2019) ... Self - Improvisation (2019) ... Self Show all 20 episodes"
      },
      {
        "id": "tt10023178",
        "role": "Self",
        "title": "A Little Late with Lilly Singh",
        "year": "2019",
        "description": "(TV Series) Self - Natalie Portman (2019) ... Self"
      },
      {
        "id": "tt10525658",
        "role": "Self",
        "title": "Front Row Flynn",
        "year": "2018-2019",
        "description": "(TV Series) Self - LUCY IN THE SKY: Natalie Portman, moderator Gregory Elwood (2019) ... Self - VOX LUX: Natalie Portman, Brady Corbet, moderator Scott Mantz (2018) ... Self"
      },
      {
        "id": "tt0247094",
        "role": "Self",
        "title": "Extra",
        "year": "2017-2019",
        "description": "(TV Series) Self - Episode #26.17 (2019) ... Self - Episode #23.127 (2017) ... Self"
      },
      {
        "id": "tt0379623",
        "role": "Self",
        "title": "The Ellen DeGeneres Show",
        "year": "2004-2019",
        "description": "(TV Series) Self - Guest / Self - Natalie Portman/Billy Bush/Kylie Jenner/Stormi Webster/Chad Kroeger/JT Parr (2019) ... Self - Ellen's 12 Days of Giveaways - Day 8 (2018) (2018) ... Self - Valentine's Day Show/Natalie Portman/Dax Shepard/Anke Chen (2018) ... Self - Guest - Ellen's 12 Days of Giveaways - Day 11 (2016) ... Self - Guest - Episode #8.84 (2011) ... Self - Guest Show all 6 episodes"
      },
      {
        "id": "tt4367272",
        "role": "Self",
        "title": "CTV News at Noon Toronto",
        "year": "2019",
        "description": "(TV Series) Self - Episode dated 12 September 2019 (2019) ... Self"
      },
      {
        "id": "tt4367274",
        "role": "Self",
        "title": "CTV News at 11:30 Toronto",
        "year": "2019",
        "description": "(TV Series) Self - Episode dated 11 September 2019 (2019) ... Self"
      },
      {
        "id": "tt10591284",
        "role": "Self",
        "title": "WE Day",
        "year": "2019",
        "description": "(TV Movie) Self - Speaker"
      },
      {
        "id": "tt3503424",
        "role": "Self",
        "title": "Celebrity Page",
        "year": "2019",
        "description": "(TV Series) Self - Episode #4.240 (2019) ... Self"
      },
      {
        "id": "tt5611414",
        "role": "Self",
        "title": "Red Carpet Report",
        "year": "2019",
        "description": "(TV Series short) Self - Avengers Endgame Premiere (2019) ... Self"
      },
      {
        "id": "tt10240638",
        "role": "Self",
        "title": "Marvel Studios' Avengers: Endgame LIVE Red Carpet World Premiere",
        "year": "2019",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt8005764",
        "role": "Self",
        "title": "Sunday Today with Willie Geist",
        "year": "2019",
        "description": "(TV Series) Self - Guest - Natalie Portman (2019) ... Self - Guest"
      },
      {
        "id": "tt2057880",
        "role": "Self",
        "title": "Watch What Happens Live with Andy Cohen",
        "year": "2018",
        "description": "(TV Series) Self - Natalie Portman & Leslie Mann (2018) ... Self"
      },
      {
        "id": "tt8596744",
        "role": "Self",
        "title": "IMDb on the Scene - Interviews",
        "year": "2018",
        "description": "(TV Series) Self - Guest - Vox Lux (2018) ... Self - Guest"
      },
      {
        "id": "tt0911896",
        "role": "Self",
        "title": "Made in Hollywood",
        "year": "2009-2018",
        "description": "(TV Series) Self - Once Upon a Deadpool/Mowgli: Legend of the Jungle/Vox Lux/Mission: Impossible - Fallout (2018) ... Self - Game Night/Annihilation/Every Day (2018) ... Self - Academy Awards Spotlight for 2017 (2017) ... Self - Moana/Bad Santa 2/Rules Don't Apply/Jackie (2016) ... Self - Episode #9.8 (2013) ... Self Show all 8 episodes"
      },
      {
        "id": "tt9247918",
        "role": "Self",
        "title": "Telethon for America",
        "year": "2018",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt11568358",
        "role": "Self",
        "title": "eTalk Presents: TIFF 2018 presented by Bell",
        "year": "2018",
        "description": "(TV Mini Series documentary) Self"
      },
      {
        "id": "tt0816188",
        "role": "Self",
        "title": "CTV National News",
        "year": "2018",
        "description": "(TV Series) Self - Episode dated 7 September 2018 (2018) ... Self"
      },
      {
        "id": "tt5795282",
        "role": "Self",
        "title": "This Changes Everything",
        "year": "2018",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt0482346",
        "role": "Self",
        "title": "Entertainment Tonight Canada",
        "year": "2018",
        "description": "(TV Series) Self / Self - 'Annilation' - ET Canada Presents: Inspiring Women (2018) ... Self - Inspiring Women (2018) ... Self - Episode #13.112 (2018) ... Self - 'Annilation' - Tues. Feb 6th, 2018 (2018) ... Self - January 22st, 2018 (2018) ... Self"
      },
      {
        "id": "tt2163227",
        "role": "Self",
        "title": "CBS This Morning",
        "year": "2018",
        "description": "(TV Series) Self - Episode #7.130 (2018) ... Self"
      },
      {
        "id": "tt6556992",
        "role": "Self",
        "title": "Hot Ones",
        "year": "2018",
        "description": "(TV Series) Self - Guest - Natalie Portman Pirouettes in Pain While Eating Spicy Wings (2018) ... Self - Guest"
      },
      {
        "id": "tt3697842",
        "role": "Self",
        "title": "The Late Show with Stephen Colbert",
        "year": "2018",
        "description": "(TV Series) Self - Natalie Portman/Marc Maron/Alt-J/Pusha T (2018) ... Self"
      },
      {
        "id": "tt10055028",
        "role": "Self",
        "title": "Dolphin Reef",
        "year": "2018",
        "description": "(Documentary) Narrator (voice)"
      },
      {
        "id": "tt0428108",
        "role": "Self",
        "title": "Entertainers with Byron Allen",
        "year": "2011-2018",
        "description": "(TV Series documentary) Self / Self - Guest - Episode #25.4 (2018) ... Self - Episode dated 15 January 2011 (2011) ... Self - Guest"
      },
      {
        "id": "tt0072562",
        "role": "Self",
        "title": "Saturday Night Live",
        "year": "2006-2018",
        "description": "(TV Series) Self - Host / Various / T.J. Jourian / ... - Natalie Portman/Dua Lipa (2018) ... Self - Host / Various - Natalie Portman/Fall Out Boy (2006) ... Self - Host / T.J. Jourian / Sasha Cohen"
      },
      {
        "id": "tt12014970",
        "role": "Self",
        "title": "33rd Annual Kingdom Day Parade",
        "year": "2018",
        "description": "(TV Special) Self - Actress"
      },
      {
        "id": "tt0165001",
        "role": "Self",
        "title": "CBS News Sunday Morning",
        "year": "2018",
        "description": "(TV Series) Self - Episode #40.17 (2018) ... Self"
      },
      {
        "id": "tt6635044",
        "role": "Self",
        "title": "75th Golden Globe Awards",
        "year": "2018",
        "description": "(TV Special) Self - Presenter"
      },
      {
        "id": "tt7536514",
        "role": "Self",
        "title": "Amy Adams: An American Cinematheque Tribute",
        "year": "2017",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt2180351",
        "role": "Self",
        "title": "Eating Animals",
        "year": "2017",
        "description": "(Documentary) Self - Narrator"
      },
      {
        "id": "tt5735602",
        "role": "Self",
        "title": "Le journal du Festival",
        "year": "2017",
        "description": "(TV Series) Self - Episode dated 17 May 2017 (2017) ... Self"
      },
      {
        "id": "tt6857900",
        "role": "Self",
        "title": "From Jackie to Camelot",
        "year": "2017",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt5850440",
        "role": "Self",
        "title": "The Oscars",
        "year": "2017",
        "description": "(TV Special) Self - Mean Tweets Segment"
      },
      {
        "id": "tt0192897",
        "role": "Self",
        "title": "Film 2018",
        "year": "2004-2017",
        "description": "(TV Series) Self - Interviewee - Episode #46.6 (2017) ... Self - Interviewee - Episode #46.1 (2017) ... Self - Interviewee - Episode dated 13 March 2006 (2006) ... Self - Interviewee - Episode dated 20 January 2004 (2004) ... Self - Interviewee"
      },
      {
        "id": "tt11803386",
        "role": "Self",
        "title": "Back-to-Back Chef",
        "year": "2017",
        "description": "(TV Series) Self"
      },
      {
        "id": "tt6634050",
        "role": "Self",
        "title": "The Envelope",
        "year": "2017",
        "description": "(TV Mini Series) Self - Oscars 2017 - Lead Actress (2017) ... Self"
      },
      {
        "id": "tt4931888",
        "role": "Self",
        "title": "Close Up with the Hollywood Reporter",
        "year": "2017",
        "description": "(TV Series) Self - Actresses (2017) ... Self"
      },
      {
        "id": "tt4346344",
        "role": "Self",
        "title": "E! Live from the Red Carpet",
        "year": "2017",
        "description": "(TV Series) Self - The 2017 Screen Actors Guild Awards (2017) ... Self - The 2017 Golden Globe Awards (2017) ... Self"
      },
      {
        "id": "tt6435824",
        "role": "Self",
        "title": "The 23rd Annual Screen Actors Guild Awards",
        "year": "2017",
        "description": "(TV Special) Self - Nominee"
      },
      {
        "id": "tt5893486",
        "role": "Self",
        "title": "National Endowment for the Arts: United States of Arts",
        "year": "2017",
        "description": "(TV Series documentary short) Self - American Film Institute (2017) ... Self"
      },
      {
        "id": "tt5123584",
        "role": "Self",
        "title": "Rencontres de cinéma",
        "year": "2011-2017",
        "description": "(TV Series) Self - Episode dated 22 January 2017 (2017) ... Self - Episode dated 6 November 2016 (2016) ... Self - Episode dated 31 January 2016 (2016) ... Self - Episode dated 30 January 2011 (2011) ... Self"
      },
      {
        "id": "tt0262152",
        "role": "Self",
        "title": "Breakfast",
        "year": "2011-2017",
        "description": "(TV Series) Self - Guest / Self - Interviewee - Episode dated 18 January 2017 (2017) ... Self - Interviewee - Episode dated 20 January 2011 (2011) ... Self - Guest - Episode dated 17 January 2011 (2011) ... Self - Guest"
      },
      {
        "id": "tt5824900",
        "role": "Self",
        "title": "The 74th Annual Golden Globe Awards 2017",
        "year": "2017",
        "description": "(TV Special) Self - Nominee"
      },
      {
        "id": "tt4267324",
        "role": "Self",
        "title": "Variety Studio: Actors on Actors",
        "year": "2017",
        "description": "(TV Series) Self - Episode #5.2 (2017) ... Self"
      },
      {
        "id": "tt10950452",
        "role": "Self",
        "title": "We Are Washington",
        "year": "2016",
        "description": "(TV Series) Self - Special Guest - WAW 112 (2016) ... Self - Special Guest"
      },
      {
        "id": "tt4280606",
        "role": "Self",
        "title": "The Late Late Show with James Corden",
        "year": "2016",
        "description": "(TV Series) Self - Guest - Natalie Portman/Annette Bening/Neil Diamond (2016) ... Self - Guest"
      },
      {
        "id": "tt6343284",
        "role": "Self",
        "title": "The 22nd Annual Critics' Choice Awards",
        "year": "2016",
        "description": "(TV Special) Self - winner"
      },
      {
        "id": "tt6777758",
        "role": "Self",
        "title": "Great Performers: L.A. Noir",
        "year": "2016",
        "description": "(Video short) Self"
      },
      {
        "id": "tt6236522",
        "role": "Self",
        "title": "Hollywood Film Awards",
        "year": "2016",
        "description": "(Video) Self"
      },
      {
        "id": "tt5843574",
        "role": "Self",
        "title": "The Pulitzer at 100",
        "year": "2016",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt11073390",
        "role": "Self",
        "title": "Reel Pieces with Annette Insdorf",
        "year": "2016",
        "description": "(TV Series) Self - Guest - Natalie Portman on A Tale of Love and Darkness (2016) ... Self - Guest"
      },
      {
        "id": "tt0426701",
        "role": "Self",
        "title": "Le grand journal de Canal+",
        "year": "2016",
        "description": "(TV Series documentary) Self - Episode dated 2 May 2016 (2016) ... Self"
      },
      {
        "id": "tt1700282",
        "role": "Self",
        "title": "Starring Austin Pendleton",
        "year": "2016",
        "description": "(Documentary short) Self"
      },
      {
        "id": "tt3412684",
        "role": "Self",
        "title": "Mr. Gaga: A True Story of Love and Dance",
        "year": "2015",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt0430836",
        "role": "Self",
        "title": "The Insider",
        "year": "2015",
        "description": "(TV Series) Self - Episode dated 27 May 2015 (2015) ... Self"
      },
      {
        "id": "tt6581590",
        "role": "Self",
        "title": "Cannes Film Festival",
        "year": "2015",
        "description": "(TV Series) Self - Audience Member - Cérémonie d'ouverture du 68ème Festival de Cannes (2015) ... Self - Audience Member"
      },
      {
        "id": "tt4249686",
        "role": "Self",
        "title": "A.M.P.A.S. Tribute Film: Jean Claude Carriere",
        "year": "2014",
        "description": "(TV Movie) Self"
      },
      {
        "id": "tt5484872",
        "role": "Self",
        "title": "A Brothers' Journey: Thor & Loki",
        "year": "2014",
        "description": "(Video documentary short) Self / Jane Foster"
      },
      {
        "id": "tt0346366",
        "role": "Self",
        "title": "Paris dernière",
        "year": "2013",
        "description": "(TV Series documentary) Self - Episode dated 29 November 2013 (2013) ... Self"
      },
      {
        "id": "tt0381753",
        "role": "Self",
        "title": "Fantastic",
        "year": "2013",
        "description": "(TV Series) Self - Episode dated 24 November 2013 (2013) ... Self"
      },
      {
        "id": "tt1231460",
        "role": "Self",
        "title": "Late Night with Jimmy Fallon",
        "year": "2013",
        "description": "(TV Series) Self - Guest - Episode dated 8 November 2013 (2013) ... Self - Guest"
      },
      {
        "id": "tt0106053",
        "role": "Self",
        "title": "Late Show with David Letterman",
        "year": "1994-2013",
        "description": "(TV Series) Self - Guest - Episode dated 6 November 2013 (2013) ... Self - Guest - Episode #18.47 (2010) ... Self - Guest - Episode #17.52 (2009) ... Self - Guest - Episode #16.38 (2008) ... Self - Guest - Episode #15.75 (2008) ... Self - Guest Show all 17 episodes"
      },
      {
        "id": "tt3313706",
        "role": "Self",
        "title": "Thor: The Dark World Special",
        "year": "2013",
        "description": "(TV Short documentary) Self"
      },
      {
        "id": "tt3268424",
        "role": "Self",
        "title": "Staying in with Greg and Russell",
        "year": "2013",
        "description": "(TV Series) Self - Episode #1.6 (2013) ... Self"
      },
      {
        "id": "tt0924651",
        "role": "Self",
        "title": "The Graham Norton Show",
        "year": "2013",
        "description": "(TV Series) Self - Guest - Sir Paul McCartney/Katy Perry/James Corden/Natalie Portman/Chris Hemsworth (2013) ... Self - Guest"
      },
      {
        "id": "tt2576350",
        "role": "Self",
        "title": "Celebrity Style Story",
        "year": "2013",
        "description": "(TV Series) Self - Natalie Portman (2013) ... Self"
      },
      {
        "id": "tt2168874",
        "role": "Self",
        "title": "Paul McCartney: My Valentine",
        "year": "2012",
        "description": "(Music Video short) Self"
      },
      {
        "id": "tt2089826",
        "role": "Self",
        "title": "The 84th Annual Academy Awards",
        "year": "2012",
        "description": "(TV Special) Self - Presenter"
      },
      {
        "id": "tt2224007",
        "role": "Self",
        "title": "18th Annual Screen Actors Guild Awards",
        "year": "2012",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt2125640",
        "role": "Self",
        "title": "The 69th Annual Golden Globe Awards",
        "year": "2012",
        "description": "(TV Special) Self - Presenter"
      },
      {
        "id": "tt5998512",
        "role": "Self",
        "title": "Episode III: Crew and Cast Interviews",
        "year": "2011",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt5484382",
        "role": "Self",
        "title": "Thor: Assembling the Troupe",
        "year": "2011",
        "description": "(Video short) Self / Jane Foster"
      },
      {
        "id": "tt5484208",
        "role": "Self",
        "title": "Thor: From Asgard to Earth",
        "year": "2011",
        "description": "(Video documentary short) Self / Jane Foster"
      },
      {
        "id": "tt5484228",
        "role": "Self",
        "title": "Thor: Our Fearless Leader",
        "year": "2011",
        "description": "(Video short) Self / Jane Foster"
      },
      {
        "id": "tt2132638",
        "role": "Self",
        "title": "Close Up",
        "year": "2011",
        "description": "(TV Series documentary) Self - Interviewee - Natalie Portman ... Self - Interviewee"
      },
      {
        "id": "tt1797631",
        "role": "Self",
        "title": "Film Fiend",
        "year": "2011",
        "description": "(TV Series) Self - Guest - The Hangover Part II (2011) ... Self - Guest"
      },
      {
        "id": "tt1861284",
        "role": "Self",
        "title": "Black Swan: Metamorphosis",
        "year": "2011",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt6282514",
        "role": "Self",
        "title": "The Role That Changed My Life",
        "year": "2011",
        "description": "(TV Series documentary) Self - I Was a Tortured Artist (2011) ... Self"
      },
      {
        "id": "tt0103569",
        "role": "Self",
        "title": "The Tonight Show with Jay Leno",
        "year": "1996-2011",
        "description": "(TV Series) Self - Guest - Episode #19.102 (2011) ... Self - Guest (uncredited) - Episode #19.73 (2011) ... Self - Guest - Troy Aikman/Natalie Portman/Green Day (1996) ... Self - Guest"
      },
      {
        "id": "tt1625351",
        "role": "Self",
        "title": "The 83rd Annual Academy Awards",
        "year": "2011",
        "description": "(TV Special) Self - Winner"
      },
      {
        "id": "tt1823217",
        "role": "Self",
        "title": "The 2011 Independent Spirit Awards",
        "year": "2011",
        "description": "(TV Special) Self - Winner"
      },
      {
        "id": "tt1642102",
        "role": "Self",
        "title": "In the House with Peter Bart & Peter Guber",
        "year": "2011",
        "description": "(TV Series) Self - Guest - Natalie Portman/Darren Aronofsky/Amy Adams/Mark Ruffalo/Aaron Sorkin/Tom Sherak/Michael De Luca (2011) ... Self - Guest"
      },
      {
        "id": "tt1845276",
        "role": "Self",
        "title": "The Orange British Academy Film Awards",
        "year": "2011",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt0111920",
        "role": "Self",
        "title": "Cinema 3",
        "year": "2011",
        "description": "(TV Series) Self - Interviewee - Episode dated 12 February 2011 (2011) ... Self - Interviewee"
      },
      {
        "id": "tt1831556",
        "role": "Self",
        "title": "17th Annual Screen Actors Guild Awards",
        "year": "2011",
        "description": "(TV Special) Self - Winner"
      },
      {
        "id": "tt1637574",
        "role": "Self",
        "title": "Conan",
        "year": "2011",
        "description": "(TV Series) Self - Guest - The Conundrum Enigma (2011) ... Self - Guest"
      },
      {
        "id": "tt1480165",
        "role": "Self",
        "title": "The Project",
        "year": "2011",
        "description": "(TV Series) Self - Episode #1.372 (2011) ... Self"
      },
      {
        "id": "tt1810776",
        "role": "Self",
        "title": "The 68th Annual Golden Globe Awards",
        "year": "2011",
        "description": "(TV Special) Self - Winner"
      },
      {
        "id": "tt1817076",
        "role": "Self",
        "title": "16th Annual Critics' Choice Movie Awards",
        "year": "2011",
        "description": "(TV Special documentary) Self"
      },
      {
        "id": "tt0283794",
        "role": "Self",
        "title": "BBC News at Six",
        "year": "2011",
        "description": "(TV Series) Self - Episode dated 12 January 2011 (2011) ... Self"
      },
      {
        "id": "tt1807026",
        "role": "Self",
        "title": "The 37th Annual People's Choice Awards",
        "year": "2011",
        "description": "(TV Special) Self - Presenter"
      },
      {
        "id": "tt1207692",
        "role": "Self",
        "title": "In Search of Ted Demme",
        "year": "2010",
        "description": "(Documentary)"
      },
      {
        "id": "tt0421288",
        "role": "Self",
        "title": "At the Movies",
        "year": "2010",
        "description": "(TV Series) Self - Summer Special 2010/11 (2010) ... Self - Venice Film Festival 2010 (2010) ... Self"
      },
      {
        "id": "tt3205676",
        "role": "Self",
        "title": "14 Actors Acting",
        "year": "2010",
        "description": "(Video short) Self"
      },
      {
        "id": "tt0270116",
        "role": "Self",
        "title": "Charlie Rose",
        "year": "1997-2010",
        "description": "(TV Series) Self - Guest - 'The Black Swan' (2010) ... Self - Guest - Episode dated 15 March 2006 (2006) ... Self - Guest - Episode dated 3 August 2004 (2004) ... Self - Guest - Episode dated 27 January 2002 (2002) ... Self - Guest - Episode dated 2 January 1998 (1998) ... Self - Guest Show all 6 episodes"
      },
      {
        "id": "tt15441582",
        "role": "Self",
        "title": "AFI Life Achievement Award",
        "year": "2010",
        "description": "(TV Series) Self - AFI Life Achievement Award: A Tribute to Mike Nichols (2010) ... Self"
      },
      {
        "id": "tt1645766",
        "role": "Self",
        "title": "Jim Sheridan: Film and Family",
        "year": "2010",
        "description": "(Video short) Self"
      },
      {
        "id": "tt1620585",
        "role": "Self",
        "title": "Re-Made in the USA: How Brodre Became Brothers",
        "year": "2010",
        "description": "(Video short) Self"
      },
      {
        "id": "tt7083656",
        "role": "Self",
        "title": "FINCA Mexico: Stories of Hope",
        "year": "2009",
        "description": "(Documentary short) Self"
      },
      {
        "id": "tt2167988",
        "role": "Self",
        "title": "Greed, a New Fragrance by Francesco Vezzoli",
        "year": "2009",
        "description": "(Video short) Self"
      },
      {
        "id": "tt0765425",
        "role": "Self",
        "title": "Top Chef",
        "year": "2009",
        "description": "(TV Series) Self - Guest Judge - Meat Natalie (2009) ... Self - Guest Judge"
      },
      {
        "id": "tt1427689",
        "role": "Self",
        "title": "Milos Forman: What doesn't kill you...",
        "year": "2009",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt1535002",
        "role": "Self",
        "title": "Between Two Ferns with Zach Galifianakis",
        "year": "2009",
        "description": "(TV Series short) Self - Natalie Portman (2009) ... Self"
      },
      {
        "id": "tt1392211",
        "role": "Self",
        "title": "A Powerful Noise Live",
        "year": "2009",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt1219288",
        "role": "Self",
        "title": "The 81st Annual Academy Awards",
        "year": "2009",
        "description": "(TV Special) Self - Presenter"
      },
      {
        "id": "tt1493022",
        "role": "Self",
        "title": "Natalie Portman and Rashida Jones Speak Out",
        "year": "2008",
        "description": "(Video short) Self"
      },
      {
        "id": "tt0437741",
        "role": "Self",
        "title": "Project Runway",
        "year": "2008",
        "description": "(TV Series) Self - Guest Judge - Grass Is Always Greener (2008) ... Self - Guest Judge"
      },
      {
        "id": "tt2038280",
        "role": "Self",
        "title": "On Set: Making Boleyn",
        "year": "2008",
        "description": "(Video short) Self"
      },
      {
        "id": "tt2038306",
        "role": "Self",
        "title": "To Be a Lady",
        "year": "2008",
        "description": "(Video short) Self"
      },
      {
        "id": "tt2038308",
        "role": "Self",
        "title": "Translating History to Screen",
        "year": "2008",
        "description": "(Video short) Self"
      },
      {
        "id": "tt6033930",
        "role": "Self",
        "title": "Director's Notebook: Re-imagining a Cult Classic for the 21st Century",
        "year": "2008",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt0447736",
        "role": "Self",
        "title": "Cartelera",
        "year": "2008",
        "description": "(TV Series documentary) Self - Interviewee - Episode dated 1 March 2008 (2008) ... Self - Interviewee - Episode dated 23 February 2008 (2008) ... Self - Interviewee"
      },
      {
        "id": "tt0106052",
        "role": "Self",
        "title": "Late Night with Conan O'Brien",
        "year": "1994-2008",
        "description": "(TV Series) Self - Guest - Natalie Portman/Robert Schimmel/James Blunt (2008) ... Self - Guest - Natalie Portman/Mark Consuelos/Los Lobos (2004) ... Self - Guest - Natalie Portman/Bill O'Reilly/Patty Loveless (2003) ... Self - Guest - Natalie Portman/Michael DeLorenzo/Bob Odenkirk (1994) ... Self - Guest"
      },
      {
        "id": "tt2386723",
        "role": "Self",
        "title": "DP/30: Conversations About Movies",
        "year": "2007",
        "description": "(TV Series) Self"
      },
      {
        "id": "tt1170409",
        "role": "Self",
        "title": "Saving a Species: Gorillas on the Brink",
        "year": "2007",
        "description": "(TV Movie documentary) Self - Host"
      },
      {
        "id": "tt1111353",
        "role": "Self",
        "title": "Julia Roberts: An American Cinematheque Tribute",
        "year": "2007",
        "description": "(TV Movie) Self"
      },
      {
        "id": "tt0096636",
        "role": "Self",
        "title": "Live with Kelly and Ryan",
        "year": "2007",
        "description": "(TV Series) Self - Guest - Episode dated 15 November 2007 (2007) ... Self - Guest"
      },
      {
        "id": "tt0461733",
        "role": "Self",
        "title": "Vivement dimanche",
        "year": "2006",
        "description": "(TV Series) Self - Luc Besson (2006) ... Self"
      },
      {
        "id": "tt5950624",
        "role": "Self",
        "title": "Mon plus grand moment de cinéma",
        "year": "2006",
        "description": "(TV Series short) Self - Episode dated 13 November 2006 (2006) ... Self"
      },
      {
        "id": "tt0925656",
        "role": "Self",
        "title": "Space Top 10 Countdown",
        "year": "2006",
        "description": "(TV Series) Self - Anti-Heroes (2006) ... Self"
      },
      {
        "id": "tt1232381",
        "role": "Self",
        "title": "Movie Rush",
        "year": "2006",
        "description": "(TV Series documentary) Self"
      },
      {
        "id": "tt1020791",
        "role": "Self",
        "title": "Designing the Near Future",
        "year": "2006",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt1020796",
        "role": "Self",
        "title": "Freedom! Forever!: Making 'V for Vendetta'",
        "year": "2006",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt1020831",
        "role": "Self",
        "title": "Remember, Remember: Guy Fawkes and the Gunpowder Plot",
        "year": "2006",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt0472044",
        "role": "Self",
        "title": "Armenian Genocide",
        "year": "2006",
        "description": "(TV Movie documentary) Aurora Mardiganian (voice)"
      },
      {
        "id": "tt0207934",
        "role": "Self",
        "title": "Getaway",
        "year": "2006",
        "description": "(TV Series documentary) Self - Episode #15.6 (2006) ... Self"
      },
      {
        "id": "tt0775408",
        "role": "Self",
        "title": "'V for Vendetta' Unmasked",
        "year": "2006",
        "description": "(TV Movie documentary) Self"
      },
      {
        "id": "tt0115147",
        "role": "Self",
        "title": "The Daily Show",
        "year": "1999-2006",
        "description": "(TV Series) Self - Guest - Natalie Portman (2006) ... Self - Guest - Natalie Portman (2004) ... Self - Guest - Natalie Portman (2003) ... Self - Guest - Natalie Portman (1999) ... Self - Guest"
      },
      {
        "id": "tt0463397",
        "role": "Self",
        "title": "Corazón de...",
        "year": "2005-2006",
        "description": "(TV Series) Self - Episode dated 9 March 2006 (2006) ... Self - Episode dated 15 February 2006 (2006) ... Self - Episode dated 7 December 2005 (2005) ... Self"
      },
      {
        "id": "tt0770708",
        "role": "Self",
        "title": "The 63rd Annual Golden Globe Awards 2006",
        "year": "2006",
        "description": "(TV Special) Self - Presenter"
      },
      {
        "id": "tt0462403",
        "role": "Self",
        "title": "Live 8",
        "year": "2005",
        "description": "(TV Special documentary) Self"
      },
      {
        "id": "tt0241090",
        "role": "Self",
        "title": "Caiga quien caiga",
        "year": "2005",
        "description": "(TV Series) Self - Episode dated 20 May 2005 (2005) ... Self (uncredited)"
      },
      {
        "id": "tt0475467",
        "role": "Self",
        "title": "El Magacine",
        "year": "2005",
        "description": "(TV Series) Self - Episode dated 20 May 2005 (2005) ... Self"
      },
      {
        "id": "tt0375285",
        "role": "Self",
        "title": "Comme au cinéma",
        "year": "2005",
        "description": "(TV Series documentary) Self - Episode dated 17 May 2005 (2005) ... Self"
      },
      {
        "id": "tt0429487",
        "role": "Self",
        "title": "The 77th Annual Academy Awards",
        "year": "2005",
        "description": "(TV Special) Self - Nominee & Presenter"
      },
      {
        "id": "tt0429486",
        "role": "Self",
        "title": "The 62nd Annual Golden Globe Awards 2005",
        "year": "2005",
        "description": "(TV Special) Self - Winner"
      },
      {
        "id": "tt0445772",
        "role": "Self",
        "title": "Tsunami Aid: A Concert of Hope",
        "year": "2005",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt0488273",
        "role": "Self",
        "title": "10 Year Retrospective: Cast and Crew Look Back",
        "year": "2005",
        "description": "(Video documentary short) Self / Mathilda"
      },
      {
        "id": "tt0488318",
        "role": "Self",
        "title": "Natalie Portman: Starting Young",
        "year": "2005",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt0443110",
        "role": "Self",
        "title": "The Making of 'Garden State'",
        "year": "2004",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt0181261",
        "role": "Self",
        "title": "This Morning",
        "year": "2004",
        "description": "(TV Series) Self - Guest - Episode dated 7 December 2004 (2004) ... Self - Guest"
      },
      {
        "id": "tt0403778",
        "role": "Self",
        "title": "Long Way Round",
        "year": "2004",
        "description": "(TV Mini Series documentary) Self - Calgary to New York (2004) ... Self"
      },
      {
        "id": "tt0169455",
        "role": "Self",
        "title": "Inside the Actors Studio",
        "year": "2004",
        "description": "(TV Series) Self - Guest - Natalie Portman (2004) ... Self - Guest"
      },
      {
        "id": "tt0090493",
        "role": "Self",
        "title": "The Oprah Winfrey Show",
        "year": "1999-2004",
        "description": "(TV Series) Self - Guest - Episode dated 4 November 2004 (2004) ... Self - Guest - Episode dated 11 November 1999 (1999) ... Self - Guest"
      },
      {
        "id": "tt0419812",
        "role": "Self",
        "title": "Hitler's Pawn: The Margaret Lambert Story",
        "year": "2004",
        "description": "(TV Movie documentary) Narrator (voice)"
      },
      {
        "id": "tt0306276",
        "role": "Self",
        "title": "Anatomy of a Scene",
        "year": "2004",
        "description": "(TV Series documentary) Self - Garden State (2004) ... Self"
      },
      {
        "id": "tt0063951",
        "role": "Self",
        "title": "Sesame Street",
        "year": "2003-2004",
        "description": "(TV Series) Self - Sesame Street Presents: The Street We Live On (2004) ... Self (uncredited) - Oscar Moves to Different Locations (2003) ... Self"
      },
      {
        "id": "tt0422541",
        "role": "Self",
        "title": "A Journey to 'Cold Mountain'",
        "year": "2003",
        "description": "(TV Short documentary) Self"
      },
      {
        "id": "tt0387021",
        "role": "Self",
        "title": "Nicole Kidman: An American Cinematheque Tribute",
        "year": "2003",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt0395334",
        "role": "Self",
        "title": "Cartaz Cultural",
        "year": "2003",
        "description": "(TV Series) Self (2007)"
      },
      {
        "id": "tt0340474",
        "role": "Self",
        "title": "Rank",
        "year": "2002",
        "description": "(TV Series documentary) Self - Young Hollywood: Players or Played Out? (2002) ... Self"
      },
      {
        "id": "tt5991530",
        "role": "Self",
        "title": "Episode II: Behind the Scenes",
        "year": "2002",
        "description": "(Video documentary short) Self"
      },
      {
        "id": "tt0324947",
        "role": "Self",
        "title": "2002 MTV Movie Awards",
        "year": "2002",
        "description": "(TV Special) Self - Presenter"
      },
      {
        "id": "tt0220225",
        "role": "Self",
        "title": "The Early Show",
        "year": "2002",
        "description": "(TV Series) Self - Guest - Episode dated 22 May 2002 (2002) ... Self - Guest"
      },
      {
        "id": "tt0318251",
        "role": "Self",
        "title": "Troldspejlet",
        "year": "2002",
        "description": "(TV Series) Self / Padmé - Troldspejlet Special: Bag Klonernes angreb (2002) ... Self / Padmé"
      },
      {
        "id": "tt0115338",
        "role": "Self",
        "title": "The Rosie O'Donnell Show",
        "year": "1998-2002",
        "description": "(TV Series) Self - Guest - Episode dated 17 May 2002 (2002) ... Self - Guest - Episode dated 21 May 1999 (1999) ... Self - Guest - Episode dated 9 January 1998 (1998) ... Self - Guest"
      },
      {
        "id": "tt0354408",
        "role": "Self",
        "title": "The Beginning: Making 'Episode I'",
        "year": "2001",
        "description": "(Video documentary) Self"
      },
      {
        "id": "tt0299485",
        "role": "Self",
        "title": "R2-D2: Beneath the Dome",
        "year": "2001",
        "description": "(TV Short) Self (uncredited)"
      },
      {
        "id": "tt0298810",
        "role": "Self",
        "title": "The Concert for New York City",
        "year": "2001",
        "description": "(TV Special documentary) Self"
      },
      {
        "id": "tt0500201",
        "role": "Self",
        "title": "Film-Fest DVD: Issue 3 - Toronto",
        "year": "2000",
        "description": "(Video documentary) Self"
      },
      {
        "id": "tt0289785",
        "role": "Self",
        "title": "VH1/Vogue Fashion Awards",
        "year": "2000",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt0429484",
        "role": "Self",
        "title": "The 57th Annual Golden Globe Awards",
        "year": "2000",
        "description": "(TV Special) Self - Nominee"
      },
      {
        "id": "tt8291962",
        "role": "Self",
        "title": "The Phantom Menace: Web Documentaries",
        "year": "1999",
        "description": "(TV Mini Series documentary short) Self - 3000 Anakins (1999) ... Self (uncredited)"
      },
      {
        "id": "tt0214158",
        "role": "Self",
        "title": "The Stars of 'Star Wars': Interviews from the Cast",
        "year": "1999",
        "description": "(Video documentary) Self"
      },
      {
        "id": "tt0483221",
        "role": "Self",
        "title": "Mundo VIP",
        "year": "1999",
        "description": "(TV Series) Self - Show nº177 (1999) ... Self"
      },
      {
        "id": "tt0312928",
        "role": "Self",
        "title": "1999 MTV Video Music Awards",
        "year": "1999",
        "description": "(TV Special) Self"
      },
      {
        "id": "tt0200358",
        "role": "Self",
        "title": "Omnibus",
        "year": "1999",
        "description": "(TV Series documentary) Self - A Long Time Ago...: The Story of Star Wars (1999) ... Self"
      },
      {
        "id": "tt0185822",
        "role": "Self",
        "title": "Showbiz Today",
        "year": "1996",
        "description": "(TV Series) Self - Episode dated 12 December 1996 (1996) ... Self"
      },
      {
        "id": "tt0275881",
        "role": "Self",
        "title": "1996 MTV Movie Awards",
        "year": "1996",
        "description": "(TV Special) Self - Presenter"
      },
      {
        "id": "tt0896232",
        "role": "Self",
        "title": "Intimate Portrait",
        "year": "1996",
        "description": "(TV Series documentary) Self - Audrey Hepburn (1996) ... Self"
      },
      {
        "id": "tt0318220",
        "role": "Self",
        "title": "HBO First Look",
        "year": "1994",
        "description": "(TV Series documentary short) Self - The Best Man for the Job: The Making of 'The Professional' (1994) ... Self"
      },
      {
        "id": "tt21267394",
        "role": "Archive footage",
        "title": "Icons Unearthed",
        "year": "2022",
        "description": "(TV Series documentary) Self - Icons Unearthed: Star Wars - The Phantom Menace (2022) ... Self"
      },
      {
        "id": "tt0081857",
        "role": "Archive footage",
        "title": "Entertainment Tonight",
        "year": "2015-2022",
        "description": "(TV Series) Self - Episode #41.258 (2022) ... Self - Episode #41.257 (2022) ... Self - Episode #41.252 (2022) ... Self - Episode #41.246 (2022) ... Self - ET Halloween Week - Day 5 (2021) ... Self Show all 22 episodes"
      },
      {
        "id": "tt3697842",
        "role": "Archive footage",
        "title": "The Late Show with Stephen Colbert",
        "year": "2021",
        "description": "(TV Series) Self - Elizabeth Banks/Jorja Fox (2021) ... Self"
      },
      {
        "id": "tt15277036",
        "role": "Archive footage",
        "title": "Moments Within Moments",
        "year": "2021",
        "description": "Self"
      },
      {
        "id": "tt0165001",
        "role": "Archive footage",
        "title": "CBS News Sunday Morning",
        "year": "2021",
        "description": "(TV Series) Self - Actress - Episode #43.12 (2021) ... Self - Actress (uncredited)"
      },
      {
        "id": "tt13990468",
        "role": "Archive footage",
        "title": "Allen v. Farrow",
        "year": "2021",
        "description": "(TV Mini Series documentary) Self - Actress - Episode Four (2021) ... Self - Actress"
      },
      {
        "id": "tt3503424",
        "role": "Archive footage",
        "title": "Celebrity Page",
        "year": "2019-2020",
        "description": "(TV Series) Self - Episode #7.253 (2020) ... Self - Episode #7.244 (2020) ... Self - Episode #7.151 (2020) ... Self - Episode #7.145 (2020) ... Self - Episode #5.33 (2019) ... Self"
      },
      {
        "id": "tt13016298",
        "role": "Archive footage",
        "title": "The Officer Tatum",
        "year": "2020",
        "description": "(TV Series) Self - Leftist Celebrity SONG GONE WRONG (2020) ... Self"
      },
      {
        "id": "tt0482346",
        "role": "Archive footage",
        "title": "Entertainment Tonight Canada",
        "year": "2020",
        "description": "(TV Series) Self - Episode dated 19 March 2020 (2020) ... Self"
      },
      {
        "id": "tt7262670",
        "role": "Archive footage",
        "title": "The Ben Shapiro Show",
        "year": "2020",
        "description": "(Podcast Series) Self - What the Hell Happens Now? (2020) ... Self"
      },
      {
        "id": "tt11635416",
        "role": "Archive footage",
        "title": "Les Chroniques du Mea",
        "year": "2019",
        "description": "(TV Series) Self - Mars Attacks (1995) (2019) ... Self"
      },
      {
        "id": "tt11341950",
        "role": "Archive footage",
        "title": "Vegan 2019",
        "year": "2019",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt11323604",
        "role": "Archive footage",
        "title": "Vader Immortal: A Star Wars VR Series - Episode III",
        "year": "2019",
        "description": "(Video Game) Padmé Amidala (uncredited)"
      },
      {
        "id": "tt10186928",
        "role": "Archive footage",
        "title": "Vader Immortal: A Star Wars VR Series - Episode I",
        "year": "2019",
        "description": "(Video Game) Padmé Amidala (uncredited)"
      },
      {
        "id": "tt4154796",
        "role": "Archive footage",
        "title": "Avengers: Endgame",
        "year": "2019",
        "description": "Jane Foster"
      },
      {
        "id": "tt9355184",
        "role": "Archive footage",
        "title": "Vegan 2018",
        "year": "2018",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt8219204",
        "role": "Archive footage",
        "title": "Six Sides of Katharine Hepburn",
        "year": "2018",
        "description": "(Documentary short) Self"
      },
      {
        "id": "tt7688694",
        "role": "Archive footage",
        "title": "Vegan 2017",
        "year": "2017",
        "description": "(Documentary) Self"
      },
      {
        "id": "tt0247094",
        "role": "Archive footage",
        "title": "Extra",
        "year": "2016-2017",
        "description": "(TV Series) Self - Episode #23.243 (2017) ... Self - Episode #23.126 (2017) ... Self - Episode #23.114 (2017) ... Self - Episode #23.109 (2017) ... Self - Episode #22.105 (2016) ... Self"
      },
      {
        "id": "tt0430836",
        "role": "Archive footage",
        "title": "The Insider",
        "year": "2016",
        "description": "(TV Series) Self - Episode #12.311 (2016) ... Self - Episode #12.118 (2016) ... Self"
      },
      {
        "id": "tt4304220",
        "role": "Archive footage",
        "title": "Le grand show",
        "year": "2016",
        "description": "(TV Series) Self - Le Grand Show fête le Cinéma (2016) ... Self"
      },
      {
        "id": "tt1635327",
        "role": "Archive footage",
        "title": "Nostalgia Critic",
        "year": "2016",
        "description": "(TV Series) Padmé - When Are Critics Wrong? (2016) ... Padmé"
      },
      {
        "id": "tt4823212",
        "role": "Archive footage",
        "title": "The Drunken Peasants",
        "year": "2015-2016",
        "description": "(TV Series) Padmé - Vegan Gains Joins Us - Prank Calls to Caiden Cowger - Opening Fan Mail (2016) ... Padmé - **SPOILERS** the Drunken Peasants Podcast Awakens! (2015) ... Padmé"
      },
      {
        "id": "tt7293576",
        "role": "Archive footage",
        "title": "Nexus VI",
        "year": "2015",
        "description": "(TV Mini Series) Self - Star Wars VII (Part 2) (2015) ... Self"
      },
      {
        "id": "tt0924651",
        "role": "Archive footage",
        "title": "The Graham Norton Show",
        "year": "2014",
        "description": "(TV Series) Self - Compilation Show (2014) ... Self"
      },
      {
        "id": "tt1002838",
        "role": "Archive footage",
        "title": "Chelsea Lately",
        "year": "2013",
        "description": "(TV Series) Jane Foster - Episode #7.165 (2013) ... Jane Foster"
      },
      {
        "id": "tt0072562",
        "role": "Archive footage",
        "title": "Saturday Night Live",
        "year": "2012",
        "description": "(TV Series) Self - Will Ferrell/Usher (2012) ... Self (uncredited)"
      },
      {
        "id": "tt1405257",
        "role": "Archive footage",
        "title": "Rude Tube",
        "year": "2011",
        "description": "(TV Series) Self - Mashed 'n' Mixed (2011) ... Self (uncredited)"
      },
      {
        "id": "tt2086872",
        "role": "Archive footage",
        "title": "Live Free or Die Hard (Project 12, 8/12)",
        "year": "2011",
        "description": "(Short) Evey"
      },
      {
        "id": "tt0262152",
        "role": "Archive footage",
        "title": "Breakfast",
        "year": "2011",
        "description": "(TV Series) Self - Episode dated 31 January 2011 (2011) ... Self"
      },
      {
        "id": "tt1599373",
        "role": "Archive footage",
        "title": "Secret Origin: The Story of DC Comics",
        "year": "2010",
        "description": "(Video documentary) Self (uncredited)"
      },
      {
        "id": "tt1508270",
        "role": "Archive footage",
        "title": "España, plató de cine",
        "year": "2009",
        "description": "(TV Movie documentary) Amidala / Inés / Alicia (uncredited)"
      },
      {
        "id": "tt1318052",
        "role": "Archive footage",
        "title": "Filmania: Eiga no tatsujin",
        "year": "2009",
        "description": "(TV Series) - Film Locations in NYC (2009)"
      },
      {
        "id": "tt1351089",
        "role": "Archive footage",
        "title": "Almost Famous II",
        "year": "2009",
        "description": "(TV Movie documentary) Self - World Patrol Kids"
      },
      {
        "id": "tt0256555",
        "role": "Archive footage",
        "title": "Headline News",
        "year": "2006",
        "description": "(TV Series) Alice - Episode dated 13 July 2006 (2006) ... Alice (uncredited)"
      },
      {
        "id": "tt0490768",
        "role": "Archive footage",
        "title": "101 Sexiest Celebrity Bodies",
        "year": "2005",
        "description": "(TV Movie documentary) Self - Place #79"
      },
      {
        "id": "tt0451579",
        "role": "Archive footage",
        "title": "Silenci?",
        "year": "2005",
        "description": "(TV Series) Sam - Episode #5.7 (2005) ... Sam"
      },
      {
        "id": "tt0487865",
        "role": "Archive footage",
        "title": "50 Cutest Child Stars: All Grown Up",
        "year": "2005",
        "description": "(TV Movie documentary) Self"
      },
      {
        "id": "tt0092322",
        "role": "Archive footage",
        "title": "Biography",
        "year": "2005",
        "description": "(TV Series documentary) Ann August - Child Stars II: Growing Up Hollywood (2005) ... Ann August"
      },
      {
        "id": "tt0470644",
        "role": "Archive footage",
        "title": "Cinema mil",
        "year": "2005",
        "description": "(TV Series documentary) Self - Episode #1.1 (2005) ... Self"
      },
      {
        "id": "tt0486613",
        "role": "Archive footage",
        "title": "Lego Star Wars: The Video Game",
        "year": "2005",
        "description": "(Video Game) Padme Amidala (uncredited)"
      },
      {
        "id": "tt0424885",
        "role": "Archive footage",
        "title": "Celsius 41.11: The Temperature at Which the Brain... Begins to Die",
        "year": "2004",
        "description": "(Documentary) Self"
      }
    ],
    "errorMessage": ""
  }

  // const cast = () => {
  //   if (singleActorStatus === 'idle') {
  //     setCastItems(castItemsDefault.reduce((result, item) => {
  //       return result.includes(item.role) ? result : [...result, item.role]
  //     }, []))
  //   }
  // }

  console.log('effect');

  useEffect(() => {
      // dispatch(singleActorFetched(actor));
      console.log('effect');
      // cast();
      // getSearchActorInfo(params.id)
      // .then(data => dispatch(singleActorFetched(data)));
      
      dispatch(fetchActor(params.id))
      return () => {
           dispatch(singleActorDisFetched())
        }
  }, [])

  return (
    <>
      <Header/>
      {singleActorStatus === 'loading'
      ?
      <Skeleton/>
      :
      <>
      {singleActorItem.name === null 
      ?
      <>
        <h1 style={{margin: 50, textAlign: 'center', fontSize: 36, fontWeight: 700}}>Контент находится в разработке</h1>
        <Skeleton/>
      </>
      :
      <div className="actor">
        {/* {console.log(castItems)} */}
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



          {/* const cast = () => {
    if (singleActorStatus === 'idle') {
      setCastItems(castItemsDefault.reduce((result, item) => {
        return result.includes(item.role) ? result : [...result, item.role]
      }, []))
    }
  } */}



          <MySelect
            value={castType} 
            onChange={value => setCastType(value)} 
            // defaultValue="Дефолт" 
            options={castItemsDefault.reduce((result, item) => {
              return result.includes(item.role) ? result : [...result, item.role]
            }, [])}
          />
          {/* <select onChange={e => setCastType(e.target.value)} name="role" id="role">
            <option value="Producer">Продюсер</option>
            <option value="Writer">Сценарист</option>
            <option value="Director">Режесер</option>
            <option value="Cinematographer">Оператор</option>
            <option value="Editor">Монтажер</option>
            <option value="Art department">Художник постановщик</option>
            <option value="Composer">Композитор</option>
            <option value="Thanks">Благодарность</option>
            <option value="Thanks">Актер: играет самого себя</option>
            <option value="Archive footage">Архивные кадры</option>
          </select> */}



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