import React, {Component} from 'react';
import { connect } from 'react-redux';
import Griddle from 'griddle-react';

class ResultTable extends Component { 
	render() {
		return (
			<div className="center">
        <Griddle 
        	results={this.props.tableData} 
        	tableClassName="table"
        	showFilter={true} 
        	showPager={false}
        	useGriddleStyles={false} 
          filterPlaceholderText={"Search"}
          showSettings={false} 
        	/>
      </div>
	);
	}
}

function mapStateToProps({tableData}) {
  return {tableData};
}

export default connect(mapStateToProps)(ResultTable);