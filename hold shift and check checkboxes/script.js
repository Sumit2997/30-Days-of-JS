const items=document.querySelectorAll('.inbox input[type="checkbox"]');
let check;
function change(e){
  let range=false; 
  if(e.shiftKey && this.checked){
    items.forEach(item=>{
      if(item===this || item===check){
        range=!range;
      }
      if(range){
        item.checked=true;
      }
    })
  }
  check=this;
}
items.forEach((item)=>item.addEventListener("click",change));