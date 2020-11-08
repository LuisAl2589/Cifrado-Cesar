/**
 * Vamos a crear una funcaion cpn el uso de js6
 * que se encargue del cifrado y descifeado del texto de area
 * 
 */
var cesar=cesar || (function(){

    var doStaff = function(txt,desp,action){
        var replace= (function(){
            var abc = ['a','b','c','d','e','f','g','h','i','j','k','l',
                        'm','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
            var l = abc.length;

            return function(c){
                var i = abc.indexOf(c.toLowerCase());
                // verificar que no este vacio

                if(i!= -1){
                    var pos = i;
                    
                    if(action){

                        if((pos+desp)>26){
                            pos= (pos+desp)-27
                        }else{
                            pos += desp;
                            
                        }
                        
                           
                         
                        
                    }else{
                        if((pos-desp)<0){
                            pos= (pos-desp)+27
                        }else{
                            pos -= desp;
                            
                        }
                        
                        

                        
                    }
                    return abc[pos];


                }

                return c;
            };
        })();

        var re = (/([a-z ñ])/ig);
        return String (txt).replace(re,function(match){
            return replace(match);
        });

    };
    
    return {
        encode: function (txt,desp){
            return doStaff(txt,desp,true);
        },
        decode: function (txt,desp){
            return doStaff(txt,desp,false);
        }
    };

} )();

function desplazar (desp){
    if(desp<=26){
        fdesp= desp
    }else{
        ndesp = desp%26
        fdesp = ndesp
    }

    return fdesp
}

function codificar(){
    var desp= desplazar(document.getElementById("desp").value)
    if(desp>=1){
        document.getElementById('resultado').innerHTML= cesar.encode(
            document.getElementById('cadena').value, parseInt(desp))
    }else{
        alert("Por favor Ingrese solo un número igual o mayor a uno")
    }
    
    
}


function decodificar(){
    var desp= desplazar(document.getElementById("desp").value)
    if(desp>=1){
        document.getElementById('resultado').innerHTML= cesar.decode(
            document.getElementById('cadena').value, parseInt(desp) );
    }else{
        alert("Por favor Ingrese solo un número igual o mayor a uno")
    }
    
    
    
}