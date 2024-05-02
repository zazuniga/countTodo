const VendingMachine = require('./vending')

describe("Vending Machine", ()=>{
    let vendingMachine
    beforeEach(()=> {
        vendingMachine = new VendingMachine({
            1: {name: "Soda", price : 1.5, quantity: 10},
            2: {name: "chips", price : 1.0, quantity: 15},
        })
    })
});

test ("insert Money and add money to balance", ()=>{
    vendingMachine.insertMoney(1.5)
    expect(vendingMachine.balance).toBe(1.5)
    })

test('dispenseItem dispenses an item when enough money is inserted'), () =>{
    vendingMachine.insertMoney(2.0)
    constItem - vendingMachine.despenseItem(1)
    expect(item).toEqual({name: "Soda", price : 1.5, quantity: 9})
    expect (vendingMachine.balance).toBe(0.5)
}

test('dispense item does not dispensd when not enough money is added', () =>{
    vendingMachine.insertMoney(0)
    const item = vendingMachine.despenseItem (1)
    expect(item).toBeNull()
    expecting(vendingMachine.balance).toBe(0)
})

test("dispenseItem does not dispense an item when it's out of stock"), () => {
    vendingMachine.insertMoney(2.0)
    vendingMachine.dispenseItem(1)
    vendingMachine.dispenseItem(1)
    vendingMachine.dispenseItem(1)
    const item = vendingMachine.dispenseItem (1)
    expect (item).toBeNull()
    expect (vendingMachine.balance).toBe(0.5)
}
