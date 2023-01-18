

async function re(){
 response = await fetch('https://jsonplaceholder.typicode.com/users/1');
let commits = await response.json();
return commits;
}
console.log(re());