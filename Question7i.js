let n = 5;
let row = 0;
let temp = n;
let row_mirr = 0;
while (row_mirr < 2 * n - 1) {
    temp = n;
    let col = 0;
    let col_mirr = 0;
    while (col_mirr < 2 * n - 1) {
        process.stdout.write(temp + " ");
        if (col_mirr < row) {
            temp--;
        }
        else if (col_mirr >= 2 * n - 2 - row) {
            temp++;
        }

        if (col_mirr < n - 1) {
            col++;
        }
        else {
            col--;
        }
        col_mirr++;
    }
    process.stdout.write("\n");
    if (row_mirr < n - 1) {
        row++;
    }
    else {
        row--;
    }
    row_mirr++;
}