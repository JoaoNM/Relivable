import React, { FC, ReactElement, useState } from 'react'; 
import "../styles/navBar.css";
import { ReactComponent as MenuDecor} from "../assets/menu_decor.svg";

type NavBarProps = {
    active?: string;

}

const NavBar: FC<NavBarProps> = ({active}): ReactElement => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='nav_wrapper'>
            <div className='nav_opener'>
                <div onClick={() => setOpenMenu(!openMenu)} 
                className={openMenu ? "hamburger_opener cross" : "hamburger_opener"}
                >
                    <span className='menu_line'></span>
                </div>
            </div>
            <div className={openMenu ? 'nav_container open_menu' : 'nav_container'}>
                <MenuDecor />
                <a className={active === 'relivable' ? 'active' : ''} href='/'
                >relivable</a>
                <a>pricing</a>
                <a onClick={() => setOpenMenu(!openMenu)} >about</a>
                <a>contact</a>
                <a onClick={() => setOpenMenu(!openMenu)} className='cta_gradient'>get started</a>
            </div> 
        </div>
    )
};

export default NavBar;