const a = 5;
let b = 5;

console.log(a + b);
console.log(a * b);
console.log(a / b);

const dayOfWeek = ["mon", "tue", "wed", "tue", "fri", "sat"];

dayOfWeek.push("sun");

console.log(dayOfWeek[dayOfWeek.length - 1]);

const player = {
  name: "ging",
  points: 10,
  fat: false,
  hello: (oterPersionName) => {
    console.log("hello " + oterPersionName + "!, my name is " + player.name);
  },
};

console.log(player.name);
player.cute = true;
console.log(player);

player.hello("ning");
