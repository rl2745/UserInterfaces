        var contadorPruebas=0;
        var anterior=null;
        var imagenElegida;
        var contadorFallos = 0;
        var contadorAciertos =0;
        var arrayImagenes = ["img/beth.jpg", "img/bm.jpg", "img/dog.jpg", "img/emorty.jpg", "img/jerry.jpg", "img/meeseek.jpg", "img/mrbh.jpg", "img/prick.jpg", "img/summer.jpg"];
        var cantidadImagenes = arrayImagenes.length;
        var arrayPosiciones = new Array(cantidadImagenes);
        $(document).ready(function(){
            //Crea las posiciones de la array
                var contadorPosiciones =0;
                while(contadorPosiciones<cantidadImagenes*2){
                    var imagenPonemos = Math.floor((Math.random()*cantidadImagenes));
                    var contadorPosicionesRepetidas =0;
                    for (var x=0; x<contadorPosiciones; x++){
                        if (arrayPosiciones[x]==imagenPonemos) contadorPosicionesRepetidas++;
                    }
                    if (contadorPosicionesRepetidas<2){
                        arrayPosiciones[contadorPosiciones] = imagenPonemos;
                        contadorPosiciones++;
                    }
                }

            //Recogemos cuando clique en un td
            $("td").click(function(){
                contadorPruebas++;
                //Recogemos la casilla
                var casilla = $(this).attr("id");
                if (contadorPruebas>1){
                    imagenElegida = arrayPosiciones[casilla];
                    $("#"+casilla).animate({
                        width: "toggle",
                        opacity: "toggle"
                    }, 500);
                    $("#"+casilla).animate({
                        width: "toggle",
                        opacity: "toggle"
                    }, 500);
                    window.setTimeout(function(){
                        $("#"+casilla).css("background", "url("+arrayImagenes[imagenElegida]+")");
                    },500);
                    if (arrayPosiciones[casilla]!=arrayPosiciones[anterior]){
                        contadorFallos++;
                        $("#fallosN").html(contadorFallos);
                        window.setTimeout(function(){
                            $("#"+casilla).animate({
                            width: "toggle",
                            opacity: "toggle"
                            }, 500);
                            $("#"+casilla).animate({
                                width: "toggle",
                                opacity: "toggle"
                            }, 500);
                            $("#"+anterior).animate({
                                width: "toggle",
                                opacity: "toggle"
                            }, 500);
                            $("#"+anterior).animate({
                                width: "toggle",
                                opacity: "toggle"
                            }, 500);
                            window.setTimeout(function(){
                                $("#"+casilla).css("background", "");
                                $("#"+anterior).css("background", "");
                            },500);
                        },1000);
                    }
                    else{
                        contadorAciertos++;
                        $("#aciertos").html(contadorAciertos);
                    }
                    contadorPruebas = 0;

                }else{
                    anterior = casilla;
                    imagenElegida = arrayPosiciones[casilla];
                    $("#"+casilla).animate({
                        width: "toggle",
                        opacity: "toggle"
                    }, 500);
                    $("#"+casilla).animate({
                        width: "toggle",
                        opacity: "toggle"
                    }, 500);
                    window.setTimeout(function(){
                        $("#"+casilla).css("background", "url("+arrayImagenes[imagenElegida]+")");
                    },500);
                    contadorPruebas++;
                }
            })
        });
