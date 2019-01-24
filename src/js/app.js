
const ClickEl = document.getElementById('button');
const ConsumptionEl = document.getElementById('consumption');
const FuelEl = document.getElementById('fuel');
const ResultEl = document.getElementById('result');

function Distance(consumption, fuel) {
    const sum = 100/consumption*fuel;



    ResultEl.textContent=sum;


}

ClickEl.addEventListener(
    'click',
    function(){Distance (parseInt(ConsumptionEl.value), parseInt(FuelEl.value))}

);



//const sum=100/parseInt(consumption.value)*parseInt(fuel.value);
//ResultEl.textContent=sum;

