import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'


const containerStyle = {
  width: '100%',
  height: '200px',
}

const center = {
  lat: 55.848987,
  lng: -4.355868,
}

function Mapview() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  var markers = [{key: 'operaHouse', location: { lat: -33.8567844, lng: 151.213108  }}]
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <>
      <Marker position={markers} />
      </>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default Mapview