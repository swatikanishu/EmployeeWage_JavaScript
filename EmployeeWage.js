console.log("emp wage problem")
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 100;
const findTotal = (totalValue, dailyValue) => {
    return totalValue + dailyValue;
}

let employeeDailyWageAndHoursArray = new Array();
let nonWorkingDays = new Array();
let partTimeWorkingDays = new Array();
let fullTimeWorkingDays = new Array();
let totalEmployeeHours = 0;
let totalWorkingDays = 0;
let totalEmployeeWage = 0;
let dayCounter = 0;

function calculateDailyWage(employeeHours) {
    return employeeHours * WAGE_PER_HOUR;
}

function getWorkingHours(employeeCheck) {

    switch (employeeCheck) {

        case IS_PART_TIME:
            console.log("Employee works Part Time");
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            console.log("Employee works Full Time");
            return FULL_TIME_HOURS;

        default:
            console.log("Employee is ABSENT");
            return 0;
    }
}

function totalWagesUsingForEach(dailyWage) {
    totalEmployeeWage += dailyWage;
}

function totalWageUsingReduce(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

//Use Case - 10
while (totalEmployeeHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    totalEmployeeHours += employeeHours;
    employeeDailyWageAndHoursArray.push(
        {
            dayNumber: totalWorkingDays,
            dailyHours: employeeHours,
            dailyWage: calculateDailyWage(employeeHours),
            toString() {
                return "\nDay" + this.dayNumber + " => Working Hours = " + this.dailyHours + " And Wage Earned = " + this.dailyWage;
            },
        }
    );
}

console.log("\nShowing Daily Wages and Hours Worked Using Objects : ");
console.log(employeeDailyWageAndHoursArray);

//Calculating Total Employee Wage Using ForEach
employeeDailyWageAndHoursArray.forEach(totalWagesUsingForEach);
console.log("\nTotal Working Days = " + totalWorkingDays + "\nTotal Working Hours = " + totalEmployeeHours + "\nTotal Employee Wage = " + totalEmployeeWage);

//Calculating Total Employee Wage Using Reduce
console.log("\nEmployee Wage With Reduce : " + employeeDailyWageAndHoursArray.reduce(totalWageUsingReduce, 0));

//Find first occurence when full time wage was eared using find function
let firstFullTimeWage = employeeDailyWageAndHoursArray
    .find(dailyHoursAndWage => dailyHoursAndWage.dailyWage == 160)
    .dayNumber;
console.log("\nFirst Full Time Wage was Earned on Day : " + firstFullTimeWage);

//Check if every element of full time wage is truely holding full time wage
let isAllFullTimeWage = employeeDailyWageAndHoursArray
    .every(dailyHoursAndWage => dailyHoursAndWage.dailyWage == 160)
console.log("\nCheck All Element Have Full Time Wage: " + isAllFullTimeWage);

//Check if there is any Part Time Wages
let isSomePartTimeWage = employeeDailyWageAndHoursArray
    .some(dailyHoursAndWage => dailyHoursAndWage.dailyWage == 80)
console.log("\nCheck If Any Part Time Wage: " + isSomePartTimeWage);

//Find Number of days the Employee Worked
let numberOfDaysEmployeeWorked = employeeDailyWageAndHoursArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours > 0)
    .length;
console.log("\Number of Days the Employee has Worked = " + numberOfDaysEmployeeWorked);

//Use Case - 8
employeeDailyWageAndHoursArray.forEach(dailyHoursAndWage => {
    if (dailyHoursAndWage.dailyHours == 8) fullTimeWorkingDays.push(dailyHoursAndWage.dayNumber);
    else if (dailyHoursAndWage.dailyHours == 4) partTimeWorkingDays.push(dailyHoursAndWage.dayNumber);
    else nonWorkingDays.push(dailyHoursAndWage.dayNumber)
});

console.log("\nFull working days: " + fullTimeWorkingDays);
console.log("\nPart working days: " + partTimeWorkingDays);
console.log("\nNon working days: " + nonWorkingDays)

//Use Case - 11
//11A
let totalWages = employeeDailyWageAndHoursArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyWage > 0)
    .reduce((totalWages, dailyHoursAndWage) => totalWages += dailyHoursAndWage.dailyWage, 0);

let totalHours = employeeDailyWageAndHoursArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours > 0)
    .reduce((totalHours, dailyHoursAndWage) => totalHours += dailyHoursAndWage.dailyHours, 0);
console.log("\nTotal Hours = " + totalHours + "\nTotal Wages = " + totalWages);

//11B
process.stdout.write("\nLogging Full Work Days : ");
employeeDailyWageAndHoursArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 8)
    .forEach(dailyHoursAndWage => process.stdout.write(dailyHoursAndWage.toString()));

//11C
let partTimeWorkingDaysStringArray = employeeDailyWageAndHoursArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 4)
    .map(dailyHoursAndWage => dailyHoursAndWage.toString());
console.log("\n\nPart Time Working Days : " + partTimeWorkingDaysStringArray);

//11D
let nonWorkingDaysNumber = employeeDailyWageAndHoursArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 0)
    .map(dailyHoursAndWage => dailyHoursAndWage.dayNumber);
console.log("\nNon Working Days : " + nonWorkingDaysNumber);

