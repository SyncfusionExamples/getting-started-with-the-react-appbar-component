import {AppBarComponent} from '@syncfusion/ej2-react-navigations';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import './App.css';

function App() {
  function navigateToPage(){
    window.location.href = 'https://www.syncfusion.com/account/manage-trials/start-trials';
  }
  return (
    <div className="App">
      <AppBarComponent colorMode='Primary' position='Top'
      mode='Prominent' cssClass='prominent-appbar'>
        <div style={{float:'left'}}>
        <ButtonComponent cssClass='e-inherit item'
        iconCss='e-icons e-menu'></ButtonComponent>
        <span className='item prominent'>Essential Studio for React</span>
        {/* <div style={{width:'200px',marginTop:'5px'}} className='item'>
        <span className='e-input-group e-control-wrapper e-inherit'>
        <input type='text' className='e-searchinput e-input item'
        placeholder='Search' style={{paddingLeft:'5px'}}/>
        <span className='e-icons e-search e-input-group-icon'></span>
        </span>
        </div> */}
        </div>
        {/* <span className='e-appbar-spacer'></span>
        <span className='e-appbar-separator'></span>
        <a className='item' href='https://www.syncfusion.com/demos'>Demos</a>
        <a className='item' href='https://www.syncfusion.com/forums'>Forum</a>
        <a className='item' href='https://help.syncfusion.com/upgrade-guide'>Upgrade</a> */}
        <ButtonComponent className='e-inherit item'
        onClick={navigateToPage}>Free Trial</ButtonComponent>
      </AppBarComponent>
    </div>
  );
}

export default App;
