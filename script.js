//declaration of variables
const copyBtn = document.getElementById('copy');
const menuBtn = document.getElementById('menu');
const drop = document.querySelector('.dropdown');
const closeBtn = document.getElementById('close');
const homePage = document.querySelector('.home');
const firstSec = document.querySelector('.first');
const chartSec = document.querySelector('.chart');
const buyGuide = document.querySelector('.how-to-buy');







copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText('4xMXegyso9etbWGyCN9Y73hGBzmVireCBYwnEsivpump');
    copy.className="fa-solid fa-check";
    setTimeout(()=>{
        copy.className="fa-regular fa-copy";
    }, 1500)
    console.log('Copied!')
})
menuBtn.addEventListener("click", () => {
    drop.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    drop.style.display = 'none';
})