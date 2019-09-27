/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {

    // Vars.
    var $window = $(window),
        $body = $('body'),
        $wrapper = $('#wrapper');

    // Breakpoints.
    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
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

// escreve só uma vez
var get = document.querySelector.bind(document)

function clickopcao() {

    var opcao = get("#estado").value;
    if (opcao === "Estado") {
        get("#divgrande").style.display = "none";
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande").style.display = "block";
        get("#divgrande2").style.display = "block";
    }

    if (opcao === "Acre") {
        get("#esconder1").style.display = "block";

    } else {
        get("#esconder1").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lacre").style.display = "none";
    }


    if (opcao === "Alagoas") {
        get("#esconder2").style.display = "block";
    } else {
        get("#esconder2").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lmaceio").style.display = "none";
        get("#linterioralagoano").style.display = "none";
    }


    if (opcao === "Amapá") {
        get("#esconder3").style.display = "block";
    } else {
        get("#esconder3").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lamapa").style.display = "none";

    }


    if (opcao === "Amazonas") {
        get("#esconder4").style.display = "block";
    } else {
        get("#esconder4").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lmanaus").style.display = "none";
        get("#linterioramazonense").style.display = "none";

    }


    if (opcao === "Bahia") {
        get("#esconder5").style.display = "block";
    } else {
        get("#esconder5").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lsalvador").style.display = "none";
        get("#lsalvadormetro").style.display = "none";
        get("#loestebaiano").style.display = "none";
        get("#lsulbaiano").style.display = "none";
        get("#lnortebaiano").style.display = "none";
        get("#llestebaiano").style.display = "none";

    }


    if (opcao === "Ceará") {
        get("#esconder6").style.display = "block";
    } else {
        get("#esconder6").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lfortaleza").style.display = "none";
        get("#lfortalezametro").style.display = "none";
        get("#lbaturite").style.display = "none";
        get("#llitoranea").style.display = "none";
        get("#lsobral").style.display = "none";
        get("#lcariri").style.display = "none";
        get("#ljaguaribe").style.display = "none";

    }


    if (opcao === "Distrito Federal") {
        get("#esconder7").style.display = "block";
    } else {
        get("#esconder7").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lbrasilia").style.display = "none";
        get("#lcidadessatelites").style.display = "none";

    }


    if (opcao === "Espírito Santo") {
        get("#esconder8").style.display = "block";
    } else {
        get("#esconder8").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lvilavelha").style.display = "none";
        get("#lsulespirito").style.display = "none";
        get("#lnorteespirito").style.display = "none";

    }


    if (opcao === "Goiás") {
        get("#esconder9").style.display = "block";
    } else {
        get("#esconder9").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lgoiania").style.display = "none";
        get("#lnortegoiano").style.display = "none";
        get("#lcentrooestegoiano").style.display = "none";

    }


    if (opcao === "Maranhão") {
        get("#esconder10").style.display = "block";
    } else {
        get("#esconder10").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lsaoluis").style.display = "none";
        get("#linteriormaranhao").style.display = "none";
    }


    if (opcao === "Mato Grosso") {
        get("#esconder11").style.display = "block";
    } else {
        get("#esconder11").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lcuiaba").style.display = "none";
        get("#linteriormatogrosso").style.display = "none";

    }


    if (opcao === "Mato Grosso do Sul") {
        get("#esconder12").style.display = "block";
    } else {
        get("#esconder12").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lcampogrande").style.display = "none";
        get("#linteriormatogrossosul").style.display = "none";

    }


    if (opcao === "Minas Gerais") {
        get("#esconder13").style.display = "block";
    } else {
        get("#esconder13").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lbelohorizonte").style.display = "none";
        get("#lbelohorizontemetro").style.display = "none";
        get("#ltriangulomineiro").style.display = "none";
        get("#laltoparnaiba").style.display = "none";
        get("#lsulmineiro").style.display = "none";
        get("#lnortemineiro").style.display = "none";
        get("#lregiaodamata").style.display = "none";
        get("#ljequitinhonha").style.display = "none";

    }


    if (opcao === "Pará") {
        get("#esconder14").style.display = "block";
    } else {
        get("#esconder14").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lpara").style.display = "none";

    }

    if (opcao === "Paraíba") {
        get("#esconder15").style.display = "block";
    } else {
        get("#esconder15").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lparaiba").style.display = "none";
        get("#linteriorparaiba").style.display = "none";

    }

    if (opcao === "Paraná") {
        get("#esconder16").style.display = "block";
    } else {
        get("#esconder16").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lcuritiba").style.display = "none";
        get("#lcuritibametro").style.display = "none";
        get("#lnorteparanaense").style.display = "none";
        get("#lsulparanaense").style.display = "none";
        get("#llesteparanaense").style.display = "none";
        get("#loesteparanaense").style.display = "none";

    }

    if (opcao === "Pernambuco") {
        get("#esconder17").style.display = "block";
    } else {
        get("#esconder17").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lrecife").style.display = "none";
        get("#lrecifemetro").style.display = "none";
        get("#lvalesaofrancisco").style.display = "none";
        get("#lsertaopernambuco").style.display = "none";
        get("#lagrestepernambuco").style.display = "none";

    }

    if (opcao === "Piauí") {
        get("#esconder18").style.display = "block";
    } else {
        get("#esconder18").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lteresina").style.display = "none";
        get("#linteriorpiaui").style.display = "none";

    }

    if (opcao === "Rio de Janeiro") {
        get("#esconder19").style.display = "block";
    } else {
        get("#esconder19").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lzonanortecapitalrj").style.display = "none";
        get("#lzonaoestecapitalrj").style.display = "none";
        get("#lzonasulcapitalrj").style.display = "none";
        get("#lcentrocapitalrj").style.display = "none";
        get("#lfluminensecariocarj").style.display = "none";
        get("#lserranarj").style.display = "none";
        get("#llitoranearj").style.display = "none";
        get("#lregiaomedioparaibarj").style.display = "none";

    }

    if (opcao === "Rio Grande do Norte") {
        get("#esconder20").style.display = "block";
    } else {
        get("#esconder20").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lnatal").style.display = "none";
        get("#linteriorpotiguar").style.display = "none";
    }

    if (opcao === "Rio Grande do Sul") {
        get("#esconder21").style.display = "block";
    } else {
        get("#esconder21").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lportoalegre").style.display = "none";
        get("#lregiaometropoa").style.display = "none";
        get("#lsulgaucho").style.display = "none";
        get("#lnortegaucho").style.display = "none";
        get("#llestegaucho").style.display = "none";
        get("#loestegaucho").style.display = "none";
    }

    if (opcao === "Rondônia") {
        get("#esconder22").style.display = "block";
    } else {
        get("#esconder22").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lrondonia").style.display = "none";
    }

    if (opcao === "Roraima") {
        get("#esconder23").style.display = "block";
    } else {
        get("#esconder23").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lroraima").style.display = "none";
    }

    if (opcao === "Santa Catarina") {
        get("#esconder24").style.display = "block";
    } else {
        get("#esconder24").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lfloripa").style.display = "none";
        get("#lfloripametro").style.display = "none";
        get("#loestecatarinense").style.display = "none";
        get("#lnortecatarinese").style.display = "none";
        get("#lvaleitajai").style.display = "none";
        get("#lsulcatarinense").style.display = "none";
        get("#lregiaolitoral").style.display = "none";
    }

    if (opcao === "São Paulo") {
        get("#esconder25").style.display = "block";
    } else {
        get("#esconder25").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#lzonanortecapitalsp").style.display = "none";
        get("#lzonasulcapitalsp").style.display = "none";
        get("#lzonalestecapitalsp").style.display = "none";
        get("#lzonaoestecapitalsp").style.display = "none";
        get("#labcsp").style.display = "none";
        get("#lcampinassp").style.display = "none";
        get("#lsantossp").style.display = "none";
        get("#lvaleparaibasp").style.display = "none";
        get("#lbaurusp").style.display = "none";
        get("#lpiracicabasp").style.display = "none";
        get("#lmariliasp").style.display = "none";
        get("#lpresprudentesp").style.display = "none";
        get("#laracatubasp").style.display = "none";
        get("#lsaojoseriopretosp").style.display = "none";
    }

    if (opcao === "Sergipe") {
        get("#esconder26").style.display = "block";
    } else {
        get("#esconder26").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#laracaju").style.display = "none";
        get("#linteriorsergipe").style.display = "none";
    }

    if (opcao === "Tocantins") {
        get("#esconder27").style.display = "block";
    } else {
        get("#esconder27").style.display = "none";
        get("#divgrande2").style.display = "none";
        get("#ltocantins").style.display = "none";
    }
}



function clickopcao2() {

    var opcao2 = document.getElementById("cidadeacre").value;

    if (opcao2 === "Cidade") {
        get("#divgrande2").style.display = "none";
        get("#lacre").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
        get("#lacre").style.display = "block";
    }

    if (opcao2 === "Acre") {
        get("#lacre").style.display = "block";
    } else {
        get("#lacre").style.display = "none";
    }
}

function clickopcao3() {

    var opcao3 = document.getElementById("cidadealagoas").value;

    if (opcao3 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao3 === "Maceió") {
        get("#lmaceio").style.display = "block";

    } else {
        get("#lmaceio").style.display = "none";

    }

    if (opcao3 === "Interior Alagoano") {
        get("#linterioralagoano").style.display = "block";

    } else {
        get("#linterioralagoano").style.display = "none";

    }
}

function clickopcao4() {
    var opcao4 = document.getElementById("cidadeamapa").value;
    if (opcao4 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao4 === "Amapá") {
        get("#lamapa").style.display = "block";
    } else {
        get("#lamapa").style.display = "none";
    }

}

function clickopcao5() {
    var opcao5 = document.getElementById("cidadeamazonas").value;
    if (opcao5 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao5 === "Manaus") {
        get("#lmanaus").style.display = "block";
    } else {
        get("#lmanaus").style.display = "none";
    }

    if (opcao5 === "Interior Amazonense") {
        get("#linterioramazonense").style.display = "block";
    } else {
        get("#linterioramazonense").style.display = "none";
    }
}

function clickopcao6() {
    var opcao6 = document.getElementById("cidadebahia").value;
    if (opcao6 === "Cidade") {
        get("#divgrande2").style.display = "none";

    } else {
        get("#divgrande2").style.display = "block";

    }

    if (opcao6 === "Salvador") {
        get("#lsalvador").style.display = "block";
    } else {
        get("#lsalvador").style.display = "none";
    }

    if (opcao6 === "Salvador e Região Metropolitana") {
        get("#lsalvadormetro").style.display = "block";
    } else {
        get("#lsalvadormetro").style.display = "none";
    }

    if (opcao6 === "Oeste Baiano") {
        get("#loestebaiano").style.display = "block";
    } else {
        get("#loestebaiano").style.display = "none";
    }

    if (opcao6 === "Sul Baiano") {
        get("#lsulbaiano").style.display = "block";
    } else {
        get("#lsulbaiano").style.display = "none";
    }

    if (opcao6 === "Norte Baiano") {
        get("#lnortebaiano").style.display = "block";
    } else {
        get("#lnortebaiano").style.display = "none";
    }

    if (opcao6 === "Leste Baiano") {
        get("#llestebaiano").style.display = "block";
    } else {
        get("#llestebaiano").style.display = "none";
    }
}

function clickopcao7() {
    var opcao7 = document.getElementById("cidadeceara").value;
    if (opcao7 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao7 === "Fortaleza") {
        get("#lfortaleza").style.display = "block";
    } else {
        get("#lfortaleza").style.display = "none";
    }

    if (opcao7 === "Fortaleza e Região Metropolitana") {
        get("#lfortalezametro").style.display = "block";
    } else {
        get("#lfortalezametro").style.display = "none";
    }

    if (opcao7 === "Baturité e Região") {
        get("#lbaturite").style.display = "block";
    } else {
        get("#lbaturite").style.display = "none";
    }

    if (opcao7 === "Região Litorânea") {
        get("#llitoranea").style.display = "block";
    } else {
        get("#llitoranea").style.display = "none";
    }

    if (opcao7 === "Sobral e Região") {
        get("#lsobral").style.display = "block";
    } else {
        get("#lsobral").style.display = "none";
    }

    if (opcao7 === "Cariri e Região") {
        get("#lcariri").style.display = "block";
    } else {
        get("#lcariri").style.display = "none";
    }

    if (opcao7 === "Jaguaribe e Região") {
        get("#ljaguaribe").style.display = "block";
    } else {
        get("#ljaguaribe").style.display = "none";
    }
}

function clickopcao8() {
    var opcao8 = document.getElementById("cidadedistritofederal").value;
    if (opcao8 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao8 === "Brasília") {
        get("#lbrasilia").style.display = "block";
    } else {
        get("#lbrasilia").style.display = "none";
    }

    if (opcao8 === "Cidades Satélites") {
        get("#lcidadessatelites").style.display = "block";
    } else {
        get("#lcidadessatelites").style.display = "none";
    }
}

function clickopcao9() {
    var opcao9 = document.getElementById("cidadeespiritosanto").value;
    if (opcao9 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao9 === "Vila Velha") {
        get("#lvilavelha").style.display = "block";
    } else {
        get("#lvilavelha").style.display = "none";
    }

    if (opcao9 === "Sul do Espírito Santo") {
        get("#lsulespirito").style.display = "block";
    } else {
        get("#lsulespirito").style.display = "none";
    }

    if (opcao9 === "Norte do Espírito Santo") {
        get("#lnorteespirito").style.display = "block";
    } else {
        get("#lnorteespirito").style.display = "none";
    }
}

function clickopcao10() {
    var opcao10 = document.getElementById("cidadegoias").value;
    if (opcao10 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao10 === "Goiânia") {
        get("#lgoiania").style.display = "block";
    } else {
        get("#lgoiania").style.display = "none";
    }

    if (opcao10 === "Norte Goiâno") {
        get("#lnortegoiano").style.display = "block";
    } else {
        get("#lnortegoiano").style.display = "none";
    }

    if (opcao10 === "Centro-Oeste Goiâno") {
        get("#lcentrooestegoiano").style.display = "block";
    } else {
        get("#lcentrooestegoiano").style.display = "none";
    }

    if (opcao10 === "Sul Goiâno") {
        get("#lsulgoiano").style.display = "block";
    } else {
        get("#lsulgoiano").style.display = "none";
    }
}

function clickopcao11() {
    var opcao11 = document.getElementById("cidademaranhao").value;
    if (opcao11 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao11 === "São Luis") {
        get("#lsaoluis").style.display = "block";

    } else {
        get("#lsaoluis").style.display = "none";

    }

    if (opcao11 === "Interior Maranhense") {
        get("#linteriormaranhao").style.display = "block";

    } else {
        get("#linteriormaranhao").style.display = "none";

    }
}

function clickopcao12() {
    var opcao12 = document.getElementById("cidadematogrosso").value;
    if (opcao12 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao12 === "Cuiabá") {
        get("#lcuiaba").style.display = "block";
    } else {
        get("#lcuiaba").style.display = "none";
    }

    if (opcao12 === "Interior Mato Grossense") {
        get("#linteriormatogrosso").style.display = "block";
    } else {
        get("#linteriormatogrosso").style.display = "none";
    }
}

function clickopcao13() {
    var opcao13 = document.getElementById("cidadematogrossosul").value;
    if (opcao13 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao13 === "Campo Grande") {
        get("#lcampogrande").style.display = "block";
    } else {
        get("#lcampogrande").style.display = "none";
    }

    if (opcao13 === "Interior Mato Grosso do Sul") {
        get("#linteriormatogrossosul").style.display = "block";
    } else {
        get("#linteriormatogrossosul").style.display = "none";
    }
}

function clickopcao14() {
    var opcao14 = document.getElementById("cidademinasgerais").value;
    if (opcao14 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao14 === "Belo Horizonte") {
        get("#lbelohorizonte").style.display = "block";
    } else {
        get("#lbelohorizonte").style.display = "none";
    }

    if (opcao14 === "Região Metropolitana de BH") {
        get("#lbelohorizontemetro").style.display = "block";

    } else {
        get("#lbelohorizontemetro").style.display = "none";
    }

    if (opcao14 === "Triângulo Mineiro") {
        get("#ltriangulomineiro").style.display = "block";

    } else {
        get("#ltriangulomineiro").style.display = "none";
    }

    if (opcao14 === "Alto Parnaíba") {
        get("#laltoparnaiba").style.display = "block";
    } else {
        get("#laltoparnaiba").style.display = "none";
    }

    if (opcao14 === "Sul Mineiro") {
        get("#lsulmineiro").style.display = "block";
    } else {
        get("#lsulmineiro").style.display = "none";
    }

    if (opcao14 === "Norte Mineiro") {
        get("#lnortemineiro").style.display = "block";
    } else {
        get("#lnortemineiro").style.display = "none";
    }

    if (opcao14 === "Região da Mata") {
        get("#lregiaodamata").style.display = "block";
    } else {
        get("#lregiaodamata").style.display = "none";
    }

    if (opcao14 === "Jequitinhonha") {
        get("#ljequitinhonha").style.display = "block";
    } else {
        get("#ljequitinhonha").style.display = "none";
    }
}

function clickopcao15() {
    var opcao15 = document.getElementById("cidadepara").value;
    if (opcao15 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao15 === "Pará") {
        get("#lpara").style.display = "block";
    } else {
        get("#lpara").style.display = "none";
    }

    if (opcao15 === "Interior Paraense") {
        get("#linteriorpara").style.display = "block";
    } else {
        get("#linteriorpara").style.display = "none";
    }
}

function clickopcao16() {
    var opcao16 = document.getElementById("cidadeparaiba").value;
    if (opcao16 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao16 === "Paraíba") {
        get("#lparaiba").style.display = "block";
    } else {
        get("#lparaiba").style.display = "none";
    }

    if (opcao16 === "Interior Paraibano") {
        get("#linteriorparaiba").style.display = "block";
    } else {
        get("#linteriorparaiba").style.display = "none";
    }
}

function clickopcao17() {
    var opcao17 = document.getElementById("cidadeparana").value;
    if (opcao17 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao17 === "Curitiba") {
        get("#lcuritiba").style.display = "block";
    } else {
        get("#lcuritiba").style.display = "none";
    }

    if (opcao17 === "Região Metropolitana de Curitiba") {
        get("#lcuritibametro").style.display = "block";
    } else {
        get("#lcuritibametro").style.display = "none";
    }

    if (opcao17 === "Norte Paranaense") {
        get("#lnorteparanaense").style.display = "block";
    } else {
        get("#lnorteparanaense").style.display = "none";
    }

    if (opcao17 === "Sul Paranaense") {
        get("#lsulparanaense").style.display = "block";
    } else {
        get("#lsulparanaense").style.display = "none";
    }

    if (opcao17 === "Leste Paranaense") {
        get("#llesteparanaense").style.display = "block";
    } else {
        get("#llesteparanaense").style.display = "none";
    }

    if (opcao17 === "Oeste Paranaense") {
        get("#loesteparanaense").style.display = "block";
    } else {
        get("#loesteparanaense").style.display = "none";
    }
}

function clickopcao18() {
    var opcao18 = document.getElementById("cidadepernambuco").value;
    if (opcao18 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao18 === "Recife") {
        get("#lrecife").style.display = "block";
    } else {
        get("#lrecife").style.display = "none";
    }

    if (opcao18 === "Região Metropolitana de Recife") {
        get("#lrecifemetro").style.display = "block";
    } else {
        get("#lrecifemetro").style.display = "none";
    }

    if (opcao18 === "Vale do São Francisco") {
        get("#lvalesaofrancisco").style.display = "block";
    } else {
        get("#lvalesaofrancisco").style.display = "none";
    }

    if (opcao18 === "Sertão Pernambucano") {
        get("#lsertaopernambuco").style.display = "block";
    } else {
        get("#lsertaopernambuco").style.display = "none";
    }

    if (opcao18 === "Agreste Pernambucano") {
        get("#lagrestepernambuco").style.display = "block";
    } else {
        get("#lagrestepernambuco").style.display = "none";
    }
}

function clickopcao19() {
    var opcao19 = document.getElementById("cidadepiaui").value;
    if (opcao19 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao19 === "Teresina") {
        get("#lteresina").style.display = "block";
    } else {
        get("#lteresina").style.display = "none";
    }

    if (opcao19 === "Interior Piauiense") {
        get("#linteriorpiaui").style.display = "block";
    } else {
        get("#linteriorpiaui").style.display = "none";
    }
}

function clickopcao20() {
    var opcao20 = document.getElementById("cidaderio").value;
    if (opcao20 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao20 === "Zona Norte Capital") {
        get("#lzonanortecapitalrj").style.display = "block";
    } else {
        get("#lzonanortecapitalrj").style.display = "none";
    }

    if (opcao20 === "Zona Oeste Capital") {
        get("#lzonaoestecapitalrj").style.display = "block";
    } else {
        get("#lzonaoestecapitalrj").style.display = "none";
    }

    if (opcao20 === "Centro Capital") {
        get("#lcentrocapitalrj").style.display = "block";
    } else {
        get("#lcentrocapitalrj").style.display = "none";
    }

    if (opcao20 === "Zona Sul Capital") {
        get("#lzonasulcapitalrj").style.display = "block";
    } else {
        get("#lzonasulcapitalrj").style.display = "none";
    }


    if (opcao20 === "Fluminense Carioca") {
        get("#lfluminensecariocarj").style.display = "block";
    } else {
        get("#lfluminensecariocarj").style.display = "none";
    }


    if (opcao20 === "Região Médio Paraíba") {
        get("#lregiaomedioparaibarj").style.display = "block";
    } else {
        get("#lregiaomedioparaibarj").style.display = "none";
    }


    if (opcao20 === "Região Serrana") {
        get("#lserranarj").style.display = "block";
    } else {
        get("#lserranarj").style.display = "none";
    }

    if (opcao20 === "Região Litorânea") {
        get("#llitoranearj").style.display = "block";
    } else {
        get("#llitoranearj").style.display = "none";
    }


}

function clickopcao21() {
    var opcao21 = document.getElementById("cidaderiograndenorte").value;
    if (opcao21 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao21 === "Natal") {
        get("#lnatal").style.display = "block";
    } else {
        get("#lnatal").style.display = "none";
    }

    if (opcao21 === "Interior Potiguar") {
        get("#linteriorpotiguar").style.display = "block";
    } else {
        get("#linteriorpotiguar").style.display = "none";
    }
}

function clickopcao22() {
    var opcao22 = document.getElementById("cidaderiograndesul").value;
    if (opcao22 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao22 === "Porto Alegre") {
        get("#lportoalegre").style.display = "block";
    } else {
        get("#lportoalegre").style.display = "none";
    }

    if (opcao22 === "Região Metropolitana POA") {
        get("#lregiaometropoa").style.display = "block";
    } else {
        get("#lregiaometropoa").style.display = "none";
    }

    if (opcao22 === "Sul Gaúcho") {
        get("#lsulgaucho").style.display = "block";
    } else {
        get("#lsulgaucho").style.display = "none";
    }

    if (opcao22 === "Norte Gaúcho") {
        get("#lnortegaucho").style.display = "block";
    } else {
        get("#lnortegaucho").style.display = "none";
    }

    if (opcao22 === "Leste Gaúcho") {
        get("#llestegaucho").style.display = "block";
    } else {
        get("#llestegaucho").style.display = "none";
    }

    if (opcao22 === "Oeste Gaúcho") {
        get("#loestegaucho").style.display = "block";
    } else {
        get("#loestegaucho").style.display = "none";
    }
}

function clickopcao23() {
    var opcao23 = document.getElementById("cidaderondonia").value;
    if (opcao23 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao23 === "Rondônia") {
        get("#lrondonia").style.display = "block";
    } else {
        get("#lrondonia").style.display = "none";
    }
}

function clickopcao24() {
    var opcao24 = document.getElementById("cidaderoraima").value;
    if (opcao24 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao24 === "Roraima") {
        get("#lroraima").style.display = "block";
    } else {
        get("#lroraima").style.display = "none";
    }
}

function clickopcao25() {
    var opcao25 = document.getElementById("cidadesantacatarina").value;
    if (opcao25 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao25 === "Florianópolis") {
        get("#lfloripa").style.display = "block";
    } else {
        get("#lfloripa").style.display = "none";
    }

    if (opcao25 === "Região Metropoliana de Florianópolis") {
        get("#lfloripametro").style.display = "block";
    } else {
        get("#lfloripametro").style.display = "none";
    }

    if (opcao25 === "Oeste Catarinense") {
        get("#loestecatarinense").style.display = "block";
    } else {
        get("#loestecatarinense").style.display = "none";
    }

    if (opcao25 === "Norte Catarinense") {
        get("#lnortecatarinese").style.display = "block";
    } else {
        get("#lnortecatarinese").style.display = "none";
    }

    if (opcao25 === "Sul Catarinense") {
        get("#lsulcatarinense").style.display = "block";
    } else {
        get("#lsulcatarinense").style.display = "none";
    }

    if (opcao25 === "Vale do Itajaí") {
        get("#lvaleitajai").style.display = "block";
    } else {
        get("#lvaleitajai").style.display = "none";
    }

    if (opcao25 === "Região Litorânea") {
        get("#lregiaolitoral").style.display = "block";
    } else {
        get("#lregiaolitoral").style.display = "none";
    }
}

function clickopcao26() {
    var opcao26 = document.getElementById("cidadesaopaulo").value;
    if (opcao26 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao26 === "Zona Norte Capital") {
        get("#lzonanortecapitalsp").style.display = "block";
    } else {
        get("#lzonanortecapitalsp").style.display = "none";
    }

    if (opcao26 === "Zona Sul Capital") {
        get("#lzonasulcapitalsp").style.display = "block";
    } else {
        get("#lzonasulcapitalsp").style.display = "none";
    }

    if (opcao26 === "Zona Leste Capital") {
        get("#lzonalestecapitalsp").style.display = "block";
    } else {
        get("#lzonalestecapitalsp").style.display = "none";
    }

    if (opcao26 === "Zona Oeste Capital") {
        get("#lzonaoestecapitalsp").style.display = "block";
    } else {
        get("#lzonaoestecapitalsp").style.display = "none";
    }

    if (opcao26 === "ABC") {
        get("#labcsp").style.display = "block";
    } else {
        get("#labcsp").style.display = "none";
    }

    if (opcao26 === "Campinas e Região") {
        get("#lcampinassp").style.display = "block";
    } else {
        get("#lcampinassp").style.display = "none";
    }

    if (opcao26 === "Santos e Região") {
        get("#lsantossp").style.display = "block";
    } else {
        get("#lsantossp").style.display = "none";
    }

    if (opcao26 === "Vale do Paraíba") {
        get("#lvaleparaibasp").style.display = "block";
    } else {
        get("#lvaleparaibasp").style.display = "none";
    }

    if (opcao26 === "Bauru e Região") {
        get("#lbaurusp").style.display = "block";
    } else {
        get("#lbaurusp").style.display = "none";
    }

    if (opcao26 === "Piracicaba e Região") {
        get("#lpiracicabasp").style.display = "block";
    } else {
        get("#lpiracicabasp").style.display = "none";
    }

    if (opcao26 === "Marília e Região") {
        get("#lmariliasp").style.display = "block";
    } else {
        get("#lmariliasp").style.display = "none";
    }

    if (opcao26 === "Pres. Prudente e Região") {
        get("#lpresprudentesp").style.display = "block";
    } else {
        get("#lpresprudentesp").style.display = "none";
    }

    if (opcao26 === "Araçatuba e Região") {
        get("#laracatubasp").style.display = "block";
    } else {
        get("#laracatubasp").style.display = "none";
    }

    if (opcao26 === "S.J. do Rio Preto e Região") {
        get("#lsaojoseriopretosp").style.display = "block";
    } else {
        get("#lsaojoseriopretosp").style.display = "none";
    }
}

function clickopcao27() {
    var opcao27 = document.getElementById("cidadesergipe").value;
    if (opcao27 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao27 === "Arcaju") {
        get("#laracaju").style.display = "block";
    } else {
        get("#laracaju").style.display = "none";
    }

    if (opcao27 === "Interior Sergipano") {
        get("#linteriorsergipe").style.display = "block";
    } else {
        get("#linteriorsergipe").style.display = "none";
    }
}

function clickopcao28() {
    var opcao28 = document.getElementById("cidadetocantins").value;
    if (opcao28 === "Cidade") {
        get("#divgrande2").style.display = "none";
    } else {
        get("#divgrande2").style.display = "block";
    }

    if (opcao28 === "Tocantins") {
        get("#ltocantins").style.display = "block";
    } else {
        get("#ltocantins").style.display = "none";
    }
}