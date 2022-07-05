function generatecat(url){
var image = document.createElement('img');
var div = document.getElementById('flex-cat-gen');
image.src =url;
div.appendChild(image);
}

$(document).ready(function(){
  $('#cat-generator').click(function(){
    getnewimage();
  });
  function getnewimage(){
    $.ajax({
      url:'https://api.thecatapi.com/v1/images/search?api_key=2aeb2c44-30b8-46bd-9ac0-e2a8028aa921',
      success: function(data){
        let value=data[0].url;
        generatecat(value);
        
      }
  })
  
  }
});