import React from 'react'
import { Alert } from 'react-bootstrap'

const AlertCustom = (props) => {

  return ( 
    props.alert &&
  <Alert show={props.alert?.status} variant={props.alert?.variant} >
    <Alert.Heading>{props.alert?.text}</Alert.Heading>
  </Alert>
  )
}

export default AlertCustom