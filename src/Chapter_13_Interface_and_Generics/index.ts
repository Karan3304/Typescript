interface Chai {
  // interface shapes our object or data the shape
  flavour: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavour: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = { id: 1, name: "Pappu chaiwala" };
// s.id = 50   Error:becaues we cannot change the readonly variable

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachines {
  start(): void;
  stop(): void;
}

const machine: TeaMachines = {
  start() {
    console.log("Start");
  },
  stop() {
    console.log("Stop");
  },
};

interface ChaiRatings {
  [flavour: string]: number;
}

const ratings: ChaiRatings = {
  masasla: 4.5,
  ginger: 3.5,
  blacktea: 5.0,
};

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  // interfaces merge automatically
  name: "Hitesh",
  age: 22,
};

interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}

//            Generics

function wrapInArray<T>(item: T): T[] {
  // style of defining generics
  return [item];
}

wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavour: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", 20);
pair("ginger", { flavour: "Ginger" });

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 10 };
const numberBoxCup: Box<string> = { content: "10" };

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: { flavor: "masala" },
};

