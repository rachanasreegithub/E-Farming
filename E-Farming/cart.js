// Define a class for the shopping cart
class ShoppingCart {
    constructor() {
        this.items = []; // Array to store cart items
    }

    // Method to add an item to the cart
    addItem(item) {
        this.items.push(item);
    }

    // Method to remove an item from the cart by its index
    removeItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
    }

    // Method to clear all items from the cart
    clearCart() {
        this.items = [];
    }

    // Method to calculate the total price of all items in the cart
    calculateTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
    }
}

// Define a class for a shopping cart item
class CartItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Export the ShoppingCart and CartItem classes
export { ShoppingCart, CartItem };
