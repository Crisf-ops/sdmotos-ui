import React, { useMemo, useState } from 'react'
import { Container } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import Filter from '../filterData/Filter'

const DataTableRepair = ({reapirs}) => {

  const FIXED_HEADER_SCROLL = '250px'
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

  const filteredItems = reapirs.filter(item => 
    JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
    )

  const subHeaderComponent = useMemo(() => {
    const handleClean = () => {
      setResetPaginationToggle(!resetPaginationToggle)
      setFilterText('')
    }
    return (
      <Filter
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClean}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])



  const columns = [
    {
      name: 'trouble',
      selector: row => row.trouble,
      sortable: true,
    },
    {
      name: 'Valor',
      selector: row => row.amount,
      sortable: true,
    },
    {
      name: 'Estado del pago',
      selector: row => row.stateRecords,
      sortable: true,
    },
  ]

  const paginationOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  }


  return (
    <>
    <Container>
      <DataTable
        title='Lista de Reparaciones'
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

export default DataTableRepair