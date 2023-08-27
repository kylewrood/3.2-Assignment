function Movies({title,info,rated,image,year}) {
    return (
        <>
        <img src={image}></img>
        <h1 title={title}></h1>
        <h2 info={info}></h2>
        <h2 rated={rated}></h2>
        <p year={year}></p>
        </>
    )
}

export default Movies;