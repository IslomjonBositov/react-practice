import "./Header.css"

function Header(){
  return(
    <header className='header'>
      <h1>Mini site</h1>
      <input className='search' type="search" placeholder='Search...' />
    </header>
  )
}

export default Header;