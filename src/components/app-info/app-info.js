
import './app-info.css';

const AppInfo = ({employees, increased}) => {

    // junior :). For use this code get data from file app.js!!

    // const increaseCount = (list) => {
    //     let num = 0;

    //     list.forEach(el => {
    //         if(el.increase) {
    //             num++
    //         }
    //     })

    //     return num
    // }

    return (
        <div className="app-info">
            <h1>Trabajadores en empresa MYCompany</h1>
            <h2>Cantidad de empleados: {employees}</h2>
            <h2>Premio recibirán: {increased}</h2>
        </div>
    );
}

export default AppInfo;