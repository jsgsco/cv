import { Fragment, useContext } from 'react'
import { DataNavContext } from '../../../context/DataNavProvider'
import { DataHomeContext } from '../../../context/DataHomeProvider'
import { Spinner } from 'react-bootstrap'
import Navbar from '../../Navbar';
import Head from '../../Head';


import './Home.sass'
import AboutMe from '../../AboutMe';

const Home = () => {

    // The call is made from the Provider to obtain the data
    const { dataNav } = useContext(DataNavContext)
    const { button } = useContext(DataHomeContext)

    // If there is no data in the navigation, this component is not rendered
    if(!dataNav && button) return <div className="spinner"><Spinner animation="border"/></div>

    return (
        <Fragment>
            <Navbar />
            <Head />
            <AboutMe />
        </Fragment>
      );
}
 
export default Home;