window.addEventListener("load", function() {
    console.log("Trang đã tải xong");
    
    const images = document.querySelectorAll("figure");

    images.forEach((image, index) => {
        image.setAttribute("tabindex", "0");
    });

    images.forEach(image => {
        image.addEventListener("mouseover", () => {
            console.log("Chuột đang di qua một hình ảnh");
        });

        image.addEventListener("mouseleave", () => {
            console.log("Chuột đã rời khỏi hình ảnh");
        });

        image.addEventListener("focus", () => {
            console.log("Hình ảnh đã nhận tiêu điểm");
            image.style.borderColor = "green";  
        });

        image.addEventListener("blur", () => {
            console.log("Hình ảnh mất tiêu điểm");
            image.style.borderColor = "#ddd";  
        });
    });
});
