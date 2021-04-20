import { useContext } from 'react'
import { Image } from 'react-bootstrap'
import { DataHomeContext } from '../context/DataHomeProvider'
import { map } from 'lodash'
import Button from './Button'

import './Head.sass'

const Head = () => {

    // The call is made from the Provider to obtain the data
    const { title, button } = useContext(DataHomeContext)

    return (
        <div className="head">
            <h2 className="head_head">Hello <Image src="https://jsgsco-backend.s3-us-west-1.amazonaws.com/descarga.png" className="head_image"/> </h2>
            <h1 className="head_title">I'm {title}</h1>
            <h3 className="head_subtitle">This is my humble abode</h3>
            <div className="head_social">
                <p className="head_social_title">Visit me on my social networks below.</p>
                {
                    map(button, (btn) => (
                        <Button 
                            key={btn.id}
                            title={btn.title}
                            className={btn.className}
                            url={btn.url}
                            icon={btn.icon}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Head
