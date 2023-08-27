import Movies from "./Movies"
import Container from "./Container";



function Genre({

    genreType,
    movTitle1,
    movTitle2,
    movInfo1,
    movInfo2,
    movYear1,
    movYear2,
    movRated1,
    movRated2,
    movImg1,
    movImg2,
    

})
{
    return (
        <>
        <h1>{movTitle1}</h1>
        <p>{movInfo1}</p>
        <p>{genreType}</p>
        <p>{movYear1}</p>
        <p>{movRated1}</p>
        
        <div>
            <Movies
                title={movTitle1}
                info={movInfo1}
                year={movYear1}
                rated={movRated1}
                image={movImg1}
            ></Movies>        
        <h1>{movTitle2}</h1>
        <p>{movInfo2}</p>
        <p>{genreType}</p>
        <p>{movYear2}</p>
        <p>{movRated2}</p>
            <Movies
                title={movTitle2}
                info={movInfo2}
                year={movYear2}
                rated={movRated2}
                image={movImg2}
            ></Movies>

        </div>
        </>
    )
}

export default Genre;