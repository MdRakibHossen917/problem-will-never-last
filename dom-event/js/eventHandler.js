//console.log('handler file added')

 document
   .getElementById("btn-update-title")
   .addEventListener("click", function () {
     //console.log('button clicked')
     const pageTitleElement = document.getElementById("page-title");
     //console.log(pageTitleElement);
     pageTitleElement.innerText = "Updated page title text";
   });

     document
       .getElementById("btn-login")
       .addEventListener("click", function () {
         //console.log('Login button clicked')
         const userInfoEl = document.getElementById("user-info");
         userInfoEl.innerText = "Login Successful";
       });