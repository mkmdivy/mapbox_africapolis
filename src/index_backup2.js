import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import Select from 'react-select';
import sci from './sci.json';
import countryData from './country.json';
import classes from './Site.module.css';
import { BarChart, Cell, Bar, Tooltip, XAxis, YAxis } from 'recharts';

//iso_3166_1_alpha_3
///6808: 520  baseline
//// divide 20% percentile per country//////

//// Access token for Africapolis mapbox account
mapboxgl.accessToken = 'pk.eyJ1IjoibWttZCIsImEiOiJjajBqYjJpY2owMDE0Mndsbml0d2V1ZXczIn0.el8wQmA-TSJp2ggX8fJ1rA';

const colors = ["#F3F2E8","#D4EBE2","#B6E3DB","#97DCD5","#79D5CF","#5ACEC9","#3CC6C2","#1DBFBC","#333333"]



//////////////////

// sort array ascending
let top5_list=[[],[],[],[],[]];
let result=[];

const asc = arr => arr.sort((a, b) => a - b);

const sum = arr => arr.reduce((a, b) => a + b, 0);

const mean = arr => sum(arr) / arr.length;

const quantile = (arr, q) => {
    const sorted = asc(arr);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    } else {
        return sorted[base];
    }
};

const legend = (
<div>
  <h4>Social Connectedness Index</h4>
<div><span style={{backgroundColor: colors[0]}}></span>{"< 1x"} <small>{"(20th percentile)"}</small></div>
<div><span style={{backgroundColor: colors[1]}}></span>1-2x</div>
<div><span style={{backgroundColor: colors[2]}}></span>2-3x</div>
<div><span style={{backgroundColor: colors[3]}}></span>3-5x</div>
<div><span style={{backgroundColor: colors[4]}}></span>5-10x</div>
<div><span style={{backgroundColor: colors[5]}}></span>10-25x</div>
<div><span style={{backgroundColor: colors[6]}}></span>25-100x</div>
<div><span style={{backgroundColor: colors[7]}}></span>{">= 100x"}</div>
<div><span style={{backgroundColor: colors[8]}}></span>{"Data not available"}</div>
</div>
);

const tooltip = e => {
  if (e.payload[0]) {
  return ( <div className={classes.tooltip}> {e.payload[0].payload.region} <br/> {e.payload[0].payload.sciScaled} SCI</div> ) }
}


//// Basic setting of the map
class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 0,
      zoom: 2,
      selectedCountry: "France",
      name: "France",
      region: "Europe"
    };
  }
componentDidMount() {
//// Initial map setting

let selected = [];
let scidata= [];
sci.map(e => e.start===this.state.selectedCountry? selected.push(e) : null)
selected.map(e => scidata.push(e.sci))


     this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mkmd/ckguwdhux0j7719p9rz2hpmpi', /// Select mapstyle from mapbox studio
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

//// Import Africapolis agglomerations from mapbox
    this.map.on('load', () => {

// Add Country shape
      this.map.addSource('africapolis_country', { type: 'vector', url: 'mapbox://mapbox.country-boundaries-v1'});

// Add Country layer
      this.map.addLayer({
            id: 'country',
            source:'africapolis_country',
            type: 'fill',
            'source-layer':'country_boundaries',
            //filter:["==","Region_ID",1],
            paint: {
              'fill-color': '#fdfdf5',
              'fill-opacity': ['case',['boolean', ['feature-state', 'hover'], false],0.2,0]
            }
        });



        this.map.on('click', 'country', e =>  {
              this.onUpdate(e)
            });
    });



}

