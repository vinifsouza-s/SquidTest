const users = document.querySelector('.row');


async function infoapi() {
    const url = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
    const res =  await url.json();
    console.log(res);


res.forEach((contents) => {
    const { imagens: { thumbnail: { url } } } = contents;
        let img = document.createElement('img');
        let newContent = document.createElement('div');
        newContent.className = "col";
        newContent.className = "box";
        img.className = "img-fluid";
        img.src = url;
        newContent.appendChild(img);
        users.appendChild(newContent);
      })

}

window.addEventListener("load", function () {
    const loader = document.createElement('div');
        loader.innerHTML = 
        `<div class="loader bigger border-lilac" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>`
        loader.className =     
        'loading';
        users.appendChild(loader);
        loader.className += " hidden";
});


document.addEventListener("DOMContentLoaded", function() {
    infoapi();
});


