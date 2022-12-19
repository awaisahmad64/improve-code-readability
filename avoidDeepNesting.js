class User {
  valided() {
    return true;
  }
}
const userInstance = new User();
function deleteUser(user) {
  if (user != null) {
    console.log('Deleting User with deep nesting');
  }
}
deleteUser(1);
function validation() {
  if (userInstance.valided()) {
    console.log('user valid with deep nesting');
  }
}
validation();
// nesting your code too much is not good so use "return " Avoid Deep Nesting 
function deleteUser(user) {
  if (user == null) return;
  console.log('deleting user with avoid nesting');
}
deleteUser(1);
function validation() {
  if (!userInstance.valided()) return;
  console.log('user valid  with avoid nesting');
}
validation();
