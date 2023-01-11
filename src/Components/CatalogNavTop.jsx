import { Link } from "react-router-dom";
export const CatalogNavTop = () => {

    return (
        <nav className="catalog-nav-top">
            <h2>
                <Link className="home-catalog" to='/'>JOHNNIE</Link>
            </h2>
        </nav>
    );
}