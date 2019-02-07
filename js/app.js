import {distance} from "./lib.js";

const ClickE = document.getElementById('button');
const ConsumptionE = document.getElementById('consumption');
const FuelE = document.getElementById('fuel');
const ResultE = document.getElementById('result');


function clickOnbutton () {
    const ConsumptionEl = parseInt(ConsumptionE.value);
    const FuelEl = parseInt(FuelE.value);
  return ResultE.textContent = distance(ConsumptionEl, FuelEl);

}
ClickE.addEventListener(
    'click',
   clickOnbutton
);



//const sum=100/parseInt(consumption.value)*parseInt(fuel.value);
//ResultEl.textContent=sum;

