type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  // interface TeaRecipe {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  water: number = 100;
  milk: number = 50;
}

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// interface Response {
//   Res: { ok: true } | { ok: false };
// }

// class myRes implements Response {
//   ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon"; // literal types

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { TeaLeaves: number };
type Extra = { masala: number };
type MasalaChai1 = BaseChai & Extra;

const cup: MasalaChai1 = {
  TeaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Karan" };
const u2: User = { username: "Pappu", bio: "Karan.ai" };

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "KAI",
  version: 1,
};

// cfg.appName="karanCode"
