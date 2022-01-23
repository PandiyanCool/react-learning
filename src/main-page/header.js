// const Header = ({ appName }) => (
//   <nav className="navbar navbar-light bg-light">
//     <div className="container-fluid">
//       <span className="navbar-brand" href="#">
//         <img
//           src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
//           alt=""
//           width="30"
//           height="24"
//           className="d-inline-block align-text-top"
//         />
//         <span className="ms-2">{appName}</span>
//       </span>
//     </div>
//   </nav>
// );

const Header = ({ subtitle }) => (
  <header className="row">
    <div className="col-md-5">
      <img
        src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
        className="logo"
        alt="logo"
      />
    </div>
    <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
  </header>
);

export default Header;
