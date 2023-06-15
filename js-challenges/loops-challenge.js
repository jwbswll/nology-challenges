// challenge 1
const sumOfN = (n) => {
  sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

console.log(sumOfN(10))


// challenge 2:
shoppingList = ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];

for (let i = 0; i < shoppingList.length; i++) {
  console.log(`${i + 1}. ${shoppingList[i]}`)
}


// challenge 3 + bonus:
const wordStr = "zzz"
let newStr = ""

for (let i = 0; i < wordStr.length; i++) {
  if (i % 2) {
    newStr += wordStr[i].toUpperCase()
  } else {
    if (wordStr[i] === "z") {
      newStr += "a"
    } else {
    newStr += String.fromCharCode(wordStr[i].charCodeAt(0)+1)
    }
  }
}

console.log(newStr)


// challenge 4 + bonus: 
const lastName = "Calum"
let noVowels = ""

for (let i = 0; i < lastName.length; i++) {
  if (!/[aeiou]/i.test(lastName[i])) {
    noVowels += lastName[i]
  } else if (/[aeiou]/i.test(lastName[i]) && /[lmr]/i.test(lastName[i+1])) {
    noVowels += lastName[i]
  }
}

console.log(noVowels)


// challenge 5: 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = arr.length-1; i > -1; i--) {
  console.log(arr[i])
}