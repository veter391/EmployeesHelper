import { Component } from 'react';
import './app-filter.css'

class AppFilter extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            btnsData: [
                {filterName: 'all', active: true, label: 'Empleados'},
                {filterName: 'rise', active: false, label: 'Reciben premio'},
                {filterName: 'salary', active: false, label: 'Cobran mas de 1000$'},
            ]
        }
    }

    onFilter = (e) => {
        // save filter state
        const filter = e.currentTarget.getAttribute('data-filter');
        // add set state from data atribute and send to app.js
        this.setState({filter});
        // get function from app.js and add filter state
        this.props.onUpdateFilter(filter);

        this.setState(({btnsData}) => ({
            btnsData: btnsData.map(item => {
                if (item.filterName === filter) {
                    return {...item, active: !item.active}
                }

                return {...item, active: false};
            })
        }))
    }


    render() {

        // create buttons and add estructure to variavle
        const buttons = this.state.btnsData.map(({filterName, label, active}) => {
            
            // create btn class 
            // check class for active(tru or false)
            let clazz = active ? "btn-light" : "btn-outline-light";

            return(
                <button 
                    key={filterName}
                    className={`btn ${clazz}`} 
                    data-filter={filterName} 
                    type="button" 
                    onClick={this.onFilter}
                >

                    {label}
                </button>
            );
        });


        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default AppFilter;