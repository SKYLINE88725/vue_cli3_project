import { VIEW_TITLE,CHANGE_NAVINDEX,CHANGE_TOPNAME,CHANGE_NEWITEM,VIEW_FOOT,VIEW_LOADING} from './types'

let mutations={ 

    [VIEW_TITLE]:(state,payload)=> state.title=payload,
    [VIEW_FOOT]:(state,payload)=> state.bFoot=payload,
    [VIEW_LOADING]:(state,payload)=> state.bLoading=payload,
    [CHANGE_NAVINDEX]:(state,payload)=> state.navIndex=payload,
    [CHANGE_NEWITEM]:(state,payload)=> state.newItem=payload,
    [CHANGE_TOPNAME]:(state,payload)=> state.topName=payload,
    
  };
  export default mutations;