// // Problem 1
// Write a JavaScript program to get the current date.  
//Write a JavaScript program to display the current day and time in the following format.  

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
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

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
// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

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
// Write a JavaScript exercise to create a variable using a user-defined name.  

// let name = prompt("Enter name")
// let value = prompt("Enter value")

// let object = {}
// object["name"] = value // it is the way of assigning the key and value in object

// console.log(object)

// console.log(`The name is ${name} and the value is`, object.name)

// // problem 5
// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C


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
// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  

// const checkPairNumber = (num1 , num2) => {
//   return (num1 === 50 || num2 === 50 ) || (num1 + num2 === 50)
// }
// console.log(checkPairNumber(25,25))

// problem 9
//Write a JavaScript exercise to get the filename extension. 

// function FileExtension(string){
//     let result =string.split(".").pop()
//     return `The file extension is ${result}`
// }
// console.log(FileExtension("abc.java"))

// problem 10
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

// function CheckInteger(num1,num2){
//     let result = (num1 >=50 &&num1<=99) || (num2 >=50 &&num2<=99) ? true : false
//     return result
// }

// console.log(CheckInteger(15,80))


// problem 9
// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.  

// function beforeScript(string){
//     let result = string.substring(4,10) === "script" ? string.substring(0,4) : string
//     return result
// }
// console.log(beforeScript("Javascript"))
// console.log(beforeScript("Java script"))
// console.log(beforeScript("Coffeescript"))

// problem 10
// Write a JavaScript program to reverse a given string.  

// let reversedString = (string) => {
//     let splitString = string.split("")
//     let EmptyArray = []
//     for(let i = splitString.length ; i>=0 ; --i){
//         EmptyArray.push(splitString[i])
//     }
//     return EmptyArray.join('')
// }
// console.log(reversedString("Nikesh"))


// simple way

// let reversedString = (string) => {
//     return string.split("").reverse().join("");  
// };

// console.log(reversedString("Nikesh"));

// problem 11
// Write a JavaScript program to capitalize the first letter of each word in a given string.

// let capitalizeFirstLetter = (string) => {
//     let StringIntoArray = string.split(" ")
//     for(let i = 0 ; i >= StringIntoArray.length ; i++){
//        StringIntoArray[i] = StringIntoArray[i][0].toUpperCase() + StringIntoArray[i].substring(1)
//     }
//     return StringIntoArray.join(' ')
// }
// console.log(capitalizeFirstLetter("Nikesh Shrestha"))

// problem 12
// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.

// let upperCase = (string) => {
//     if(string.length < 3){
//        return string.toUpperCase() 
//     }
//     return frontSting = string.substring(0,3).toLowerCase() + string.substring(3).toUpperCase()

// }

// console.log(upperCase("Ja"))
// console.log(upperCase("JaVa"))
// console.log(upperCase("JavaScript"))

// problem 13
// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

// let number = (a,b,c)=>{
//     let checkNumber = (a === b && b===c && c===a) ? 30 : (a===b || b===c || c===a) ? 40:20 
//     return checkNumber
// }
// console.log(number(12,12,13))
// console.log(number(11,12,11))
// console.log(number(12,15,14))
// console.log(number(12,15,15))
// console.log(number(15,15,15))

// problem 14
// Write a JavaScript application that transforms a provided numerical value into hours and minutes.

// let NumberIntoTime =(num) => {
//     // let hrs = Math.floor(num / 60)
//     // let min = num % 60

//     return Math.floor(num / 60) +"hrs"  +  num % 60 +"min"
// }

// console.log(NumberIntoTime(750))
// console.log(NumberIntoTime(450))
// console.log(NumberIntoTime(1441))

// problem 15
// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

// let swapFirstAndLast = (string)=>{
//     // let checkString = string.length <= 1 && console.log(string) 

//     if(string.length <= 1){
//         return string
//     }
//     let middleChar = string.substring(1,string.length-1)
//     return string.at(string.length -1) + middleChar + string.at(0)
// }
// console.log(swapFirstAndLast("nikesh"))
// console.log(swapFirstAndLast("n"))

// problem 16
// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  

// let addFrontToLast = (string) => {
//     if(string.length <= 1){
//         return string
//     }
//     let firstChar = string.substring(0,1)

//     return firstChar + string + firstChar
// }
// console.log((addFrontToLast("nikesh")))

// problem 17

// slug url

// function IntoSlugURL(string){
//     let URL = "www.example.com/"
//     let slug = string.split(" ")
//     return URL + slug.join("-")
// }
// console.log(IntoSlugURL("hello world"))

// problem 18
// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

// let removeChar = (string,position)=>{
//     let part1 = string.substring(0,position)
//     let part2 = string.substring(position + 1, string.length)
//     return part1 + part2 
// }
// console.log(removeChar("java",2))
// console.log(removeChar("javaScript",6))


// splice example

// const array = [0,3,4,5,6,7,8,9]
// let editArray=array.splice(0,2)
// console.log(array)
// console.log(editArray)

// problem 19
// let array = [1,2,3,4,5,6,7,8,9]

// let first = array.shift()
// let last = array.pop()
// console.log([first,last])

// problem 20

// Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.

// let array = [1,3,6,2,5,10]
// let array2 = array.splice(0,Math.floor(array.length / 2))
// let result = [0,0]

// for(let i = 0;i<array.length;i++){
//     result[0]+=array[i]
// }
// for(let i = 0;i<array2.length;i++){
//     result[1]+=array2[i]
// }
// console.log(result)


// problem 21
// Write a JavaScript program to break an URL address and put its parts into an array.

// let breakUrl = (url) => {
//     var result1  = url.split("://")
//     let protocal = result1[0]
//     result1 = result1[1].split('/')
//     let domain = result1[0]
//     result1.splice(0,1)
//     if(!result1){
//         return [protocal,domain]
//     }

//     return [protocal,domain,...result1]
// }
// console.log(breakUrl('https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-144.php'))
// console.log(breakUrl('https://www.notion.so/JS-things-to-remember/13d928e6a8e880eb8e0cc611068e9c95'))
// console.log(breakUrl('https://chatgpt.com/c/67586d92-1a28-800a-aef3-cd368e96d9eb/654325466213245132/16d565s65465v4654'))
// console.log(breakUrl('https://chatgpt.com'))


// problem22
// number guessing game

// let minNum = 1;
// let maxNum = 100;
// let answer = Math.floor(Math.random() * (maxNum - minNum))
// console.log(guessNumber)
// let running = true

// while(running){
//     let guessNumber = window.prompt("enter a number from " + minNum + " to " +maxNum)
//     guessNumber = Number(guessNumber)
//     if(isNaN(guessNumber)){
//         window.alert("please a valid number")
//     }else if(guessNumber < minNum || guessNumber > maxNum){
//         window.alert("your guess number is out of range")
//     }else{
//         if(guessNumber != answer){
//             window.alert("sorry Try again")
//         }else{
//             window.alert("congrats")
//             running=false
//         }
//     }
// }

// problem 23

// random hexdecimal color

// note Pad a string with "0" until it reaches the length 4
// toString(16) Converts the number into its hexadecimal (base-16)
let generateRandomcolor = () =>{
    let red = Math.floor(Math.random() * 256 ).toString(16).padStart(2,'0')
    let green = Math.floor(Math.random() * 256 ).toString(16).padStart(2,'0') 
    let blue = Math.floor(Math.random() * 256 ).toString(16).padStart(2,'0')
    return `#${red}${green}${blue}`
}
console.log(generateRandomcolor())