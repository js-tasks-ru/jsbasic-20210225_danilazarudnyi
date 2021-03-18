function makeDiagonalRed(table) {
  for (let row = 0; row < table.rows.length; row++) {
    table.rows[row].cells[row].style.backgroundColor = 'red';
  }
}