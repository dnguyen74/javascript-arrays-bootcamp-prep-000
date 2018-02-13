var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arrayA, elementB) {
  return [elementB, ...arrayA]
  
}

function destructivelyAddElementToBeginningOfArray (arrayA, elementB) {
  arrayA = arrayA.unshift(elementB)
  return arrayA
  
}

function accessElementInArray(arrayA, ind) {
  return arrayA[ind]
}
