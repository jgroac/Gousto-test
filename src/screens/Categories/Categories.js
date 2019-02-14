import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { Layout, Tag } from 'antd';
import If from '../../shared/components/If';

const logoStyles = { width: 120, margin: '0px 16px', float: 'left', color: 'white' };

class Categories extends React.Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { isFetching, categories, categoryId } = this.props;
    return (
      <>
        <Layout.Header style={{ height: 'auto' }}>
          <div style={logoStyles}>
            <span>
              <strong>Store Cupboard</strong>
            </span>
          </div>
          <If condition={!isFetching && categories.length > 0}>
            <div data-testid="categoryList">
              {categories.map(category => (
                <Tag key={category.id} color={categoryId === category.id ? 'green' : 'grey'}>
                  <Link to={`/categories/${category.id}`}>{category.title}</Link>
                </Tag>
              ))}
            </div>
          </If>
        </Layout.Header>
      </>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  categoryId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchCategories: PropTypes.func.isRequired
};

export default Categories;
