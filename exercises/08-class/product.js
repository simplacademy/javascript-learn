class Product {
    constructor(id, name, price, category, vendors) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.vendors = vendors;
    }

    display() {
        console.log(this.name + "[$" + this.price + "]");
        console.log("   " + this.category.getDisplayText());
        for (var i = 0; i < this.vendors.length; i++) {
            console.log("      " + this.vendors[i].getDisplayText());
        }
        console.log("=========================================")
    }
}
