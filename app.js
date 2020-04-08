class Stor {
    constructor(name){
        this.name= name;
        this.items = [];
        this.stock = {};
        this.prices = {};
        this.totalSales = 0;
    }
    isItavailable(name){
        var itemIndex = this.items.indexOf(name);
        if(itemIndex == -1){
            return false;
        }else{
            return true;
        }
    }


getPrice(name){
    var isAvilable = this.isItavailable(name);
    if(isAvilable == true){
        var price = this.prices[name];
        return price;
    }else{
        console.log("Sorry, we do not have the item what your are looking for", name);
    }
}

getTotalSale(){
    return this.totalSales;
}

    sellItem( name, quantity){
        var avilable = this.stock[name];
        if(avilable<quantity){
            console.log("Sorry, we do not have enough");
        }else{
            var itemPrice = this.getPrice(name);
            var currentSale = itemPrice * quantity;
            this.totalSales = this.totalSales+currentSale;
            var remaining = avilable-quantity;
            this.stock[name] = remaining;
            console.log("Thanks for purcase");
        }
    }
   
    addItem(name,quantity,price){
        var isExiting = this.isItavailable(name);
        if(isExiting == true){
            var avilable = this.stock[name];
            this.stock[name] = avilable + quantity;
        }else{
            this.items.push(name);
            this.prices[name] = price;
            this.stock[name] = quantity;
        }
    }

//Class stor closing brakect
}

var hubluStore =  new Stor("Hublu Fasion Store");
hubluStore.addItem("Shirt",40,400);
hubluStore.addItem("Pant",30,300);

// for runing this code

hubluStore.isItavailable("Shoes");
//outpot Should be False because Shoes does not inpoted
