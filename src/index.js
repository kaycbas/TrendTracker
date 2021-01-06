anychart.onDocumentReady(() => {
  // create map
  var map = anychart.map();


  // create data set
  var dataSet = anychart.data.set(
    [
        {"id":"US.MA","value":0},
        {"id":"US.MN","value":1},
        {"id":"US.MT","value":2},
        {"id":"US.ND","value":3},
        {"id":"US.HI","value":4},
        {"id":"US.ID","value":5},
        {"id":"US.WA","value":6},
        {"id":"US.AZ","value":7},
        {"id":"US.CA", "name": "CALI", "value":8},
        {"id":"US.CO","value":9},
        {"id":"US.NV","value":10},
        {"id":"US.NM","value":11},
        {"id":"US.OR","value":12},
        {"id":"US.UT","value":13},
        {"id":"US.WY","value":14},
        {"id":"US.AR","value":15},
        {"id":"US.IA","value":16},
        {"id":"US.KS","value":17},
        {"id":"US.MO","value":18},
        {"id":"US.NE","value":19},
        {"id":"US.OK","value":20},
        {"id":"US.SD","value":21},
        {"id":"US.LA","value":22},
        {"id":"US.TX","value":23},
        {"id":"US.CT","value":24},
        {"id":"US.NH","value":25},
        {"id":"US.RI","value":26},
        {"id":"US.VT","value":27},
        {"id":"US.AL","value":28},
        {"id":"US.FL","value":29},
        {"id":"US.GA","value":30},
        {"id":"US.MS","value":31},
        {"id":"US.SC","value":32},
        {"id":"US.IL","value":33},
        {"id":"US.IN","value":34},
        {"id":"US.KY","value":35},
        {"id":"US.NC","value":36},
        {"id":"US.OH","value":37},
        {"id":"US.TN","value":38},
        {"id":"US.VA","value":39},
        {"id":"US.WI","value":40},
        {"id":"US.WV","value":41},
        {"id":"US.DE","value":42},
        {"id":"US.MD","value":43},
        {"id":"US.NJ","value":44},
        {"id":"US.NY","value":45},
        {"id":"US.PA","value":46},
        {"id":"US.ME","value":47},
        {"id":"US.MI","value":48},
        {"id":"US.AK","value":49},
        {"id":"US.DC","value":50}
    ]
  );

  // create choropleth series
  series = map.choropleth(dataSet);

  // enable labels
  series.labels(true);
  labels = series.labels();
    
  // labels setting
  labels.fontColor('white');
  labels.fontSize("14px");
  labels.offsetY(-10);

  // set the overlapping mode
  map.overlapMode(false);

  // set geoIdField to 'id', this field contains in geo data meta properties
  series.geoIdField('id');

  map.background().fill('#1b262c')
//   map.stroke.fill('white')
  series.stroke("#1b262c");

  // set map color settings
  series.colorScale(anychart.scales.linearColor('#0f4c75', '#bbe1fa'));
  series.hovered().fill('#eaeaea');

  // set geo data, you can find this map in our geo maps collection
  // https://cdn.anychart.com/#maps-collection
  map.geoData(anychart.maps['united_states_of_america']);

  //set map container id (div)
  map.container('container');

  //initiate map drawing
  map.draw();
});