let n = 5;
let row = 0;
let col;
while (row < n) {
    col = 0;
    while (col <= row) {
        
        process.stdout.write("*\t");
        col++;
    }
    row++;
    console.log();
}