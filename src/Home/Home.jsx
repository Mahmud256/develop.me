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
            className="min-h-screen bg-gradient-to-tr from-lime-200 via-white to-white p-5"
            // style={{
            //     background: 'linear-gradient(135deg, rgb(0,255,0), rgb(255,255,255))',
            //     padding: '20px',
            //     fontFamily: 'Arial, sans-serif',
            // }}
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
