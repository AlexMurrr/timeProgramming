

async function gett () {
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const bdres = await res.json();
console.log(bdres)
}
gett()