onUpdate = e => {
  console.log(e)
  this.setState({selectedCountry:e.features[0].properties.iso_3166_1})

  let selected = [];
  let scidata= [];
  sci.map(e => e.start===this.state.selectedCountry? selected.push(e) : null)
  selected.map(e => scidata.push(e.sci))
  let percentile20 = quantile(scidata, .20)
  //selected.map(e => e.sci = e.sci/ percentile20)


  let top5=scidata.sort((a,b) => b-a).slice(0,5);
  selected.map(e => {
    e.region=countryData[e.end][1]
    e.sciScaled= Math.round(e.sci/percentile20)
    if(e.sci===top5[0]) {top5_list[0]=e}
    else if(e.sci===top5[1]) {top5_list[1]=e}
    else if(e.sci===top5[2]) {top5_list[2]=e}
    else if(e.sci===top5[3]) {top5_list[3]=e}
    else if(e.sci===top5[4]) {top5_list[4]=e}
  })

  //top5_list.map(e => e.sciScaled= Math.round(e.sci/percentile20))

                // Calculate the sums and group data (while tracking count)
  const reduced = selected.reduce(function(m, d){
      if(!m[d.region]){
        m[d.region] = {...d, count: 1};
        return m;
      }
      m[d.region].sciScaled += d.sciScaled;
      m[d.region].count += 1;
      return m;
   },{});

   // Create new array from grouped data and compute the average
      result = Object.keys(reduced).map(function(k){
       const item  = reduced[k];
       return {
           region: item.region,
           sciScaled: Math.round(item.sciScaled/item.count*100)/100,
       }
   })

// console.log(JSON.stringify(result,null,4));

  this.setState({name:e.features[0].properties.name_en,region:e.features[0].properties.region})

  let matchExpression = ['match', ['get', 'iso_3166_1']];

  // Calculate color values for each country based on 'hdi' value
  selected.forEach( e => {
  if(e.sci/percentile20 < 1) {matchExpression.push(e['end'], "#F3F2E8");}
  else if (e.sci/percentile20 < 2) {matchExpression.push(e['end'], "#D4EBE2");}
  else if (e.sci/percentile20 < 3) {matchExpression.push(e['end'], "#B6E3DB");}
  else if (e.sci/percentile20 < 5) {matchExpression.push(e['end'], "#97DCD5");}
  else if (e.sci/percentile20 < 10) {matchExpression.push(e['end'], "#79D5CF");}
  else if (e.sci/percentile20 < 25) {matchExpression.push(e['end'], "#5ACEC9");}
  else if (e.sci/percentile20 < 100) {matchExpression.push(e['end'], "#3CC6C2");}
  else {matchExpression.push(e['end'], "#1DBFBC");}
  });

  matchExpression.push(this.state.selectedCountry, '#e8ae40');
  // Last value is the default, used where there is no data
  matchExpression.push('rgba(0, 0, 0, 0)');

  // //console.log(this.state.selectedOption, prevState.selectedOption);
  this.remove('country');

  this.map.addLayer({
    id: 'country',
    source:'africapolis_country',
    type: 'fill',
    'source-layer':'country_boundaries',
    paint: {
      'fill-color': matchExpression,
      'fill-opacity': 0.9
    }
  });





}

onChange = values => {
  this.setState({ values })
}

onFilter = filters => {
  this.setState({[filters.target.id]: !this.state[filters.target.id]});
}

remove = obj => {
    this.map.removeLayer(obj)
}

moveRegion = e => {
      if(e) {
      switch(e.activeLabel){
      case 'Africa':
      this.map.flyTo({center: [32.259 ,2.036], zoom:3.14, essential: true }); break;
      case 'Americas':
      this.map.flyTo({center: [-69.390 ,22.259], zoom:1.82, essential: true }); break;
      case 'Asia':
      this.map.flyTo({center: [104.687 ,32.592], zoom:3.14, essential: true }); break;
      case 'Europe':
      this.map.flyTo({center: [27.920 ,56.907], zoom:3.19, essential: true }); break;
      case 'Oceania':
      this.map.flyTo({center: [155.731 ,-16.435], zoom:3.11, essential: true }); break;
      default:
      return null;
            }}
}
//5 Countries with the highest SCI
render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <div className={classes.topleft}> <p>{this.state.name}</p> <br/>
        <span>Top 5 highest SCI countries</span>
        <table className={classes.table}>
            <thead>
              <tr>
                <th>Country</th><th>SCI</th><th>Region</th>
              </tr>
            </thead>
            <tbody>
              {top5_list[0].end? top5_list.map((e,i)=>
              <tr> <td>{countryData[top5_list[i].end][0]}</td> <td>{top5_list[i].sciScaled}</td> <td className={ countryData[top5_list[i].end][1]===this.state.region? classes.regionsel : classes.normal }>{countryData[top5_list[i].end][1]}</td> </tr>
              ) : null}
            </tbody>
          </table>
        <br/> <span>Regional average</span>
            <BarChart width={320} height={150} data={result.sort((a, b) => a.region.localeCompare(b.region))} style={{marginTop: "10px"}}  onClick={e => this.moveRegion(e)} >
              <XAxis dataKey="region" style={{ textAnchor: 'middle', fontSize: '100%', fill: 'rgba(255, 255, 255, 1)' }} />
              <Tooltip content={tooltip} cursor={{fill: 'rgba(255, 255, 255, 0.3)'}} />
              <Bar dataKey="sciScaled" fill="#3CC6C2" id="region">
                {result.map((entry,index) => (
										<Cell cursor="pointer" key={`cell-${index}`} fill={entry.region ===  this.state.region ? '#e8ae40' : '#3CC6C2' } />
									))}
  						</Bar>
  					</BarChart>
           </div>
        <div ref={el => this.mapContainer = el} className={classes.mapContainer} />
        <div className={classes.legend}>{legend}</div>
      </div>
    )
  }
}
ReactDOM.render(<Application />, document.getElementById('app'));
