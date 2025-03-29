const person = { 
    name: "Mike", 
    age: 25 
};

const timeOfDay = "sunny afternoon";
const mathResult = 2 + 2;
const booleanValue = timeOfDay.includes("afternoon");
const object1Owner = person.name;

let story = `One bright ${timeOfDay}, ${object1Owner} who is ${person.age} set sail on a pirate ship named The Black Pearl. 
    The endless sea stretched endlessly before us. Just then, we spotted a mysterious chest floating in the water. 
    'Could it be treasure?' the captain exclaimed. We hauled it aboard and opened it. 
    Did you know 5 × 5 equals ${mathResult}? False! The ${booleanValue} answer is 25!`;

document.getElementById("madlibs-output").textContent = story;
console.log(story);
