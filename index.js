let titleCount = 1 ; 
let totalPrice=0
const cards = document.querySelectorAll('.card')
// console.log(cards);

for (const card of cards) {
    // console.log(card);

    card.addEventListener('click' , function(){
       
        // get the title

        // const title = card.childNodes[3].childNodes[3].innerText;

        const title = (card.querySelector('h3')).innerText

        const price = parseFloat((card.querySelector('span').innerText.split(' ')[1]))
        // console.log( price);
        
        const titleContainer = document.getElementById('title-container') ;

        const p = document.createElement('p')
        p.innerText= titleCount + ' . ' + title;

        titleContainer.appendChild(p)
        titleCount++


        //calculate.price
        totalPrice += price
        // console.log(totalPrice);

        document.getElementById('totalPrice').innerText=totalPrice.toFixed(2)

       


    })
    
}

const btn = document.getElementById('apply-btn');

btn.addEventListener('click',function(){
    // console.log('clicked');
    const inputField = document.getElementById('input-field').value;
    // console.log(inputField);

    if(inputField === 'SELL200' && totalPrice>=200){
        discount = totalPrice*20/100;
        document.getElementById('discountPrice').innerText=discount;

        total=totalPrice-discount;
        document.getElementById('total').innerText=total
    }
    else{
        document.getElementById('discountPrice').innerText=0;
        total=totalPrice
        document.getElementById('total').innerText=total
    }


    
})
