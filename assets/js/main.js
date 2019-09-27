/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});

});
function clickopcao() {

				var opcao = document.getElementById("estado").value;
				if (opcao === "Estado") {
					document.querySelector("#divgrande").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
				}else{
					document.querySelector("#divgrande").style.display="block";
					document.querySelector("#divgrande2").style.display="block";
				}

				if (opcao === "Acre") {
                  document.querySelector("#esconder1").style.display="block";
                  
				}else{
					document.querySelector("#esconder1").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lacre").style.display="none";
				}


				if (opcao === "Alagoas") {
                  document.querySelector("#esconder2").style.display="block";
				}else{
					document.querySelector("#esconder2").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lmaceio").style.display="none";
					document.querySelector("#linterioralagoano").style.display="none";
				}


				if (opcao === "Amapá") {
                  document.querySelector("#esconder3").style.display="block";
				}else{
					document.querySelector("#esconder3").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lamapa").style.display="none";
					
				}


				if (opcao === "Amazonas") {
                  document.querySelector("#esconder4").style.display="block";
				}else{
					document.querySelector("#esconder4").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lmanaus").style.display="none";
					document.querySelector("#linterioramazonense").style.display="none";
					
				}


				if (opcao === "Bahia") {
                  document.querySelector("#esconder5").style.display="block";
				}else{
					document.querySelector("#esconder5").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lsalvador").style.display="none";
					document.querySelector("#lsalvadormetro").style.display="none";
					document.querySelector("#loestebaiano").style.display="none";
					document.querySelector("#lsulbaiano").style.display="none";
					document.querySelector("#lnortebaiano").style.display="none";
					document.querySelector("#llestebaiano").style.display="none";
					
				}


				if (opcao === "Ceará") {
                  document.querySelector("#esconder6").style.display="block";
				}else{
					document.querySelector("#esconder6").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lfortaleza").style.display="none";
					document.querySelector("#lfortalezametro").style.display="none";
					document.querySelector("#lbaturite").style.display="none";
					document.querySelector("#llitoranea").style.display="none";
					document.querySelector("#lsobral").style.display="none";
					document.querySelector("#lcariri").style.display="none";
					document.querySelector("#ljaguaribe").style.display="none";
					
				}


				if (opcao === "Distrito Federal") {
                  document.querySelector("#esconder7").style.display="block";
				}else{
					document.querySelector("#esconder7").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lbrasilia").style.display="none";
					document.querySelector("#lcidadessatelites").style.display="none";
					
				}


				if (opcao === "Espírito Santo") {
                  document.querySelector("#esconder8").style.display="block";
				}else{
					document.querySelector("#esconder8").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lvilavelha").style.display="none";
					document.querySelector("#lsulespirito").style.display="none";
					document.querySelector("#lnorteespirito").style.display="none";
					
				}


				if (opcao === "Goiás") {
                  document.querySelector("#esconder9").style.display="block";
				}else{
					document.querySelector("#esconder9").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lgoiania").style.display="none";
					document.querySelector("#lnortegoiano").style.display="none";
					document.querySelector("#lcentrooestegoiano").style.display="none";
					
				}


				if (opcao === "Maranhão") {
                  document.querySelector("#esconder10").style.display="block";
				}else{
					document.querySelector("#esconder10").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lsaoluis").style.display="none";
					document.querySelector("#linteriormaranhao").style.display="none";
				}


				if (opcao === "Mato Grosso") {
                  document.querySelector("#esconder11").style.display="block";
				}else{
					document.querySelector("#esconder11").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lcuiaba").style.display="none";
					document.querySelector("#linteriormatogrosso").style.display="none";

				}


				if (opcao === "Mato Grosso do Sul") {
                  document.querySelector("#esconder12").style.display="block";
				}else{
					document.querySelector("#esconder12").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
                    document.querySelector("#lcampogrande").style.display="none";
					document.querySelector("#linteriormatogrossosul").style.display="none";
					
				}


				if (opcao === "Minas Gerais") {
                  document.querySelector("#esconder13").style.display="block";
				}else{
					document.querySelector("#esconder13").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lbelohorizonte").style.display="none";
					document.querySelector("#lbelohorizontemetro").style.display="none";
					document.querySelector("#ltriangulomineiro").style.display="none";
					document.querySelector("#laltoparnaiba").style.display="none";
					document.querySelector("#lsulmineiro").style.display="none";
					document.querySelector("#lnortemineiro").style.display="none";
					document.querySelector("#lregiaodamata").style.display="none";
					document.querySelector("#ljequitinhonha").style.display="none";
					
				}


				if (opcao === "Pará") {
                  document.querySelector("#esconder14").style.display="block";
				}else{
					document.querySelector("#esconder14").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lpara").style.display="none";
					
				}

				if (opcao === "Paraíba") {
                  document.querySelector("#esconder15").style.display="block";
				}else{
					document.querySelector("#esconder15").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lparaiba").style.display="none";
					document.querySelector("#linteriorparaiba").style.display="none";
					
				}

				if (opcao === "Paraná") {
                  document.querySelector("#esconder16").style.display="block";
				}else{
					document.querySelector("#esconder16").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lcuritiba").style.display="none";
                    document.querySelector("#lcuritibametro").style.display="none";
                    document.querySelector("#lnorteparanaense").style.display="none";
                    document.querySelector("#lsulparanaense").style.display="none";
                    document.querySelector("#llesteparanaense").style.display="none";
                    document.querySelector("#loesteparanaense").style.display="none";
                    
				}

				if (opcao === "Pernambuco") {
                  document.querySelector("#esconder17").style.display="block";
				}else{
					document.querySelector("#esconder17").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lrecife").style.display="none";
                    document.querySelector("#lrecifemetro").style.display="none";
                    document.querySelector("#lvalesaofrancisco").style.display="none";
                    document.querySelector("#lsertaopernambuco").style.display="none";
                    document.querySelector("#lagrestepernambuco").style.display="none";
                   
				}

				if (opcao === "Piauí") {
                  document.querySelector("#esconder18").style.display="block";
				}else{
					document.querySelector("#esconder18").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lteresina").style.display="none";
					document.querySelector("#linteriorpiaui").style.display="none";
				
				}

				if (opcao === "Rio de Janeiro") {
                  document.querySelector("#esconder19").style.display="block";
				}else{
					document.querySelector("#esconder19").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lzonanortecapitalrj").style.display="none";
					document.querySelector("#lzonaoestecapitalrj").style.display="none";
					document.querySelector("#lzonasulcapitalrj").style.display="none";
					document.querySelector("#lcentrocapitalrj").style.display="none";
					document.querySelector("#lfluminensecariocarj").style.display="none";
					document.querySelector("#lserranarj").style.display="none";
					document.querySelector("#llitoranearj").style.display="none";
					document.querySelector("#lregiaomedioparaibarj").style.display="none";
					
				}

				if (opcao === "Rio Grande do Norte") {
                  document.querySelector("#esconder20").style.display="block";
				}else{
					document.querySelector("#esconder20").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lnatal").style.display="none";
					document.querySelector("#linteriorpotiguar").style.display="none";
				}

				if (opcao === "Rio Grande do Sul") {
                  document.querySelector("#esconder21").style.display="block";
				}else{
					document.querySelector("#esconder21").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lportoalegre").style.display="none";
					document.querySelector("#lregiaometropoa").style.display="none";
					document.querySelector("#lsulgaucho").style.display="none";
					document.querySelector("#lnortegaucho").style.display="none";
					document.querySelector("#llestegaucho").style.display="none";
					document.querySelector("#loestegaucho").style.display="none";
				}

				if (opcao === "Rondônia") {
                  document.querySelector("#esconder22").style.display="block";
				}else{
					document.querySelector("#esconder22").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lrondonia").style.display="none";
				}

				if (opcao === "Roraima") {
                  document.querySelector("#esconder23").style.display="block";
				}else{
					document.querySelector("#esconder23").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lroraima").style.display="none";
				}

				if (opcao === "Santa Catarina") {
                  document.querySelector("#esconder24").style.display="block";
				}else{
					document.querySelector("#esconder24").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lfloripa").style.display="none";
					document.querySelector("#lfloripametro").style.display="none";
					document.querySelector("#loestecatarinense").style.display="none";
					document.querySelector("#lnortecatarinese").style.display="none";
					document.querySelector("#lvaleitajai").style.display="none";
					document.querySelector("#lsulcatarinense").style.display="none";
					document.querySelector("#lregiaolitoral").style.display="none";
				}

				if (opcao === "São Paulo") {
                  document.querySelector("#esconder25").style.display="block";
				}else{
					document.querySelector("#esconder25").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lzonanortecapitalsp").style.display="none";
					document.querySelector("#lzonasulcapitalsp").style.display="none";
					document.querySelector("#lzonalestecapitalsp").style.display="none";
					document.querySelector("#lzonaoestecapitalsp").style.display="none";
					document.querySelector("#labcsp").style.display="none";
					document.querySelector("#lcampinassp").style.display="none";
					document.querySelector("#lsantossp").style.display="none";
					document.querySelector("#lvaleparaibasp").style.display="none";
					document.querySelector("#lbaurusp").style.display="none";
					document.querySelector("#lpiracicabasp").style.display="none";
					document.querySelector("#lmariliasp").style.display="none";
					document.querySelector("#lpresprudentesp").style.display="none";
					document.querySelector("#laracatubasp").style.display="none";
					document.querySelector("#lsaojoseriopretosp").style.display="none";
				}

				if (opcao === "Sergipe") {
                  document.querySelector("#esconder26").style.display="block";
				}else{
					document.querySelector("#esconder26").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#laracaju").style.display="none";
					document.querySelector("#linteriorsergipe").style.display="none";
				}

				if (opcao === "Tocantins") {
                  document.querySelector("#esconder27").style.display="block";
				}else{
					document.querySelector("#esconder27").style.display="none";
					document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#ltocantins").style.display="none";
				}
			}



