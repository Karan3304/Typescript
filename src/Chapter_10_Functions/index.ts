function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 2);

function getChaiPrice(): number {
  // return type or output of this function would be a number
  return 25;
}

// function makeOrder(order: string):string {
//   if (!order) return null;
//   return order;
// }

function logChai(): void {
  // no return value
  console.log("chai is ready");
}

// function orderChai(type?:string){

// }

function orderChai(type: string = "Masala") {}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
