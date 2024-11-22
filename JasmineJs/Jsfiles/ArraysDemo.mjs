class ShoppingCart{
    cart = [];

    addToCart = (item) => this.cart = [...this.cart, item]

    getBillAmount = () =>{
        let bill =0.0
        for(const item of this.cart){
            bill += item.price
        }
        return bill
    }
    //todo: add other methods of CRUD operations.
    getAll = () => this.cart
}
export default ShoppingCart
//Keep all the code that U want to test in the JSFiles Folder. 
//All the test specs or Scripts that has to do the unit testing shall be kept in the specs folder. 