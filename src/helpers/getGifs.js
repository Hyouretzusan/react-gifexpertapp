
export const getGifs = async( category ) => {

    const apiKey = "U1hiTxfU3ceGy8WZqQtL87pa4Ia0IM2T";
    const limit = 10;
    const respuesta = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=${limit}`
    );
    const {data} = await respuesta.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });

    // console.log(gifs);
    return gifs;
}
