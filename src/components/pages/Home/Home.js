import { Fragment, useContext } from 'react'
import { DataNavContext } from '../../../context/DataNavProvider'
import { Spinner } from 'react-bootstrap'
import Navbar from '../../Navbar';
import './Home.sass'

const Home = () => {

    const { dataNav } = useContext(DataNavContext)

    // if(!dataNav) return <div className="spinner"><Spinner animation="border"/></div>

    return (
        <Fragment>
            <Navbar />
            <h2>Home</h2>
        </Fragment>
      );
}
 
export default Home;