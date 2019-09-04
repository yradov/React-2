
class SwapServise {
    _apiBase = 'https://swapi.co/api';
    _peopleUrl = this._apiBase + '/people/';

    async gerResource(url) {
        const resp = await fetch(url);

        if (!resp.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${resp.status}`);
        }

        return await resp.json();
    }//gerResource

    getAllPeople() {
        return this.gerResource(this._peopleUrl);
    }//getAllPeople

    getPerson(id) {
        return this.gerResource(this._peopleUrl + id);
    }//getAllPeople

}//SwapServise

const swapi = new SwapServise();

swapi.getAllPeople().then((body) => {
    console.log(body);
});





















