const users = document.querySelector('.row');

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

function addDate(data) {
    const [date, time] = new Date(data).toLocaleString().split(' ');
    const [hour, minute] = time.split(':');
    return `${date} ${hour}:${minute}`;
  };

async function infoapi() {
    const url = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
    const res =  await url.json();
    console.log(res);


res.forEach((contents) => {

    const {  comentarios, criadoEm, link, 
        metadados: { engagement }, 
        imagens: { thumbnail: { url } }, 
        usuario: { username } } = contents; 

    const newContent = document.createElement('div');
        newContent.className = 
        "box";
        newContent.innerHTML = 
        `<a href=${link} target="_blank">
        <img src=${url} class="img-fluid image" />
        <div class="middle">
        <p>@${username}<p/>
        <p><i class="fas fa-comment">  ${comentarios}</i><p/>
        <p><i class="fas fa-heart">  ${engagement}</i></p>
        <p><i class="fas fa-calendar-alt">  ${addDate(criadoEm)}</i></p>
        </div></a>`;

        users.appendChild(newContent);
      });
}

document.addEventListener("DOMContentLoaded", function(){infoapi()});


