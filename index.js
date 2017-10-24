window.onload = function(){
  var parent = document.querySelector(".parent");
  parent.onclick = function(event){
    console.log(event.target);
  };
};
