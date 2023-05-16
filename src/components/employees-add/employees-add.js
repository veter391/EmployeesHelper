import { Component } from 'react';

import './employees-add.css'

class EmployeesAddForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, salary} = this.state, 
              {onAdd} = this.props,
              newItem = (e) => {
                  e.preventDefault(); 
                  onAdd(name, +salary);
              };


        return (
            <div className="app-add-form">
                <h3>Añadir Empleado</h3>
                <form className="add-form d-flex" onSubmit={newItem}>
                    <input type="text" className="form-control new-post-label" placeholder="Nombre" onChange={this.onValueChange} name='name' value={name} maxLength="25"/>
                    <input type="number" className="form-control new-post-label" placeholder="precio/mes en $" onChange={this.onValueChange} name='salary' value={salary}/>
                    <button type="submit" className="btn btn-outline-light">Añadir</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;