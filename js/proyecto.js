

$(document).ready(function(){

var index = 4;
var timeToDisplay = 5000;
var opacityChangeDelay = 5;
var opacityChangeAmount = 0.05;
var slideshow = $('#fotos');
var banderaDetener = 0;
var moverAtras = 'no';

$("#navegacionProyecto").html('<img src="imagenes/atrasp.png" alt="atras"><img src="imagenes/encendido.png" alt="encendido"><img src="imagenes/apagado.png" alt="apagado"><img src="imagenes/adelantep.png" alt="adelante">');

	



var transition = function(){
	
	if(banderaDetener == 0){
	
		$("#fotos").attr('src', 'http://baezsaavedra.com/plantilla/proyectos/proyectos/p'+proyecto+'/imagenes/'+index+'.jpg');
		$("#destino").attr('href', 'http://www.xlogam.com/');
		index++;
		if(index == (cantidadFotos+3)){
			index = 3;
		}
	}
};




						        
		var fadeIn = function(opacity) {

			if(banderaDetener == 0){
	        	opacity = opacity + opacityChangeAmount;
	        	slideshow.css('opacity', opacity);
	        	if (opacity >= 1) {
		            slideshow.trigger('fadeIn-complete');
		            return;
		        }
	        	setTimeout(function() {
	            	fadeIn(opacity);
	        	}, opacityChangeDelay);
			}
    	};

    	var fadeOut = function(opacity) {
    		if(banderaDetener == 0){
	        	opacity = opacity - opacityChangeAmount;
	        	slideshow.css('opacity', opacity);
	       		
	       		if (opacity <= 0) {
					slideshow.trigger('fadeOut-complete');
	            	return;
	        	}
	        	
	        	setTimeout(function() {
	            	fadeOut(opacity);
	        	}, opacityChangeDelay);
	        }
   		};

    	slideshow.on('fadeOut-complete', function(event) {
        	//if(banderaDetener == 0){
        	transition();
        	fadeIn(0);
   			// }
    	});

    	slideshow.on('display-complete', function(event) {
			//if(banderaDetener == 0){
        	fadeOut(1);
        	//}
    	});
    
    	slideshow.on('fadeIn-complete', function(event) {
			//if(banderaDetener == 0){
            	setTimeout(function() {
                slideshow.trigger('display-complete');
            	}, timeToDisplay);
             //}
    	});

    	
		fadeIn(0);
		









});
