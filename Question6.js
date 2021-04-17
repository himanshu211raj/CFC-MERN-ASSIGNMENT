let number = 5479;
let reversenum = 0;
let digit = number;

let count = 0;
while (digit > 1) {
    digit = digit / 10;
    count++;
}
while (number > 1) {
    reversenum += Math.trunc(number % 10) * Math.pow(10, count - 1);
    number = number / 10;
    count--;
}
console.log(reversenum);