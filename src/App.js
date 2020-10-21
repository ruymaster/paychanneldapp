import React, {Component} from 'react'
import NavBar from './components/NavBar'
import getWeb3 from "./getWeb3"
import GNUSTOkenContract from './contracts/GNUSToken.json'
import PayChannelContract from './contracts/ComPayChannel.json'

class App extends Component {

  state = { storageValue: 0, web3: null, accounts: null, geniustokenInstance: null };

  componentDidMount = async () => {
    try {
      
      const web3 = await getWeb3();     
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GNUSTOkenContract.networks[networkId];
      const geniustokenInstance = new web3.eth.Contract(
        GNUSTOkenContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      this.setState ({web3, accounts, geniustokenInstance}, this.runTest);
    } catch ( err )
    {
      alert('Failed to load web3, accounts, or contract. Check console for details');
      console.error(err);
    }
  };
  runTest = async () =>{
    
  }
  render() {
    if(! this.state.web3) {
      return <div> Loading Web3 accounts, and contract... </div>
    }
    return (
      <div>
         <NavBar />
      </div>
    )
      
  }
}
export default App
