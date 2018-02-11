import React, { Component } from 'react';
import Howto from './components/HowTo';
import ShowMap from './components/ShowMap';
import Footer from './components/Footer';
import firebaseConf from './Firebase';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reports: []
    };
  }

  async componentWillMount() {
    let formRef = firebaseConf.database().ref('data').orderByKey().limitToLast(6);
    await formRef.on('child_added', snapshot => {
      const { lat, long, numReport, type, userId } = snapshot.val();
      const data = { lat, long, numReport, type, userId};
      this.setState({ reports: [data].concat(this.state.reports) });
    })
  }

  render() {
    return (
      <div className="main">
        <ShowMap reports={this.state.reports} />
        <Howto />
        <Footer />
      </div>
    );
  }
}

export default App;
