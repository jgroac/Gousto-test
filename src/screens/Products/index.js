import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './shared/actions';
import { getProductsByCategory } from './shared/selectors';
import Products from './Products';

const mapStateToProps = (state, props) => ({
  products: getProductsByCategory(state, props)
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
