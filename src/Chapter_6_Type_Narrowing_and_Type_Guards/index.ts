function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`; // here it is guaranteed that,kind is a string,so it will suggest string methods,if we put kind.
  }
  return `chai Order:${kind}`; // here,kind will be a number,so kind. will suggest number methods
}

function serverChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

function orderChai(size: "medium" | "small" | "large" | number) {
  if (size === "small") {
    return `small cutting chai...`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }

  return `chai order #${size}`;
}

class KulhadChai {
  serve() {
    return `Serving kulhad chai`;
  }
}

class Cutting {
  serve() {
    return `Serving cutting chai`;
  }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

type chaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveChai(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving custom chai:${item}`;
}

type MasalaChai = {
  type: "masala";
  spicelevel: number;
};
type GingerChai = {
  type: "ginger";
  amount: number;
};
type IlaichiChai = {
  type: "ilaichi";
  aroma: number;
};

type Chai = MasalaChai | GingerChai | IlaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala Chai`;
      break;

    case "ginger":
      return `Masala Chai`;
      break;

    case "ilaichi":
      return `Ilaichi Chai`;
      break;

    default: // we dont need default case here
      break;
  }
}
