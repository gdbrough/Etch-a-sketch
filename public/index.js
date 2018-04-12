window.addEventListener("DOMContentLoaded", function(){
  const canvas = document.querySelector("#main-canvas");
  const context = canvas.getContext("2d")
  let coords = [];

  canvas.addEventListener("click", function(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    coords = [event.layerX - 95, event.layerY -95];
    context.beginPath();
    context.moveTo(coords[0], coords[1]);
    return coords;
  });


  document.addEventListener("keydown", function(event){
    const keyName = event.key;
    switch (event.key){
      case "ArrowRight":
      if(coords[0] < context.canvas.width - 5){
        context.lineTo(coords[0] += 5,coords[1]);
      };
      break;
      case "ArrowLeft":
      if(coords[0] > 5){
        context.lineTo(coords[0] -= 5,coords[1]);
      };
      break;
      case "ArrowUp":
      if(coords[1] > 5){
        context.lineTo(coords[0],coords[1] -= 5);
      };
      break;
      case "ArrowDown":
      if(coords[1] < context.canvas.height - 5){
        context.lineTo(coords[0],coords[1] += 5);
      };
      break;
    };
    context.stroke();
    return coords;
  });

});
