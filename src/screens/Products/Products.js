import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Empty } from 'antd';
import Categories from '../Categories';
import SearchBar from './components/SearchBar';
import Product from './components/Product';
import Loader from '../../shared/components/Loader';
import If from '../../shared/components/If';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProductMap: {}
    };

    this.toggleDetails = this.toggleDetails.bind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  toggleDetails(id) {
    const { activeProductMap } = this.state;
    const map = { ...activeProductMap };
    if (map[id]) {
      map[id] = false;
    } else {
      map[id] = true;
    }
    this.setState({ activeProductMap: map });
  }

  render() {
    const { categoryId, products, isFetching, searchProduct, searchValue } = this.props;
    const { activeProductMap } = this.state;

    return (
      <>
        <Categories categoryId={categoryId} />
        <Layout.Content style={{ padding: '0 50px' }}>
          <SearchBar onChange={searchProduct} searchValue={searchValue} />
          <div style={{ background: '#fff', padding: 24, minHeight: 700 }}>
            <Loader isLoading={isFetching}>
              <If condition={products.length > 0}>
                {products.map(product => (
                  <Product
                    product={product}
                    toggleDetails={this.toggleDetails}
                    showDetails={!!activeProductMap[product.id]}
                  />
                ))}
              </If>
              <If condition={products.length === 0}>
                <Empty />
              </If>
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
  searchProduct: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired
};

export default Products;
