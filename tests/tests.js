/*
Lägger kaffepulver i filter
Häller vatten i kaffekokaren
Tryck på på/av knappen
Ta fram kopp
Ta fram mjölk och socker
Häll kaffe i kopp och blanda
*/

const coffeeMachineWorks = document.querySelector(
  '#coffeeMachineWorks'
);

const groundCoffeeExists = document.querySelector(
  '#groundCoffeeExists'
);

if (coffeeMachineWorks !== null) {
  coffeeMachineWorks.addEventListener('change',
    toggleCoffeeMachineStatus
  );
}

function toggleCoffeeMachineStatus() {
  console.log(coffeeMachineWorks.checked);
}
