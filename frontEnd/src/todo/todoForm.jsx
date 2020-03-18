
import React from 'react'
import GridCol from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

    const keyHandler =(e)=>{
        if(e.key ==='Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key ==='Escape'){
            props.handleFilter()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <GridCol cols='12 9 10'>
                <input id='description' className='form-control' placeholder='Adicione uma Tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}></input>
            </GridCol>
            <GridCol cols='3 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='filter'
                    onClick={props.handleFilter}></IconButton>
            </GridCol>
        </div>
    )
}