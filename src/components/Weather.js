import React from 'react'

const Weather = props => (
  <div className="weather__info">
    {
      props.city && props.country && <p className="weather__key">Location:
        <span className="weather__value"> {props.city}, {props.country}</span>
      </p>
    }
    {
      props.temperature && <p className="weather__key">Temperature:
        <span className="weather__value"> {props.temperature}</span>
      </p>
    }
    {
      props.humidity && <p className="weather__key">Humidity:
        <span className="weather__value"> {props.humidity}</span>
      </p>
    }
    {
      props.description && <p className="weather__key">Conditions:
        <span className="weather__value"> {props.description}</span>
      </p>
    }
    {
      props.error && <p className="weather__error">{props.error}</p>
    }
  </div>

)





// const Weather = (props) => {
//   return (
//       <div>
//         { props.city && props.country && <h3>Location: {props.city}, {props.country}</h3> }
//         { props.temperature && <p>Temperature: {props.temperature}</p> }
//         { props.humidity && <p>Humidity: {props.humidity}</p>}
//         { props.description && <p>Conditions: {props.description}</p>}
//         { props.error && <p>{props.error}</p>}
//       </div>
//     )
// }

// class Weather extends React.Component {
//   render() {
//     return (
//       <div>
//         { this.props.city && this.props.country && <h3>Location: {this.props.city}, {this.props.country}</h3> }
//         { this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
//         { this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
//         { this.props.description && <p>Conditions: {this.props.description}</p>}
//         { this.props.error && <p>{this.props.error}</p>}
//       </div>
//     )
//   }
// }

export default Weather
