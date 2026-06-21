import "./Header.css";

function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <input className="search" type="search" autoFocus placeholder="Search..." />
    </header>
  );
}

export default Header;
