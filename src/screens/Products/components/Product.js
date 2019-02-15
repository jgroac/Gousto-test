import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import If from '../../../shared/components/If';

const buttonStyle = {
  minHeight: '32px',
  height: 'auto',
  whiteSpace: 'pre-wrap'
};

const Product = ({ product, showDetails, toggleDetails }) => (
  <div key={product.id}>
    <Button
      type={showDetails ? 'primary' : 'dashed'}
      onClick={() => toggleDetails(product.id)}
      aria-label="show-product-details"
      style={buttonStyle}
    >
      {product.title}
      {showDetails ? '⬆️' : '⬇️'}
    </Button>
    <If condition={showDetails}>
      <Row style={{ margin: '10px 0' }}>
        <Col sm={8} xs={12}>
          <div date-testid="description">{product.description}</div>
        </Col>
      </Row>
    </If>
  </div>
);

const ProductShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
});

Product.propTypes = {
  product: PropTypes.objectOf(ProductShape).isRequired,
  showDetails: PropTypes.bool.isRequired,
  toggleDetails: PropTypes.func.isRequired
};

export default Product;
