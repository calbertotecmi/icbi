jQuery(window).ready(function($) {
    //Validar si existen variables.
    window.$ = window.$ || $
    if (window.location.href.indexOf('ptm' || 'gclid') > -1) {
        // Obtenemos el valor de los parámetros utm y gclid
        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };

        var myUtm_proveedor = getUrlParameter('ptm_proveedor');
        var myUtm_medio = getUrlParameter('ptm_medio');
        var myUtm_canal = getUrlParameter('ptm_canal');        
        var myUtm_formato = getUrlParameter('ptm_formato');
        var myUtm_localizacion = getUrlParameter('ptm_localizacion');
        var myUtm_enfoque = getUrlParameter('ptm_enfoque');
        var myGclid = getUrlParameter('gclid');
        var myFbclid = getUrlParameter('fbclid');
	    var myUtm_source =  getUrlParameter('utm_source');
	    var myUtm_medium =  getUrlParameter('utm_medium');
	    var myUtm_campaign =  getUrlParameter('utm_campaign');
	    var utmEmpresa =  getUrlParameter('empresa');
	    var utmKam =  getUrlParameter('kam');
        var expiration = new Date();

        console.log('Mis parámetros son: ' + myUtm_proveedor, myUtm_medio, myUtm_canal, myUtm_formato, myUtm_localizacion, myUtm_enfoque, myGclid);


        localStorage.setItem("tm_proveedor", myUtm_proveedor);
        localStorage.setItem("tm_medio", myUtm_medio);
        localStorage.setItem("tm_canal", myUtm_canal);
        localStorage.setItem("tm_formato", myUtm_formato);
        localStorage.setItem("tm_localizacion", myUtm_localizacion);
        localStorage.setItem("tm_enfoque", myUtm_enfoque);
        localStorage.setItem("tm_gclid", myGclid);
        localStorage.setItem("tm_fbclid", myFbclid);
        localStorage.setItem("tm_source", myUtm_source);
	    localStorage.setItem("tm_medium", myUtm_medium);
	    localStorage.setItem("tm_campaign", myUtm_campaign);
        
        expiration.setMinutes(expiration.getMinutes() + 1);
        

    }
    
    
    if(!localStorage.getItem("tm_proveedor")){
        var proveedor, medio, formato, localizacion, enfoque, gclid ="";
        var canal 	= "13";
    }else{
        var custom_8   	= localStorage.getItem("tm_source");    
        var custom_3   	= localStorage.getItem("tm_medium");  
        var custom_2 	= localStorage.getItem("tm_campaign"); 
        var proveedor   = localStorage.getItem("tm_proveedor");    
        var medio   	= localStorage.getItem("tm_medio");  
        var canal 	    = localStorage.getItem("tm_canal");   
        var formato 	= localStorage.getItem("tm_formato"); 
        var localizacion 	= localStorage.getItem("tm_localizacion"); 
        var enfoque 	= localStorage.getItem("tm_enfoque"); 
        var gclid       = "";
        if(!myGclid){
            gclid       = localStorage.getItem("tm_fbclid");
        }else{
            gclid       = localStorage.getItem("tm_gclid");
        }

        
    }
        

$(window).on('load', function(){    
        //asignacion a utm Proveedor
         var elementsProveedor = document.getElementsByName( 'proveedor' );
         var idProveedor = elementsProveedor[0].getAttribute( 'id' );
         //document.getElementsByClassName("hs-proveedor")[0].style.display = "none";
         document.querySelectorAll("[name^=proveedor]").value= proveedor;
         document.getElementById(idProveedor).value = proveedor;
        //asignacion a utm Medio
         var elementsMedio= document.getElementsByName( 'utm_medioro__c' );
         var idMedio= elementsMedio[0].getAttribute( 'id' );
        // document.getElementsByClassName("hs-utm_medioro__c")[0].style.display = "none";
         document.querySelectorAll("[name^=utm_medioro__c]").value= medio;
         document.getElementById(idMedio).value = medio;
         //asignacion a utm Formato
         var elementsformato= document.getElementsByName( 'formato' );
         var idFormato= elementsformato[0].getAttribute( 'id' );
         //document.getElementsByClassName("hs-formato")[0].style.display = "none";
         document.querySelectorAll("[name^=formato]").value= formato;
         document.getElementById(idFormato).value = formato;
         //asignacion a utm Canal
         var elementsCanal= document.getElementsByName( 'canal' );
         var idCanal = elementsCanal[0].getAttribute( 'id' );
         //document.getElementsByClassName("hs-canal")[0].style.display = "none";
         document.querySelectorAll("[name^=canal]").value= canal;
         document.getElementById(idCanal).value = canal;
         //asignacion a utm Localizacón
         var elementslocalizacion= document.getElementsByName( 'localizacion' );
         var idLocalizacion = elementslocalizacion[0].getAttribute( 'id' );
         //document.getElementsByClassName("hs-localizacion")[0].style.display = "none";
         document.querySelectorAll("[name^=localizacion]").value= localizacion;
         document.getElementById(idLocalizacion).value = localizacion;
         //asignacion a utm enfoque
         var elementsEnfoque= document.getElementsByName( 'enfoque' );
         var idEnfoque = elementsEnfoque[0].getAttribute( 'id' );
        // document.getElementsByClassName("hs-enfoque")[0].style.display = "none";
         document.querySelectorAll("[name^=enfoque]").value= enfoque;
         document.getElementById(idEnfoque).value = enfoque;
         //asignacion a utm Camping (custom 2)
         var elementsCamping= document.getElementsByName( 'custom_2' );
         var idCamping = elementsCamping[0].getAttribute( 'id' );
         //document.getElementsByClassName("hs-custom_2")[0].style.display = "none";
         document.getElementById(idCamping).value = custom_2;
         //asignacion a utm Medium (custom 3)
         var elementsMedium= document.getElementsByName( 'custom_3' );
         var idMedium = elementsMedium[0].getAttribute( 'id' );
         //document.getElementsByClassName("hs-custom_3")[0].style.display = "none";
         document.getElementById(idMedium).value = custom_3;
         //asignacion a utm Source (custom 8)
         var elementSource= document.getElementsByName( 'custom_8' );
         var idSource = elementSource[0].getAttribute( 'id' );
         //document.getElementsByClassName("hs-custom_8")[0].style.display = "none";
         document.getElementById(idSource).value = custom_8;
         //asignacion a GCLID
         var elementsgclid= document.getElementsByName( 'gclid' );
         var idgclid = elementsgclid[0].getAttribute( 'id' );
         //document.getElementsByClassName("hs-gclid")[0].style.display = "none";
         document.getElementById(idgclid).value = gclid;
         var elementsempresa= document.getElementsByName( 'empresa' );
         var idempresa = elementsempresa[0].getAttribute( 'id' );
         //document.getElementsByClassName("hs-gclid")[0].style.display = "none";
         document.getElementById(idempresa).value = utmEmpresa;
         var elementsKam= document.getElementsByName( 'kam' );
         var idKam = elementsKam[0].getAttribute( 'id' );
         //document.getElementsByClassName("hs-gclid")[0].style.display = "none";
         document.getElementById(idKam).value = utmKam;
        });  
    
});