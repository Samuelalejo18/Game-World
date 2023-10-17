/* eslint-disable no-unused-vars */
import { useState } from 'react';
import data from '../js/data';
import '../styles/Products.css';
import ButtonList from './Buttonlist';
import Filters from './Filters';
import ProductList from './ProductsList';
function Products() {
    const allCompany = ['All', ...new Set(data.map(product => product.company))];
    const [companies, setCompanies] = useState(allCompany);
    const [products, setProducts] = useState(data);
    const [filters, SetFilters] = useState({
        company: 'All',
        category: 'all',
        minPrice: 0,
    });

    // Aplicar el filtro de la empresa
    const filteredByCompany = filters.company === 'All'
        ? products
        : products.filter(product => product.company === filters.company);

    // Aplicar otros filtros (categoría y precio mínimo)
    const filteredProducts = filteredByCompany.filter(product => {
        return (
            (filters.category === 'all' || product.category === filters.category) &&
            product.price >= filters.minPrice
        );
    });
    const filtrerCompany = (company) => {
        SetFilters({ ...filters, company });
    }

    return (
        <>
            <ButtonList companies={companies} filtrerCompany={ filtrerCompany} />
            <div className='container2' >
               
            </div>
           
            <div className="content">
            <Filters changeFilters={SetFilters} />
                <ProductList products={filteredProducts} />
            </div>
        </>
    )
}
export default Products;
