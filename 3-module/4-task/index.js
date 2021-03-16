function showSalary(users, age) {
  let user = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      user.push(`${users[i].name}, ${users[i].balance}`);
    }
  }
  return user.join('\n');
}
