import React from "react";
import { Helmet } from 'react-helmet-async';
import { Outlet } from "react-router-dom";
import Logo from "../../images/logo.png"

function Nav() {
    return (
        <>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="https://use.typekit.net/tea5hxu.css"/>
                <link rel="stylesheet" href="https://use.typekit.net/bnh1yic.css"/>
                <link href="ressources/css/cssreset.css" type="text/css" rel="stylesheet"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
                <link href="ressources/css/cssfont.css" type="text/css" rel="stylesheet"/>
                <link href="ressources/css/style.css" type="text/css" rel="stylesheet"/>
                <script src="https://kit.fontawesome.com/efce024695.js" crossorigin="anonymous"></script>
                <title>Prolofique - Choose your music !</title>
            </Helmet>
            <nav class="navbar navbar-expand-sm fixed-top">
            <div class="container-fluid justify-content-center">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="home" class="navbar-brand">
                            <img id="navlogo" src={Logo}></img>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="catalog">Catalogue</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="commandes">Commandes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="faq">FAQ</a>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
    </>
    )
}

export default Nav;