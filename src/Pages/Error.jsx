import { Cursor } from "../Components/Cursor";
import { Link } from "react-router-dom";

export const Error = () => {
    return (
        <>
        <div className="error-wrap">
            <div className="error-inner">
                <h1>Wrong page mate.</h1>
                <h2>
                    <Link to='/' className="error-home">JOHNNIE.</Link>
                    <span className="x">x</span>
                    <Link to='/catalog' className='error-catalog'>CATALOG</Link>
                </h2>
            </div>
        </div> 
        <Cursor/>
        </>
     );
}