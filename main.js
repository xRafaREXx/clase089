var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    //Define las variables "new_width" y "new_height" para almacenar el nuevo ancho y alto de la pantalla.


    /*Si el tamaño de la pantalla es inferior a 992 (significa 992 px), cambia el ancho y el alto del
     lienzo con el nuevo ancho y la nueva altura. */


    //Cambia el evento 'mousedown' por evento 'touchstart'
    canvas.addEventListener("mousedown", my_mousedown);  
    //Cambia la funcion a 'my_touchstart'  
    function my_mousedown(e)
    {
        //Muestra my_toustart en la consola.


        //Inicio de actividad adicional
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Finaliza la actividad adicional

        //Actualiza last_position_of_x_touch y last_position_of_y_touch aquí.
       



    }

    //Remplaza el 'mousemove' evento con 'touchmove'.
    canvas.addEventListener("mousemove", my_mousemove);
    //Remplaza el "my_mousemove()" función con "my_touchmove()" función.
    function my_mousemove(e)
    {
        //Inicia sesión "my_touchMove" en la consola.
        console.log("my_touchMove");

        /*Actualiza el "current_position_of_touch_x" y "current_position_of_touch_y" 
        con los puntos tocados en lienzo.*/
        current_position_of_touch_x = 
        current_position_of_touch_y = 

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
    
        console.log("Última posición de las coordenadas X y Y = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
    
        console.log("Posición actual de las coordenadas X y Y = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

    //Actividad adicional para despejar el área.

    

