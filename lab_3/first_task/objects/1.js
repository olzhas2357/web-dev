// let user = {
//     name: "John",
//     age:30
// };
// alert(user.name);
// alert(user.age);
//
// user.isAdmin = true;

// let user = {
//     name: "Olzhas",
//     age: 18,
//     isAdmin: true,
//     key: "heart"
// }
// user["likes birds"] = true;
// alert(user["likes birds"]);
// alert(user.isAdmin);
//

// let key = prompt("What do you want to know about the, user");
// let key="name"
// alert(user.key);

// let obj = {
//     for: 2,
//     let: 4,
//     cd: 23,
//     q: 23
// }
// alert(obj.cd + obj.for + obj.let + obj.q);


// let user = {name : "John"};
// let per1 = {canView: true};
// let per2 = {canEdit: true};
// Object.assign(user, per1, per2);
// alert(user.name);
// alert(user.canView);
// alert(user.canEdit);



// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };
//
// let clone = Object.assign({}, user);
//
// alert( user.sizes === clone.sizes ); // true, same object
//
// // user and clone share sizes
// user.sizes.width = 50;    // change a property from one place
// alert(clone.sizes.width); // 60, get the result from the other one


// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
//
//     return {
//         father: man,
//         mother: woman
//     }
// }
//
// let family = marry({
//     name: "John"
// }, {
//     name: "Ann"
// });
// alert(family.father)
// alert(family.mother)


// let calculator = {
//     sum() {
//         return this.a + this.b;
//     },
//
//     mul() {
//         return this.a * this.b;
//     },
//
//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     }
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         alert( this.step );
//         return this;
//     }
// };
//
// ladder.up().up().up().showStep().up().showStep().down().showStep(); // shows 1 then 0


// let obj = {};
//
// function A() { return obj; }
// function B() { return obj; }
//
// alert( new A() == new B() ); // true
//
//
// function Calculator() {
//
//     this.read = function() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     };
//
//     this.sum = function() {
//         return this.a + this.b;
//     };
//
//     this.mul = function() {
//         return this.a * this.b;
//     };
// }
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
//
//
// function Accumulator(startingValue) {
//     this.value = startingValue;
//
//     this.read = function() {
//         this.value += +prompt('How much to add?', 0);
//     };
//
// }
//
// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);



