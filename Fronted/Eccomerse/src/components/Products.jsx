/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import data from '../js/data';
import '../styles/Products.css';
import ButtonList from './Buttonlist';
import Filters from './Filters';
import ProductList from './ProductsList';
function Products({products,setProducts}) {
    const allCompany = ['All', ...new Set(data.map(product => product.company))];
    const [companies, setCompanies] = useState(allCompany);
    
    const [filters, SetFilters] = useState({
        company: 'All',
        category: 'Console',
        minPrice: 0,
        maxPrice:500,
    });

    // Aplicar el filtro de la empresa
    const filteredByCompany = filters.company === 'All'
        ? products
        : products.filter(product => product.company === filters.company);

    // Aplicar otros filtros (categoría y precio mínimo)
    const filteredProducts = filteredByCompany.filter(product => {
        return (
            (filters.category === 'all' || product.category === filters.category) &&
            product.price >= filters.minPrice &&  product.price <=filters.maxPrice
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
            <Filters SetFilters={SetFilters} filters={filters} />
                <ProductList products={filteredProducts} />
            </div>
        </>
    )
}
export default Products;
