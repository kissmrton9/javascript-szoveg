'use strict'
// 1.	Írj egy függvényt, ami paraméterként tetszőleges darabszámú objektumot merge-öl össze, 
//majd visszatér ezzel az objektummal! Az összefűzést úgy hajtsa végre, hogy az új objektum 
//property-jei egyszerű indexek legyenek (0, 1, 2, stb.) amik tartalmazzák a részobjektumokat!

console.log('1.feladat:')
const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
}
const merge = ( ...objects )=>({...objects});
console.log(merge(johnDoe,janeDoe));
//     // A végeredmény:
//     {
//         0: { 
//             firstName: 'John',
//             lastName: 'Doe'
//         },
//         1:  { 
//             firstName: 'Jane',
//             lastName: 'Doe'
//         }
//     }

// 2.	Írj egy olyan függvényt (tagged template) ami a paraméterként kapott texts, 
// values értékeket úgy adja vissza egy strigben, hogy a text értékek dőltek, a value-k 
// félkövérek legyenek, ha beillesztjük a html-be, tehát a megfelelő tagekkel kiegészített 
// stringet adjon vissza!
console.log('2.feladat');

const user = {
    firstName:'John',
    lastName:'Doe',
    age:'100'
}

function applyStyle(obj) {
    let result='';
    for (const i of Object.keys(obj)) {
    result += `<it>${i}</it>: <strong>${obj[i]}</strong>\n`;
    }
    return result;
}
console.log(applyStyle(user));


// 3.	Írj egy függvényt, ami első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges 
//számú tömb, amik stringeket tartalmaznak!
// A függvény:
// o	összefűz egy tömbbe az összes elemet,
// o	eltávolítja az ismétlődő elemeket,
// o	eltávolítja az összes olyan stringet, ami tartalmazza az első paraméterként megadott karaktert,
// o	eltávolítja a stringek végén lévő hite space karaktert
// o	visszaadja ezt az új tömböt.
// console.log('3.feladat');
console.log('3.feladat');
const p='k';
const arr1=['i', 's']
const arr2=['l', ' áh      ', 'n', 'y'];
const arr3=['i','     k       ']

function harmadikF(x,...y){
    let set = new Set([x,...y].flat());
    return Array
     .from(set)
     .filter(item=>!item.includes(p))
     .map(item => item.trim());
}

console.log(harmadikF(p,arr1,arr2,arr3));



// 4.	Alakítsd át úgy az előző feladatot, hogy ne egy függvényed legyen, hanem minden egyes részfeladat 
//legyen külön függvénybe szervezve, tehát:
// 1.	függvény: első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, amik stringeket tartalmaznak! A függvény összefűzi egy tömbbe az összes elemet és visszaadja ezt az új tömböt
// 2.	függvény: egy paraméterként kapott tömbből eltávolítja az ismétlődő elemeket és visszaadja az új tömböt
// 3.	függvény: egy paraméterként kapott tömb összes elem elejéről és végéről levágja a space karaktereket, visszaad egy új tömböt
// 

//Egyik függvénynél se módosítsd a paraméterként kapott tömböt. Mindig újat hozz létre! 
// Tartsd szem előtt, hogy egy függvény, csak egy dolgot csináljon!
console.log('4.feladat');

// const p='k';
// const arr1=['i', 's']
// const arr2=['l', 'á', 'n', 'y'];
// const arr3=['i','k']

function restParameter(x,...y){
    return [x,...y].flat();
}
// console.log(restParameter(p,arr1,arr2,arr3));

function deleteDuplicates(arr){
    let set = new Set(arr);
    return Array.from(set);
}
function deleteSpaces(arr){
    return arr.map(item => item.trim());
}
console.log(deleteSpaces(deleteDuplicates(restParameter(arr1,arr2,arr3))));
