import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Categories from '../Categories';
import SearchBar from './components/SearchBar';
import Product from './components/Product';
import Loader from '../../shared/components/Loader';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailMap: {}
    };

    this.toggleDetails = this.toggleDetails.bind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  toggleDetails(id) {
    const { detailMap } = this.state;
    const map = { ...detailMap };
    if (map[id]) {
      map[id] = false;
    } else {
      map[id] = true;
    }
    this.setState({ detailMap: map });
  }

  render() {
    const { categoryId, products, isFetching } = this.props;
    const { detailMap } = this.state;
    return (
      <>
        <Categories categoryId={categoryId} />
        <Layout.Content style={{ padding: '0 50px' }}>
          <SearchBar />
          <div style={{ background: '#fff', padding: 24, minHeight: 700 }}>
            <Loader isLoading={isFetching}>
              {products.map(product => (
                <Product
                  product={product}
                  toggleDetails={this.toggleDetails}
                  showDetails={!!detailMap[product.id]}
                />
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
