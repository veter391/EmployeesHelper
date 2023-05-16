import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add/employees-add';

import './app.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:"John C.", salary:800, increase: false, rise: true,id:1},
                {name:"Emma L.", salary:3000, increase: true, rise: false,id:2},
                {name:"Cris A.", salary:900, increase: false, rise: false,id:3},
                {name:"Cristina A.", salary:15000, increase: false, rise: false,id:4}
            ],
            term: '',
            filter:''
        };
        this.lastID = 5;
    }
    // #### DELETE ITEM ###

    deletItem = (id) => {
        // immutation you cant change the object if exist.
        this.setState(({data}) => {
            // error!!! mutation!!!
            // const index = data.findIndex(elem => elem.id === id);
            // data.splice(index, 1);
            // return {data : data}

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    // #### ADD EMPLOYEES ####

    addEmployeer = (name, salary) => {
        const newItem = {
            name, 
            salary, 
            increase: false, 
            rise: false,
            id: this.lastID++
        }

        if(name && salary) {
            this.setState(({data}) => {
                return {
                    data: [...data, newItem]
                }
            })
        }

    }

    // ##### ADD LIKE AND INCREASE ####

    // ##### USE thees functions or on function onTogglePropp!!!

    // onToggleIncrease = (id) => {
    //     // --- 1 ---

    //     // this.setState(({data})=> {
    //     //     const index = data.findIndex(element => element.id === id);

    //     //     // save old array
    //     //     const old = data[index];
    //     //     // create new array use the new syntax and destructaritzation
    //     //     const newItem = {...old, increase: !old.increase};
    //     //     // arr.slice => return new array!!
    //     //     // arr.splice => quit the el!!!
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //     //     return {
    //     //         data: newArr
    //     //     }
    //     // })


    //     // --- 2 ---
    //     // map return new changed array!!
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             // check ids
    //             if (item.id === id) {
    //                 return {...item, increase: !item.increase}
    //             }

    //             return item;
    //         })
    //     }))
    // }
    
    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             // check ids
    //             if (item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }

    //             return item;
    //         })
    //     }))
    // }

    // ##### USE thees functions or on function onTogglePropp!!!


    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }

                return item;
            })
        }))
    }


    // #### SEARCH AND UPDATE DATA ####
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            // check part of string use indexOf
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term});
    }



    // #### FILTER EMPLOYEES ####
    filterEmp = (items, filter) => {
        switch(filter) {
            case 'salary': 
                return items.filter(el => el.salary > 1000);
            case 'rise':
                return items.filter(el => el.rise);
            default:
                return items
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }


    // #### SALARY UPDATE ####
    onUpdateSalary = (id, salary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, salary: +salary.replace(/\D/g,'')};
                }

                return item;
            })
        }))
    }



    render() {
        const {data, term, filter} = this.state;
        // check employees and them state
        const employees = data.length;
        const increased = data.filter(el => el.increase).length;

        // const visibleData = this.searchEmp(data, term);
        // const filtredData = this.filterEmp(data, filter);
        // --- use fonction inside function, filter with search, search return searched data and filter is filter all list ---
        // double filter!!
        const visibleData = this.filterEmp(this.searchEmp(data, term), filter);


        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onUpdateFilter={this.onUpdateFilter}/>
                </div>
    
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deletItem} 
                    onToggleProp={this.onToggleProp}
                    onUpdateSalary={this.onUpdateSalary}
                />
                <EmployeesAddForm data={data} onAdd={this.addEmployeer}/>
            </div>
    
        );
    }

}

export default App;