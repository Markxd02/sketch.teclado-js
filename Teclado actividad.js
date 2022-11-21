function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
clear();
background(123)
var teclapulsada = keyCode;

console.log("teclapulsada: "+ teclapulsada);
textSize(50);
switch (teclapulsada) {
    case 38:
        text("arriba",100,100)
        break;
        case 40:
            text("abajo",100,100);
            break;
            case 37:
                text("izquierda",100,100);
                break;
                case 39:
                ellipse(100,100,50,50);
                text("derecha",100,100);
                break;
                default:
                    break;
}
  }
