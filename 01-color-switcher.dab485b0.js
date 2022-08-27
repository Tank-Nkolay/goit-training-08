function o(o){const e={strawberry:"Клубника",kiwi:"Киви",apple:"Яблоко"};return new Promise((t=>setTimeout((()=>t(e[o])),500)))}!async function(){try{console.time("aMakeSmoothie");const e=o("apple"),t=o("kiwi"),i=o("strawberry"),n=await Promise.all([e,t,i]);console.log(n),console.timeEnd("aMakeSmoothie")}catch(o){console.log(o)}}();
//# sourceMappingURL=01-color-switcher.dab485b0.js.map
