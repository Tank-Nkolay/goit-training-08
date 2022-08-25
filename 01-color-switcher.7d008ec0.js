!function(o,t){const n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)};fetch(`http://localhost:3000/books/${t}`,n).then((o=>o.json())).then(console.log)}({title:"Страшная книга"},10),fetch("http://localhost:3000/books").then((o=>o.json())).then(console.log);
//# sourceMappingURL=01-color-switcher.7d008ec0.js.map
