document.onreadystatechange = function () {
    if (document.readyState == "complete") {

    let score = 0
    let add = 1
    let leftButtonClicks = 0
    let centerButtonClicks = 0
    let autoClickers = 0
    let clickCompanionCost = 100
    let multiplierCost = 10

    document.getElementById("multiplierButton").addEventListener('click', multiplierButtonClick)
    document.getElementById("autoButton").addEventListener('click', autoButtonClick)
    document.getElementById("restartButton").addEventListener('click', restartButtonClick)
    document.getElementById("centralButton").addEventListener('click', centralButtonClick)

    let formatButtons = () => {
        document.getElementById("clickCounter").innerHTML = "Clicks: " + centerButtonClicks
        document.getElementById("total").innerHTML = 'Score: ' + score.toFixed(2)
        document.getElementById("multiplierCounter").innerHTML = "Multiplied: " + leftButtonClicks + " Times"
        document.getElementById("autoClickCount").innerHTML = "Added: " + autoClickers
        document.getElementById("autoClickCost").innerHTML = "Cost: " + clickCompanionCost
        document.getElementById("multiplierCost").innerHTML = "Cost: " + multiplierCost
        document.getElementById("centralButton").innerHTML = "+" + add.toFixed(2)
    }

    let reset = () => {
        score = 0;
        add = 1;
        leftButtonClicks = 0;
        centerButtonClicks = 0;
        autoClickers = 0;
        clickCompanionCost = 100
        multiplierCost = 10
    }

    setInterval(() => {
        for(let i = 0; i < autoClickers; i++){
            centralButtonClick()
        }
    }, 1000)

    function multiplierButtonClick() {
        if (score >= multiplierCost) {
            add = add * 1.2
            leftButtonClicks++
            score = score - multiplierCost
            multiplierCost += 5
            formatButtons()
        }
    }

    function centralButtonClick() {
        score += add
        centerButtonClicks++
        formatButtons()
    }

    function autoButtonClick() {
        if (score >= clickCompanionCost) {
            score = score - clickCompanionCost
            clickCompanionCost += 25
            autoClickers++
            formatButtons()
        }
    }

    function restartButtonClick() {
        reset()
        formatButtons()
        window.refresh()
    }

    }}