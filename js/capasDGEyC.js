var capas = [
    //URBANO
    {"title":"Manzanas", "params":{LAYERS: "urbano:manzanas", TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Barrios", "params":{LAYERS: "urbano:barrios", TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Calles", "params":{LAYERS: "urbano:calles", TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},

    //DIVISION
    {"title":"Ejidos", "params":{LAYERS: "division:ejidos", TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Lotes catastrales", "params":{LAYERS: "division:lotes_catastrales", TRANSPARENT: true, FORMAT: 'image/png',
        TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Fracciones catastrales", "params":{LAYERS: "division:fracciones_catastrales", TRANSPARENT: true,
        FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Secciones catastrales", "params":{LAYERS: "division:secciones_catastrales", TRANSPARENT: true,
        FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Radios", "params":{LAYERS: "division:radios", TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Fracciones", "params":{LAYERS: "division:fracciones_censales", TRANSPARENT: true, FORMAT: 'image/png',
        TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Departamentos", "params":{LAYERS: "division:departamentos", TRANSPARENT: true, FORMAT: 'image/png',
        TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Comarcas", "params":{LAYERS: "division:comarcas", TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},

    //RURAL
    {"title":"Localidades", "params":{LAYERS: "rural:localidades", TRANSPARENT: true, FORMAT: 'image/png',
        TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title": "Población 2010 por localidad", "params": {LAYERS: "rural:v_localidades_poblacion_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title": "Población 2010 por departamento", "params": {LAYERS: "rural:poblacion_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title": "Población 2010 por radios", "params": {LAYERS: "rural:v_radios_poblacion_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title": "Viviendas 2010 por localidad", "params": {LAYERS: "rural:v_localidades_viviendas_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title": "Viviendas de calidad insuficiente 2010", "params": {LAYERS: "rural:v_radios_viv_insuficientes_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title": "Viviendas de calidad básica 2010", "params": {LAYERS: "rural:v_radios_viv_basicas_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Viviendas de calidad satisfactoria 2010", "params": {LAYERS: "rural:v_radios_viv_satisfactorias_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title": "Viviendas particulares ocupadas 2010", "params": {LAYERS: "rural:v_radios_viv_ocupadas_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title": "Calidad de materiales de hogares por localidad 2001",
        "params": {LAYERS: "rural:v_localidades_calmat_2001", TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title": "Tiene acceso al transporte público 2010",
        "params":{LAYERS: "rural:v_radios_caratula_seg_transporte_publico", TRANSPARENT: true, FORMAT: 'image/png',
            TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title": "Tiene acceso a teléfono público 2010", "params":{LAYERS: "rural:v_radios_caratula_seg_telefono_publico",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title": "Tiene acceso a recolección de residuos 2010",
        "params":{LAYERS: "rural:v_radios_caratula_seg_recoleccion_de_residuos", TRANSPARENT: true,
            FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Tiene acceso a pavimento 2010", "params":{LAYERS: "rural:v_radios_caratula_seg_una_cuadra_pavimentada",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Existencia de alumbrado público 2010", "params":{LAYERS: "rural:v_radios_caratula_seg_alumbrado_publico",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Hogares sin cloacas 2010", "params":{LAYERS: "rural:v_radios_hogares_sin_cloacas_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Hogares sin agua de red 2010", "params":{LAYERS: "rural:v_radios_hogares_sin_agua_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Hogares 2010 con NBI", "params":{LAYERS: "rural:v_radios_algun_nbi_2010", TRANSPARENT: true,
        FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Promedio de personas por vivienda 2010", "params":{LAYERS: "rural:v_radios_personas_x_viv_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Promedio de hogares por vivienda 2010", "params":{LAYERS: "rural:v_radios_hogares_x_viv_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Hogares 2010", "params":{LAYERS: "rural:v_radios_hogares_2010", TRANSPARENT: true, FORMAT: 'image/png',
        TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Tasa de inactividad 2010", "params":{LAYERS: "rural:v_radios_tasa_inactividad_2010", TRANSPARENT: true,
        FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Tasa de actividad 2010", "params":{LAYERS: "rural:v_radios_tasa_actividad_2010", TRANSPARENT: true,
        FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Tasa de analfabetismo 2010", "params":{LAYERS: "rural:v_radios_tasa_analfabetismo_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Población extranjera 2010", "params":{LAYERS: "rural:v_radios_extranjeros_2010", TRANSPARENT: true,
        FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Población sin instrucción 2010", "params":{LAYERS: "rural:v_radios_pob_sin_instrucc_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Población escolarizada 2010", "params":{LAYERS: "rural:v_radios_escolarizados_2010", TRANSPARENT: true,
        FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Porcentaje de población de 65 y más años 2010", "params":{LAYERS: "rural:v_radios_p_65_y_mas_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Porcentaje de población de 0 a 14 años 2010", "params":{LAYERS: "rural:v_radios_p_0_a_14_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Índice femeneidad 2010", "params":{LAYERS: "rural:v_radios_femeneidad_2010", TRANSPARENT: true,
        FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Varones 2010", "params":{LAYERS: "rural:v_radios_varones_2010", TRANSPARENT: true, FORMAT: 'image/png',
        TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Mujeres 2010", "params":{LAYERS: "rural:v_radios_mujeres_2010", TRANSPARENT: true, FORMAT: 'image/png',
        TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Población extranjera 2010 por departamento", "params":{LAYERS: "rural:v_departamentos_extranjeros_2010",
        TRANSPARENT: true, FORMAT: 'image/png', TILED: true},
        "url": "http://192.168.1.27/geoserver/wms", "serverType": 'geoserver', "visible": false},
    {"title":"Cantidad de ovinos 2012 por departamento",
        "params":{LAYERS: "rural:v_dpto_encuesta_ganadera_cantidad_ovinos_total_2012", TRANSPARENT: true,
            FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Cantidad de ovinos 2013 por departamento",
        "params":{LAYERS: "rural:v_dpto_encuesta_ganadera_cantidad_ovinos_total_2013", TRANSPARENT: true,
            FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Cantidad de ovinos 2014 por departamento",
        "params":{LAYERS: "rural:v_dpto_encuesta_ganadera_cantidad_ovinos_total_2014", TRANSPARENT: true,
            FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Cantidad de ovinos por productor 2012 por departamento",
        "params":{LAYERS: "rural:v_dpto_encuesta_ganadera_cantidad_ovinos_x_productor_2012", TRANSPARENT: true,
            FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Cantidad de ovinos por productor 2013 por departamento",
        "params":{LAYERS: "rural:v_dpto_encuesta_ganadera_cantidad_ovinos_x_productor_2013", TRANSPARENT: true,
            FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Cantidad de ovinos por productor 2014 por departamento",
        "params":{LAYERS: "rural:v_dpto_encuesta_ganadera_cantidad_ovinos_x_productor_2014", TRANSPARENT: true,
            FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Cantidad de productores 2012 por departamento",
        "params":{LAYERS: "rural:v_dpto_encuesta_ganadera_cantidad_productores_2012", TRANSPARENT: true,
            FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Cantidad de productores 2014 por departamento",
        "params":{LAYERS: "rural:v_dpto_encuesta_ganadera_cantidad_productores_2014", TRANSPARENT: true,
            FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Cantidad de productores 2013 por departamento",
        "params":{LAYERS: "rural:v_dpto_encuesta_ganadera_cantidad_productores_2013", TRANSPARENT: true,
            FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Censo Nac. Agropecuario 2008", "params":{LAYERS: "rural:cna2008", TRANSPARENT: true,
        FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false},
    {"title":"Censo Nac. Agropecuario 2002", "params":{LAYERS: "rural:cna2002", TRANSPARENT: true,
        FORMAT: 'image/png', TILED: true}, "url": "http://192.168.1.27/geoserver/wms",
        "serverType": 'geoserver', "visible": false}
];
