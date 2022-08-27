function e(e){const o={strawberry:"Клубника",kiwi:"Киви",apple:"Яблоко"};return new Promise((i=>setTimeout((()=>i(o[e])),500)))}!async function(){console.time("aMakeSmoothie");const o=e("apple"),i=e("kiwi"),t=e("strawberry"),n=await Promise.all([o,i,t]);console.log(n),console.timeEnd("aMakeSmoothie")}();
//# sourceMappingURL=01-color-switcher.20a46ba4.js.map
