class Car {
  constructor(model, year, price, availableOptions) {
    this.model = model;
    this.year = year;
    this.price = price;
    this.availableOptions = availableOptions;
  }

  calculateTotalPrice() {
    let totalPrice = this.price;
    for (let i = 0; i < this.availableOptions.length; i++) {
      totalPrice += this.availableOptions[i].price;
    }
    return totalPrice;
  }

  getDetails() {
    return `${this.year} ${this.make} ${
      this.model
    } - $${this.calculateTotalPrice()}`;
  }
}

class Inventory {
  constructor(inventoryId) {
    this.inventoryId = inventoryId;
    this.cars = [];
  }

  getAvailableCars() {
    return this.cars.filter((car) => car.inStock === true);
  }

  updateInventory(car, action) {
    if (action === "add") {
      this.cars.push(car);
    } else if (action === "remove") {
      this.cars = this.cars.filter((c) => c.vin !== car.vin);
    }
  }
}

class Customer {
  constructor(customerId, name, email, phoneNumber) {
    this.customerId = customerId;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.orders = [];
  }

  placeOrder(car) {
    this.orders.push(car);
  }

  viewHistory() {
    return this.orders;
  }
}

class Dealer {
  constructor(dealerId, name, contactInformation) {
    this.dealerId = dealerId;
    this.name = name;
    this.contactInformation = contactInformation;
    this.inventory = new Inventory(dealerId);
  }

  addCarToInventory(car) {
    this.inventory.updateInventory(car, "add");
  }

  processOrder(order) {
    let car = this.inventory.cars.find((c) => c.vin === order.vin);
    if (car) {
      this.inventory.updateInventory(car, "remove");
      return car;
    } else {
      return null;
    }
  }
}
