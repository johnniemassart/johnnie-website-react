import { HomeNav } from '../Components/HomeNav';
import { HomeImages } from '../Components/HomeImages';
import { Cursor } from '../Components/Cursor';

export const Home = () => {
    return (
        <div className="container">
            {/* <h1 style={{color: 'white'}}>hello world</h1> */}
            <HomeImages/>
            <HomeNav/>
            <Cursor/>
        </div>
    )
}