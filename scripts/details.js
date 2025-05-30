addEventListener("DOMContentLoaded", async function(){
    //grab search params from url
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get("id")
    console.log(songID)

    const response = await fetch("https://airy-absorbed-elm.glitch.me/api/songs/" + songID)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += `${song.title}`
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html += `
        <h3>Artist - ${song.artist} </h2>
        <p>Popularity - ${song.popularity} </p>
        <p>Release Date - ${song.releaseDate} </p>
        `

    document.querySelector("div").innerHTML = html
})
