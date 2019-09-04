const url = 'https://swapi.co/api/people/123123123/';

// fetch(url)
//     .then((resp) => {
//         return resp.json();
//     })
//     .then((body) => {
//         console.log(body);
//     });

const gerResource = async (url) => {
    const resp = await fetch(url);

    if (!resp.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${resp.status}`);
    }

    const body = await resp.json();
    return body;
};

gerResource(url)
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.log('Could not fetch', err);
    });