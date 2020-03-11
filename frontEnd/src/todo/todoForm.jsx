import React from 'react'
import GridCol from '../template/grid'

export default props => (
    <div role='form' className='todoForm'>
        <GridCol cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicione uma Tarefa'></input>
        </GridCol>

        <GridCol cols='12 3 2'>

            <button className='btn btn-primary'>
                <i className='fa fa-plus'></i>
            </button>

        </GridCol>

    </div>
)