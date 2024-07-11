jQuery(document).ready(function ($) {

    window.fn=function(nivelD, programaD, campusD){
        //obtener mes actual
        var currentMonth = (new Date).getMonth() + 1;

        //validar mes para periodo Prepa
        if (currentMonth >= 1 && currentMonth <= 4) {
            var mesTetra = 'Mayo';

        } else if (currentMonth >= 5 && currentMonth <= 8) {
            var mesTetra = 'Septiembre';
        } else if (currentMonth >= 9 && currentMonth <= 12) {
            var mesTetra = 'Enero';

        }
        //validar mes para periodo Prepa
        if (currentMonth >= 1 && currentMonth <= 7) {
            var mesPrepa = 'Agosto';

        } else {
            var mesPrepa = 'Enero';
        }

        //Validar año para Periodo
        if (mesPrepa == 'Enero') {
            var periodoSemestre = mesPrepa + ' ' + (new Date().getFullYear() + 1);
            var periodoSemestrePrepa = 'Agosto ' + (new Date().getFullYear() + 1);
        } else {
            var periodoSemestre = mesPrepa + ' ' + (new Date().getFullYear());
            var periodoSemestrePrepa = 'Agosto ' + (new Date().getFullYear());

        }

        if (mesTetra == 'Enero') {
            var periodoTetra = mesTetra + ' ' + (new Date().getFullYear() + 1);
        } else {
            var periodoTetra = mesTetra + ' ' + (new Date().getFullYear());
        }


            //obtenemos los ID de los campos del formulario
            // campus de interes
            var campus_interes = this.document.getElementsByName('campus_de_interes');
            var campusInteresid = campus_interes[0].getAttribute('id');
            var campusInteres = campusInteresid.split('_#');
            campusInteres = campusInteres[0];
            this.document.getElementById(campusInteresid).id = campusInteres;
            $("#" + campusInteres).prop('disabled', true);
            // Programa de interes
            var listado_profesional = this.document.getElementsByName('listadoprofesional');
            var listadoProfesionalid = listado_profesional[0].getAttribute('id');
            var listadoProfesional = listadoProfesionalid.split('_#');
            listadoProfesional = listadoProfesional[0];
            this.document.getElementById(listadoProfesionalid).id = listadoProfesional;
            $("#" + listadoProfesional).prop('disabled', true);
            // nivel de interes
            var nivel_de_interes = document.getElementsByName('nivel_de_interes_2');
            var nivelInteresid = nivel_de_interes[0].getAttribute('id');
            var nivelInteres = nivelInteresid.split('_#');
            nivelInteres = nivelInteres[0];
            this.document.getElementById(nivelInteresid).id = nivelInteres;
            // nivel de interes
            var nivel_de_interes_2 = document.getElementsByName('nivel_de_interes');
            var nivelInteres2id = nivel_de_interes_2[0].getAttribute('id');
            var nivelInteres2 = nivelInteres2id.split('_#');
            nivelInteres2 = nivelInteres2[0];
            this.document.getElementById(nivelInteres2id).id = nivelInteres2;
            //document.getElementsByClassName("hs-nivel_de_interes")[0].style.display = "none";
            //campus de modalidad
            var modalidad = document.getElementsByName('modalidad');
            var modalidad_fieldid = modalidad[0].getAttribute('id');
            var modalidad_field = modalidad_fieldid.split('_#');
            modalidad_field = modalidad_field[0];
            this.document.getElementById(modalidad_fieldid).id = modalidad_field;
            //document.getElementsByClassName("hs-modalidad")[0].style.display = "none";
            var periodo = document.getElementsByName('periodo');
            var periodo_fieldid = periodo[0].getAttribute('id');
            var periodo_field = periodo_fieldid.split('_#');
            periodo_field = periodo_field[0];
            this.document.getElementById(periodo_fieldid).id = periodo_field;
            //Ocultar periodo
            //document.getElementsByClassName("hs-periodo")[0].style.display = "none";

            //crear arreglos de programas divididos por Nivel.
            var espProfeEje = ['Ingeniero en Computación Administrativa', 'Ingeniero Industrial y de Sistemas', 'Licenciado en Administración', 'Licenciado en Comercio y Negocios Internacionales', 'Licenciado en Derecho', 'Licenciado en Educación y Desarrollo', 'Licenciado en Mercadotecnia y Publicidad', 'Licenciado en Psicología Empresarial'];
            var espPrepa = ["Preparatoria", "Preparatoria Bilingüe"];
            var espProfe = ['Ingeniero en Computación Administrativa', 'Ingeniero en Desarrollo de Software', 'Ingeniero en Mecatrónica', 'Ingeniero Industrial', 'Licenciado en Administración de Empresas', 'Licenciado en Administración Financiera', 'Licenciado en Comercio Internacional', 'Licenciatura en Derecho', 'Licenciatura en Diseño Gráfico y Animación', 'Licenciatura en Gastronomía', 'Licenciatura en Mercadotecnia', 'Licenciatura en Nutrición', 'Licenciatura en Psicologia', 'Licenciatura en Administración Hotelera y Turistica', 'Ingeniero Industrial y de Sistemas', 'Licenciado en Administración', 'Licenciado en Comercio y Negocios Internacionales', 'Licenciado en Derecho', 'Licenciado en Educación', 'Licenciado en Educación y Desarrollo', 'Licenciado en Mercadotecnia y Publicidad', 'Licenciado en Psicología Empresarial'];
            var espPosg = ['Maestría en Calidad y Productividad', 'Maestría en Finanzas', 'Maestría en Mercadotecnia', 'Maestría en Recursos Humanos', 'Maestría en Educación', 'Gestión de Tecnologías de Información', 'Maestria en Liderazgo Positivo', 'Especialidad en Innovación', 'Especialidad en Recursos Humanos', 'Especialidad en Finanzas', 'Maestría en Logística','Maestría en Educación Positiva'];
           //fin
               

            if (nivelD != null) {
                if(document.getElementsByClassName("hs-main-font-element")[0] != null){
                    document.getElementsByClassName("hs-main-font-element")[0].style.display = "none";
                }
                
                //fijar valor para campo nivel de interés
                $("#" + nivelInteres + ' option').filter(function () {
                    return $.trim($(this).text()) == nivelD;
                }).attr('selected', true);
                if(nivelD == 'Posgrado'){
                    $('#' + nivelInteres).val(3).change();
                }else if(nivelD == 'Preparatoria'){
                    $('#' + nivelInteres).val(1).change();
                }else if(nivelD == 'Profesional'){
                    $('#' + nivelInteres).val(2).change();
                }else{
                    $('#' + nivelInteres).val(5).change();                    
                }
                //obtener valor actual de nivel
                var nivelInteresActual = $('#' + nivelInteres)[0]['value'];
                //ocultar campo nivel de interés
                document.getElementsByClassName("hs-nivel_de_interes_2")[0].style.display = "none";
                //habilitar campos campus y programa
                $("#" + campusInteres).prop('disabled', false);
                $("#" + listadoProfesional).prop('disabled', false); 

                switch (nivelInteresActual) {
                    case '1':
                        //validar si el nivel de interés es Prepa
                        $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                            return $.inArray($.trim($(this).text()), espPrepa) == -1;
                        }).prop('disabled', true);
                        //Ocultar opciones de Online y ejecutivo
                        $("#" + campusInteres + " option[value='1300']").prop('disabled', true);
                        $("#" + campusInteres + " option[value='1111']").prop('disabled', true);
                        $("#" + campusInteres + " option[value='1112']").prop('disabled', true);
                        $("#" + campusInteres + " option[value='1113']").prop('disabled', true);
                        //Asignar periodo

                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoSemestrePrepa;
                        }).attr('selected', true);
                        //Asignar valor a modalidad Semestral
                        $('#' + modalidad_field).val(1).change();
                        //Asignar valor a Nivel de interes para CRM
                        $('#' + nivelInteres2).val(1).change();
                        break;

                    case '2':
                        //validar si el nivel de interés es Profe
                        $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                            return $.inArray($.trim($(this).text()), espProfe) == -1;
                        }).prop('disabled', true);
                        //Ocultar opciones de Online
                        $("#" + campusInteres + " option[value='1300']").prop('disabled', true);
                        //Asignar valor a modalidad Semestral
                        $('#' + modalidad_field).val(1).change();
                        //Asignar periodo
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoSemestre;
                        }).attr('selected', true);
                        //Asignar valor a Nivel de interes para CRM
                        $('#' + nivelInteres2).val(2).change();
                        break;

                    case '3':
                        //validar si el nivel de interés es Posgrados
                        $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                            return $.inArray($.trim($(this).text()), espPosg) == -1;
                        }).prop('disabled', true);
                        //Asignar valor a modalidad Tetramestral
                        $('#' + modalidad_field).val(2).change();
                        //Asignar periodo
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoTetra;
                        }).attr('selected', true);
                        //Asignar valor a Nivel de interes para CRM
                        $('#' + nivelInteres2).val(3).change();
                        break;
                    
                    case '5':
                        //validar si el nivel de interés es Profesional Ejecutivo
                        $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                            return $.inArray($.trim($(this).text()), espProfeEje) == -1;
                        }).prop('disabled', true);
                        //Asignar valor a modalidad Tetramestral
                        $('#' + modalidad_field).val(2).change();
                        //Asignar periodo
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoTetra;
                        }).attr('selected', true);
                        //Asignar valor a Nivel de interes para CRM
                        $('#' + nivelInteres2).val(2).change();
                    
                        break;

                    default:
                        break; 
                }
            }
                //validar si argumento viene null
                if (programaD != null) {
                    $("#" + listadoProfesional + ' option').filter(function () {
                        return $.trim($(this).text()) == programaD;
                    }).attr('selected', true);
                    $("#" + listadoProfesional + ' option').removeAttr('required');
                    document.getElementsByClassName("hs-listadoprofesional")[0].style.display = "none";
                } 
                
                if(campusD != null){
                    $("#" + campusInteres + ' option').filter(function () {
                        return $.trim($(this).text()) == campusD;
                    }).attr('selected', true);
                    $("#" + campusInteres + ' option').removeAttr('required');
                    document.getElementsByClassName("hs-campus_de_interes")[0].style.display = "none";
                    var camp = $('#' + campusInteres)[0]['value'];
                $("#" + campusInteres).prop('disabled', false);
                if ($('#' + nivelInteres)[0]['value'] == 1) {
                    if (camp == 1300 ) {
                        $('#' + modalidad_field).val(3).change();
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoTetra;
                        }).attr('selected', true);
                    } else if (camp == 1101 || camp == 1102 || camp == 1105 || camp == 1106) {
                        $('#' + modalidad_field).val(2).change();
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoTetra;
                        }).attr('selected', true);
                    } else {
                        $('#' + modalidad_field).val(1).change();
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoSemestrePrepa;
                        }).attr('selected', true);
                    }
                }else if ($('#' + nivelInteres)[0]['value'] != 1) {
                    if (camp == 1300 ) {
                        $('#' + modalidad_field).val(3).change();
                    }else if($('#' + nivelInteres)[0]['value'] == 1 || $('#' + nivelInteres)[0]['value'] == 2){
                        $('#' + modalidad_field).val(1).change();
                    }else{
                        $('#' + modalidad_field).val(2).change();
                    }
                }  
                }
                          
               

                //validacion para evento de campo nivel interes
                $('#' + nivelInteres).on('change', function () {
                    
                    var nivelInteresActual = $('#' + nivelInteres)[0]['value'];
                    //carga de todos los programas
                    $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                        
                    console.log('prueba para safari');
                        return $.inArray($.trim($(this).text()), espPrepa + espProfe + espPosg + espProfeEje) == -1;
                    }).prop('disabled', false);
                    //mostrar campus Online y ejecutivo
                    $("#" + campusInteres + " option[value='1300']").removeAttr("disabled");
                    $("#" + campusInteres + " option[value='1111']").prop('disabled', false);
                    $("#" + campusInteres + " option[value='1112']").prop('disabled', false);
                    $("#" + campusInteres + " option[value='1113']").prop('disabled', false);
                    //Habilitar campos (campus de interes y programa de interés)
                    if(campusD != null){
                        $("#" + campusInteres + ' option').filter(function () {
                            return $.trim($(this).text()) == campusD;
                        }).attr('selected', true);
                        document.getElementsByClassName("hs-campus_de_interes")[0].style.display = "none";
                    }else{
                    $('#' + campusInteres).prop("selectedIndex", 0).change();
                    $("#" + campusInteres).prop('disabled', false);
                    }

                    if (programaD != null) {
                        $("#" + listadoProfesional + ' option').filter(function () {
                            return $.trim($(this).text()) == programaD;
                        }).attr('selected', true);
                        document.getElementsByClassName("hs-listadoprofesional")[0].style.display = "none";
                    } else{

                    $('#' + listadoProfesional).prop("selectedIndex", 0).change();
                    $("#" + listadoProfesional).prop('disabled', false);
                    }

                    switch (nivelInteresActual) {
                        case '1':
                            //validar si el nivel de interés es Prepa
                            $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                                return $.inArray($.trim($(this).text()), espPrepa) == -1;
                            }).prop('disabled', true);
                            //Ocultar opciones de Online y ejecutivo
                            $("#" + campusInteres + " option[value='1300']").prop('disabled', true);
                            $("#" + campusInteres + " option[value='1111']").prop('disabled', true);
                            $("#" + campusInteres + " option[value='1112']").prop('disabled', true);
                            $("#" + campusInteres + " option[value='1113']").prop('disabled', true);
                            //Asignar periodo

                            $("#" + periodo_field + ' option').filter(function () {
                                return $.trim($(this).text()) == periodoSemestrePrepa;
                            }).attr('selected', true);
                            //Asignar valor a modalidad Semestral
                            $('#' + modalidad_field).val(1).change();
                            //Asignar valor a Nivel de interes para CRM
                            $('#' + nivelInteres2).val(1).change();
                            break;

                        case '2':
                            //validar si el nivel de interés es Profe
                            $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                                return $.inArray($.trim($(this).text()), espProfe) == -1;
                            }).prop('disabled', true);
                            //Ocultar opciones de Online
                            $("#" + campusInteres + " option[value='1300']").prop('disabled', true);
                            //Asignar valor a modalidad Semestral
                            $('#' + modalidad_field).val(1).change();
                            //Asignar periodo
                            $("#" + periodo_field + ' option').filter(function () {
                                return $.trim($(this).text()) == periodoSemestre;
                            }).attr('selected', true);
                            //Asignar valor a Nivel de interes para CRM
                            $('#' + nivelInteres2).val(2).change();
                            break;

                        case '3':
                            //validar si el nivel de interés es Posgrados
                            $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                                return $.inArray($.trim($(this).text()), espPosg) == -1;
                            }).prop('disabled', true);
                            //Asignar valor a modalidad Tetramestral
                            $('#' + modalidad_field).val(2).change();
                            //Asignar periodo
                            $("#" + periodo_field + ' option').filter(function () {
                                return $.trim($(this).text()) == periodoTetra;
                            }).attr('selected', true);
                            //Asignar valor a Nivel de interes para CRM
                            $('#' + nivelInteres2).val(3).change();
                            break;
                        
                        case '5':
                            //validar si el nivel de interés es Profesional Ejecutivo
                            $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                                return $.inArray($.trim($(this).text()), espProfeEje) == -1;
                            }).prop('disabled', true);
                            //Asignar valor a modalidad Tetramestral
                            $('#' + modalidad_field).val(2).change();
                            //Asignar periodo
                            $("#" + periodo_field + ' option').filter(function () {
                                return $.trim($(this).text()) == periodoTetra;
                            }).attr('selected', true);
                            //Asignar valor a Nivel de interes para CRM
                            $('#' + nivelInteres2).val(2).change();
                        
                            break;

                        default:
                            break;
                    }

                });
            
            //validacion para evento de campo campus de interes
            $('#' + campusInteres).on('change', function () {
                var camp = $('#' + campusInteres)[0]['value'];
                $("#" + campusInteres).prop('disabled', false);
                if ($('#' + nivelInteres)[0]['value'] == 1) {
                    if (camp == 1300 ) {
                        $('#' + modalidad_field).val(3).change();
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoTetra;
                        }).attr('selected', true);
                    } else if (camp == 1101 || camp == 1102 || camp == 1105 || camp == 1106) {
                        $('#' + modalidad_field).val(2).change();
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoTetra;
                        }).attr('selected', true);
                    } else {
                        $('#' + modalidad_field).val(1).change();
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoSemestrePrepa;
                        }).attr('selected', true);
                    }
                }else if ($('#' + nivelInteres)[0]['value'] != 1) {
                    if (camp == 1300 ) {
                        $('#' + modalidad_field).val(3).change();
                    }else if($('#' + nivelInteres)[0]['value'] == 1 || $('#' + nivelInteres)[0]['value'] == 2){
                        $('#' + modalidad_field).val(1).change();
                    }else{
                        $('#' + modalidad_field).val(2).change();
                    }
                }  
            });
        
     };

     window.validarForm=function(nivelD, programaD, campusD) {
        //console.log(proveedor, medio, canal, formato, localizacion, enfoque, gclid);


        //obtener mes actual
        var currentMonth = (new Date).getMonth() + 1;

        //validar mes para periodo Prepa
        if (currentMonth >= 1 && currentMonth <= 4) {
            var mesTetra = 'Mayo';

        } else if (currentMonth >= 5 && currentMonth <= 8) {
            var mesTetra = 'Septiembre';
        } else if (currentMonth >= 9 && currentMonth <= 12) {
            var mesTetra = 'Enero';

        }
        //validar mes para periodo Prepa
        if (currentMonth >= 1 && currentMonth <= 7) {
            var mesPrepa = 'Agosto';

        } else {
            var mesPrepa = 'Enero';
        }

        //Validar año para Periodo
        if (mesPrepa == 'Enero') {
            var periodoSemestre = mesPrepa + ' ' + (new Date().getFullYear() + 1);
            var periodoSemestrePrepa = 'Agosto ' + (new Date().getFullYear() + 1);
        } else {
            var periodoSemestre = mesPrepa + ' ' + (new Date().getFullYear());

        }

        if (mesTetra == 'Enero') {
            var periodoTetra = mesTetra + ' ' + (new Date().getFullYear() + 1);
        } else {
            var periodoTetra = mesTetra + ' ' + (new Date().getFullYear());
        }

        $(window).on('load', function () {



            //obtenemos los ID de los campos del formulario
            // campus de interes
            var campus_interes = document.getElementsByName('campus_de_interes');
            var campusInteres = campus_interes[0].getAttribute('id');
            $("#" + campusInteres).prop('disabled', true);
            // Programa de interes
            var listado_profesional = document.getElementsByName('listadoprofesional');
            var listadoProfesional = listado_profesional[0].getAttribute('id');
            $("#" + listadoProfesional).prop('disabled', true);
            // nivel de interes
            var nivel_de_interes = document.getElementsByName('nivel_de_interes_2');
            var nivelInteres = nivel_de_interes[0].getAttribute('id');
            // nivel de interes
            var nivel_de_interes_2 = document.getElementsByName('nivel_de_interes');
            var nivelInteres2 = nivel_de_interes_2[0].getAttribute('id');
            //document.getElementsByClassName("hs-nivel_de_interes")[0].style.display = "none";
            //campus de modalidad
            var modalidad = document.getElementsByName('modalidad');
            var modalidad_field = modalidad[0].getAttribute('id');
            //document.getElementsByClassName("hs-modalidad")[0].style.display = "none";
            var periodo = document.getElementsByName('periodo');
            var periodo_field = periodo[0].getAttribute('id');
            //Ocultar periodo
            //document.getElementsByClassName("hs-periodo")[0].style.display = "none";

            //crear arreglos de programas divididos por Nivel.
            var espProfeEje = ['Ingeniero en Computación Administrativa', 'Ingeniero Industrial y de Sistemas', 'Licenciado en Administración', 'Licenciado en Comercio y Negocios Internacionales', 'Licenciado en Derecho', 'Licenciado en Educación y Desarrollo', 'Licenciado en Mercadotecnia y Publicidad', 'Licenciado en Psicología Empresarial'];
            var espPrepa = ["Preparatoria", "Preparatoria Bilingüe"];
            var espProfe = ['Ingeniero en Computación Administrativa', 'Ingeniero en Desarrollo de Software', 'Ingeniero en Mecatrónica', 'Ingeniero Industrial', 'Licenciado en Administración de Empresas', 'Licenciado en Administración Financiera', 'Licenciado en Comercio Internacional', 'Licenciatura en Derecho', 'Licenciatura en Diseño Gráfico y Animación', 'Licenciatura en Gastronomía', 'Licenciatura en Mercadotecnia', 'Licenciatura en Nutrición', 'Licenciatura en Psicologia', 'Licenciatura en Administración Hotelera y Turistica', 'Ingeniero Industrial y de Sistemas', 'Licenciado en Administración', 'Licenciado en Comercio y Negocios Internacionales', 'Licenciado en Derecho', 'Licenciado en Educación', 'Licenciado en Educación y Desarrollo', 'Licenciado en Mercadotecnia y Publicidad', 'Licenciado en Psicología Empresarial'];
            var espPosg = ['Maestría en Calidad y Productividad', 'Maestría en Finanzas', 'Maestría en Mercadotecnia', 'Maestría en Recursos Humanos', 'Maestría en Educación', 'Gestión de Tecnologías de Información', 'Maestria en Liderazgo Positivo', 'Especialidad en Innovación', 'Especialidad en Recursos Humanos', 'Especialidad en Finanzas', 'Maestría en Logística', 'Maestría en Educación Positiva'];

            if (nivelD != null) {
                //fijar valor para campo nivel de interés
                $("#" + nivelInteres + ' option').filter(function () {
                    return $.trim($(this).text()) == nivelD;
                }).attr('selected', true);
                if(nivelD == 'Posgrado'){
                    $('#' + nivelInteres).val(3).change();
                    $('#' + nivelInteres2).val(3).change();
                }else if(nivelD == 'Preparatoria'){
                    $('#' + nivelInteres).val(1).change();
                    $('#' + nivelInteres2).val(1).change();
                }else if(nivelD == 'Profesional'){
                    $('#' + nivelInteres).val(2).change();
                    $('#' + nivelInteres2).val(2).change();
                }else{
                    $('#' + nivelInteres).val(5).change();  
                    $('#' + nivelInteres2).val(2).change();                  
                }
                //obtener valor actual de nivel
                var nivelInteresActual = $('#' + nivelInteres)[0]['value'];
                //ocultar campo nivel de interés
                document.getElementsByClassName("hs-nivel_de_interes_2")[0].style.display = "none";
                //habilitar campos campus y programa
                $("#" + campusInteres).prop('disabled', false);
                $("#" + listadoProfesional).prop('disabled', false);
                //validar si argumento viene null
                if (programaD != null) {
                    $("#" + listadoProfesional + ' option').filter(function () {
                        return $.trim($(this).text()) == programaD;
                    }).attr('selected', true);
                    document.getElementsByClassName("hs-listadoprofesional")[0].style.display = "none";
                } 
                
                if(campusD != null){
                    $("#" + campusInteres + ' option').filter(function () {
                        return $.trim($(this).text()) == campusD;
                    }).attr('selected', true);
                    document.getElementsByClassName("hs-campus_de_interes")[0].style.display = "none";
                }
                          
                switch (nivelInteresActual) {
                    case '1':
                        //validar si el nivel de interés es Prepa
                        $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                            return $.inArray($.trim($(this).text()), espPrepa) == -1;
                        }).prop('disabled', true);
                        //Ocultar opciones de Online
                        $("#" + campusInteres + " option[value='1300']").prop('disabled', true);                        
                        $("#" + campusInteres + " option[value='1111']").prop('disabled', true);
                        $("#" + campusInteres + " option[value='1112']").prop('disabled', true);
                        $("#" + campusInteres + " option[value='1113']").prop('disabled', true);
                        //Asignar periodo

                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoSemestre;
                        }).attr('selected', true);
                        //Asignar valor a modalidad Semestral
                        $('#' + modalidad_field).val(1).change();
                        
                        //Asignar valor a Nivel de interes para CRM
                        $('#' + nivelInteres2).val(1).change();

                        break;

                    case '2':
                        //validar si el nivel de interés es Profe
                        $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                            return $.inArray($.trim($(this).text()), espProfe) == -1;
                        }).prop('disabled', true);
                        //Ocultar opciones de Online
                        $("#" + campusInteres + " option[value='1300']").prop('disabled', true);
                        //Asignar valor a modalidad Semestral
                        $('#' + modalidad_field).val(1).change();
                        //Asignar periodo
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoSemestre;
                        }).attr('selected', true);
                        //Asignar valor a Nivel de interes para CRM
                        $('#' + nivelInteres2).val(2).change();
                        break;

                    case '3':
                        //validar si el nivel de interés es Posgrados
                        $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                            return $.inArray($.trim($(this).text()), espPosg) == -1;
                        }).prop('disabled', true);
                        //Asignar valor a modalidad Tetramestral
                        $('#' + modalidad_field).val(2).change();
                        //Asignar periodo
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoTetra;
                        }).attr('selected', true);
                        //Asignar valor a Nivel de interes para CRM
                        $('#' + nivelInteres2).val(3).change();
                        break;

                    case '5':
                        //validar si el nivel de interés es Profesional Ejecutivo
                        $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                            return $.inArray($.trim($(this).text()), espProfeEje) == -1;
                        }).prop('disabled', true);
                        //Asignar valor a modalidad Tetramestral
                        $('#' + modalidad_field).val(2).change();
                        //Asignar periodo
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoTetra;
                        }).attr('selected', true);
                        
                        //Asignar valor a Nivel de interes para CRM
                        $('#' + nivelInteres2).val(2).change();
                
                        break;

                    default:
                        break;
                }

            } else {

                //validacion para evento de campo nivel interes
                $('#' + nivelInteres).change(function () {
                    var nivelInteresActual = $('#' + nivelInteres)[0]['value'];
                    //carga de todos los programas
                    $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                        return $.inArray($.trim($(this).text()), espPrepa + espProfe + espPosg + espProfeEje) == -1;
                    }).prop('disabled', false);
                    //mostrar campus Online
                    $("#" + campusInteres + " option[value='1300']").prop('disabled', false);
                    $("#" + campusInteres + " option[value='1111']").prop('disabled', false);
                    $("#" + campusInteres + " option[value='1112']").prop('disabled', false);
                    $("#" + campusInteres + " option[value='1113']").prop('disabled', false);
                    //Habilitar campos (campus de interes y programa de interés)
                    $('#' + campusInteres).prop("selectedIndex", 0).change();
                    $("#" + campusInteres).prop('disabled', false);
                    $('#' + listadoProfesional).prop("selectedIndex", 0).change();
                    $("#" + listadoProfesional).prop('disabled', false);

                    switch (nivelInteresActual) {
                        case '1':
                            //validar si el nivel de interés es Prepa
                            $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                                return $.inArray($.trim($(this).text()), espPrepa) == -1;
                            }).prop('disabled', true);
                            //Ocultar opciones de Online
                            $("#" + campusInteres + " option[value='1300']").prop('disabled', true);
                            $("#" + campusInteres + " option[value='1111']").prop('disabled', true);
                            $("#" + campusInteres + " option[value='1112']").prop('disabled', true);
                            $("#" + campusInteres + " option[value='1113']").prop('disabled', true);
                            //Asignar periodo

                            $("#" + periodo_field + ' option').filter(function () {
                                return $.trim($(this).text()) == periodoSemestre;
                            }).attr('selected', true);
                            //Asignar valor a modalidad Semestral
                            $('#' + modalidad_field).val(1).change();
                            //Asignar valor a Nivel de interes para CRM
                            $('#' + nivelInteres2).val(1).change();
                            break;

                        case '2':
                            //validar si el nivel de interés es Profe
                            $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                                return $.inArray($.trim($(this).text()), espProfe) == -1;
                            }).prop('disabled', true);
                            //Ocultar opciones de Online
                            $("#" + campusInteres + " option[value='1300']").prop('disabled', true);
                            //Asignar valor a modalidad Semestral
                            $('#' + modalidad_field).val(1).change();
                            //Asignar periodo
                            $("#" + periodo_field + ' option').filter(function () {
                                return $.trim($(this).text()) == periodoSemestre;
                            }).attr('selected', true);
                            //Asignar valor a Nivel de interes para CRM
                            $('#' + nivelInteres2).val(2).change();
                            break;

                        case '3':
                            //validar si el nivel de interés es Posgrados
                            $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                                return $.inArray($.trim($(this).text()), espPosg) == -1;
                            }).prop('disabled', true);
                            //Asignar valor a modalidad Tetramestral
                            $('#' + modalidad_field).val(2).change();
                            //Asignar periodo
                            $("#" + periodo_field + ' option').filter(function () {
                                return $.trim($(this).text()) == periodoTetra;
                            }).attr('selected', true);
                            //Asignar valor a Nivel de interes para CRM
                            $('#' + nivelInteres2).val(3).change();
                            break;
                        
                        case '5':
                            //validar si el nivel de interés es Profesional Ejecutivo
                            $('#' + listadoProfesional + ' option:not(:first)').filter(function () {
                                return $.inArray($.trim($(this).text()), espProfeEje) == -1;
                            }).prop('disabled', true);
                            //Asignar valor a modalidad Tetramestral
                            $('#' + modalidad_field).val(2).change();
                            //Asignar periodo
                            $("#" + periodo_field + ' option').filter(function () {
                                return $.trim($(this).text()) == periodoTetra;
                            }).attr('selected', true);
                            //Asignar valor a Nivel de interes para CRM
                            $('#' + nivelInteres2).val(2).change();
                        
                            break;

                        default:
                            break;
                    }

                });
            }
            //validacion para evento de campo campus de interes
            $('#' + campusInteres).change(function () {
                var camp = $('#' + campusInteres)[0]['value'];
                $("#" + campusInteres).prop('disabled', false);
                if ($('#' + nivelInteres)[0]['value'] == 1) {
                    if (camp == 1300 ) {
                        $('#' + modalidad_field).val(3).change();
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoTetra;
                        }).attr('selected', true);
                    } else if (camp == 1101 || camp == 1102 || camp == 1105 || camp == 1106) {
                        $('#' + modalidad_field).val(2).change();
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoTetra;
                        }).attr('selected', true);
                    } else {
                        $('#' + modalidad_field).val(1).change();
                        $("#" + periodo_field + ' option').filter(function () {
                            return $.trim($(this).text()) == periodoSemestre;
                        }).attr('selected', true);
                    }
                }else if ($('#' + nivelInteres)[0]['value'] != 1) {
                    if (camp == 1300 ) {
                        $('#' + modalidad_field).val(3).change();
                    }else if($('#' + nivelInteres)[0]['value'] == 1 || $('#' + nivelInteres)[0]['value'] == 2){
                        $('#' + modalidad_field).val(1).change();
                    }else{
                        $('#' + modalidad_field).val(2).change();
                    }
                }  
            });

        });
    }
   
    //validarForm();
});