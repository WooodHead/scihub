

import React from 'react';
import styles from './root.scss';
import 'babel-polyfill';

import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Journal from './Journal';
import DataTable from './DataTable';


export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <div className="container">
      <div className={styles.container}>
        <h2 className={styles.title}>SciHub</h2>
        <DataTable journalSelected={(data) => this._journalSelected(data)} />

        <Router ref={(router) => this.router = router}>
          <Switch>
            <Route path="/journal/:journalId" component={Journal}/>
            <Route path="/journal" component={()=><h2>Please select</h2>}/>
          </Switch>
        </Router>
      </div>
    </div>;
  }

  _journalSelected(data) {
    this.router.history.push(`/journal/${data.scopus_id}`);
  }
}


