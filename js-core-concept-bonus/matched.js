// const numbers = [45,56,76,25,98];

// for ( let i = 0 ; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers){
//     console.log(number);
// }
//------------------------
//---------------------------------------------
const products = [
    {id:1 , name:"walton phone", price: 18000},
    {id:2 , name:"samsung phone", price: 32000},
    {id:3 , name:"oppo phone", price: 16000},
    {id:4 , name:"mi phone", price: 14000},
    {id:5 , name:"maximus phone", price: 22000},
    {id:6 , name:"laptop", price: 130000},
    {id:7 , name:"mac book air", price: 159000},
    {id:8 , name:"lenevo laptop", price: 99000},
    {id:10 , name:"hp LapTop", price: 99000},
    {id:9 , name:"one phone", price: 49000},
]
// for (const product of products){
//     console.log(product);
// }

function matchedProducts (products,search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const ressult = matchedProducts(products, 'laptop');
console.log(ressult);
