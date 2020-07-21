const apiKey = 'cY7tIblMYNznGWmah9MHjKqKTY9HSdyI'

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)


request.then(resp => resp.json()).then(({data}) => 
{
    const {url} = data.images.original;
    const imag = document.createElement('img');
    imag.src = url;
    document.body.append(imag)
})
.catch(console.warn)