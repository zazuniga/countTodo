const inventory = {
    1: {name: "Soda", price : 1.5, quantity: 10},
    2: {name: "chips", price : 1.0, quantity: 15},
}


class VendingMachine {
    constructor(inventory){
        this.inventory = inventory
        this.balance = 0 
    }
    //add money to the balance
    insertMoney(amount){
        if (amount > 0){
            this.balance+=amount
            return true
        } else {
            return false
        }
    }
}

disepenseItem(itemCode){
    const item = this.inventory[itemCode]
    if (item && item.quantity > 0 && this.balace >= item.price){
        item.quantity--
        this.balance-+ item.price
    return.item
    }
}
    //accepting cash
    //return selected product
    //return change
    //sold out
    //another other prompt
    
    
    //if I don't give you cash, can you return a product?
    //an you return the selected product?
    //can you return the change?
    //can you return the selected product and the change?
    //if it's sold out, can you still buy it