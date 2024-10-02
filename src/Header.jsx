import { Link } from 'react-router-dom'

export function Header () { 
  return (
    <header>
      <Link to='/'></Link> | <Link to='/Signup'>Sign Up</Link>  | <Link to='/Companies'>Search By Company</Link> <
    </header>
  );
}


