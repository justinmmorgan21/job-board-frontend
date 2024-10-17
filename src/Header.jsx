import { Link } from 'react-router-dom'
import { LogoutLink } from "./LogoutLink";
export function Header () { 
  return (
    <header>
      <Link to='/'></Link> | <Link to='/signup'>Sign Up</Link>  | <Link to='/login'>Log in</Link> | <LogoutLink/> | <Link to='/'>Job Board</Link> | <Link to='/companies'>Search By Company</Link> 
    </header>
  );
}


