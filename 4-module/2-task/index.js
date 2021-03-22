function makeDiagonalRed(table) {
  for (let rowIndex = 0; rowIndex < table.rows.length; rowIndex++) {
    table.rows[rowIndex].cells[rowIndex].style.backgroundColor = 'red';
  }
}