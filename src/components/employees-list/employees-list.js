import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css'


const EmployeesList = ({data, onDelete, onToggleProp, onUpdateSalary}) => {

    // if get info from server without ids, can to use the index(if won't be change the order!!)
    // data.map((item, i) => {
    const elements = data.map(item => {
        // parcial districturitzation take id and add others to itemProps
        const {id, ...itemProps} = item
        return (
            // old
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            // =
            // new
            // add key. We can to add functions and other to props!
            <EmployeesListItem 
                key={id} 
                {...itemProps} 
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onUpdateSalary={(e) => onUpdateSalary(id, e.currentTarget.value)}
                />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeesList;