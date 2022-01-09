const getNumber=document.querySelector('#getNumber');
const check=document.querySelector("#check");
const disp=document.querySelector("#disp");

check.addEventListener('click',()=>{
    typeCheck();
})
document.addEventListener('keydown',(event)=>{
    if (event.defaultPrevented) {
        return; 
      }
      else if(event.key==="Enter"){
          typeCheck();
      }
});
function typeCheck(){
    let num=getNumber.value;
    if (num==0||num<0){
        disp.innerHTML=`<p>The number is Invalid</p>`
    }
    else if(num%2===0){
        disp.innerHTML=`<p>The number is Even</p>`
    }
    else if(num%2!==0){
        disp.innerHTML=`<p>The number is Odd</p>`
    }
};