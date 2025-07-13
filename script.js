 //creating a function to validate the form
 function validateForm()
 {
       var uname= document.forms["myForm"]["username"].value;
   var message= document.forms["myForm"]["message"].value;
if (uname== "" || message=="") {
   alert("Empty fields.Please fill the form.");

}
else{
alert("Thank you for the feedback");

}
}
 //calling function when clicking the add to cart link
document.querySelectorAll('#add-to-cart-btn').forEach(button => {
   button.addEventListener('click', function () {
       const productId = this.getAttribute('data-product-id');
       alert(`Product added to cart!`);
   });
 });