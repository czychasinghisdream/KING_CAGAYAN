// VARIABLES
const beverageContainer = document.getElementById('beverages-container');
const breadContainer = document.getElementById('bread-container');
const cannedContainer = document.getElementById('canned-container');
const cards = document.getElementsByClassName('card')
const billButton = document.getElementById('bill-confirm')
const billAmount = document.getElementById('amount')
const purchaseButton = document.getElementById('purchase-button')


const activeItem = document.getElementsByClassName('active-item')
const price = document.getElementsByClassName('price')
const total = document.getElementById('total')
let totalVar = 0;
total.disabled = true

// LINK VARIABLES

const beveragelink = document.getElementById('beverages-link');
const breadlink = document.getElementById('bread-link');
const cannedlink = document.getElementById('canned-link');


// BILL INPUT CODE

billButton.addEventListener('click', function() {
    if (billAmount.value <= 60) {
        beveragelink.classList.remove('disabled-link')
        beverageContainer.classList.remove('disabled-container')
        cannedlink.classList.remove('disabled-link')
        cannedContainer.classList.remove('disabled-container')
    } else {
        breadlink.classList.remove('disabled-link')
        beveragelink.classList.remove('disabled-link')
        cannedlink.classList.remove('disabled-link')
        beverageContainer.classList.remove('disabled-container')
        cannedContainer.classList.remove('disabled-container')
        breadContainer.classList.remove('disabled-container')
    } 
})


// TOTAL VALUE CODE

for(i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
        this.classList.toggle('item-container')


        // ChatGPT 
      const value = parseFloat(this.getAttribute('data-value'));
      totalVar += this.classList.contains('item-container') ? value : -value;
      total.value = totalVar.toFixed(2);
    })
}


// TOTAL CHECK CODE

purchaseButton.addEventListener('click', function() {
    let billAmountValue = parseFloat(billAmount.value);
    let totalValue = parseFloat(total.value);
    let change = billAmountValue - totalValue;

    if (billAmountValue == totalValue) {
        alert("Thank you for purchasing!")
        location.reload()
    } else if (billAmountValue > totalValue) {
        alert("Thank you for purchasing! \n Your Change: " + change.toFixed(2))
        location.reload()
    } else if (billAmountValue < totalValue) {
        alert("Insufficient Funds!")
    }
})



beveragelink.addEventListener('click', function() {
    beverageContainer.classList.remove('hide-container');
    breadContainer.classList.add('hide-container');
    cannedContainer.classList.add('hide-container');
});

breadlink.addEventListener('click', function() {
    breadContainer.classList.remove('hide-container');
    beverageContainer.classList.add('hide-container');
    cannedContainer.classList.add('hide-container');
});

cannedlink.addEventListener('click', function() {
    cannedContainer.classList.remove('hide-container');
    breadContainer.classList.add('hide-container');
    beverageContainer.classList.add('hide-container');
});
