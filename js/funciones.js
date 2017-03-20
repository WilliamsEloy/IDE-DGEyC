function seleccionarCapaBase() {
    var id = $(this).attr('id');
    var capa = $('label[for="' + id + '"]').text();
    for (var i = 0, ii = nro_capas_base; i < ii; ++i) {
        layers[i].setVisible(layers[i].get('title') === capa);
    }
}

function seleccionarCapa(capa) {
    var existe = false;
    var map_layers = map.getLayers().getArray();
    for (var i = 0; i < map_layers.length; ++i) {
        if (map_layers[i].get('type') != 'base'){
            if (map_layers[i].get('title') === capa){
                existe = true;
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
    if (!existe){
        var txt = document.createTextNode('No existe un mapa relacionado a la busqueda.');
        document.getElementById('dialog-mensaje').appendChild(txt);
        $( "#dialog-mensaje" ).dialog({
            autoOpen: false,
            show: {
                effect: "fade",
                duration: 500
            },
            hide: {
                effect: "fade",
                duration: 500
            }
        });
        $( "#dialog-mensaje" ).dialog( "open" );
    }
    /*if ($('#panel-buscar').css('display') != 'none') {
        $('#panel-buscar').toggle('slide', {}, 500);
    }*/
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
    for (var i = 0; i < map_layers.length; ++i) {
        if (map_layers[i].get('type') == 'feature') {
            map.getLayers().removeAt(i);
        }
    }
    leyenda(map_layers[map_layers.length - 1].get('name'));
    propiedadesCapa(map_layers[map_layers.length - 1].get('name'), map_layers[map_layers.length - 1].get('title'));
}

function propiedadesCapa(capa, titulo) {
    var capa = capa.substr(6, capa.length);
    var vectorSource = new ol.source.Vector();
    var vector = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(0, 0, 0, 0)',
                width: 2
            })
        }),
        type: 'feature',
        title: titulo
    });
    map.addLayer(vector);

    var featureRequest = new ol.format.WFS().writeGetFeature({
        srsName: 'EPSG:3857',
        featureNS: 'http://www.dgeyc.com/rural',
        featurePrefix: 'rural',
        featureTypes: [capa],
        outputFormat: 'application/json'
    });

    fetch('http://127.0.0.1:8080/geoserver/wfs', {
        method: 'POST',
        body: new XMLSerializer().serializeToString(featureRequest)
    }).then(function(response) {
        return response.json();
    }).then(function(json) {
        var features = new ol.format.GeoJSON().readFeatures(json);
        vectorSource.addFeatures(features);
        map.getView().fit(vectorSource.getExtent());
    });

    featuresInteraction.extend(vectorSource.getFeatures());
}

function propiedadesCapaFrente() {
    var capa = document.getElementById('sortable').firstChild.textContent;
    var map_layers = map.getLayers().getArray();
    for (var i = 0; i < map_layers.length; ++i) {
        if (map_layers[i].get('type') != 'base' & map_layers[i].get('type') != 'feature'){
            if (map_layers[i].get('title') == capa){
                propiedadesCapa(map_layers[i].get('name'), map_layers[i].get('title'));
                leyenda(map_layers[i].get('name'));
            }
        }
    }
}

function leyenda(capa) {
    var request = 'http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=';
    var leyenda = document.getElementById('leyenda');
    leyenda.setAttribute('src', request + capa);
    if ($('#panel-leyenda').css('display') == 'none') {
        $('#panel-leyenda').toggle('slide', {direction: 'up'}, 500);
    }
}

