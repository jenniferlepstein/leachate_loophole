var size = 0;
var placement = 'point';

var style_LeachateFlows_13 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("avg_gal_yr");
    var labelFont = "13.0px \'Franklin Gothic Demi Cond\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null && resolution > 0 && resolution < 49) {
        labelText = String("");
    }
    if (value >= 1000.000000 && value <= 4500000.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,0,14,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 4500000.000000 && value <= 12500000.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,0,14,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.5466653999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 12500000.000000 && value <= 25000000.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,0,14,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.193346}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 25000000.000000 && value <= 42496905.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,0,14,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.84}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
