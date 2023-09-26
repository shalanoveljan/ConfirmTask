
let btn=document.querySelector('button');
btn.onclick=function bodyconfirm() {
    const confirmation = confirm("Click OK to show the body.");
    const body = document.body;
    if (confirmation)
     {
      body.style.visibility = "visible";
    }
     else 
     {
      body.style.visibility = "hidden";
    }
  }