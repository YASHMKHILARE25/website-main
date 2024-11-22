// fa_custom_setup_kit('https://kit.fontawesome.com/yourkitcode.js');

// const bar = document.getElementById('bar');
// const nav = document.getElementById('navbar');

// if(bar){
//     bar.addEventListener("click", () => {
//         nav.style.right=0;
//     })
// }


function show(){
    document.getElementById('navbar').classList.add('active');
}

function remove(){
    document.getElementById('navbar').classList.remove('active');
}

document.querySelectorAll('.js-cart-click').forEach((carticon)=>{
    carticon.addEventListener('click',()=>{
      window.location.href='cart.html';
    });
  });
