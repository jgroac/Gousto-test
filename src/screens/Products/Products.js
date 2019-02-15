import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Button } from 'antd';
import Categories from '../Categories';
import SearchBar from './components/SearchBar';
import Loader from '../../shared/components/Loader';

class Products extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { categoryId, products, isFetching } = this.props;
    return (
      <>
        <Categories categoryId={categoryId} />
        <Layout.Content style={{ padding: '0 50px' }}>
          <SearchBar />
          <div style={{ background: '#fff', padding: 24, minHeight: 700 }}>
            <Loader isLoading={isFetching}>
              {products.map(product => (
                <div key={product.id}>
                  <Button type="dashed">{product.title}</Button>
                  <span>hey</span>
                </div>
              ))}
            </Loader>
          </div>
        </Layout.Content>
      </>
    );
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf({
    title: PropTypes.string,
    id: PropTypes.string
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  categoryId: PropTypes.string.isRequired
};

export default Products;
