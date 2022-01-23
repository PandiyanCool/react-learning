const Header = ({ appName }) => (
  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <span className="navbar-brand" href="#">
        <img
          src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt=""
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
        <span className="ms-2">{appName}</span>
      </span>
    </div>
  </nav>
);

export default Header;
