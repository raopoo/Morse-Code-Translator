//Create html with 2 input boxes and a button when clicked the text is converted
//English box- can take in only alphabets and numbers
//Morse code box- can take only dots and dashes
//The 1st click of the button will check if both the boxes have text, if it does, it has to clear both the boxes
//If only one box has text, then the translator will be called
//Write seperate functions for eng to morse and morse to english


//Functions :-
//clearfunction:- clears both the input boxes
//engtomorse:- converts english to morse
//morsetoeng:- coverts morse to english

//1 function for breaks a sentence
//one for breaking the word into characters
//funct to cobnvert each character to morse



import { translateToMorse } from '../engToMorse/translateToMorse.js';
import { translateToEng } from '../morseToEng/translateToEng.js';
import clearInput from './clearInput.js';


const engInput = document.getElementById("engInput");
const engResult = document.getElementById("engResult");
const engBtn = document.getElementById("engBtn");
const morseInput = document.getElementById("morseInput");
const morseResult = document.getElementById("morseResult");
const morseBtn = document.getElementById("morseBtn");

//let inputText = engInput.value;


const engBtnHandler = () =>{

     if(engInput.value && engResult.value) clearInput(engInput, engResult);
     if(engInput.value !== "") 
     engResult.value = translateToMorse(engInput.value);
  
}
const morseBtnhandler = () =>{
    
    if(morseInput.value && morseResult.value) clearInput(morseInput, morseResult);
     if(morseInput.value !== "") morseResult.value = translateToEng(morseInput.value);

}


//Clear both the input box if they have text
engBtn.addEventListener('click', engBtnHandler);
morseBtn.addEventListener('click', morseBtnhandler)