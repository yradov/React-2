export default class SwapServise {
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
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }//getAllPeople

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }//getPerson

    async getPlanet(id) {
        const planet = await this.gerResource(this._planetsUrl + id);
        return this._transformPlanet(planet);
    }//getPlanet

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }//getAllStarships

    async getStarship(id) {
        const starship = this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }//getStarship

    _extractIdFromUrl(item) {
        const idRegExp = /\/([0-9]+)\/$/;
        return item.url.match(idRegExp)[1];
    }//_extractIdFromUrl

    _transformPlanet(planet) {
        return {
            id: this._extractIdFromUrl(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }//_transformPlanet

    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }//_transformStarship

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }//_transformPerson
}//SwapServise

// const swapi = new SwapServise();
//
// swapi.getAllStarships().then((items) => {
//     items.forEach((item) => {
//         console.log(item.name);
//     });
// });
//
// swapi.getStarship(3).then((item) => {
//     console.log(item);
// });
//




















