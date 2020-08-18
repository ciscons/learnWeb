let myVariable = document.querySelector('h1');
alert("Welcomeing Y'All!");

function multiply(num1,num2){
    let result = num1 * num2;
    return result;
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jfif') {
        myImage.setAttribute ('src','images/fireworks.jpg');
    } else {
        myImage.setAttribute ('src','images/firefox.jfif');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Welcome to the Developer's world!, " + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }