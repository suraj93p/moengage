import React, { Component } from 'react'
import './style.css'

class Result extends Component {

    renderPageSelector = (numOfPages, pageNum) => {
        let pageSelector = [];
        for (let i = 0; i < numOfPages; ++i) {
            pageSelector.push(<div
                className={'page-num ' + (i === pageNum ? 'selected' : '')}
                onClick={() => this.props.setPageNum(i)}>
                {i + 1}
            </div>)
        }

        return pageSelector;
    };

    render() {
        let { searchText, data, pageNum } = this.props;
        let numOfPages = data.length / 10 + 1;
        data = data.slice(pageNum * 10, (pageNum + 1) * 10);
        return (
            <div className='container'>
                <div className='header'>Search Result</div>
                <div className='table-wrapper'>
                    <div className='row'>
                        <div className='campaign-name'>Campaign Name</div>
                        <div className='type'>Type</div>
                        <div className='company'>Company</div>
                    </div>
                </div>
                <div className='table-body'>
                    {data.map(datum => (
                        (datum.name.toUpperCase().indexOf(searchText.toUpperCase()) > -1)
                        && <div className='row' key={datum._id}>
                            <div className='campaign-name'>{datum.name}</div>
                            <div className='type'>{datum.type}</div>
                            <div className='company'>{datum.company}</div>
                        </div>
                    ))}
                </div>
                <div className='page-selector'>{this.renderPageSelector(numOfPages, pageNum)}</div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getData();
    }
}

export default Result

