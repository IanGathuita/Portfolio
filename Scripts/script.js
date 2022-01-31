let cards = document.querySelectorAll(".card");
for(i=0;i <= cards.length;i++){
    if(i==0){
        cards[i].style.backgroundImage = "url(Images/image-product-1.jpg)";
        console.log("done");
    }
    if(i==1){
        cards[i].style.backgroundImage = "url(Images/illustration-hero.svg)";
        console.log("done 2");
    }
}