let num = 5;

let row = 0;

while (row < num) {
    let space = 1;
    while (space < num-row) {
        process.stdout.write("\t");
        space++;
    }
    space = space - 1;
    let col = 0;
    let count = 0;
    while (col <=  num-space+row-1) {
        if (col <= row) {
            process.stdout.write(count + 1 + "\t");
            count++;
        }
        else if (col > row) {
            count--;
            process.stdout.write(count + "\t");
            
        }
        col++;
    }
    console.log();
    
    row++;
}