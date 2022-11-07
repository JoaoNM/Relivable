import React, { FC, ReactElement } from 'react';
// import styles 
import "../styles/footer.css";

const Footer: FC<{}> = ({}): ReactElement => {
    return (
        <>
            <div className='footer'>
                <div className='footer__container'>
                    <div className='footer__section'>
                        <p><a href='https://twitter.com/Relivable_io'>Twitter</a> · <a href='https://www.instagram.com/relivable_io/'>Instagram</a></p>
                    </div>
                    <div className='footer__section'>
                        <p>© 2022 Relivable, all rights reserved · Built by <a href='https://www.minthouse.dev/'>Minthouse.dev</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;