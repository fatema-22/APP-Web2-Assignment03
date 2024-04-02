function calculateTax(subtotal) {
    console.log("Running calculateTax function");
    const taxRate = 0.0875;
    let tax = subtotal * taxRate;
    console.log(tax);
    return tax;
}

function calculateTotal(subtotal, tax) {
    console.log("Running calculateTotal function");
    let total = subtotal + tax;
    console.log(total);
    return total;
}

function order(cost) {
    console.log("Running order function");
    let subtotal = document.querySelector("#subtotal").textContent;
    subtotal = parseInt(subtotal);
    subtotal += cost;
    console.log(subtotal);

    document.querySelector("#subtotal").textContent = subtotal;

    let tax = calculateTax(subtotal);
    document.querySelector("#tax").textContent = tax;

    let total = calculateTotal(subtotal, tax);
    document.querySelector("#total").textContent = total;
}

document.querySelector("#item1").onclick = function() {
    order(200);
}

document.querySelector("#item2").onclick = function() {
    order(150);
}

document.querySelector("#item3").onclick = function() {
    order(180);
}