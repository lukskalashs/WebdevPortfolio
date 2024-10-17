

let count = 0;
setInterval(() => {
    console.log(count);
    // count++;
}, 1);



const url = 'https://restcountries.com/v3.1/all';


const GetSA = (arr) => {
    arr.find(e => e.cca2 === "ZA")
    const ans = arr.filter(e => e.region === "Africa")
    console.log(ans)
}
// const findSA = (arr) => {
//     // for(let index = 0; index < arr.length; index++)
//     // {
//     //     const element = arr[index];
//     //     if(element.cca2 ==="ZA")
//     //         return element;
    
//     // }

//     let ans = arr.find(e => e.cca2 === "ZA");
//     console.log(ans)
// }
const changeJogn = (data) => {
    const SouthAH = GetSA(data);
    console.log(SouthAH);
    document.getElementById("profilePhoto").src = SouthAH.flags.png
    
}
const data = fetch(url).then((respnse)=> {
    console.log(respnse);
    respnse.json().then(data =>{
        console.log(data);
        changeJogn(data)
    })
})
console.log(data)

//thenable stuff
//fetch it then .,...




const payload = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": true
}


const requestOptions = {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ title: 'Fetch POST Request Example' })
};


const send = (task) => {
    fetch()
}