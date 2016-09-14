import { combineReducers } from 'redux';
import TableDataReducer from './reducer_table_data'

const rootReducer = combineReducers({
  tableData: TableDataReducer
});

export default rootReducer;
