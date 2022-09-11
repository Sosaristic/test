let rowNum = 1;
let myUnitValue = [];
let myGradeValue = [];
var gradeValue;
const tableContainer = document.querySelector('#my-table');
const mainContainer = document.querySelector('.table.wrapper');
var addButton = document.querySelector('.add');
var getDetailsContainer = document.querySelector('.get-details');
var courseCode = document.querySelector('#myText');
var myGrade = document.querySelector('#my-grade');
var myUnit = document.querySelector('#my-unit');
var numCourse = document.querySelector('.number-courses');

addButton.addEventListener('click', display);
function display(e){
  displayValue = e.target.innerText;
 if(displayValue == 'ADD COURSE'){
    addButton.innerText = 'SAVE';
    getDetailsContainer.style.display = 'block';
}
else{
  //inserting rows and cells
  var row = tableContainer.insertRow(rowNum);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var rowValue = parseInt(tableContainer.rows.length, 10) - 1;

numCourse.innerText = "NO OF COURSES: " + rowValue;
 
  cell1.innerText = courseCode.value;
    cell2.innerText = myGrade.value;
    cell3.innerText = myUnit.value;
   cell4.innerHTML = '<i class="fa fa-trash"></i>';
   //convert unit value to number
    var unitValue = parseFloat(myUnit.value, 10);
    myUnitValue.push(unitValue);
  
     gradeValue = myGrade.value;
   switch (gradeValue) {
     case 'A':
       myGradeValue.push(5 * unitValue)
       break;
       case 'B':
        myGradeValue.push(4 * unitValue)
        break;
        case 'C':
          myGradeValue.push(3 * unitValue)
          break;
          case 'D':
            myGradeValue.push(2 * unitValue)
            break;
            case 'E':
              myGradeValue.push(1 * unitValue)
              break;
              case 'F':
                myGradeValue.push(0 * unitValue)
                break;
   
     default:
       break;
   }
    
    rowNum++;
       addButton.innerText = 'ADD COURSE';
    getDetailsContainer.style.display= 'none';
}
}
// calculate function
let evaluate = document.querySelector('.calculate').addEventListener('click', calculate);
let sumOfGrade = 0;
let sumOfUnit = 0;
//summing the grade and unit arrays into sumofgrade and sumofunit
function calculate() {
  for (let i = 0; i < myGradeValue.length; i++) {
    sumOfGrade += myGradeValue[i];
  }
  for (let i = 0; i < myUnitValue.length; i++) {
    sumOfUnit += myUnitValue[i]
  }
  //divide grade by unit
  var ans = sumOfGrade / sumOfUnit;
   ans = ans.toFixed(2);
  let ansContainer = document.querySelector('.gp');
  ansContainer.style.textAlign = "center";

if (ans >= 4.5) {
  ansContainer.innerHTML = "Your GP is " + '<br>' + ans + '<br>' + "first class";
}
else if (ans >= 3.5) {
  ansContainer.innerHTML = "Your GP is " + '<br>' + ans + '<br>' + "second class upper";
}
else if (ans >= 2.5) {
  ansContainer.innerHTML = "Your GP is " + '<br>' + ans + '<br>' + "second class lower";
}
else if (ans >= 2.0) {
  ansContainer.innerHTML = "Your GP is " + '<br>' + ans + '<br>' + "third class";
}
else{
    ansContainer.innerHTML = "Your GP is " + '<br>' + ans + '<br>' + "pass";
}

}

