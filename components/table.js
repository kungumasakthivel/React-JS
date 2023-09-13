import {Component} from 'react'

class Table extends Component {

    state = {
        products: [
            {'p_id':111, 'p_name': 'one', 'p_cost': 10000},
            {'p_id':222, 'p_name': 'two', 'p_cost': 20000},
            {'p_id':333, 'p_name': 'three', 'p_cost': 30000}
        ]
    }

    render() {
        return (
            <>
                <table id='table'  cellPadding="5px" cellSpacing="5px" border='1px'>
                    <thead>
                        <th>SNO</th>
                        <th>Product id</th>
                        <th>Product name</th>
                        <th>Product cost</th>
                    </thead>
                    <tbody>
                        {this.state.products.map((ele, idx) => (
                            <tr style={{textAlign:'center'}}>
                                <td>{idx + 1}</td>
                                <td>{ele.p_id}</td>
                                <td>{ele.p_name}</td>
                                <td>{ele.p_cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}

export default Table;