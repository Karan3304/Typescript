//                                               CLASS
// class Chai {
//   flavour: string;
//   price: number;

//   //   constructor(flavour: string, price: number) {
//   //     this.flavour = flavour;
//   //     this.price = price;
//   //   }

//   constructor(flavour: string) {
//     this.flavour = flavour;
//     console.log(this);
//   }
// }

// // const masalaChai = new Chai("ginger", 20);
// const masalaChai = new Chai("ginger");
// masalaChai.flavour = "masala";

//                                          ACCESS MODIFIERS

class Chai {
  public flavour: string = "Masala";

  private secretIngredients = "Cardamom";

  reveal() {
    //  this is a public method we can use,and this can acess the private variable secretIngredients,but we cannot access this private variable directly
    return this.secretIngredients;
  }
}

class Shop {
  protected shopName = "Pappu Chai wala";
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

// const c = new Chai();
// c.reveal();

new Branch().getName();

class walet {
  #balance = 100; // anther way of private variable

  getBalance() {
    return this.#balance;
  }
}

const w = new walet();
w.getBalance();

class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value;
  }
}

const c = new ModernChai();
c.sugar = 3;

class EkChai {
  static shopName = "Chaicode cafe";

  constructor(public flavour: string) {}
}

abstract class Drink {
  abstract make(): void;
}

class myChai extends Drink {
  make() {
    console.log("Brewing chai");
  }
}

class Heater {
  heat() {}
}

class ChaiMkaer {
  constructor(private heater: Heater) {}

  make() {
    this.heater.heat();
  }
}
