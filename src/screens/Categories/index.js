import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CategoriesBar from './Categories';
import actions from './shared/actions';

const mapStateToProps = state => ({
  categories: state.categories.data,
  isFetching: state.categories.isFetching
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesBar);
