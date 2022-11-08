import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'reactstrap'
import { endpoints } from '../../setting/endpoints'
import DataTable from 'react-data-table-component'
import './listClient.css'
import Filter from '../filterData/Filter'


const ListClient = () => {

  const [listClient, setListClient] = useState([])
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
  const navigate = useNavigate()
  const FIXED_HEADER_SCROLL = '250px'

  const getListClients = async () => {
    const response = await axios.get(endpoints.getListClient).catch(err => console.log(err))
    if (response) {
      setListClient(response.data)
    }
  }

  const deleteUser = async (e, user) => {
    e.preventDefault()
    const responseDelete = await axios.delete(`${endpoints.deleteUser}/${user.id}`).catch(err => console.log(err))
    if(responseDelete.status === 202){
      getListClients()
    }
  }

  const handleChange = (e,user) => {
    e.preventDefault()
    navigate(`/user/${user.documento}`,{state: user})
  }

  useEffect(() => {
    getListClients()
  }, [])

  const handleChangeNewUser = () => {
    navigate('/newUser')
  }

  const filteredItems = listClient.filter(item => 
    JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
    )

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };
    return (
      <Filter  
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  const columns = [
    {
      name: 'Documento',
      selector: row => row.documento,
      sortable: true,
    },
    {
      name: 'Nombre',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Aciones',
      cell: (row) => (
        <div className='btn-list' >
        <Button onClick={(e) => handleChange(e, row)} >Editar</Button>
        <Button onClick={(e) => deleteUser(e, row)} >Eliminar</Button>
        </div>
      ) ,
      sortable: false,
    }
  ]

  const paginationOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  }

  return (
    <>
      <Container id='table'>
        <Button onClick={handleChangeNewUser} color='success'>Crear un nuevo usuario</Button>
        <DataTable
          title="Clientes"
          columns={columns}
          data={filteredItems}
          filterData
          striped
          pagination
          paginationComponentOptions={paginationOptions}
          subHeader
          subHeaderComponent={subHeaderComponent}
          fixedHeader
          fixedHeaderScrollHeight={FIXED_HEADER_SCROLL}
          className='dataTable'
        />
      </Container>
    </>
  )
}

export default ListClient