let titleCount = 1 ; 
let totalPrice=0;
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
    const coponCode=inputField.split(' ').join().toUpperCase();
    // console.log(coponCode);

    if( totalPrice >= 200){
        if(coponCode ==='SELL200'){
            // discount = totalPrice*20/100;
            // document.getElementById('discountPrice').innerText=discount;
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = (totalPrice*0.2).toFixed(2);
            discountElement.innerText=discountAmount
            // total=totalPrice-discount;
            // document.getElementById('total').innerText=total

            const totalPriceElement=document.getElementById('total');
            const total = totalPrice - discountAmount;
            totalPriceElement.innerText=total;
            document.getElementById('input-field').value='';



        }
        else{
            alert('Invalid Cupone code');
            document.getElementById('input-field').value='';

        }
        

        
    }
    else{
        alert('Please purchase  at least $200');
        document.getElementById('input-field').value='';

        // document.getElementById('discountPrice').innerText= 0 ;
        // total = totalPrice
        // document.getElementById('total').innerText=total
    }


    
})


document.getElementById('purchase').addEventListener('click' , function(){
    document.getElementById('Congratulations').classList.remove('hidden')

})
document.getElementById('go-home').addEventListener('click' , function(){
    document.getElementById('Congratulations').classList.add('hidden')

})