function clickopcao2(){

           var opcao2 = document.getElementById("cidadeacre").value;

           if (opcao2 === "Cidade") {
                	document.querySelector("#divgrande2").style.display="none";
					document.querySelector("#lacre").style.display="none";
				}else{
					document.querySelector("#divgrande2").style.display="block";
					document.querySelector("#lacre").style.display="block";
				}

             if (opcao2 === "Acre") {
             	document.querySelector("#lacre").style.display="block";
             }else{
             	document.querySelector("#lacre").style.display="none";
             }
			}

			function clickopcao3(){

			var opcao3 = document.getElementById("cidadealagoas").value;

			if (opcao3 === "Cidade") {
					document.querySelector("#divgrande2").style.display="none";
				}else{
					document.querySelector("#divgrande2").style.display="block";
				}

             if (opcao3 === "Maceió") {
             	document.querySelector("#lmaceio").style.display="block";
             	
             }else{
             	document.querySelector("#lmaceio").style.display="none";
                
             }

             if (opcao3 === "Interior Alagoano") {
             	document.querySelector("#linterioralagoano").style.display="block";
             	
             }else{
             	document.querySelector("#linterioralagoano").style.display="none";
             	
             }
}

      function clickopcao4(){
      	var opcao4 = document.getElementById("cidadeamapa").value;
               if (opcao4 === "Cidade") {
					document.querySelector("#divgrande2").style.display="none";
				}else{
					document.querySelector("#divgrande2").style.display="block";
				}

				if (opcao4 === "Amapá") {
					document.querySelector("#lamapa").style.display="block";
				}else{
					document.querySelector("#lamapa").style.display="none";
				}

      }

      function clickopcao5(){
      	var opcao5 = document.getElementById("cidadeamazonas").value;
      	if (opcao5 === "Cidade") {
					document.querySelector("#divgrande2").style.display="none";
				}else{
					document.querySelector("#divgrande2").style.display="block";
				}

				if (opcao5 === "Manaus") {
					document.querySelector("#lmanaus").style.display="block";	
				}else{
					document.querySelector("#lmanaus").style.display="none";
				}

				if (opcao5 === "Interior Amazonense") {
					document.querySelector("#linterioramazonense").style.display="block";
				}else{
					document.querySelector("#linterioramazonense").style.display="none";
				}
      }

      function clickopcao6(){
    var opcao6 = document.getElementById("cidadebahia").value;
    if(opcao6 === "Cidade"){
    	document.querySelector("#divgrande2").style.display="none";
    	
    }else{
    	document.querySelector("#divgrande2").style.display="block";
    	
    }

    if(opcao6 === "Salvador"){
    	document.querySelector("#lsalvador").style.display="block";
    }else{
    	document.querySelector("#lsalvador").style.display="none";
    }

    if(opcao6 === "Salvador e Região Metropolitana"){
    	document.querySelector("#lsalvadormetro").style.display="block";
    }else{
    	document.querySelector("#lsalvadormetro").style.display="none";
    }

    if(opcao6 === "Oeste Baiano"){
    	document.querySelector("#loestebaiano").style.display="block";
    }else{
    	document.querySelector("#loestebaiano").style.display="none";
    }

    if(opcao6 === "Sul Baiano"){
    	document.querySelector("#lsulbaiano").style.display="block";
    }else{
    	document.querySelector("#lsulbaiano").style.display="none";
    }

    if(opcao6 === "Norte Baiano"){
    	document.querySelector("#lnortebaiano").style.display="block";
    }else{
    	document.querySelector("#lnortebaiano").style.display="none";
    }

    if(opcao6 === "Leste Baiano"){
    	document.querySelector("#llestebaiano").style.display="block";
    }else{
    	document.querySelector("#llestebaiano").style.display="none";
    }
      }

      function clickopcao7(){
     var opcao7 = document.getElementById("cidadeceara").value;
     if(opcao7 === "Cidade"){
     	document.querySelector("#divgrande2").style.display="none";
     }else{
     	document.querySelector("#divgrande2").style.display="block";
     }

     if(opcao7 === "Fortaleza"){
     	document.querySelector("#lfortaleza").style.display="block";
     }else{
     	document.querySelector("#lfortaleza").style.display="none";
     }

     if(opcao7 === "Fortaleza e Região Metropolitana"){
     	document.querySelector("#lfortalezametro").style.display="block";
     }else{
     	document.querySelector("#lfortalezametro").style.display="none";
     }

     if(opcao7 === "Baturité e Região"){
     	document.querySelector("#lbaturite").style.display="block";
     }else{
     	document.querySelector("#lbaturite").style.display="none";
     }

     if(opcao7 === "Região Litorânea"){
     	document.querySelector("#llitoranea").style.display="block";
     }else{
     	document.querySelector("#llitoranea").style.display="none";
     }

     if(opcao7 === "Sobral e Região"){
     	document.querySelector("#lsobral").style.display="block";
     }else{
     	document.querySelector("#lsobral").style.display="none";
     }

     if(opcao7 === "Cariri e Região"){
     	document.querySelector("#lcariri").style.display="block";
     }else{
     	document.querySelector("#lcariri").style.display="none";
     }

     if(opcao7 === "Jaguaribe e Região"){
       document.querySelector("#ljaguaribe").style.display="block";
     }else{
     	document.querySelector("#ljaguaribe").style.display="none";
     }
      }

      function clickopcao8(){
      	var opcao8 = document.getElementById("cidadedistritofederal").value;
      	if(opcao8 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao8 === "Brasília"){
      		document.querySelector("#lbrasilia").style.display="block";
      	}else{
      		document.querySelector("#lbrasilia").style.display="none";
      	}

      	if(opcao8 === "Cidades Satélites"){
      		document.querySelector("#lcidadessatelites").style.display="block";
      	}else{
      		document.querySelector("#lcidadessatelites").style.display="none";
      	}
      }

      function clickopcao9(){
      	var opcao9 = document.getElementById("cidadeespiritosanto").value;
      	if(opcao9 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao9 === "Vila Velha"){
      		document.querySelector("#lvilavelha").style.display="block";
      	}else{
      		document.querySelector("#lvilavelha").style.display="none";
      	}

      	if(opcao9 === "Sul do Espírito Santo"){
           document.querySelector("#lsulespirito").style.display="block";
      	}else{
      		document.querySelector("#lsulespirito").style.display="none";
      	}

      	if(opcao9 === "Norte do Espírito Santo"){
      		document.querySelector("#lnorteespirito").style.display="block";
      	}else{
      		document.querySelector("#lnorteespirito").style.display="none";
      	}
      }

      function clickopcao10(){
      	var opcao10 = document.getElementById("cidadegoias").value;
      	if(opcao10 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao10 === "Goiânia"){
      		document.querySelector("#lgoiania").style.display="block";
      	}else{
      		document.querySelector("#lgoiania").style.display="none";
      	}

      	if(opcao10 === "Norte Goiâno"){
      		document.querySelector("#lnortegoiano").style.display="block";
      	}else{
      		document.querySelector("#lnortegoiano").style.display="none";
      	}

      	if(opcao10 === "Centro-Oeste Goiâno"){
      		document.querySelector("#lcentrooestegoiano").style.display="block";
      	}else{
      		document.querySelector("#lcentrooestegoiano").style.display="none";
      	}

      	if(opcao10 === "Sul Goiâno"){
      		document.querySelector("#lsulgoiano").style.display="block";
      	}else{
      		document.querySelector("#lsulgoiano").style.display="none";
      	}
      }

      function clickopcao11(){
      	var opcao11 = document.getElementById("cidademaranhao").value;
      	if(opcao11 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao11 === "São Luis"){
      		document.querySelector("#lsaoluis").style.display="block";
      		
      	}else{
      		document.querySelector("#lsaoluis").style.display="none";

      	}

      	if(opcao11 === "Interior Maranhense"){
      		document.querySelector("#linteriormaranhao").style.display="block";

      	}else{
      		document.querySelector("#linteriormaranhao").style.display="none";

      	}
      }

      function clickopcao12(){
      	var opcao12 = document.getElementById("cidadematogrosso").value;
      	if(opcao12 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao12 === "Cuiabá"){
      		document.querySelector("#lcuiaba").style.display="block";
      	}else{
            document.querySelector("#lcuiaba").style.display="none";
      	}

      	if(opcao12 === "Interior Mato Grossense"){
      		document.querySelector("#linteriormatogrosso").style.display="block";
      	}else{
      		document.querySelector("#linteriormatogrosso").style.display="none";
      	}
      }

      function clickopcao13(){
      	var opcao13 = document.getElementById("cidadematogrossosul").value;
      	if(opcao13 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao13 === "Campo Grande"){
      		document.querySelector("#lcampogrande").style.display="block";
      	}else{
      		document.querySelector("#lcampogrande").style.display="none";
      	}

      	if(opcao13 === "Interior Mato Grosso do Sul"){
      		document.querySelector("#linteriormatogrossosul").style.display="block";
      	}else{
      		document.querySelector("#linteriormatogrossosul").style.display="none";
      	}
      }

      function clickopcao14(){
      	var opcao14 = document.getElementById("cidademinasgerais").value;
      	if(opcao14 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao14 === "Belo Horizonte"){
      		document.querySelector("#lbelohorizonte").style.display="block";
      	}else{
      		document.querySelector("#lbelohorizonte").style.display="none";
      	}

      	if(opcao14 === "Região Metropolitana de BH"){
      		document.querySelector("#lbelohorizontemetro").style.display="block";
      		
      	}else{
      		document.querySelector("#lbelohorizontemetro").style.display="none";
      	}

      	if(opcao14 === "Triângulo Mineiro"){
      		document.querySelector("#ltriangulomineiro").style.display="block";
      		
      	}else{
      		document.querySelector("#ltriangulomineiro").style.display="none";
      	}

      	if(opcao14 === "Alto Parnaíba"){
           document.querySelector("#laltoparnaiba").style.display="block";
      	}else{
      		document.querySelector("#laltoparnaiba").style.display="none";
      	}

      	if(opcao14 === "Sul Mineiro"){
      		document.querySelector("#lsulmineiro").style.display="block";
      	}else{
      		document.querySelector("#lsulmineiro").style.display="none";
      	}

      	if(opcao14 === "Norte Mineiro"){
      		document.querySelector("#lnortemineiro").style.display="block";
      	}else{
      		document.querySelector("#lnortemineiro").style.display="none";
      	}

      	if(opcao14 === "Região da Mata"){
      		document.querySelector("#lregiaodamata").style.display="block";
      	}else{
      		document.querySelector("#lregiaodamata").style.display="none";
      	}

      	if(opcao14 === "Jequitinhonha"){
      		document.querySelector("#ljequitinhonha").style.display="block";
      	}else{
      		document.querySelector("#ljequitinhonha").style.display="none";
      	}
      }

      function clickopcao15(){
      	var opcao15 = document.getElementById("cidadepara").value;
      	if(opcao15 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao15 === "Pará"){
      		document.querySelector("#lpara").style.display="block";
      	}else{
      		document.querySelector("#lpara").style.display="none";
      	}

      	if(opcao15 === "Interior Paraense"){
      		document.querySelector("#linteriorpara").style.display="block";
      	}else{
      		document.querySelector("#linteriorpara").style.display="none";
      	}
      }

      function clickopcao16(){
      	var opcao16 = document.getElementById("cidadeparaiba").value;
      	if(opcao16 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao16 === "Paraíba"){
      		document.querySelector("#lparaiba").style.display="block";
      	}else{
      		document.querySelector("#lparaiba").style.display="none";
      	}

      	if(opcao16 === "Interior Paraibano"){
      		document.querySelector("#linteriorparaiba").style.display="block";
      	}else{
      		document.querySelector("#linteriorparaiba").style.display="none";
      	}
      }

      function clickopcao17(){
      	var opcao17 = document.getElementById("cidadeparana").value;
      	if(opcao17 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao17 === "Curitiba"){
      		document.querySelector("#lcuritiba").style.display="block";
      	}else{
      		document.querySelector("#lcuritiba").style.display="none";
      	}

      	if(opcao17 === "Região Metropolitana de Curitiba"){
      		document.querySelector("#lcuritibametro").style.display="block";
      	}else{
      		document.querySelector("#lcuritibametro").style.display="none";
      	}

      	if(opcao17 === "Norte Paranaense"){
      		document.querySelector("#lnorteparanaense").style.display="block";
      	}else{
      		document.querySelector("#lnorteparanaense").style.display="none";
      	}

      	if(opcao17 === "Sul Paranaense"){
      		document.querySelector("#lsulparanaense").style.display="block";
      	}else{
      		document.querySelector("#lsulparanaense").style.display="none";
      	}

      	if(opcao17 === "Leste Paranaense"){
      		document.querySelector("#llesteparanaense").style.display="block";
      	}else{
      		document.querySelector("#llesteparanaense").style.display="none";
      	}

      	if(opcao17 === "Oeste Paranaense"){
      		document.querySelector("#loesteparanaense").style.display="block";
      	}else{
      		document.querySelector("#loesteparanaense").style.display="none";
      	}
      }

      function clickopcao18(){
      	var opcao18 = document.getElementById("cidadepernambuco").value;
      	if(opcao18 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao18 === "Recife"){
      		document.querySelector("#lrecife").style.display="block";
      	}else{
      		document.querySelector("#lrecife").style.display="none";
      	}

      	if(opcao18 === "Região Metropolitana de Recife"){
      		document.querySelector("#lrecifemetro").style.display="block";
      	}else{
      		document.querySelector("#lrecifemetro").style.display="none";
      	}

      	if(opcao18 === "Vale do São Francisco"){
      		document.querySelector("#lvalesaofrancisco").style.display="block";
      	}else{
      		document.querySelector("#lvalesaofrancisco").style.display="none";
      	}

      	if(opcao18 === "Sertão Pernambucano"){
      		document.querySelector("#lsertaopernambuco").style.display="block";
      	}else{
      		document.querySelector("#lsertaopernambuco").style.display="none";
      	}

      	if(opcao18 === "Agreste Pernambucano"){
      		document.querySelector("#lagrestepernambuco").style.display="block";
      	}else{
      		document.querySelector("#lagrestepernambuco").style.display="none";
      	}
      }

      function clickopcao19(){
      	var opcao19 = document.getElementById("cidadepiaui").value;
      	if(opcao19 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao19 === "Teresina"){
      		document.querySelector("#lteresina").style.display="block";
      	}else{
      		document.querySelector("#lteresina").style.display="none";
      	}

      	if(opcao19 === "Interior Piauiense"){
      		document.querySelector("#linteriorpiaui").style.display="block";
      	}else{
      		document.querySelector("#linteriorpiaui").style.display="none";
      	}
      }

      function clickopcao20(){
      	var opcao20 = document.getElementById("cidaderio").value;
      	if(opcao20 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao20 === "Zona Norte Capital"){
      		document.querySelector("#lzonanortecapitalrj").style.display="block";
      	}else{
      		document.querySelector("#lzonanortecapitalrj").style.display="none";
      	}

      	if(opcao20 === "Zona Oeste Capital"){
      		document.querySelector("#lzonaoestecapitalrj").style.display="block";
      	}else{
      		document.querySelector("#lzonaoestecapitalrj").style.display="none";
      	}

        if(opcao20 === "Centro Capital"){
      		document.querySelector("#lcentrocapitalrj").style.display="block";
      	}else{
      		document.querySelector("#lcentrocapitalrj").style.display="none";
      	}

      	if(opcao20 === "Zona Sul Capital"){
      		document.querySelector("#lzonasulcapitalrj").style.display="block";
      	}else{
      		document.querySelector("#lzonasulcapitalrj").style.display="none";
      	}


      	if(opcao20 === "Fluminense Carioca"){
      		document.querySelector("#lfluminensecariocarj").style.display="block";
      	}else{
      		document.querySelector("#lfluminensecariocarj").style.display="none";
      	}


        if(opcao20 === "Região Médio Paraíba"){
      		document.querySelector("#lregiaomedioparaibarj").style.display="block";
      	}else{
      		document.querySelector("#lregiaomedioparaibarj").style.display="none";
      	}


      	if(opcao20 === "Região Serrana"){
      		document.querySelector("#lserranarj").style.display="block";
      	}else{
      		document.querySelector("#lserranarj").style.display="none";
      	}

      	if(opcao20 === "Região Litorânea"){
      		document.querySelector("#llitoranearj").style.display="block";
      	}else{
      		document.querySelector("#llitoranearj").style.display="none";
      	}

      	
      }

      function clickopcao21(){
      	var opcao21 = document.getElementById("cidaderiograndenorte").value;
      	if(opcao21 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao21 === "Natal"){
      		document.querySelector("#lnatal").style.display="block";
      	}else{
      		document.querySelector("#lnatal").style.display="none";
      	}

      	if(opcao21 === "Interior Potiguar"){
      		document.querySelector("#linteriorpotiguar").style.display="block";
      	}else{
      		document.querySelector("#linteriorpotiguar").style.display="none";
      	}
      }

      function clickopcao22(){
      	var opcao22 = document.getElementById("cidaderiograndesul").value;
      	if(opcao22 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao22 === "Porto Alegre"){
      		document.querySelector("#lportoalegre").style.display="block";
      	}else{
      		document.querySelector("#lportoalegre").style.display="none";
      	}

      	if(opcao22 === "Região Metropolitana POA"){
      		document.querySelector("#lregiaometropoa").style.display="block";
      	}else{
      		document.querySelector("#lregiaometropoa").style.display="none";
      	}

      	if(opcao22 === "Sul Gaúcho"){
      		document.querySelector("#lsulgaucho").style.display="block";
      	}else{
      		document.querySelector("#lsulgaucho").style.display="none";
      	}

      	if(opcao22 === "Norte Gaúcho"){
      		document.querySelector("#lnortegaucho").style.display="block";
      	}else{
      		document.querySelector("#lnortegaucho").style.display="none";
      	}

      	if(opcao22 === "Leste Gaúcho"){
      		document.querySelector("#llestegaucho").style.display="block";
      	}else{
      		document.querySelector("#llestegaucho").style.display="none";
      	}

      	if(opcao22 === "Oeste Gaúcho"){
      		document.querySelector("#loestegaucho").style.display="block";
      	}else{
      		document.querySelector("#loestegaucho").style.display="none";
      	}
      }

      function clickopcao23(){
      	var opcao23 = document.getElementById("cidaderondonia").value;
      	if(opcao23 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao23 === "Rondônia"){
      		document.querySelector("#lrondonia").style.display="block";
      	}else{
      		document.querySelector("#lrondonia").style.display="none";
      	}
      }

      function clickopcao24(){
      	var opcao24 = document.getElementById("cidaderoraima").value;
      	if (opcao24 === "Cidade") {
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao24 === "Roraima"){
      		document.querySelector("#lroraima").style.display="block";
      	}else{
      		document.querySelector("#lroraima").style.display="none";
      	}
      }

      function clickopcao25(){
      	var opcao25 = document.getElementById("cidadesantacatarina").value;
      	if(opcao25 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao25 === "Florianópolis"){
            document.querySelector("#lfloripa").style.display="block";
      	}else{
            document.querySelector("#lfloripa").style.display="none";
      	}

      	if(opcao25 === "Região Metropoliana de Florianópolis"){
            document.querySelector("#lfloripametro").style.display="block";
      	}else{
            document.querySelector("#lfloripametro").style.display="none";
      	}

      	if(opcao25 === "Oeste Catarinense"){
            document.querySelector("#loestecatarinense").style.display="block";
      	}else{
            document.querySelector("#loestecatarinense").style.display="none";
      	}

      	if(opcao25 === "Norte Catarinense"){
            document.querySelector("#lnortecatarinese").style.display="block";
      	}else{
            document.querySelector("#lnortecatarinese").style.display="none";
      	}

      	if(opcao25 === "Sul Catarinense"){
           document.querySelector("#lsulcatarinense").style.display="block";
      	}else{
           document.querySelector("#lsulcatarinense").style.display="none";
      	}

      	if(opcao25 === "Vale do Itajaí"){
           document.querySelector("#lvaleitajai").style.display="block";
      	}else{
           document.querySelector("#lvaleitajai").style.display="none";
       	}

      	if(opcao25 === "Região Litorânea"){
           document.querySelector("#lregiaolitoral").style.display="block";
      	}else{
      		document.querySelector("#lregiaolitoral").style.display="none";
      	}
      }

      function clickopcao26(){
      	var opcao26 = document.getElementById("cidadesaopaulo").value;
        if(opcao26 === "Cidade"){
        	document.querySelector("#divgrande2").style.display="none";
        }else{
        	document.querySelector("#divgrande2").style.display="block";
        }

        if(opcao26 === "Zona Norte Capital"){
            document.querySelector("#lzonanortecapitalsp").style.display="block";
        }else{
            document.querySelector("#lzonanortecapitalsp").style.display="none";
        }

        if(opcao26 === "Zona Sul Capital"){
            document.querySelector("#lzonasulcapitalsp").style.display="block";
        }else{
            document.querySelector("#lzonasulcapitalsp").style.display="none";
        }

        if(opcao26 === "Zona Leste Capital"){
            document.querySelector("#lzonalestecapitalsp").style.display="block";
        }else{
            document.querySelector("#lzonalestecapitalsp").style.display="none";
        }

        if(opcao26 === "Zona Oeste Capital"){
            document.querySelector("#lzonaoestecapitalsp").style.display="block";
        }else{
            document.querySelector("#lzonaoestecapitalsp").style.display="none";
        }

        if(opcao26 === "ABC"){
            document.querySelector("#labcsp").style.display="block";
        }else{
            document.querySelector("#labcsp").style.display="none";
        }

        if(opcao26 === "Campinas e Região"){
           document.querySelector("#lcampinassp").style.display="block";
        }else{
           document.querySelector("#lcampinassp").style.display="none";
        }

        if(opcao26 === "Santos e Região"){
           document.querySelector("#lsantossp").style.display="block";
        }else{
           document.querySelector("#lsantossp").style.display="none";
        }

        if(opcao26 === "Vale do Paraíba"){
           document.querySelector("#lvaleparaibasp").style.display="block";
        }else{
           document.querySelector("#lvaleparaibasp").style.display="none";
        }

        if(opcao26 === "Bauru e Região"){
           document.querySelector("#lbaurusp").style.display="block";
        }else{
           document.querySelector("#lbaurusp").style.display="none";
        }

        if(opcao26 === "Piracicaba e Região"){
           document.querySelector("#lpiracicabasp").style.display="block";
        }else{
           document.querySelector("#lpiracicabasp").style.display="none";
        }

        if(opcao26 === "Marília e Região"){
           document.querySelector("#lmariliasp").style.display="block";
        }else{
           document.querySelector("#lmariliasp").style.display="none";
        }

        if(opcao26 === "Pres. Prudente e Região"){
          document.querySelector("#lpresprudentesp").style.display="block";
        }else{
          document.querySelector("#lpresprudentesp").style.display="none";
        }

        if(opcao26 === "Araçatuba e Região"){
          document.querySelector("#laracatubasp").style.display="block";
        }else{
          document.querySelector("#laracatubasp").style.display="none";
        }

        if(opcao26 === "S.J. do Rio Preto e Região"){
          document.querySelector("#lsaojoseriopretosp").style.display="block";
        }else{
          document.querySelector("#lsaojoseriopretosp").style.display="none";
        }
      }

      function clickopcao27(){
      	var opcao27 = document.getElementById("cidadesergipe").value;
      	if(opcao27 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao27 === "Arcaju"){
      		document.querySelector("#laracaju").style.display="block";
      	}else{
      		document.querySelector("#laracaju").style.display="none";
      	}

      	if(opcao27 === "Interior Sergipano"){
      		document.querySelector("#linteriorsergipe").style.display="block";
      	}else{
      		document.querySelector("#linteriorsergipe").style.display="none";
      	}
      }

      function clickopcao28(){
      	var opcao28 = document.getElementById("cidadetocantins").value;
      	if(opcao28 === "Cidade"){
      		document.querySelector("#divgrande2").style.display="none";
      	}else{
      		document.querySelector("#divgrande2").style.display="block";
      	}

      	if(opcao28 === "Tocantins"){
      		document.querySelector("#ltocantins").style.display="block";
      	}else{
      		document.querySelector("#ltocantins").style.display="none";
      	}
      }