// Listen for orientation change
window.addEventListener('orientationchange', function() {

  // Check if landscape mode
  if (window.orientation === 90 || window.orientation === -90) {

    // Create overlay
    var overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,1)';

    // Create message
    var message = document.createElement('p');
    message.id = 'message';
    message.classList.add('message');

    // Add icon
    var icon = document.createElement('i');
    icon.classList.add('fas', 'fa-exclamation-triangle');

    message.appendChild(icon);
    // Append image

    // Add text
    var text = document.createTextNode(' Please rotate your device to portrait mode');
    message.appendChild(text);
    var img = document.createElement('img');
    img.src = 'img/icons8-tilt.gif';
    message.appendChild(img);
    // Style message
    message.style.color = '#fff';
    message.style.fontSize = '20px';
    message.style.textAlign = 'center';
    message.style.margin = '200px auto';

    // Add message to overlay and overlay to body
    overlay.appendChild(message);
    document.body.appendChild(overlay);

  } else {

    // Remove overlay if exists
    var overlay = document.getElementById('overlay');
    if(overlay) {
      overlay.remove();
    }

  }

});






function readURL(input) {
   if (input.files && input.files[0]) {
       var reader = new FileReader();

       reader.onload = function (e) {
           $('#blah').attr('src', e.target.result);
       }

       reader.readAsDataURL(input.files[0]);
   }
}

$("#imgInp").change(function(){
   readURL(this);
   console.log("hiii")
});

document.getElementById("input_btn")
.addEventListener('click',function(){
  document.getElementById("imgInp").click();
},false);
