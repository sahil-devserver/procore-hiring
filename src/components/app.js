import React, { Component } from 'react';
import ModalForm from '../containers/modal_form';
import ResultTable from '../containers/result_table';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<ModalForm />
      	<ResultTable />
      </div>
    );
  }
}
