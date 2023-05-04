const quantity1 = document.querySelector("#btn1")
const quantity2 = document.querySelector("#btn2")
const quantity3 = document.querySelector("#btn3")
const quantity4 = document.querySelector("#btn4")

const liter1 = document.querySelector("#btn5")
const liter2 = document.querySelector("#btn6")

const type1 = document.querySelector("#btn7")
const type2 = document.querySelector("#btn8")
const type3 = document.querySelector("#btn9")

const milk = document.createElement('div');



const quantityMilk = document.querySelector('#quantity-milk')
const literMilk = document.querySelector('#liter-milk')
const typeMilk = document.querySelector('#type-milk')
const add = document.querySelector('#add')


const addMilk = document.querySelector('#btn10')


quantity1.addEventListener('click', ()=>{
    quantityMilk.value = 1;
})
quantity2.addEventListener('click', ()=>{
    quantityMilk.value = 2;
})
quantity3.addEventListener('click', ()=>{
    quantityMilk.value = 3;
})
quantity4.addEventListener('click', ()=>{
    quantityMilk.value = 4;
})
liter1.addEventListener('click', ()=>{
    literMilk.value = 1;
})
liter2.addEventListener('click', ()=>{
    literMilk.value = 1/2;
})
type1.addEventListener('click', ()=>{
    typeMilk.value = 'Fcm';
})
type2.addEventListener('click', ()=>{
    typeMilk.value = 'Tm';
})
type3.addEventListener('click', ()=>{
    typeMilk.value = 'Dtm';
})






addMilk.addEventListener('click',()=>{
    let receipt_qty_milk = quantityMilk.value;
    let receipt_liter_milk = literMilk.value;
    let receipt_type_milk = typeMilk.value;
    add.insertAdjacentHTML('afterend', `<div class="list">
    <div>Milk</div>
    <div>
        <div class="b">Qunatity ${receipt_qty_milk}</div>
        <div class="b">Liters ${receipt_liter_milk}</div>
        <div class="b">Type ${receipt_type_milk}</div>
    </div>
    <div class="e">$$$</div>
</div>`) 

    document.getElementById('total').innerHTML="total------------$$$" ;
})
