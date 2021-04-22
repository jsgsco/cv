import { useContext } from 'react'
import { Image, Button } from 'react-bootstrap'
import { List, X } from 'react-bootstrap-icons'
import { map } from 'lodash'
import { DataNavContext } from '../context/DataNavProvider'

import './Navbar.sass'

const Navbar = () => {
    
    // Bring all the data from our provider
    const { dataNav, openShowMenu, setOpenShowMenu } = useContext(DataNavContext)

    // This function allows you to change the state of the navigation when it is in small devices
    const changeShowMenu = () => {
        setOpenShowMenu(true)
    }

    return openShowMenu !== true ? ( 
        <div className="home">
            <Image 
                src="https://jsgsco-backend.s3.amazonaws.com/logo_92ee54daf6.png" 
                className="home_image" 
                title="Logo J'ohn Ranch"
            />
            <List 
                color="white" 
                size={26} 
                className="home_menu"
                onClick={ changeShowMenu }
            />
            <nav className="home_nav">   
                {
                    map(dataNav, (nav) => (
                        <a
                            key={nav.id}
                            className={nav.styles}
                            href={nav.url}
                        >{nav.name}</a>
                        )
                    )
                }
                <Button 
                    variant="light" 
                    className="ml-5"
                    disabled
                >Download CV</Button>
            </nav>
        </div>
     ) : (
         <NavbarResponsive setOpenShowMenu={setOpenShowMenu} dataNav={dataNav}/>
     )
     
}
 
export default Navbar;



function NavbarResponsive({setOpenShowMenu, dataNav}) {

    // This function allows you to change the state of the navigation when it is in small devices
    const changeShowMenu = () => {
        setOpenShowMenu(false)
    }

    return (
        <div className="home_menu-show">
            <X 
                className="home_menu-show_close"
                color="white" 
                size={30} 
                onClick={ changeShowMenu  }
            />
            <nav className="home_menu-show_nav">
                {
                    map(dataNav, (nav) => (
                        <a
                            key={nav.id}
                            className={nav.styles}
                            href={nav.url}
                        >{nav.name}</a>
                        )
                    )
                }
                <Button 
                    variant="light" 
                    className="my-2"
                    disabled
                >Download CV</Button>
            </nav>
        </div>
    )
}