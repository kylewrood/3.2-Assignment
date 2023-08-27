import React from "react"
import Genre from "./Genre"
import BHC from "../images/BHC.jpg"
import HG from "../images/HG.jpg"
import TC from "../images/TC.jpg"
import DD from "../images/DD.jpg"
import FBDO from "../images/FBDO.jpg"
import VV from "../images/VV.jpg"






 function Container(){
return (
        <>
        <h1>Movie App</h1>

        <Genre
        genreType="Comedy"

        movTitle1="Beverly Hills Cop"
        movInfo1="After the murder of his childhood friend, the slick Detroit detective, Axel Foley, heads to sunny Beverly Hills, on a one-man mission to ferret out the killer and bring him to justice. "
        movYear1="1984"
        movRated1="R"
        movImg1={BHC}

        movTitle2="Happy Gilmore"
        movInfo2="A Hockey player wannabe finds out that he has the most powerful golf drive in history. He joins the P.G.A. tour to make some money to save grandma's house. The downside is that his hockey player mentality doesn't really go on the P.G.A. tour. Especially with the favorite to win the championship."
        movYear2="1996"
        movRated2="PG-13"
        movImg2={HG}
        
        movTitle3="Ferris Bueller's Day Off"
        movInfo3="A popular high school student, admired by his peers, decides to take a day off from school, and goes to extreme lengths to it pull off"
        movYear3="1986"
        movRated3="PG-13"
        movImg3={FBDO}

        movTitle4="Vegas Vaction"
        movInfo4="The Griswolds are off on a family outing to Las Vegas, where they each have their own misadventures."
        movYear4="1997"
        movRated4="PG"
        movImg4={VV}></Genre>
        
        <Genre
        genreType="Romance"

        movTitle1="The Choice"
        movInfo1= "A bachelor's rocky first encounter with his new neighbor leads to a passionate love story filled with hope and hardship. Based on Nicholas Sparks' novel."
        movYear1="2016"
        movRated1="PG-13"
        movImg1={TC}

        movTitle2="Dirty Dancing"
        movInfo2= "Spending the summer at a Catskills resort with her family, Frances 'Baby' Houseman falls in love with the camp's dance instructor, Johnny Castle."
        movYear2="1987"
        movRated2="PG-13"
        movImg2={DD}></Genre>

        </>
    );
}

export default Container;


