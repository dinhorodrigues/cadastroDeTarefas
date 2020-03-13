import React from 'react'
import GridCol from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='todoForm'>
        <GridCol cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicione uma Tarefa'
            onChange={props.handleChange}
            value={props.description}></input>
        </GridCol>
        <GridCol cols='12 3 2'>
            <IconButton style='primary' icon='plus'
             onClick={props.handleAdd}></IconButton>
        </GridCol>
    </div>
)