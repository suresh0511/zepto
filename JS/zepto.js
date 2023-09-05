const cardapi= [{
    percent:16,
    image: "https://cdn.zeptonow.com/production///tr:w-200,ar-1650-1172,pr-true,f-webp,q-80/inventory/product/a59eabd7-b3e9-49d8-997d-e6e9fbe10bc9-Tomato_Local.webp",
    title: "Tomato (Naattu Thakkali)",
    quantity: "500 g",
    value: "₹24",
    offervalue: "₹20",
    buttonvalue: "Add",
    count: 1
},{
    percent:65,
    image: "https://cdn.zeptonow.com/production///tr:w-200,ar-420-420,pr-true,f-webp,q-80/inventory/product/346fed59-9337-4828-bc35-ee0891bbe2ee-c7c6fae7-2102-4203-b43d-55c902e76299.jpeg",
    title: "Carrot Ooty",
    quantity: "500 g",
    value: "₹55",
    offervalue: "₹19",
    buttonvalue: "Add",
    count: 1
},{
    percent:17,
    image: "https://cdn.zeptonow.com/production///tr:w-200,ar-4733-3447,pr-true,f-webp,q-80/inventory/product/12a304b8-c8b2-463c-9846-4b2b8de36a00-coriander_leaves.jpg",
    title: "Coriander Leaves",
    quantity: "1 Bunch 80g-100g",
    value: "₹17",
    offervalue: "₹14",
    buttonvalue: "Add",
    count: 1
},{
    percent:15,
    image: "https://cdn.zeptonow.com/production///tr:w-200,ar-805-516,pr-true,f-webp,q-80/inventory/product/669f26cb-9136-434d-82b4-68ba9857fdeb-15zk9Fx0OipiDgvo9Pop3gP-KE72xrCdp.jpeg",
    title: "Lemon (Elumichai Pazham)",
    quantity: "200 g",
    value: "₹40",
    offervalue: "₹34",
    buttonvalue: "Add",
    count: 1
},{
    percent:15,
    image: "https://cdn.zeptonow.com/production///tr:w-200,ar-220-229,pr-true,f-webp,q-80/inventory/product/daeb06f2-6bad-44e0-8907-9147f0e7dc4a-Photo.jpeg",
    title: "Beans Haricot",
    quantity: "250 g",
    value: "₹33",
    offervalue: "₹28",
    buttonvalue: "Add",
    count: 1
},{
    percent:14,
    image: "https://cdn.zeptonow.com/production///tr:w-200,ar-6086-3465,pr-true,f-webp,q-80/inventory/product/81c79e8c-af83-45b3-a97d-591a6283e1ab-shutterstock_335444504_(1).jpg",
    title: "Ladies Finger (Vendikai)",
    quantity: "500 g",
    value: "₹21",
    offervalue: "₹18",
    buttonvalue: "Add",
    count: 1
},{
    percent:15,
    image: "https://cdn.zeptonow.com/production///tr:w-200,ar-270-270,pr-true,f-webp,q-80/inventory/product/0208af10-0dbc-4a41-a105-de48fd7b78ca-tmp/1e5a3ede-cccc-4b77-ac4a-219aacbaddab.jpeg",
    title: "Capsicum Green (kudai Milagaai)",
    quantity: "500 g",
    value: "₹59",
    offervalue: "₹50",
    buttonvalue: "Add",
    count: 1
},{
    percent:16,
    image: "https://cdn.zeptonow.com/production///tr:w-200,ar-880-933,pr-true,f-webp,q-80/inventory/product/2eaecd58-8c3f-4e08-82e1-f30f3402f64d-tmp/747d41e0-159f-4352-bce8-119305ea30a5.jpeg",
    title: "Green Chilli (Pachchai Milagai)",
    quantity: "100 g",
    value: "₹12",
    offervalue: "₹10",
    buttonvalue: "Add",
    count: 1
}]

const element= document.getElementById('fooditems');


