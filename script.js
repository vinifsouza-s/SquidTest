async function infoapi() {
    const url = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
    const res =  await url.json();
    console.log(res)
}

infoapi();
  