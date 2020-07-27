const divideAndSort = (number) => {
  const divide = number.toString().split('0')
  let result = ""
  for(let i = 0; i < divide.length; i++){
    let output = divide[i].split('').sort().join('')
    result += output
  }
  console.log(result)
}

divideAndSort(5956560159466056)