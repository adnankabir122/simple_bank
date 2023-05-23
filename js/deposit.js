let depositBtn = document.getElementById("deposit-btn")

// deposit span tag ke nilam
let depositTotal = document.getElementById("deposit-total")

// deposit span tag ar vitorer lekha ke nilam
let depositCurrentAmount = depositTotal.innerText
depositCurrentAmount.innerText = "00"

depositBtn.addEventListener("click", function () {
    // input field ke nilam
    let depositField = document.getElementById("deposit-field")

    //input field ar value ke nilam
    let depositFieldValue = parseInt(depositField.value)

    depositCurrentAmount = parseInt(depositCurrentAmount)

    let depositTotalAmount = depositFieldValue + depositCurrentAmount
    depositTotal.innerText = depositTotalAmount
    depositField.value = ""

    // Balance Total
    let balanceTotal = document.getElementById("balance-total")
    let balanceCurrentAmount = parseInt(balanceTotal.innerText)

    let balanceTotalAmount = balanceCurrentAmount + depositFieldValue
    balanceTotal.innerText = balanceTotalAmount
});
