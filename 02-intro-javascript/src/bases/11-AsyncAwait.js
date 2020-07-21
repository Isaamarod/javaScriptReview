


const getImage = async() => {

    const apiKey = 'cY7tIblMYNznGWmah9MHjKqKTY9HSdyI'

    const request = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

    const {data} = await request.json();

    const {url} = data.images.original;
    const imag = document.createElement('img');
    imag.src = url;
    document.body.append(imag);
}

getImage();