// // Problem 1
// var date = new Date()
// var day = date.getDay()
// var dayArray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
// var dayName = dayArray[day]

// console.log(`So Today is ${dayName}`)

// var hours = date.getHours()
// var min = date.getMinutes()
// var sec = date.getSeconds()

// var fromatedMin = (min >= 9) ? `0${min}`: min
// var checkAmorPm = (hours >= 12)? "Am" : "Pm"
// var formate = (hours >= 12)? hours-12: hours

// console.log(`so Time is ${formate}:${min}:${sec} ${checkAmorPm}`)

// var year = date.getFullYear()
// var month = date.getMonth()+1
// var day = date.getDate()
// // console.log(day)
// var formatedDay = day >=9 ? day:`0${day}`
// var formatedMonth = month >= 9?month:`0${month}`
// console.log(`${formatedMonth}-${formatedDay}-${year}`)

//problem 2
// let a=12
// let b=13
// let c=16
// let s = (a+b+c)/2
// let areaOfTriangle = Math.sqrt(s*(s-a)*(s-b)*(s-c))
// console.log("Area of Three Side Triangle is "+areaOfTriangle)

// //problem 3
// let year = 1000
// if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
//   console.log(`${year} is leap year`)
// }else{
//   console.log(`${year} is not a leap year`)
// }

// // problem 3
// for(let year = 2014 ; year <= 2050 ; year++){
//   // year: The year you want the date to represent.
//   // 0: Represents January since months in JavaScript's   Date object are zero-indexed (i.e., 0 for January,   11 for December).
//   // 1: The day of the month (1st day)
//   let date = new Date(year,0,1)
//   // console.log(date.getDay())
//   if(date.getDay() === 0){
//     console.log(` 1st January will be a Sunday in ${year}`)
//   }
// }

// // problem 4
// let name = prompt("Enter name")
// let value = prompt("Enter value")

// let object = {}
// object["name"] = value // it is the way of assigning the key and value in object

// console.log(object)

// console.log(`The name is ${name} and the value is`, object.name)

// // problem 5
// let toFahernheit = (cTemp)=> {
//   return 5/9 * (cTemp-32) + '\xB0C'
// }
// let toCelcius = (fTemp) => {
//   return fTemp * (9/5) + 32 + '\xB0F'
// }
// console.log(toCelcius(25))
// console.log(toFahernheit(25))

// //problem 6
//  // Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. 

// let a = 2
// let b = 2
// let result = 0

// if(a===b){
//   result=(a+b) * 3
// }else{
//   result = a+b
// }
// console.log(result)

// problem 7
// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19. 

// let number = 25
// let result = 0
//  //let difference = Math.abs(number - 19)

// if(number <= 19){
//   result = 19 - number 
// }else{
//   result = (number - 19) * 3 
// }
// console.log(result)

// let absoluteDifference = (number) =>{
//   // let difference = Math.abs(number - 19) // it convert negative into positive integer
//   let result = (number <= 19) ? 19 - number : (number -19) * 3
//   return result
// }
// console.log(absoluteDifference(22))
// console.log(absoluteDifference(19))
// console.log(absoluteDifference(12))

// problem 8
const checkPairNumber = (num1 , num2) => {
  return (num1 === 50 || num2 === 50 ) || (num1 + num2 === 50)
}
console.log(checkPairNumber(25,25))