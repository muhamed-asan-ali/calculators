const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')


let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {

    const bill = Number(billInput.value)
  
    const tipPercentage = Number(tipInput.value)/100
  
    const tipAmount = bill*tipPercentage
  
    const total = tipAmount + bill
    
    const perPersonTotal = total / numberOfPeople
    console.log(perPersonTotal);
  
    perPersonTotalDiv.innerText =`$${perPersonTotal.toFixed(2).toLocaleString('en-US')}`
  
  }
  
  const increasePeople = () => {
    numberOfPeople += 1
  
  numberOfPeopleDiv.innerText = numberOfPeople
  }
  
  const decreasePeople = () => {

    if(numberOfPeople <= 1){
        throw "you cannot have less than One person"
        return
    }
    
    numberOfPeople -= 1
  
    numberOfPeopleDiv.innerText = numberOfPeople
  
  
  }