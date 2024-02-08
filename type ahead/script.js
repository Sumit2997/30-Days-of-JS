const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = []
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))
console.log(cities);
const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

function numcomma(c){
    return c.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}

function findMatches(wordToMatch,cities){
    return cities.filter(place=>{
        const regex=new RegExp(wordToMatch,'gi');
        return place.city.match(regex)||place.city.match(regex);
    })
}

function displayMatches(){
    const match=findMatches(this.value,cities);
    const html=match.map(place=>{
        const regex=new RegExp(this.value,'gi');
        const cityName=place.city.replace(regex,`<span class="hl">${this.value}</span>`);
        const stateName=place.city.replace(regex,`<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numcomma(place.population)}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML=html;
}

input.addEventListener('change',displayMatches);
input.addEventListener('keyup',displayMatches);