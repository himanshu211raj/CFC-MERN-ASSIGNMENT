let number1 = 17;
let number2 = 17;
let n = 2;
let gcd = 1;
while (n <= number1 && n <= number2) {
    if (number1 % n == 0 && number2 % n == 0){
        gcd = n;
    }
    n++;
}
console.log(gcd);