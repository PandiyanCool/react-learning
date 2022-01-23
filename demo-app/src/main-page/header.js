import logo from './logo.svg';

const Header = () => (
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className='logo' alt='logo' />
        </div>
        <div className="col-md-7">
            <div className='col-md-7 mt-5 subtitle'>
                All the details of header goes here
            </div>
        </div>
    </header>
);

export default Header;