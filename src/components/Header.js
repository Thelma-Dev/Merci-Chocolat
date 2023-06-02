
function Header(props) {
    return(
        <header>
            <div className="container flexbox">
                <div className="title"><h1>{props.title}</h1></div>
                <nav>
                    <ul>
                        <li><a href="#!">About Us</a></li>
                        <li><a href="#!">Gallery</a></li>
                        <li><a href="#!">Book Us</a></li>
                        <li><a href="#!">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}


export default Header;