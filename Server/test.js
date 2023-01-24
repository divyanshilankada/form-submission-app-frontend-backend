let a=b='abc';
a+='d';
console.log(b);

let x=y=[1,2,3];
x.push(4);
console.log(y);

console.log(x.__proto__ == Array.prototype);

//console.log(x.reduce((a,b) => a+b));


// class Example {

// 	constructor(name)
// 	{
// 		this.name = name;
// 	}

// 	Print()
// 	{
// 		console.log(this.name);
// 	}
// }

// const ex = new Example("Divyanshi");
// ex.Print();

//console.log(Array.prototype)