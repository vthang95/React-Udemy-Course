import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    let name = cityData.city.name;
    let temp = cityData.list.map(temp => temp.main.temp - 273);
    let pressure = cityData.list.map(temp => temp.main.pressure);
    let humidity = cityData.list.map(temp => temp.main.humidity);
    let { lon, lat } = cityData.city.coord;
    return (
      <tr key={name}>
        <td style={{ verticalAlign: 'middle' }}><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temp} color='red' units='C' />
        </td>
        <td>
          <Chart data={pressure} color='green' units='hPa' />
        </td>
        <td>
          <Chart data={humidity} color='orange' units='%'/>
        </td>
      </tr>
    )
  }
  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th style={{ width: '25%' }}>City</th>
            <th style={{ width: '25%' }}>Temperature (C)</th>
            <th style={{ width: '25%' }}>Pressure (hPa)</th>
            <th style={{ width: '25%' }}>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
