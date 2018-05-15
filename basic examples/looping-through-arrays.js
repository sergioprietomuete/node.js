var pets = ['cat', 'dog', 'rat'];
var numArray = pets.length

for (var i = 0; i < numArray; i++) {
	pets[i] = pets[i] + 's';
}
console.log(pets);