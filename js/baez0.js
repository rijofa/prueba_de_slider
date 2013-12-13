var index = 1;
var timeToDisplay = 5000;

$(document).ready(function(){


	var opacityChangeDelay = 5;
	var opacityChangeAmount = 0.05;
	var slideshow = $('#fotos');
	var banderaDetener = 0;
	var moverAtras = 'no';

	//BANNER QUE ROTA IMAGENES
	

	if ( typeof botonactivo !== "undefined" && botonactivo) {
      // vriable is set and isnt falsish so it can be used;
      $("#btn"+botonactivo).attr('src', 'imagenes/encendido.png');
    } 
    else{
        $("#btn1").attr('src', 'imagenes/encendido.png');
    }













          
          $('#logos').css({
               
               left: ($('#articulo2').width() - $('#logos').outerWidth())/2,
              
          });
        
  

    
      





               
        $('#atras').click(function () {
			moverAtras = 'si';
            transition();      
     	});

        $('#adelante').click(function () {
			transition();
        });
            
        



        $("#articulo2").mouseenter(function () {
        	banderaDetener = 1;
        	slideshow.off();
        });


        







		$("#articulo2").mouseleave(function () {
            if(banderaDetener == 1){
            	
            	banderaDetener = 0;
            	timeToDisplay = 5000;
            	

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


            	fadeOut(1);






/*
        		timeToDisplay = 5000;
				opacityChangeDelay = 0;
				opacityChangeAmount = 0.05;
   				slideshow = $('#fotos');
				index = 1;
				moverAtras = 'no';



				
  






            	slideshow.on('fadeOut-complete');

			    	slideshow.on('display-complete');
			    
			    	slideshow.on('fadeIn-complete');



			    	fadeIn(0);
            	*/
            	
            
            }
            //index = index - 2;
            //transition();
            //fadeOut(1);
       	});
         

		var transition = function(){
			if(banderaDetener == 0){
				timeToDisplay = 5000;


				$(".boton").attr('src', 'imagenes/apagado.png');



				if(moverAtras == 'si'){

	       			$("#btn"+(index)).attr('src', 'imagenes/apagado.png');
	        		
	        		if(index <= 1){
	                	index = cantidadFotos;
	            	}
	            	else{
	                	index = index - 1;
	            	}
	            	
	            	$("#btn"+index).attr('src', 'imagenes/encendido.png');
	            	$("#fotos").attr('src', urls[index-1]);

	            	alert("jejeje");






	    			$("#destino").attr('href', 'http://www.xlogam.com/');
	    			moverAtras = 'no';
				}
				else{
					$("#btn"+(index)).attr('src', 'imagenes/apagado.png');
					
					if (index >= cantidadFotos) {
						index = 1;
					}
					else{
						index = index + 1;
					}

					var y=$("#fotos");
					y.attr('src', urls[index-1]);
					var z=$("#destino");
					z.attr('href', 'http://www.xlogam.com/');
					$("#btn"+(index)).attr('src', 'imagenes/encendido.png');
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







function puntero(a){





   $(".boton").attr('src', 'imagenes/apagado.png');

    index = a;
  
    





$("#btn"+a).attr('src', 'imagenes/encendido.png');
    
  $("#fotos").attr('src', urls[index-1]);



$("#destino").attr('href', 'http://www.xlogam.com/');
   


    
}