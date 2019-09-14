import { connect } from 'react-redux'
import Result from './component';
import { getData,
    setPageNum } from '../../actions'

const mapStateToProps = (state) => ({
    data: state.data,
    searchText: state.searchText,
    pageNum: state.pageNum
});

export default connect(mapStateToProps, {
    getData,
    setPageNum
})(Result);
