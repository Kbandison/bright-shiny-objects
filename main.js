// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

let createUser = (firstName, lastName) => {
  let user = {
    firstName: firstName,
    lastName: lastName
  }
  return user;
}

let setAge = (user, age) => {
  user.age = age;
  return user;
}

function incrementAge(user) {
  user.age = user.age + 1;
  return user;
}

function fixCar(car){
  car.needsMaintenance = false;
  return car;
}

function addGrades(student, newGrades){
  student.grades = student.grades.concat(newGrades);
  return student;
}

function getDataType(car, key){
  let type = key;

  type = typeof car[key];
  return type;
}

function addTodo(items, newItem){
  items.push(newItem);
  return items;
}

function addSong(playlist, newSong){
  playlist.songs.push(newSong);
  playlist["duration"] = (playlist["duration"] += newSong["duration"]);
  return playlist;
}

function updateReportCard(report, newGrade){
  report.grades.push(newGrade);
  let highGrade = report.grades[0];
  let lowGrade = report.grades[0];
  let total = 0;

  for(let i = 0; i < report.grades.length; i++){
    total += report.grades[i];
    if (report.grades[i] < lowGrade && report.grades[i] < report.grades[i + 1]){
      lowGrade = report.grades[i];
    } else if (report.grades[i + 1] < lowGrade && report.grades[i] > report.grades[i + 1]){
      lowGrade = report.grades[i + 1];
    } else if (report.grades[i] > highGrade && report.grades[i] > report.grades[i + 1]){
      highGrade = report.grades[i];
    } else if (report.grades[i + 1] > highGrade && report.grades[i] < report.grades[i + 1]){
      highGrade = report.grades[i + 1];
    }
  }

  let average = total / (report.grades.length);
  average = Number((Math.round(average * 2) / 2).toFixed(1));

  report.lowestGrade = lowGrade;
  report.highestGrade = highGrade;
  report.averageGrade = average

  return report;
}


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
