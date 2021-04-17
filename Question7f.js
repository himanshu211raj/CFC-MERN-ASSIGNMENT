let n = 5;
let row = 0;
let row_mirr = 0;
while (row_mirr < 2 * n -1) {
    let col_mirr = 0;
    let col = 0;
    while (col_mirr < 2 * n -1)
    {
        if (col < n - row -1) {
            process.stdout.write("\t");
        }
        else {
            process.stdout.write("*\t");
        }
        if (col_mirr < n - 1) {
            col++;
        }
        else {
            col--;
        }
        col_mirr++;
        
    }
    if (row_mirr < n - 1) {
        row++;
    }
    else {
        row--;
    }
    
    console.log();
    row_mirr++;
}