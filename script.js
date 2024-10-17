const myFunc = (otherFunc) => {
    otherFunc();
}

myFunc(() => {
    console.log("Im the other Function");
});



let title = document.getElementById("title")




let OldTitle = title.innerText;
let newTitle = "BBD is great"

let image = document.getElementById("profilePhoto");
console.log(image);
let body = document.getElementsByTagName("body")[0];
console.log(body);

let OtherImage = image.cloneNode(true)
function  SayHello()
{
    // let TempImage = image
   
    body.appendChild(OtherImage);
}