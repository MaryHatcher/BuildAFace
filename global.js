let apiURL = "https://api.airtable.com/v0/appfpNrWrfHX35OUq/Eyes?api_key=keyxQ4wY1Vc8wTQNZ" // this is the link found under EXAMPLE USING QUERY PARAMETER and my API KEY then replace the name with TABLE ID
let eyesURL ="https://api.airtable.com/v0/appfpNrWrfHX35OUq/Eyes?api_key=keyxQ4wY1Vc8wTQNZ"
let browsURL ="https://api.airtable.com/v0/appfpNrWrfHX35OUq/Brows?api_key=keyxQ4wY1Vc8wTQNZ"
let mouthsURL ="https://api.airtable.com/v0/appfpNrWrfHX35OUq/Mouths?api_key=keyxQ4wY1Vc8wTQNZ"
let bodiesURL ="https://api.airtable.com/v0/appfpNrWrfHX35OUq/Bodies?api_key=keyxQ4wY1Vc8wTQNZ"
let hairsURL ="https://api.airtable.com/v0/appfpNrWrfHX35OUq/Hairs?api_key=keyxQ4wY1Vc8wTQNZ"
let nosesURL ="https://api.airtable.com/v0/appfpNrWrfHX35OUq/Noses?api_key=keyxQ4wY1Vc8wTQNZ"

let data; //this is a global variable to store all the data from the database

//this is where u "call" your data

//asynchronous (javascript reads coad at same time, not line by line)
//async just means itll happen seperate to rest of code. will not interfere with other things
//dont want data to interfere with other things so just in case there are errors everything else will work fine
async function getData(url){
    //response I get from my client API
    let response = await fetch(url);
    let jsonData = await response.json();
    return jsonData;
}

let eyesImage = document.createElement("img"); 
window.addEventListener('load', (eyesLoad)) 
   function eyesLoad() {
       document.getElementById("eyesdiv").appendChild(eyesImage);
       }
let browsImage = document.createElement("img"); 
window.addEventListener('load', (browsLoad)) 
   function browsLoad() {
    document.getElementById("browsdiv").appendChild(browsImage);
       }
let mouthsImage = document.createElement("img"); 
window.addEventListener('load', (mouthsLoad)) 
   function mouthsLoad() {
    document.getElementById("mouthdiv").appendChild(mouthsImage);
       }
let bodiesImage = document.createElement("img"); 
window.addEventListener('load', (bodiesLoad)) 
   function bodiesLoad() {
       document.getElementById("bodydiv").appendChild(bodiesImage);
       }
let hairsImage = document.createElement("img"); 
window.addEventListener('load', (hairsLoad)) 
   function hairsLoad() {
    document.getElementById("hairdiv").appendChild(hairsImage);
       }

let nosesImage = document.createElement("img"); 
window.addEventListener('load', (nosesLoad)) 
   function nosesLoad() {
    document.getElementById("nosediv").appendChild(nosesImage);
       }



async function main(){

    apiData = await getData(apiURL);
    eyesData = await getData(eyesURL);
    browsData = await getData(browsURL);
    mouthsData = await getData(mouthsURL);
    bodiesData = await getData(bodiesURL);
    hairsData = await getData(hairsURL);
    nosesData = await getData(nosesURL);
    currentEye = 0;
    currentBrow = 0;
    currentMouth = 0;
    currentBody = 0;
    currentHair = 0;
    currentNose = 0;
    
    console.log(hairsData);

     for(let i = 0; i < hairsData.records.length; i++){

        //  let eye = 9;
         console.log(hairsData.records[i].fields.image[0].url);

         //or if u want date: console.log(apiData.records[i].fields.date);
        //  let heading = document.createElement("h2"); //CREATE ELEMENT!!!!!
        //  heading.innerHTML = "Eyes = " + eyes;
        //  document.body.appendChild(heading); //append child is look at something and add a child to it

        //  let image = document.createElement("img");
        //  image.src = eyesData.records[i].fields.image[0].url;
        // //  image.className = "image" + i; //if u want different class name per number
        //  document.body.appendChild(image);
     }

     
     document.getElementById("eyeb").addEventListener("click",nextEyes);
        function nextEyes(){
             if (currentEye < eyesData.records.length - 1){
                currentEye++;

        }else {
            currentEye= 0;
        }
        console.log(eyesData.records[currentEye].fields.color);
        eyesImage.src = eyesData.records[currentEye].fields.image[0].url;

        if (eyesData.records[currentEye].fields.color=== "green"){
            let eyesValue = 8;
            console.log(eyesValue);
        };
        if (eyesData.records[currentEye].fields.color=== "blue"){
            let eyesValue = 20;
            console.log(eyesValue);
        };
        }

     document.getElementById("browb").addEventListener("click",nextBrows);
        function nextBrows(){
           if (currentBrow < browsData.records.length - 1){
               currentBrow++;
   
           }else {
               currentBrow= 0;
           }
           console.log(currentBrow);
           browsImage.src = browsData.records[currentBrow].fields.image[0].url;

           if (browsData.records[currentBrow].fields.thickness=== "thin"){
            let browsValue = 100;
            console.log(browsValue);
        };
           }
           
     document.getElementById("mouthb").addEventListener("click",nextMouths);
        function nextMouths(){
           if (currentMouth < mouthsData.records.length - 1){
               currentMouth++;
   
           }else {
               currentMouth= 0;
           }
           console.log(currentMouth);
           mouthsImage.src = mouthsData.records[currentMouth].fields.image[0].url;
           }

     document.getElementById("bodyb").addEventListener("click",nextBodies);
        function nextBodies(){
           if (currentBody < bodiesData.records.length - 1){
               currentBody++;
   
           }else {
               currentBody= 0;
           }
           console.log(currentBody);
           bodiesImage.src = bodiesData.records[currentBody].fields.image[0].url;
           } 

     document.getElementById("hairb").addEventListener("click",nextHairs);
        function nextHairs(){
            if (currentHair < hairsData.records.length - 1){
                  currentHair++;
      
           }else {
                currentHair= 0;
              }
            console.log(currentHair);
            hairsImage.src = hairsData.records[currentHair].fields.image[0].url;
              }           
           
     document.getElementById("noseb").addEventListener("click",nextNoses);
        function nextNoses(){
            if (currentNose < nosesData.records.length - 1){
                  currentNose++;
      
           }else {
                currentNose= 0;
              }
            console.log(currentNose);
            nosesImage.src = nosesData.records[currentNose].fields.image[0].url;
              }
        console.log(eyesValue + browsValue);
              

        }

        

main();