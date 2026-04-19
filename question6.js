// Create an object with personal details
const myProfile = {
  name: "Emediong",
  age: 28,
  country: "Nigeria",
  hobby: "Teaching kids coding"
};

// Create a function to display the profile
function displayProfile(person) {
  console.log(
    `${person.name} is ${person.age} years old, lives in ${person.country}, and loves ${person.hobby}.`
  );
}

// Call the function and pass in the object
displayProfile(myProfile);