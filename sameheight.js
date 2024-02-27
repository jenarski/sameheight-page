(function () {
  var resize = false;
  equalHeight(false);
})();

window.onresize = function(){
  var resize = true;
  equalHeight(resize);
}

function equalHeight(resize) {
  var elements = document.querySelectorAll(".product_details"),
      allHeights = [],
      i = 0;
  if(resize === true){
    for(i = 0; i < elements.length; i++){
      elements[i].style.height = 'auto';
    }
  }
  for(i = 0; i < elements.length; i++){
    var elementHeight = elements[i].clientHeight;
    allHeights.push(elementHeight);
  }
  for(i = 0; i < elements.length; i++){
    elements[i].style.height = Math.max.apply( Math, allHeights) + 'px';
    if(resize === false){
      elements[i].className = elements[i].className + " show";
    }
  }
}
