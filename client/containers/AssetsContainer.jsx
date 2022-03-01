 import React from 'react';
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';


 import * as actions from '../actions/actions';
 import AssetCreator from '../components/AssetCreator'
 import AssetsDisplay from '../components/AssetsDisplay'
 


 const mapStateToProps = ({ assets }) => ({
   stateItem1: assets.stateItem1,
   stateItem2: assets.stateItem2,
   stateItem3: assets.stateItem3,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

 const AssetsContainer = props => (
   <div className="innerbox">
     <AssetCreator
       stateItem1={props.stateItem1}
       action1={props.doSomethingActionCreator1}
       action2={props.doSomethingActionCreator2}
     />
     <AssetsDisplay
       stateItem1={props.stateItem1}
       stateItem3={props.stateItem3}
       action3={props.someAction1}
       action4={props.someAction2}
     />
   </div>
 );
 
 export default connect(mapStateToProps, mapDispatchToProps)(AssetsContainer);
 