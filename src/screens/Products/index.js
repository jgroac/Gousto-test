import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './shared/actions';
import { getProducts, getFetchingStatus, getSearchValue } from './shared/selectors';
import Products from './Products';

const mapStateToProps = (state, props) => ({
  products: getProducts(state, props),
  isFetching: getFetchingStatus(state),
  searchValue: getSearchValue(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
