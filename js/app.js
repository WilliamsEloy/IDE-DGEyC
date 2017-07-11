/**
 * Define a namespace for the application.
 */
window.app = {};
var app = window.app;

/**
 * Lógica del boton Buscar
 * @param opt_options
 * @constructor
 */

app.BuscarControl = function(opt_options) {

    var options = opt_options || {};

    var button = document.getElementById('buscar');

    var handleBuscar = function() {
        $('#panel-buscar').toggle('slide', {}, 500);
    };

    button.addEventListener('click', handleBuscar, false);
    button.addEventListener('touchstart', handleBuscar, false);

    var element = document.getElementById('boton-buscar');

    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });
};

ol.inherits(app.BuscarControl, ol.control.Control);

/**
 * Lógica del boton imprimir.
 * @param opt_options
 * @constructor
 */
app.ImprimirControl = function(opt_options) {

    var options = opt_options || {};

    var button = document.getElementById('imprimir');

    var handleImprimir = function() {
        //TODO imprimir
    };

    button.addEventListener('click', handleImprimir, false);
    button.addEventListener('touchstart', handleImprimir, false);

    var element = document.getElementById('boton-imprimir');

    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });
};

ol.inherits(app.ImprimirControl, ol.control.Control);

/**
 * Lógica del boton Capas
 * @param opt_options
 * @constructor
 */

app.CapasControl = function(opt_options) {

    var options = opt_options || {};

    var button = document.getElementById('capas');

    var handleCapas = function() {
        $('#panel-capas').toggle('slide', {}, 500);
    };

    button.addEventListener('click', handleCapas, false);
    button.addEventListener('touchstart', handleCapas, false);

    var element = document.getElementById('boton-capas');

    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });
};

ol.inherits(app.CapasControl, ol.control.Control);

/**
 * Lógica del panel de consultas
 * @param opt_options
 * @constructor
 */

/*app.PanelConsultaControl = function(opt_options) {

    var options = opt_options || {};

    var button = document.getElementById('capa-dgeyc-censos');

    var handlePanelConsulta = function() {
        $('#panel-consulta').toggle('slide', {direction:'up'}, 500);
        $('#panel-capas-dgeyc').toggle('slide', {}, 500);
        $('#panel-capas').toggle('slide', {}, 500);
    };

    button.addEventListener('click', handlePanelConsulta, false);
    button.addEventListener('touchstart', handlePanelConsulta, false);

    var element = document.getElementById('panel-consulta');

    ol.control.Control.call(this, {
        element: element,
        target: options.target
    });
};

ol.inherits(app.PanelConsultaControl, ol.control.Control);*/

/**
 * Layers (capas base)
 */

var layers = [
    new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: 'http://ide.estadistica.chubut.gov.ar/geoserver/wms',
            params: {layers: "rural:basemap", transparent: 'false', format: 'image/jpeg', tiled: 'true'},
            serverType: 'geoserver'
        }),
        visible: true,
        title: 'IGN',
        type: 'base'
    }),
    new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: false,
        title: 'Open Street Map',
        type: 'base'
    }),
    new olgm.layer.Google({
        visible: false,
        title: 'Google Streets',
        type: 'base'
    }),
    new olgm.layer.Google({
        visible: false,
        title: 'Google Terrain',
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        type: 'base'
    }),
    new olgm.layer.Google({
        visible: false,
        title: 'Google Satellite',
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        type: 'base'
    }),
    new olgm.layer.Google({
        visible: false,
        title: 'Google Hybrid',
        mapTypeId: google.maps.MapTypeId.HYBRID,
        type: 'base'
    }),
    new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: 'An-hnXUInDJCCN2NgVvNDgZh5h7Otc4CxXZi9TEgJcqjuAu3W9MSzXoAqkxhB1C5',
            imagerySet: 'Road'
        }),
        visible: false,
        title: 'Bing Road',
        type: 'base'
    }),
    new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: 'An-hnXUInDJCCN2NgVvNDgZh5h7Otc4CxXZi9TEgJcqjuAu3W9MSzXoAqkxhB1C5',
            imagerySet: 'Aerial'
        }),
        visible: false,
        title: 'Bing Aerial',
        type: 'base'
    }),
    new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: 'An-hnXUInDJCCN2NgVvNDgZh5h7Otc4CxXZi9TEgJcqjuAu3W9MSzXoAqkxhB1C5',
            imagerySet: 'AerialWithLabels'
        }),
        visible: false,
        title: 'Bing Hybrid',
        type: 'base'
    }),
    new ol.layer.Tile({
        title: 'Sin capa Base',
        type: 'base'
    }),
];

/**
 * indice de la ultima capa base del arreglo layers.
 */

nro_capas_base = 9;

/**
 * Creación del mapa
 * @type {ol.Map}
 */
var map = new ol.Map({
    layers: layers,
    target: 'map',
    controls: ol.control.defaults().extend([
        new app.ImprimirControl(),
        new app.CapasControl(),
        //new app.PanelConsultaControl(),
        new app.BuscarControl()
    ]),
    view: new ol.View({
        center: ol.proj.transform([-68, -43], 'EPSG:4326', 'EPSG:3857'),
        zoom: 6,
        maxZoom: 30,
        minZoom: 6
    }),
});

var olGM = new olgm.OLGoogleMaps({map: map});
olGM.activate();

$('.agregar-servidor').tooltip({
    placement: 'left',
    trigger : 'hover'
});

$('[data-toggle="tooltip"]').tooltip({
    placement: 'right',
    trigger : 'hover'
});

$('.ol-zoom-in, .ol-zoom-out').tooltip({
    placement: 'right',
    trigger : 'hover'
});

$(document).ready(function() {
    for (var x = 0; x < capas.length; x++) {
        map.addLayer(new ol.layer.Tile({
                source: new ol.source.TileWMS({
                    url: capas[x].url,
                    params: capas[x].params,
                    serverType: capas[x].serverType
                }),
                title: capas[x].title,
                visible: capas[x].visible,
                name: capas[x].params['LAYERS']
            })
        );
    }
    $('#cargando').hide();
    $('#cargando-capas').hide();
});

var featuresInteraction = new ol.Collection();
// a normal select interaction to handle click
var select = new ol.interaction.Select({
    features: featuresInteraction
});
map.addInteraction(select);
select.on('select', function(e) {
    document.getElementById('tr_head').innerHTML = "";
    document.getElementById('t_body').innerHTML = "";
    fila = 0;
    headers = '';
    e.target.getFeatures().forEach(function(e){
        var propiedades = e.getProperties();
        cargarPropiedades(propiedades);
    });
    configPropiedades();
});

// a DragBox interaction used to select features by drawing boxes
var dragBox = new ol.interaction.DragBox({
    condition: ol.events.condition.platformModifierKeyOnly
});
map.addInteraction(dragBox);
dragBox.on('boxend', function() {
    document.getElementById('tr_head').innerHTML = "";
    document.getElementById('t_body').innerHTML = "";
    fila = 0;
    headers = '';
    var extent = dragBox.getGeometry().getExtent();
    var map_layers = map.getLayers().getArray();
    for (var i = 0; i < map_layers.length; ++i) {
        if (map_layers[i].get('type') == 'feature') {
            map_layers[i].get('source').forEachFeatureIntersectingExtent(extent, function(feature) {
                featuresInteraction.push(feature);
                var propiedades = feature.getProperties();
                cargarPropiedades(propiedades);
            });
        }
    }
    configPropiedades();
});

// clear selection when drawing a new box and when clicking on the map
dragBox.on('boxstart', function() {
    featuresInteraction.clear();
});