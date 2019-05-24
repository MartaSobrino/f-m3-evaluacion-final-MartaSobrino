const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const data = () => fetch(ENDPOINT).then(res => res.json())

export {data};