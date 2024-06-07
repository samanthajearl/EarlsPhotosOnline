import { PureComponent } from 'react';
import './Home.css';
import NavBar from './components/global/NavBar';
import HomeContent from './components/pages/HomeContent';
import './components/global/GlobalStylings.css';
export default class Home extends PureComponent{
  render(){
    return(
      <div>
        <NavBar />
        <HomeContent />
      </div>
    )
  }

}