cardapi.forEach((result,index) => {

  const content =`
                 <div class="card1">
                    <div class="offer">
                        <div class="percent">${result.percent}% Off</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="none" viewBox="0 0 46 46" style="height: 50px; width: 50px;"><g filter="url(#a)"><path fill="#FF3269" d="M20.49 9.8c.67-.75 1-1.12 1.36-1.31a2.4 2.4 0 0 1 2.3 0c.36.2.7.56 1.36 1.3.37.42.55.62.76.77.4.3.9.45 1.4.45.26 0 .52-.05 1.06-.17.98-.2 1.46-.31 1.87-.26.81.1 1.51.62 1.86 1.35.18.37.23.87.33 1.86.06.55.09.82.17 1.07.15.47.46.9.86 1.19.21.15.46.26.96.48.91.4 1.37.6 1.67.9.6.55.86 1.38.7 2.18-.07.4-.32.83-.82 1.7-.27.47-.41.7-.49.95-.15.48-.15 1 0 1.48.08.24.22.48.5.95.5.87.74 1.3.82 1.7a2.4 2.4 0 0 1-.71 2.19c-.3.28-.76.48-1.67.89-.5.22-.75.33-.96.48-.4.3-.7.72-.86 1.2-.08.24-.11.51-.17 1.06-.1.99-.15 1.49-.33 1.86a2.4 2.4 0 0 1-1.86 1.35c-.4.05-.9-.05-1.87-.26-.54-.12-.8-.18-1.06-.17-.5 0-1 .16-1.4.45-.21.15-.4.36-.76.76-.67.75-1 1.12-1.36 1.31a2.4 2.4 0 0 1-2.3 0c-.36-.2-.7-.56-1.36-1.3-.37-.41-.55-.62-.76-.77-.4-.3-.9-.45-1.4-.45-.26 0-.52.05-1.06.17-.98.2-1.46.31-1.87.26a2.4 2.4 0 0 1-1.86-1.35c-.18-.37-.23-.87-.33-1.86a5.32 5.32 0 0 0-.17-1.07 2.4 2.4 0 0 0-.86-1.19c-.21-.15-.46-.26-.96-.48-.91-.4-1.37-.6-1.67-.9a2.4 2.4 0 0 1-.7-2.18c.07-.4.32-.83.82-1.7.27-.47.4-.7.49-.95.15-.48.15-1 0-1.48-.08-.24-.22-.48-.5-.95-.5-.87-.74-1.3-.82-1.7a2.4 2.4 0 0 1 .71-2.19c.3-.28.76-.48 1.67-.89.5-.22.75-.33.96-.48.4-.3.7-.72.86-1.2.08-.24.11-.51.17-1.06.1-.99.15-1.49.33-1.86a2.4 2.4 0 0 1 1.86-1.35c.4-.05.9.05 1.87.26.54.12.8.18 1.06.17.5 0 1-.16 1.4-.45.21-.15.4-.36.76-.76Z"></path></g><defs><filter id="a" width="44.4" height="45.61" x=".8" y=".19" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.156863 0 0 0 0 0.172549 0 0 0 0 0.247059 0 0 0 0.2 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_27987_14624"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_27987_14624" result="shape"></feBlend></filter></defs>
                        </svg>
                    </div>
                    <img src="${result.image}" alt="" class="productImage">
                    <div class="productContent">
                        <div class="productName">
                            <h4>${result.title}</h4>
                            <p>${result.quantity}</p>
                        </div>
                        <div class="bottom">
                            <div class="money">
                                <s>${result.value}</s>
                                <h5>${result.offervalue}<h5>
                            </div>
                            <button id='addbutton${index}' onclick="Click('addbutton${index}','wrapper${index}')">${result.buttonvalue}</button>
                            <div class="wrapper" id='wrapper${index}'>
                                <div class="span">
                                  <span class="minus${index}" onclick= "buttonMinus('num${index}','wrapper${index}','addbutton${index}',${index})">-</span>
                                  <span class="num${index}">${result.count}</span>
                                  <span class="plus${index}" onclick= "buttonPlus('num${index}',${index})">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

        element.innerHTML += content;
});


function Click(addId,wrapperId){
  document.getElementById(addId).style.display = "none";
  document.getElementById(wrapperId).style.display = "block";
}


document.addEventListener("DOMContentLoaded", function () {
    const scrollImages = document.querySelector(".cardlist");
    const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");
  
    function checkScroll() {
      const currentScroll = scrollImages.scrollLeft;
      if (currentScroll === 0) {
        leftButton.setAttribute("disabled", "true");
        leftButton.classList.add("mystyle");
        rightButton.removeAttribute("disabled");
      } else if (currentScroll === scrollLength) {
        rightButton.setAttribute("disabled", "true");
        leftButton.removeAttribute("disabled");
      } else {
        leftButton.removeAttribute("disabled");
        rightButton.removeAttribute("disabled");
      }
    }
  
    scrollImages.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll();
  
    function leftScroll() {
      scrollImages.scrollBy({
        left: -200,
        behavior: "smooth"
      });
      rightButton.classList.remove("mystyle");
    }
  
    function rightScroll() {
      scrollImages.scrollBy({
        left: 200,
        behavior: "smooth"
      });
        leftButton.classList.remove("mystyle");
        rightButton.classList.add("mystyle");
    }
  
    leftButton.addEventListener("click", leftScroll);
    rightButton.addEventListener("click", rightScroll);
  });


const number = document.querySelector(".num"),
      wrapper = document.querySelector(".wrapper");



function buttonPlus(numId,index){
  const number = document.querySelector(`.${numId}`);
  cardapi[index].count= cardapi[index].count + 1;
  number.innerText = cardapi[index].count;
}

function buttonMinus(numId,wrapperId,addbuttonId,index){
  const number = document.querySelector(`.${numId}`);
  
  if(cardapi[index].count > 1){
    cardapi[index].count= cardapi[index].count - 1;
    number.innerText = cardapi[index].count;
  }else{
    document.getElementById(wrapperId).style.display="none";
    document.getElementById(addbuttonId).style.display="block";
  }
}

// plus.addEventListener("click", ()=>{
//   a++;
//   number.innerText = a;
// });

// minus.addEventListener("click", ()=>{
//   if(a > 1){
//     a--;
//     number.innerText = a;
//   }else{
//     document.getElementById("wrapper").style.display="none";
//     add.style.display = "block";
//   }
// });

