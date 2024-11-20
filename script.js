const product=[
    {
        id:0,
        image:'img/one.jpg',
        title:'main',
        price:220,


    },
    {
        id:1,
        image:'img/two.webp',
        title:'main',
        price:220,


    },
    {
    id:2,
    image:'img/third.jpeg',
    title:'main',
    price:220,


  },
  {
  id:23,
    image:'img/fourth.jpg',
    title:'main',
    price:220,


  },
  {
    id:23,
      image:'img/fourth.jpg',
      title:'main',
      price:220,
  
  
    }
];
const categories=[...new Set(product.map((item)=>{
    return item;
}))]
let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
    {
        var{image,title,price}=item;
    return(
        `<div class="box">
    <div class="img-box">
        <img src=${image} alt="" class="images">

    </div>
    <div class="bottom">
        <p>${title}</p>
        <h2>${price}.00</h2>`+
        "<button onclick='addtoCart("+(i++)+")'>Add to cart</button>"+
    `</div>

    </div>`

    )
    }).join('')
    
    var cart=[];
    function addtoCart(a)
    {
        cart.push({...categories[a]})
       displayCart();
    }
    function delElement(a)
    {
        cart.splice(a,1);
        displayCart();
    }
    function displayCart() {
        let j = 0;
        let total=0;
        document.getElementById("count").innerHTML=cart.length;
    document.getElementById('total').innerHTML="$ "+0+".00";
        if (cart.length === 0) {
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
        } else {
            document.getElementById('cartItem').innerHTML = cart.map((item) => {
                const { image, title, price } = item;
                total=total+price;
                document.getElementById('total').innerHTML="$ "+total+".00";
                return `
                    <div class="cart-item">
                        <div class="row-img">
                            <img class="rowimg" src="${image}">
                        </div>
                        <p style="font-size:12px;">${title}</p>
                        <h2 style="font-size:12px;">$ ${price}.00</h2>
                        <i class="fa-solid fa-trash" onclick="delElement(${j++})"></i>
                    </div>
                `;
            }).join('');
        }
    }
    