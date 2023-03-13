// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let coffee_machine = {
water: 400,
milk: 540,
beans: 120,
cups: 9,
money: 550,
}

function Drink(water, milk, beans, cups, money) {
    this.water = water;
    this.milk = milk;
    this.beans = beans;
    this.cups = cups;
    this.money = money
}
const espresso = new Drink(250, 0, 16, 1, 4)
const latte = new Drink(350, 75, 20, 1, 7)
const capuccino = new Drink(200, 100, 12, 1, 6)

function status() {
    console.log(`The coffee machine has:
${coffee_machine.water} ml of water
${coffee_machine.milk} ml of milk
${coffee_machine.beans} g of coffee beans
${coffee_machine.cups} disposable cups
${coffee_machine.money} of money`)
}

function process_drink(drink) {
    if ((coffee_machine.water >= drink.water) && (coffee_machine.milk >= drink.milk) && (coffee_machine.beans >= drink.beans) && (coffee_machine.cups >= 1))
    {
        coffee_machine.water -= drink.water;
        coffee_machine.milk -= drink.milk;
        coffee_machine.beans -= drink.beans;
        coffee_machine.cups -= drink.cups;
        coffee_machine.money += drink.money;
        console.log('I have enough resources, making you a coffee!')
    } else {
        if (coffee_machine.water < drink.water) {
            console.log('Sorry, not enough water!')
        } else if (coffee_machine.milk < drink.milk) {
            console.log('Sorry, not enough milk!')
        } else if (coffee_machine.beans < drink.beans) {
            console.log('Sorry, not enough beans!')
        } else if (coffee_machine.cups < 1) {
            console.log('Sorry, not enough cups!')
        }
    }
}

function choice_act() {
    choice = input(`Write action (buy, fill, take):\n`)
    switch(choice) {
        case 'buy': {
            let buy_drink = input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n`)
            switch (buy_drink) {
                case "1":
                    process_drink(espresso)
                    break
                case '2':
                    process_drink(latte)
                    break
                case '3':
                    process_drink(capuccino)
                    break
            }
        }
            break;
        case 'fill': {
            coffee_machine.water += parseInt(input(`Write how many ml of water you want to add:`))
            coffee_machine.milk += parseInt(input(`Write how many ml of milk you want to add:`))
            coffee_machine.beans += parseInt(input(`Write how many grams of coffee beans you want to add:`))
            coffee_machine.cups += parseInt(input(`Write how many disposable cups you want to add:`))
        }
            break ;
        case 'take': {
            coffee_machine.money = 0
            console.log(`I gave you $${coffee_machine.money}`)
        }
            break;
        case 'remaining': {
            status()
        }
            break;
        case 'exit': {
            x = false
        }
    }
}

let x = true
while(x === true){
    choice_act();
}