function sumSalary(salaries) {
  let sum = 0;
  let key;
  for (key in salaries) {
    if (Number.isNaN(salaries[key]) ||
      salaries[key] == Number.POSITIVE_INFINITY ||
      salaries[key] == Number.NEGATIVE_INFINITY) {
    }
    else if (typeof salaries[key] == "number") {

      sum += salaries[key];
    }
  }
  return sum;
}
