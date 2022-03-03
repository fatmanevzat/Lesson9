const words = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
    'happy'
  ];
  const palindrome = [
    'Anna',
    'asa',
    'civic',
    'common',
    'Kayak',
    'Level',
    'Madam',
    'Mom',
    'Noon',
    'Rotor',
    'Sagas',
    'Solar',
    'Tenet',
    'Stats',
    'Wow'
  ];

  words.forEach(function name(params) {  // 32.sıra ile benzer metod
      console.log(params)
  })

  for (let i = 0; i < words.length; i++) {   // 28. sıra ile benzer metod
      console.log(words[i]);    
  }

  words.forEach(params => console.log(params)) // 38 ile birebir ayni

  words.forEach((params) =>{  // 36 ile birebir ayni
    console.log(params) 
  })

  words.forEach(params => console.log(params.toUpperCase()))


  const newArray = words.map(item=>item);
  const newArray1 = words.map(function name(params){
      return params.toUpperCase();
  });

  console.log(newArray)
  console.log(newArray1)

  const findItem = palindrome.find(item => item === "Rotor")
  console.log(findItem)

  const returnItem = palindrome.find(item => {
      if (item.length <= 5) {
          return item
      }
  })
 console.log(returnItem)

const newResult = palindrome.filter(item => item.includes("t"))
 console.log(newResult)


 const newResult1 = palindrome.filter(item => !item.includes("a"))
 console.log(newResult1)

 const newResult2 = palindrome.filter(item => item.length > 4 )
 console.log(newResult2)

 const newResult3 = palindrome.filter(item => item === "Wow")
 console.log(newResult3)

 const numbers = [0, 2, 45, 9, 3, 87, 18];

 const sum = numbers.reduce((a,b) => a+b,0)
 const sum1 = numbers.reduce((a,b) => a+b)
 console.log(sum)
 console.log(sum1)

 const sum2 = numbers.reduce((a,b) => b-a)
 console.log(sum2)

 const everyItem = palindrome.every(item => item.length > 5);
 console.log(everyItem)

 const everyItem1 = palindrome.some(item => item.length > 5);
 console.log(everyItem1)


 const everyItem2 = palindrome.findIndex(item => item.length > 5);
 console.log(everyItem2)



 const sorted = numbers.sort((a,b) => a-b)
 console.log(sorted)

 const sorted1 = numbers.sort((a,b) => b-a)
 console.log(sorted1)

 const sorted2 = palindrome.sort((x,y) => x.length - y.length)
 console.log(sorted2)


 const date = new Date();
 console.log(date)

 const date1 = +new Date();
 console.log(date1)

 const datestart = +new Date("2022-03-3 10:33");
 console.log(datestart)

 //setInterval(() => {
   // console.log("set interval çalişti");
//},datestart.date);

 let a = setInterval(() => {
     console.log("set interval çalişti");
 },2000);

 setTimeout(() => {
clearInterval(a);
    console.log("set timeout çalişti");
},10000);


//while (condition) {
 //   console.log("çalişti") 
//}

do {
    console.log("çalişti") 
}while (false)
