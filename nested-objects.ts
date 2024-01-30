const product = {
    id: "jersey",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Coach Jersey",
        description: "A black coach jersey"
    }
}

for (const tag of product.tags) {
    console.log(tag.toUpperCase())
}

let favoriteActivities: string[];
favoriteActivities = ["coding", "boxing"];

