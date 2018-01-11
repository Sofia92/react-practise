/**
 * User: sofia
 * Date: 2018/1/10
 * Version: 1.0.0
 * Description:
 */
import React, {Component} from 'react';
import './FilterableProductTable.css';

export class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {filterText: '', inStockOnly: false};
    }

    changeFilterText = (text) => {
        this.setState({filterText: text})
    };

    changeStockOnly = (checked) => {
        this.setState({inStockOnly: checked})
    };

    render() {
        return <div>
            <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}
                       changeFilterText={(text) => this.changeFilterText(text)}
                       changeStockOnly={(checked) => this.changeStockOnly(checked)}/>
            <ProductTable products={Products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
        </div>
    }
}

function SearchBar(props) {
    return <form>
        <input type="text" placeholder="Search..." value={props.filterText}
               onChange={(event) => props.changeFilterText(event.target.value)}/>
        <p>
            <input type="checkbox" checked={props.inStockOnly}
                   onChange={(event) => props.changeStockOnly(event.target.checked)}/>{' '}
            Only show products in stock
        </p>
    </form>
}

function ProductTable(props) {
    let rows = [];
    const categorySet = new Set();
    props.products.forEach(product => {
        categorySet.add(product.category);
    });
    categorySet.forEach(category => {
        rows.push(<ProductCategoryRow category={category} key={category.toString()}/>);
        let sameCategoryProducts = props.products.filter(product => product.category === category);
        if (props.filterText) {
            sameCategoryProducts = sameCategoryProducts.filter(p => p.name.includes(props.filterText))
        }
        rows = rows.concat(sameCategoryProducts.map(p => props.inStockOnly ? p.stocked &&
            <ProductRow product={p} key={p.name}/> : <ProductRow product={p} key={p.name}/>));
    });

    return <div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    </div>
}

function ProductCategoryRow(props) {
    return <tr>
        <td colSpan={2}>{props.category}</td>
    </tr>
}

function ProductRow(props) {
    return <tr>
        <td className={`${!props.product.stocked ? 'UnStocked' : 'Stocked'}`}>{props.product.name}</td>
        <td>{props.product.price}</td>
    </tr>
}

const Products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];