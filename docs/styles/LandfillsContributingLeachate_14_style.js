var size = 0;
var placement = 'point';

var style_LandfillsContributingLeachate_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("avg_gal_yr");
    var labelFont = "13.0px \'Manrope ExtraBold\', sans-serif";
    var labelFill = "#63000a";
    var bufferColor = "#fafaf8";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("disp_name") !== null && resolution > 0 && resolution < 252) {
        labelText = String(feature.get("disp_name"));
    }
    if (value >= 1000.000000 && value <= 5000000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.8 + size, points: 6,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(204,0,14,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5000000.000000 && value <= 15000000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.86666 + size, points: 6,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(204,0,14,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 15000000.000000 && value <= 35000000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.93334 + size, points: 6,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(204,0,14,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 35000000.000000 && value <= 64300067.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 6,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(204,0,14,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
