import "./FoldOutMenu.css";

const FoldOutMenu = () => {
  return (
    <nav role="navigation" className="nav-admin">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href>
            <li>Home</li>
          </a>
          <a href>
            <li>About</li>
          </a>
          <a href>
            <li>Info</li>
          </a>
          <a href>
            <li>Contact</li>
          </a>
          <a href>
            <li>Show me more</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default FoldOutMenu;
