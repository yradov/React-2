class SwapServise {
    _apiBase = 'https://swapi.co/api';
    _peopleUrl = this._apiBase + '/people/';
    _planetsUrl = this._apiBase + '/planets/';
    _starshipsUrl = this._apiBase + '/starships/';

    async gerResource(url) {
        const resp = await fetch(url);

        if (!resp.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${resp.status}`);
        }

        return await resp.json();
    }//gerResource

    async getAllPeople() {
        const res = await this.gerResource(this._peopleUrl);
        return res.results;
    }//getAllPeople

    getPerson(id) {
        return this.gerResource(this._peopleUrl + id);
    }//getAllPeople

    async getAllPlanets() {
        const res = await this.gerResource(this._planetsUrl);
        return res.results;
    }//getAllPlanets

    getPlanet(id) {
        return this.gerResource(this._planetsUrl + id);
    }//getPlanet

    async getAllStarships() {
        const res = await this.gerResource(this._starshipsUrl);
        return res.results;
    }//getAllStarships

    getStarship(id) {
        return this.gerResource(this._starshipsUrl + id);
    }//getStarship

}//SwapServise

const swapi = new SwapServise();

swapi.getAllStarships().then((items) => {
    items.forEach((item) => {
        console.log(item.name);
    });
});

swapi.getStarship(3).then((item) => {
    console.log(item);
});





















