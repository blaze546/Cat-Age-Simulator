document.querySelector('#check').addEventListener('click', convert)
const standard = document.querySelector('standard')
const body = document.querySelector('#body')

function convert() {
// declare age
    let age = document.querySelector('#age').value
//convert age
    age = age * 7
//display new age
    document.querySelector('#ageconversion').innerText = age
//change display based on age
    if(age <= 70) {
        document.querySelector('#standard').src = "Images/babysimba.jpeg"
        document.querySelector('body').style.backgroundColor = "#CF2A11"
        alert("Baby Cub Alert")
    }else if(age <= 140) {
        document.querySelector('#standard').src = "Images/youthsimba.jpeg"
        alert("Life of a Youth")
    }else if(age <= 175) {
        document.querySelector('#standard').src = "Images/midsimba.jpeg"
        alert("Fully Mature")
    }else if(age <= 455) {
        document.querySelector('#standard').src = "Images/adultsimba.jpeg"
        alert("Prime Years")
    }else if(age <= 700) {
        document.querySelector('#standard').src = "Images/old.jpeg"
        alert("Slow Decline")
    }else
    document.querySelector('#standard').src = "Images/Rip.jpeg"
}


