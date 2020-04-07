import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import papa from 'papaparse';


mapboxgl.accessToken = 'pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA';
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 0,
      zoom: 3
    };
  }



  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mkmd/ck88rk21s2ep51jpjjnyz9o3p',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    map.on('move', () => {
    this.setState({
    lng: map.getCenter().lng.toFixed(4),
    lat: map.getCenter().lat.toFixed(4),
    zoom: map.getZoom().toFixed(2)
    });
    });

    map.on('load', function() {
    // Add a source for the state polygons.
    map.addSource('states', {
    'type': 'geojson',
    'data':
    'https://gist.githubusercontent.com/mkmdivy/044d7f9f13cc2ec22ba6b1751c3527a6/raw/9908322b5ac7915720fc98190f755f139bde8ff3/africa'
    });

    // Add a layer showing the state polygons.
    map.addLayer({
    'id': 'NAME_EN',
    'type': 'fill',
    'source': 'states',
    'paint': {
    'fill-color': 'rgba(200, 100, 240, 0.4)',
    'fill-outline-color': 'rgba(200, 100, 240, 1)'
    }
    });

    // When a click event occurs on a feature in the states layer, open a popup at the
    // location of the click, with description HTML from its properties.
    map.on('click', 'NAME_EN', function(e) {
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(e.features[0].properties.NAME_EN)
    .addTo(map);
    makeGetRequest(e.features[0].properties.NAME_EN,1)
    });

    // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'NAME_EN', function() {
    map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'NAME_EN', function() {
    map.getCanvas().style.cursor = '';
    });
    });

    //axios.get('chad.json').then(response=>{console.log(response.data.Agglomerations[0].Longlat)})

    async function makeGetRequest(country,select) {
      let covid = await axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')
      //console.log(covid.data)
      let covid_array= papa.parse(covid.data,{header:true,skipEmptyLines:true}).data;
      var x;
      for (x in covid_array){new mapboxgl.Marker().setLngLat([covid_array[x].Long,covid_array[x].Lat]).addTo(map);}

      console.log(covid_array)
      let res = await axios.get(country+'.json');
      //console.log(res.data.Agglomerations);
      let data = res.data.Agglomerations[select].Longlat;

      new mapboxgl.Marker().setLngLat(data).addTo(map);
      //marker.setLngLat(data)
      //marker.addTo(map);
    }


    //let agglos = axios.get('egypt.json');
    //console.log(agglos)
    //let data = agglos.data.Agglomerations[0].Longlat;

    //var marker = new mapboxgl.Marker();




  }

  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>

    )
  }



}

ReactDOM.render(<Application />, document.getElementById('app'));
