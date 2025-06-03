
function upDate(previewPic) {
    console.log("Sự kiện mouseover đã được kích hoạt");   
   
    console.log("Văn bản Alt của hình ảnh: " + previewPic.alt);
    console.log("Nguồn của hình ảnh: " + previewPic.src);
   
    document.getElementById('image').innerHTML = previewPic.alt;
    
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
  }  
  
  function undo() {
    console.log("Sự kiện mouseout đã được kích hoạt");
   
    document.getElementById('image').innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị tại đây.";
  
    document.getElementById('image').style.backgroundImage = "url('')";
  }
  