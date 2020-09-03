import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PropsTypeHeaderComponent} from "./HeaderContainer";

const Header = (props: PropsTypeHeaderComponent) => {
    return (
        <header className={classes.header}>
            <img src="#" alt=""/>
            <div className={classes.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header