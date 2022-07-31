console.log("emp wage problem")
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const IS_ABSENT = 0;

let empHours = 0 ;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch(empCheck) {
    case IS_PART_TIME :
            empHours = PART_TIME_HOUR;
            break;
    case IS_FULL_TIME :
            empHours = FULL_TIME_HOUR;
            break;
    default :
            empHours = 0;
}
let empWage = empHours * WAGE_PER_HOUR;
console.log("emp wage is " + empWage);