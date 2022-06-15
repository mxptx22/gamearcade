let boxes = ['1','2','3','4','5','6','7','8','9']
let playerFieldsArray = []
let responseFieldsArray = []
const winningCombinations = [
    ['1','2','3'],
    ['1','4','7'],
    ['4','5','6'],
    ['2','5','8'],
    ['7','8','9'],
    ['3','6','9'],
    ['1','5','9'],
    ['3','5','7'],
]

function player(number) {
    document.getElementById(number).className = "square player"
    document.getElementById(number).innerText = "X"
    document.getElementById(number).setAttribute("onClick", "")
    let index = boxes.indexOf(number)
    if (index >= 0) {
        boxes.splice(index, 1);
      }
      checkWinning()
      response()
}

function response() {
    let responseIndex = Math.floor(Math.random() * boxes.length)
    console.log(responseIndex)
    let responseNumber = boxes[responseIndex]
    document.getElementById(responseNumber).className = "square response"
    document.getElementById(responseNumber).innerText = "O"
    document.getElementById(responseNumber).setAttribute("onClick", "")

    let index = boxes.indexOf(responseNumber)
    if (index >= 0) {
        boxes.splice(index, 1);
      }
    
    checkWinning()
}

function checkWinning() {
    
    let playerFields = document.getElementsByClassName('player')
    playerFieldsArray.length = 0
    for (let index = 0; index < playerFields.length; index++) {
        playerFieldsArray.push(document.getElementsByClassName('player')[index]['id'])
    }

    for (let index = 0; index < winningCombinations.length; index++) {
        let intersectionResult = winningCombinations[index].filter(x => playerFieldsArray.indexOf(x) !== -1);
        // console.log(intersectionResult)
        if (intersectionResult.length == 3) {alert('Player Won'); playerFieldsArray.length == 0; location.reload()}
    }

    let responseFields = document.getElementsByClassName('response')
    responseFieldsArray.length = 0
    for (let index = 0; index < responseFields.length; index++) {
        responseFieldsArray.push(document.getElementsByClassName('response')[index]['id'])
    }

    for (let index = 0; index < winningCombinations.length; index++) {
        let intersectionResult = winningCombinations[index].filter(x => responseFieldsArray.indexOf(x) !== -1);
        // console.log(intersectionResult)
        if (intersectionResult.length == 3) {alert('Computer Won'); responseFieldsArray.length == 0; location.reload()}
    }

}

