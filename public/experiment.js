const fetch = require("node-fetch");

async function gett() {
  const res = await fetch("http://localhost:8080/result");
  const bdres = await res.json();
  console.log(bdres);
}
gett();
