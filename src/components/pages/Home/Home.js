import { Fragment, useContext } from 'react'
import { DataNavContext } from '../../../context/DataNavProvider'
import { DataHomeContext } from '../../../context/DataHomeProvider'
import { Spinner } from 'react-bootstrap'
import Navbar from '../../Navbar';
import Head from '../../Head';
import AboutMe from '../../AboutMe';
import Features from '../../Features';
import Footer from '../../Footer';

import './Home.sass'

const Home = () => {

    // The call is made from the Provider to obtain the data
    const { dataNav } = useContext(DataNavContext)
    const { title, button, aboutMe, features } = useContext(DataHomeContext)

    // If there is no data not exist, this component is not rendered
    if(!dataNav && !title && !button && !aboutMe && !features) return <div className="spinner"><Spinner animation="border"/></div>

    return (
        <Fragment>
            <Navbar />
            <Head />
            <AboutMe />
            <Features />
            <Footer />
        </Fragment>
      );
}
 
export default Home;