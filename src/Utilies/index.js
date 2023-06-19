/**
 * this function calculates the total products of a new order
 * @param {Array} products 
 * @returns {number} total price
 */

export const totalPrice =(products) =>{
    let sum = 0
    products.forEach(product => sum  += product.price)
    return sum;
}