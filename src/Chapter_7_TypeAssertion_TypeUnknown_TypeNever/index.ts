let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let BookString = '{"name":"Game of Thrones"}';
let BookObject = JSON.parse(BookString) as Book;

console.log(BookObject.name);

// const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "chai";
value = [1, 2, 3];
value = 2.5;
// value.toUpperCase()  It will show problem while ,but nor while development

let NEWvalue: unknown;
NEWvalue = "chai";
NEWvalue = [1, 2, 3];
NEWvalue = 2.5;
// NEWvalue.toUpperCase(); // it is showing error whiel development

if (typeof NEWvalue === "string") {
  NEWvalue.toUpperCase();
}

// type Role = "admin" | "user";

// function redirectBasedOnRole(role:Role):void{
//     if(role==="admin"){
//         console.log("Redirecting to the admin dashboard");
//         return;
//     }
//     if(role==="user"){
//         console.log("redirect to user dashboard");
//         return;
//     }
//     role;  // here,we handled all the cases of role above,and this line of role shold nto be there, (parameter) role: never
// }

type Role = "admin" | "user" | "Super admin";
function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to the admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("redirect to user dashboard");
    return;
  }
  role; // here,we handled all the cases of role above,and still one case remaining,which is super admin,so we can write this line
}
