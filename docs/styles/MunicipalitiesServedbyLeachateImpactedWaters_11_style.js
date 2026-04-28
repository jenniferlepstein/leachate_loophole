var size = 0;
var placement = 'point';
function categories_MunicipalitiesServedbyLeachateImpactedWaters_11(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Great Flats Aquifer':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(55,113,128,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(110,226,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Hudson River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(150,120,29,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(247,197,48,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mohawk River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(115,124,128,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(208,223,230,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Chemung River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,32,7,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(255,65,13,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lake Ontario':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(93,128,59,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(149,204,94,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Niagara River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,81,15,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(247,157,30,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Saint Lawrence River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,64,77,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(116,138,166,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_MunicipalitiesServedbyLeachateImpactedWaters_11 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("source_name");
    var labelFont = "13.0px \'Manrope ExtraBold\', sans-serif";
    var labelFill = "#1a1a1a";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("muni_name") !== null && resolution > 0 && resolution < 252) {
        labelText = String(feature.get("muni_name"));
    }
    
    var style = categories_MunicipalitiesServedbyLeachateImpactedWaters_11(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
