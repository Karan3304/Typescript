let subs: number | string = "1 million";
let apiRequestStatus: "pending" | "success" | "error" = "pending";
// apiRequestStatus = 'done';   Type '"done"' is not assignable to type '"pending" | "success" | "error"'
let airLineSeats: "aisle" | "window" | "middle" = "aisle";
airLineSeats = "aisle";
const orders = ["12", "20", "28", "90"];
let currentOrder: string | undefined;
for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
}
console.log(currentOrder);
