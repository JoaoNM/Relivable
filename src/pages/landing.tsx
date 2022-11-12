import React, { FC, ReactElement, useState } from 'react'; 
import axios from "../axios";
import { Link } from 'react-scroll';
// import images 
import relivable from '../assets/relivable.svg';
import relivable_text from '../assets/relivable_text.svg';
import right_arrow from '../assets/right_arrow.svg';
// import components
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
// import styles 
import "../styles/landing.css";

// eslint-disable-next-line
const Landing: FC<{}> = ({}): ReactElement => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [signedUp, setSignedUp] = useState(false);

    const submitData = () => {
    
        if (name !== "" && email !== "") {

            setLoading(true);

            axios
                .post('/signup_email', {
                    name: name,
                    email: email
                })
                .then((res) => {
                    setLoading(false);
                    setSignedUp(true);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                    setSignedUp(false);
                });

            // let base = new Airtable({apiKey: process.env.REACT_APP_SERVER_API_KEY}).base('app0H8FTON4DiQnKv');

            // base('Email Collection').create([
            //     {
            //         "fields": {
            //             "Name": name,
            //             "Email": email
            //         }
            //     }
            // ], function(err, records) {
            //     if (err) {
            //         console.error(err);
            //         setLoading(false);
            //         setSignedUp(false);
            //         return;
            //     }
            //     records?.forEach(function (record) {
            //         console.log(record.getId());
            //         setLoading(false);
            //         setSignedUp(true);
            //     });
            // });
        } else {
            console.log("Please fill out all fields");
        }
    }

    return (
        <>
            <div className='landing'>
                <NavBar active='relivable'/>
                <div className='landing__container'>
                    <div className='landing__cta__section'>
                        <div className='spinning-wheel-landing-logo'>
                            <img className='logo-img' src={relivable} alt="Relivable logo"/>
                            <img className='logo-wheel' src={relivable_text} alt="Relivable logo"/>
                            <h1>Relivable</h1>
                        </div>
                        <div className='landing__cta'>
                            <h1>Event ticketing, <br/> done right. </h1>
                            <Link to="email_waitlist_modal" smooth={true} duration={800} offset={-100}>
                                <button className='landing__cta__button'>Join Waitlist <img src={right_arrow} alt="right arrow"/></button>
                            </Link>
                        </div>
                    </div>
                    <div className='email_waitlist_section'>
                        <div className='email_waitlist_modal' id="email_waitlist_modal">
                            {signedUp ? 
                                <h1>Thanks for signing up, {name}</h1>
                                :
                                <h1>Join the waitlist</h1>
                            }
                            {signedUp ?
                                <p>You'll be kept in the loop when we launch.</p>
                                :
                                <p>Get in the waitlist for our closed beta.</p>
                            }
                            <input onChange={(e) => setName(e.target.value)} className='waitlist_input' type="text" placeholder="Name"/>
                            <input onChange={(e) => setEmail(e.target.value)} className='waitlist_input' type="text" placeholder="Email"/>
                            {/* {loading ? 
                                <button className='waitlist_button'>Loading...</button> 
                                : 
                                <button onClick={() => submitData()} type='submit'>Sign up →</button>
                            } */}
                            {signedUp ? 
                                <span>Signed up!</span> 
                                : 
                                loading ? 
                                    <button className='waitlist_button'>Loading...</button> 
                                    : 
                                    <button onClick={() => submitData()} type='submit'>Sign up →</button>
                            }
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
};

export default Landing;