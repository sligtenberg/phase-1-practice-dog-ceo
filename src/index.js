document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then((json) => addImage(json));

    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((json) => addBreeds(json));

    document.getElementById('breed-dropdown').addEventListener('change', (event) => filterArray(event.target.value));
});

function filterArray(letter) {
    let breeds = document.getElementById('dog-breeds').children;
    console.log(breeds);
    for (let i = breeds.length - 1; i >= 0; i--) {
        if (breeds[i].textContent[0] != letter) {
            breeds[i].remove();
        }
    }
}

function turnElementBlue (element) {
    element.style.color = 'blue';
}

function addImage(dogs) {
    for (let dog of dogs.message) {
        let newDog = document.createElement('img');
        newDog.src = dog;
        document.getElementById('dog-image-container').appendChild(newDog);
    };
}

function addBreeds (breedsObj) {
    for (let breed in breedsObj.message) {
        let newBreed = document.createElement('li');
        newBreed.textContent = (breed);
        newBreed.addEventListener('click', (clickedBreed) => turnElementBlue(clickedBreed.target));
        document.getElementById('dog-breeds').appendChild(newBreed);
    }
}