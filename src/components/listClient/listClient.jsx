import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Container, Table } from 'reactstrap'
import { endpoints } from '../../setting/endpoints'
import './listClient.css'

const ListClient = () => {

  const [listClient, setListClient] = useState([])
  const navigate = useNavigate()

  const getListClients = async () => {
    const response = await axios.get(endpoints.getListClient).catch(err => console.log(err))
    if (response) {
      setListClient(response.data)
    }
  }

  const handleChange = (user) => {
    navigate(`/user/${user.documento}`,{state: user})
  }

  useEffect(() => {
    getListClients()
  }, [])

  return (
    <>
      <Container id='table'>
        <Button color='success'>Crear un nuevo usuario</Button>
        <Table dark>
          <thead>
            <tr>
              <th>Documento</th>
              <th>Nombre</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {listClient.map((element) => (
              <tr key={element.documento}>
                <td>{element.documento}</td>
                <td>{element.name + ' ' + element.lastName}</td>
                <td>
                  <Button onClick={() => handleChange(element)}>
                    Editar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default ListClient