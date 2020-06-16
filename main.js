// display numbers 1-20
let bodyElement = document.querySelector('body')

function createHeader(Kata) {
    let createHeader = document.createElement('h2')
    createHeader.append(Kata)
    bodyElement.append(createHeader)
}
createHeader('Kata 1')
let newString = finalArr();
ourDOMHelper('div', bodyElement, newString)


createHeader('Kata 2')
let finalArr2 = []
for (i = 2; i < 21; i = i + 2) {
    finalArr2.push(i)

}
let finalString2 = finalArr2.join(', ')
ourDOMHelper('div', bodyElement, finalString2)


createHeader('Kata 3')
let finalArr3 = []
for (i = 1; i < 20; i = i + 2) {
    finalArr3.push(i)

}
let finalString3 = finalArr3.join(', ')
ourDOMHelper('div', bodyElement, finalString3)


createHeader('Kata 4')
let finalArr4 = []
for (i = 5; i < 101; i = i + 5) {
    finalArr4.push(i)

}
let finalString4 = finalArr4.join(', ')
ourDOMHelper('div', bodyElement, finalString4)

createHeader('Kata 5')
let finalArr5 = []
for (i = 1; i < 11; i = i + 1) {
    finalArr5.push(i * i)

}
let finalString5 = finalArr5.join(', ')
ourDOMHelper('div', bodyElement, finalString5)


createHeader('Kata 6')
let finalArr6 = []
for (i = 20; i > 0; i = i - 1) {
    finalArr6.push(i)

}
let finalString6 = finalArr6.join(', ')
ourDOMHelper('div', bodyElement, finalString6)

createHeader('Kata 7')
let finalArr7 = []
for (i = 20; i > 0; i = i - 2) {
    finalArr7.push(i)

}
let finalString7 = finalArr7.join(', ')
ourDOMHelper('div', bodyElement, finalString7)


createHeader('Kata 8')
let finalArr8 = []
for (i = 19; i > 0; i = i - 2) {
    finalArr8.push(i)

}
let finalString8 = finalArr8.join(', ')
ourDOMHelper('div', bodyElement, finalString8)


createHeader('Kata 9')
let finalArr9 = []
for (i = 100; i > 0; i = i - 5) {
    finalArr9.push(i)

}
let finalString9 = finalArr9.join(', ')
ourDOMHelper('div', bodyElement, finalString9)


createHeader('Kata 10')
let finalArr10 = []
for (i = 10; i > 0; i = i - 1) {
    finalArr10.push(i * i)

}
let finalString10 = finalArr10.join(', ')
ourDOMHelper('div', bodyElement, finalString10)



createHeader('Kata 11')
let finalString11 = "469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472"
ourDOMHelper('div', bodyElement, finalString11)

createHeader('Kata 12')
let finalArr12 = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472]
let finalNumArr = []
for (i = 0; i < finalArr12.length; i = i + 1) {
    let currentNumber = finalArr12[i]
    if (currentNumber % 2 === 0) {
        finalNumArr.push(currentNumber)
    }


}
let finalString12 = finalNumArr.join(', ')
ourDOMHelper('div', bodyElement, finalString12)



function finalArr() {
    let finalArr = []
    for (i = 1; i < 21; i = i + 1) {
        finalArr.push(i)
    }
    let finalString = finalArr.join(', ')
    return finalString

}
finalArr()

function ourDOMHelper(elementType, targetElement, textStr, idStr, classStr) {


    let newElement = document.createElement(elementType)
    if (textStr !== "" && textStr !== undefined) {
        newElement.append(textStr)
    }
    if (idStr !== "" && idStr !== undefined) {
        newElement.id = idStr
    }
    if (classStr !== "" && classStr !== undefined) {
        newElement.className = classStr
    }
    targetElement.append(newElement)
    return newElement


} 