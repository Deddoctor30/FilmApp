import { Link, NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => {

   const activePage = {
      fontSize: "22px",
      color: "#534aa9",
   }

   return (
      <header className="search__header header">
         <nav className="header__menu">
            <ul>
               <li><NavLink style={({isActive}) => isActive ? activePage : undefined} to='/'>Главная</NavLink></li>
               /
               <li><NavLink style={({isActive}) => isActive ? activePage : undefined} to='/actor'>Актеры</NavLink></li>
            </ul>
         </nav>
      </header>
   )
}

export default Header;
