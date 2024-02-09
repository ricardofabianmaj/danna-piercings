import React, { useEffect } from "react";
import './DefaultBar.css'

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { useRecoilState } from "recoil";
import CombinedVar from "../../atoms/CombinedVar";
import SearchedTerm from "../../atoms/SearchedTerm";

import ShowComponent from "../ShowComponent/ShowComponent";
import Favorites from "../Favorites/Favorites";

import { Argola } from "../../Piercings/Argola";
import { BananaBell } from "../../Piercings/BananaBell";
import { Barbell } from "../../Piercings/Barbell";
import { Labret } from "../../Piercings/Labret";
import { MicrodermalSurface } from "../../Piercings/MicrodermalSurface";
import { Cristina } from "../../Piercings/Cristina";
import SelectedPiercings from "../../atoms/SelectedPiercings";



function DefaultBar() {
    const DannaLogo = require("./DannaLogo.png")
    const FavoriteIcon = require('./Favorites.png')
    const [AllPiercings, setAllPiercings] = useRecoilState(CombinedVar);
    const [searchTerm, setSearchTerm] = useRecoilState(SearchedTerm);
    const [FavoritesPiercing, setFavoritesPiercing]: any= useRecoilState(SelectedPiercings)

    

    return (
        <div id="DefaultBar">
            <div id="UpPart">
                <a href="https://www.instagram.com/dannatattoo/" target="_blank">
                    <img className="midia" src={DannaLogo} alt="Danna Logo" />
                </a>
                <input type="text"
                    name="searchBar"
                    id="searchBar"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Pesquise o piercing que deseja aqui..." />
                <Link to='/carrinho'>
                    <img className="midia" src={FavoriteIcon} alt="" />
                </Link>
            </div>
                <nav>
                    <Link to='/'>Todos</Link>
                    <Link to='/Argola'>Argolas</Link>
                    <Link to='/BananaBell'>BananaBell</Link>
                    <Link to='/Barbell'>Barbell</Link>
                    <Link to='/Labret'>Labret</Link>
                    <Link to='./MicrodermalSurface'>Microdermal ou Surface</Link>
                    <Link to='./Cristina'>Cristina</Link>
                </nav>
                <Routes>

                    <Route path='/' element={<ShowComponent SearchTermVar={searchTerm} ShowVar={AllPiercings} />} />
                    <Route path='/carrinho' element={<Favorites SearchTermVar={searchTerm} ShowVar={FavoritesPiercing} />} />
                    <Route path="/Argola" element={<ShowComponent SearchTermVar={searchTerm} ShowVar={Argola} />} />
                    <Route path='/BananaBell' element={<ShowComponent SearchTermVar={searchTerm} ShowVar={BananaBell} />} />
                    <Route path='/Barbell' element={<ShowComponent SearchTermVar={searchTerm} ShowVar={Barbell} />} />
                    <Route path='/Labret' element={<ShowComponent SearchTermVar={searchTerm} ShowVar={Labret} />} />
                    <Route path='/MicrodermalSurface' element={<ShowComponent SearchTermVar={searchTerm} ShowVar={MicrodermalSurface} />} />
                    <Route path='/Cristina' element={<ShowComponent SearchTermVar={searchTerm} ShowVar={Cristina} />} />
                </Routes>

        </div>
    )
}

export default DefaultBar;
