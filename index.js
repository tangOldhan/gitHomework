window.onload = function(){
  var parent = document.querySelector(".parent");
  var child = document.querySelector(".child");
  parent.onclick = function(event){
    console.log(event.target);
    console.log(event.currentTarget);
  };
  child.addEventListener('click',function(event){
    console.log(event.target);
    console.log(event.currentTarget);
  });

};
