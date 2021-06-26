function Navbar(){
    return(
        <nav className="Navbar">
            <div className="Navbar-brand">
                <span className="Navbar-brand-img">
                    <img src="/static/img/logo.png" alt="codadept" />
                </span>
                <h1 className="Navbar-brand-title">codadept</h1>
            </div>
            <ul className="Navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Achievements</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;