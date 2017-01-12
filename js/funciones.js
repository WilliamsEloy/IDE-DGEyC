function seleccionarCapaBase() {
    var id = $(this).attr('id');
    var capa = $('label[for="' + id + '"]').text();
    for (var i = 0, ii = nro_capas_base; i < ii; ++i) {
        layers[i].setVisible(layers[i].get('title') === capa);
    }
}

function seleccionarCapa() {
    var capa = document.getElementById("input-buscar").value;
    var map_layers = map.getLayers().getArray();
    for (var i = 0; i < map_layers.length; ++i) {
        if (map_layers[i].get('type') != 'base'){
            if (map_layers[i].get('title') === capa){
                if (map_layers[i].get('visible') != true) {
                    map_layers[i].setVisible(true);
                    agregarCapaVisible(map_layers[i].get('title'));
                    capaAlFrente();
                    if ($('#panel-capas-visibles').css('display') == 'none') {
                        $('#panel-capas-visibles').toggle('slide', {direction: 'up'}, 500);
                    }
                }
            }
        }
    }
    resizeBuscar();
}

function slidePanel(panel) {
    $(panel).toggle('slide', {}, 500);
}

function capaAlFrente(){
    var map_layers = map.getLayers().getArray();
    $($("#sortable li").get().reverse()).each(function () {
        var capa = $(this);
        for (var i = 0; i < map_layers.length; ++i) {
            if (map_layers[i].get('type') != 'base') {
                if (map_layers[i].get('title') === capa.text()) {
                    var layer = map.getLayers().item(i);
                    map.getLayers().removeAt(i);
                    map.getLayers().setAt(map_layers.length, layer);
                }
            }
        }
    });
}

function quitarCapaVisible(id) {
    var capa_visible = document.getElementById(id).firstChild.nodeValue;
    var map_layers = map.getLayers().getArray();
    for (var i = 0; i < map_layers.length; ++i) {
        if (map_layers[i].get('type') != 'base'){
            if (map_layers[i].get('title') == capa_visible){
                map_layers[i].setVisible(false);
                if ($("#sortable li").length == 1) {
                    $('#panel-capas-visibles').toggle('slide', {direction: 'up'}, 500);
                }
            }
        }
    }
}

function borrarBuscar() {
    document.getElementById("input-buscar").value = "";
    resizeBuscar();
}

$ (function () {
    $("[name='capa']").on("change", seleccionarCapaBase);
    var capasDisponibles = [];
    for (var i = 0; i < capas.length; ++i) {
        capasDisponibles[i] = capas[i]['title'];
    }
    $( "#input-buscar" ).autocomplete({
        source: capasDisponibles,
        select: seleccionarCapa
    });
    $("#input-buscar").on("search", seleccionarCapa);
    $( "#sortable" ).sortable({
        revert: true,
        stop: capaAlFrente
    });
    $( "ul, li" ).disableSelection();
    $(document).on('click', '.capa-visible', function(){
        var id = $(this).parent().attr('id');
        quitarCapaVisible(id);
        $('#' + id).remove();
        return false;
    });
});

function panelBuscar() {
    if ($('#panel-capas').css('display') != 'none') {
        $('#panel-capas').toggle('slide', {}, 500);
    }
    if ($('#panel-consulta').css('display') != 'none') {
        $('#panel-consulta').toggle('slide', {direction: 'up'}, 500);
    }
    document.getElementById("input-buscar").focus();
}

function ocultarPaneles() {
    if ($('#panel-capas').css('display') != 'none') {
        $('#panel-capas').toggle('slide', {}, 500);
    }
    if ($('#panel-consulta').css('display') != 'none') {
        $('#panel-consulta').toggle('slide', {direction: 'up'}, 500);
    }
    if ($('#panel-buscar').css('display') != 'none') {
        $('#panel-buscar').toggle('slide', {}, 500);
    }
}

function resizeBuscar() {
    if (document.getElementById("input-buscar").value.length >= 20) {
        document.getElementById("input-buscar").style.width = ((document.getElementById("input-buscar").value.length + 1) * 8) + 'px';
    }
    else {
        document.getElementById("input-buscar").style.width = 'auto';
    }
}

var nro_capa = 0;

function agregarCapaVisible(titulo) {
    nro_capa += 1;
    var capa = document.createElement('li');
    capa.setAttribute('id', 'capa-' + nro_capa);
    capa.setAttribute('class', "ui-state-default li-capas-visibles ui-sortable-handle");
    document.getElementById('sortable').appendChild(capa);
    var txt = document.createTextNode(titulo);
    var capaId = capa.getAttribute('id');
    document.getElementById(capaId).appendChild(txt);
    var btnMenu = document.createElement('a');
    btnMenu.setAttribute('href', '#');
    btnMenu.setAttribute('class', 'menu-capa');
    btnMenu.setAttribute('id', 'menu-capa-' + nro_capa);
    document.getElementById(capaId).appendChild(btnMenu);
    var imgMenu = document.createElement('img');
    imgMenu.setAttribute('src', 'img/menu.png');
    imgMenu.setAttribute('class', 'menu');
    imgMenu.setAttribute('height', '10px');
    imgMenu.setAttribute('width', '10px');
    document.getElementById('menu-capa-' + nro_capa).appendChild(imgMenu);
    var btnCerrar = document.createElement('a');
    btnCerrar.setAttribute('href', '#');
    btnCerrar.setAttribute('class', 'capa-visible');
    btnCerrar.setAttribute('id', 'capa-visible-' + nro_capa);
    document.getElementById(capaId).appendChild(btnCerrar);
    var imgCerrar = document.createElement('img');
    imgCerrar.setAttribute('src', 'img/cerrar.png');
    imgCerrar.setAttribute('class', 'cerrar');
    imgCerrar.setAttribute('height', '10px');
    imgCerrar.setAttribute('width', '10px');
    document.getElementById('capa-visible-' + nro_capa).appendChild(imgCerrar);
}