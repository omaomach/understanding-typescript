// const product: {
//     id: string;
//     price: number;
//     tags: string[];
//     details: object;
//     color: [number, string];  // a tuple - a special array with exactly two elements 
// } = {
//     id: "jersey",
//     price: 12.99,
//     tags: ["great-offer", "hot-and-new"],
//     details: {
//         title: "Coach Jersey",
//         description: "A black coach jersey"
//     },
//     color: [1, "White"]
// }
// for (const tag of product.tags) {
//     console.log(tag.toUpperCase())
// }
// let favoriteActivities: string[];
// favoriteActivities = ["coding", "boxing"];
// product.color.push("green")  // for some reason, this is allowed and typescript is unable to catch this error
// product.color[1] = 10;
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Omao",
    age: 25,
    hobbies: ["Boxing", "Coding"],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR) {
    console.log("Yippy Kai Ye");
}
