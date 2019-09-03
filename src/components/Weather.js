import React from 'react'

class Weather extends React.Component {
  render() {
    return (
      <div>
        { this.props.city && this.props.country && <h3>Location: {this.props.city}, {this.props.country}</h3> }
        { this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
        { this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        { this.props.description && <p>Conditions: {this.props.description}</p>}
        { this.props.error && <p>{this.props.error}</p>}
      </div>
    )
  }
}

export default Weather