function quitarCapaVisible(id) {
    var capa_visible = document.getElementById(id).firstChild.nodeValue;
    var map_layers = map.getLayers().getArray();
    for (var i = 0; i < map_layers.length; ++i) {
        if (map_layers[i].get('type') != 'base'){
            if (map_layers[i].get('title') == capa_visible){
                if (map_layers[i].get('type') != 'feature') {
                    map_layers[i].setVisible(false);
                    if ($("#sortable li").length == 1) {
                        $('#panel-capas-visibles').toggle('slide', {direction: 'up'}, 500);
                        $('#panel-leyenda').toggle('slide', {direction: 'up'}, 500);
                    }
                } else {
                    map.getLayers().removeAt(i);
                    if ($('#panel-info-capas').css('display') != 'none') {
                        $('#panel-info-capas').toggle('slide', {direction: 'up'}, 500);
                    }
                    featuresInteraction.clear();
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
    $("#input-buscar").autocomplete({
        source: capasDisponibles,
        select: function (event, ui) {
            seleccionarCapa(ui.item.value);
        }
    });
    $("#input-buscar").on("search", function(){
        seleccionarCapa($(this).val());
    });
    $( "#sortable" ).sortable({
        revert: true,
        stop: capaAlFrente
    });
    $("ul, li").disableSelection();
    $(document).on('click', '.capa-visible', function(){
        var id = $(this).parent().attr('id');
        quitarCapaVisible(id);
        $('#' + id).remove();
        propiedadesCapaFrente();
        return false;
    });
    $( "#dialog-exportar" ).dialog({
        autoOpen: false,
        show: {
            effect: "fade",
            duration: 500
        },
        hide: {
            effect: "fade",
            duration: 500
        }
    });
    $(document).on('click', '.descargar-capa', function(){
        capaExportar = $(this).parent().text();
        $( "#dialog-exportar" ).dialog( "open" );
        return false;
    });
    $(document).on('click', '.exportar', function(){
        var formato = $(this).attr('id');
        exportarCapa(formato);
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
    var lista = document.getElementById('sortable');
    lista.insertBefore(capa, lista.firstChild);
    var capaId = capa.getAttribute('id');
    var txt = document.createTextNode(titulo);
    document.getElementById(capaId).appendChild(txt);
    var btnDescargar = document.createElement('a');
    btnDescargar.setAttribute('href', '#');
    btnDescargar.setAttribute('class', 'descargar-capa');
    btnDescargar.setAttribute('id', 'descargar-capa-' + nro_capa);
    document.getElementById(capaId).appendChild(btnDescargar);
    var imgDescargar = document.createElement('img');
    imgDescargar.setAttribute('src', 'img/descargar.png');
    imgDescargar.setAttribute('class', 'descargar');
    imgDescargar.setAttribute('title', 'Exportar');
    imgDescargar.setAttribute('data-toggle', 'tooltip');
    document.getElementById('descargar-capa-' + nro_capa).appendChild(imgDescargar);
    var btnCerrar = document.createElement('a');
    btnCerrar.setAttribute('href', '#');
    btnCerrar.setAttribute('class', 'capa-visible');
    btnCerrar.setAttribute('id', 'capa-visible-' + nro_capa);
    document.getElementById(capaId).appendChild(btnCerrar);
    var imgCerrar = document.createElement('img');
    imgCerrar.setAttribute('src', 'img/cerrar.png');
    imgCerrar.setAttribute('class', 'cerrar');
    imgCerrar.setAttribute('title', 'Quitar');
    imgCerrar.setAttribute('data-toggle', 'tooltip');
    document.getElementById('capa-visible-' + nro_capa).appendChild(imgCerrar);
}

function cerrarPanelInfo() {
    $('#panel-info-capas').toggle('slide', {direction: 'up'}, 500);
    featuresInteraction.clear();
}

function WMSexport(link, requestWMS, capa, formato) {
    var url = 'http://127.0.0.1:8080/geoserver/wms?request=GetCapabilities&service=WMS&version=1.3.0';
    var parser = new ol.format.WMSCapabilities();
    $.ajax(url).then(function (response) {
        var result = parser.read(response);
        var Layers = result.Capability.Layer.Layer;
        var extent;
        var minx, miny, maxx, maxy;
        for (var i = 0, len = Layers.length; i < len; i++) {
            var layerobj = Layers[i];
            if (layerobj.Name == capa)
            {
                extent = layerobj.EX_GeographicBoundingBox;
                minx = extent[0];
                miny = extent[1];
                maxx = extent[2];
                maxy = extent[3];
            }
        }
        requestWMS = requestWMS + capa + '&BBOX=' + minx + ',' + miny + ',' + maxx + ',' + maxy + formato;
        var encodedUri = encodeURI(requestWMS);
        link.setAttribute("href", encodedUri);
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
    });
}

function exportarCapa(formato) {
    var requestWMS = 'http://127.0.0.1:8080/geoserver/wms?service=wms&version=1.1.1&request=getmap&SRS=EPSG:4326&WIDTH=780&HEIGHT=330&layers=';
    var requestWFS = 'http://127.0.0.1:8080/geoserver/wfs?request=getfeature&service=wfs&version=2.0.0&typename=';
    var map_layers = map.getLayers().getArray();
    for (var i = 0; i < map_layers.length; ++i) {
        if (map_layers[i].get('type') != 'base' & map_layers[i].get('type') != 'feature') {
            if (map_layers[i].get('title') === capaExportar) {
                var capa = map_layers[i].get('name');
                var encodedUri;
                var link = document.createElement("a");
                var wfs = false;
                if (formato == 'exp-png'){
                    WMSexport(link, requestWMS, capa, '&format=image/png');
                    encodedUri = encodeURI(requestWFS);
                }
                else if (formato == 'exp-png8'){
                    WMSexport(link, requestWMS, capa, '&FORMAT=image/png8');
                }
                else if (formato == 'exp-jpeg'){
                    WMSexport(link, requestWMS, capa, '&format=image/jpeg');
                }
                else if (formato == 'exp-jpeg-png'){
                    WMSexport(link, requestWMS, capa, '&format=image/vnd.jpeg-png');
                }
                else if (formato == 'exp-gif'){
                    WMSexport(link, requestWMS, capa, '&format=image/gif');
                }
                else if (formato == 'exp-tiff'){
                    WMSexport(link, requestWMS, capa, '&format=image/tiff');
                }
                else if (formato == 'exp-tiff8'){
                    WMSexport(link, requestWMS, capa, '&format=image/tiff8');
                }
                else if (formato == 'exp-geotiff'){
                    WMSexport(link, requestWMS, capa, '&format=image/geotiff');
                }
                else if (formato == 'exp-geotiff8'){
                    WMSexport(link, requestWMS, capa, '&format=image/geotiff8');
                }
                else if (formato == 'exp-svg'){
                    WMSexport(link, requestWMS, capa, '&format=image/svg');
                }
                else if (formato == 'exp-pdf'){
                    WMSexport(link, requestWMS, capa, '&format=application/pdf');
                }
                else if (formato == 'exp-georss'){
                    WMSexport(link, requestWMS, capa, '&format=rss');
                }
                else if (formato == 'exp-kml'){
                    WMSexport(link, requestWMS, capa, '&format=kml');
                }
                else if (formato == 'exp-kmz'){
                    WMSexport(link, requestWMS, capa, '&format=kmz');
                }
                else if (formato == 'exp-ol'){
                    WMSexport(link, requestWMS, capa, '&format=application/openlayers');
                }
                else if (formato == 'exp-utfgrid'){
                    WMSexport(link, requestWMS, capa, '&format=application/json;type=utfgrid');
                }
                else if (formato == 'exp-shp') {
                    requestWFS = requestWFS + capa + '&outputformat=shape-zip';
                    encodedUri = encodeURI(requestWFS);
                    wfs = true;
                }
                else if (formato == 'exp-csv'){
                    requestWFS = requestWFS + capa + '&outputformat=csv';
                    encodedUri = encodeURI(requestWFS);
                    wfs = true;
                }
                else if (formato == 'exp-gml2'){
                    requestWFS = requestWFS + capa + '&outputformat=gml2';
                    encodedUri = encodeURI(requestWFS);
                    wfs = true;
                }
                else if (formato == 'exp-gml3'){
                    requestWFS = requestWFS + capa + '&outputformat=gml3';
                    encodedUri = encodeURI(requestWFS);
                    wfs = true;
                }
                else if (formato == 'exp-json'){
                    requestWFS = requestWFS + capa + '&outputformat=application/json';
                    encodedUri = encodeURI(requestWFS);
                    wfs = true;
                }
                else if (formato == 'exp-jsonp'){
                    requestWFS = requestWFS + capa + '&outputformat=text/javascript';
                    encodedUri = encodeURI(requestWFS);
                    wfs = true;
                }
                if (wfs) {
                    link.setAttribute("href", encodedUri);
                    link.setAttribute("target", "_blank");
                    document.body.appendChild(link);
                    link.click();
                }
            }
        }
    }
}

function exportarInfo() {
    var tmpElemento = document.createElement('a');
    var data_type = 'data:application/vnd.ms-excel';
    var tabla_div = document.getElementById('tabla_info');
    var tabla_html = tabla_div.outerHTML.replace(/ /g, '%20');
    var capa = document.getElementById('sortable').firstChild.textContent;
    tmpElemento.href = data_type + ', ' + tabla_html;
    tmpElemento.download = 'InfoMapa-' + capa + '.xls';
    tmpElemento.click();
}

function imprimir() {
    window.print();
    /*Utilizar CSS para bloquear las secciones de la página que no se deben imprimir
    <style type="text/css" media="print">
        @media print {
            #parte1 {display:none;}
            #parte2 {display:none;}
        }
    </style>*/
}

function cargarPropiedades(propiedades) {
    for (var prop in propiedades){
        if (prop != 'geometry'){
            if (fila == 1) {
                var th = document.createElement('th');
                th.setAttribute('id', prop);
                th.setAttribute('style', 'padding: 5px; background: #2aabd2');
                th.innerHTML = prop;
                document.getElementById('tr_head').appendChild(th);
                if (headers == ''){
                    headers += '#' + prop;
                } else {
                    headers += ', #' + prop;
                }
            }
            var td = document.createElement('td');
            td.setAttribute('style', 'padding: 5px');
            td.innerHTML = propiedades[prop];
            document.getElementById('fila_' + fila).appendChild(td);
        } else {
            fila += 1;
            var tr = document.createElement('tr');
            tr.setAttribute('id', 'fila_' + fila);
            document.getElementById('t_body').appendChild(tr);
        }
    }
}

function configPropiedades() {
    if (fila == 0) {
        if ($('#panel-info-capas').css('display') != 'none') {
            $('#panel-info-capas').toggle('slide', {direction: 'up'}, 500);
        }
    }
    else{
        if ($('#panel-info-capas').css('display') == 'none') {
            $('#panel-info-capas').toggle('slide', {direction: 'up'}, 500);
        }
        $(headers)
            .wrapInner('<span title="Ordenar Asc/Desc por está columna"/>')
            .each(function(){
                var th = $(this),
                    thIndex = th.index(),
                    inverse = false;

                th.click(function(){
                    $('#tabla_info').find('td').filter(function(){
                        return $(this).index() === thIndex;
                    }).sortElements(function(a, b){
                        if ($.isNumeric($.text([b]))) {
                            return parseInt($.text([a])) > parseInt($.text([b])) ?
                                inverse ? -1 : 1
                                : inverse ? 1 : -1;
                        } else {
                            return $.text([a]) > $.text([b]) ?
                                inverse ? -1 : 1
                                : inverse ? 1 : -1;
                        }
                    }, function(){
                        // parentNode is the element we want to move
                        return this.parentNode;
                    });
                    inverse = !inverse;
                });
            });
    }
}