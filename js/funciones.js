function seleccionarCapaBase() {
    var id = $(this).attr('id');
    var capa = $('label[for="' + id + '"]').text();
    for (var i = 0, ii = nro_capas_base; i < ii; ++i) {
        layers[i].setVisible(layers[i].get('title') === capa);
    }
}

function seleccionarCapa() {
    var id = $(this).attr('id');
    var capa = document.getElementById(id).value;
    var map_layers = map.getLayers().getArray();
    for (var i = 0; i < map_layers.length; ++i) {
        if (map_layers[i].get('type') != 'base'){
            map_layers[i].setVisible(map_layers[i].get('title') === capa);
        }
    }
}

function slidePanel(panel) {
    $(panel).toggle('slide', {}, 500);
}

function capaAlFrente(){
    var new_layer = map.getLayers().item(10);
    var old_layer = map.getLayers().item(11);
    map.getLayers().removeAt(10);
    map.getLayers().removeAt(10);
    map.getLayers().setAt(11, old_layer);
    map.getLayers().setAt(12, new_layer);
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