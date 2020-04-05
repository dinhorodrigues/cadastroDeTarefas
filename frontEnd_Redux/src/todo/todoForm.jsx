import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import GridCol from '../template/grid'
import IconButton from '../template/iconButton'
import { addTodo,changeDescription, search, clearFilter} from './todoActions'


class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }
    keyHandler(e) {
        const {addTodo,clearFilter,search, description} = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : addTodo(description)
        } else if (e.key === 'Escape') {
            clearFilter()
        }
    }
    render() {
        const {addTodo, clearFilter,search, description} = this.props
        return (
            <div role='form' className='todoForm'>
                <GridCol cols='12 9 10'>
                    <input id='description' className='form-control' placeholder='Adicione uma Tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </GridCol>
                <GridCol cols='3 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={()=> addTodo(description)}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={search}></IconButton>
                    <IconButton style='default' icon='filter'
                        onClick={clearFilter}></IconButton>
                </GridCol>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ addTodo,changeDescription, search, clearFilter }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)