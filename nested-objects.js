var product = {
    id: "jersey",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Coach Jersey",
        description: "A black coach jersey"
    }
};
for (var _i = 0, _a = product.tags; _i < _a.length; _i++) {
    var tag = _a[_i];
    console.log(tag.toUpperCase());
}
var favoriteActivities;
favoriteActivities = ["coding", "boxing"];
