var map = L.map('mapid').setView([41.8781, -87.6298], 13);

 L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
	maxZoom: 13
}).addTo(map);

  // load GeoJSON from an external file
 $.getJSON("https://raw.githubusercontent.com/alapishah/Chicago-recycling-service-areas-geojson/main/Recycling%20Service%20Areas.geojson",function(data1){
// L.geoJson function is used to parse geojson file and load on to map
L.geoJson(data1).addTo(map);
}); $.getJSON("https://raw.githubusercontent.com/alapishah/chi-recycling-dropoff/main/Recycling%20Dropoff%20Sites.geojson",function(data){
         var ratIcon = L.icon({
    iconUrl: 'https://www.recycling.com/wp-content/uploads/recycling%20symbols/universal/Universal%20Recycling%20Symbol%20%28U%2b2672%29.png',
    iconSize: [50,50]
  }); 
  L.geoJson(data  ,{
    pointToLayer: function(feature,latlng){
	    return L.marker(latlng,{icon: ratIcon});
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<h1>Title: '+feature.properties.title+'</h1><p>Description:  '+feature.properties.description+'</p>');
    }
  }).addTo(map);
});
