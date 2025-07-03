import NavBar from './NavBar';
import Seconds from '../Components/Seconds';
import Third from '../Components/Third';
import Forth from '../Components/Forth';
import Fifth from '../Components/Fifth';
import Sixth from '../Components/Sixth';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div
            className="min-h-screen"
        >
            <NavBar />
            <Seconds/>
            <Third/>
            <Forth/>
            <Fifth/>
            <Sixth/>
            <Footer/>
        </div>
    );
};

export default Home;
