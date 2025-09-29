//declaration of variables
const copyBtn = document.getElementById('copy');










copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText('4xMXegyso9etbWGyCN9Y73hGBzmVireCBYwnEsivpump');
    copy.className="fa-solid fa-check";
    setTimeout(()=>{
        copy.className="fa-regular fa-copy";
    }, 1500)
    console.log('Copied!')
})