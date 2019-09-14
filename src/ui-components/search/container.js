import { connect } from 'react-redux';
import { setSearchText, getData } from '../../actions'
import SearchBox from './component';

const mapStateToProps = (state) => ({
    searchText: state.searchText
});

export default connect(mapStateToProps, {
    setSearchText,
    getData
})(SearchBox);
