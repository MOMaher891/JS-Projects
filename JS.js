
document.querySelector('#load-form').addEventListener('submit', function (e) {

    document.getElementById('loading').style.display = "block";
    setTimeout(CalculateResult, 2000);
    e.preventDefault();
});

//Function CalC
function CalculateResult() {
    console.log("CALC");


    // UI values

    // Get
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    // Set
    const MonthlyPayment = document.getElementById('Monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    //Calculate
    const principle = parseFloat(amount.value);
    console.log(principle);
    const calcInterest = parseFloat(interest.value) / 100 / 12;
    const calcPayment = parseFloat(years.value) * 12;
    //Compute monthlyPayment
    const x = Math.pow(1 + calcInterest, calcPayment);
    const monthly = (principle * x * calcInterest) / (x - 1);

    if (isFinite(monthly)) {
        MonthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calcPayment).toFixed(2);
        totalInterest.value = ((monthly * calcPayment) - principle).toFixed(2);

        //Show results and hide loading if monthly isFinite
        document.getElementById('loading').style.display = "none";
        document.getElementById('results').style.display = "block";
    } else {
        //Show error message and hide loading if monthly is not finite
        ErrorMessage('Please check your number');
        document.getElementById('loading').style.display = "none";
    }

}

//Error Function 
function ErrorMessage(error) {
    //Create New Elem
    const errorDiv = document.createElement('div');

    //Get Elem
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    //Add Class 'Alert-danger'
    errorDiv.className = 'alert alert-danger';
    //Add A text 
    errorDiv.appendChild(document.createTextNode(error));

    //Inset ErrorMessage 
    card.insertBefore(errorDiv, heading);

    //Remove Error Message After 3second
    setTimeout(function clearError() {
        document.querySelector('.alert').remove();
    }, 3000);
}


//Loading Function 

function loading() {
    setTimeout(function clearImage() {
        document.getElementById('loading').remove();
    }, 3000);

}

