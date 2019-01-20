import { VIEW_TITLE,VIEW_NAV,VIEW_FOOT,VIEW_LOADING} from './types'

let mutations={ 

    [VIEW_TITLE]:(state,payload)=> state.title=payload,
    [VIEW_FOOT]:(state,payload)=> state.bFoot=payload,
    [VIEW_LOADING]:(state,payload)=> state.bLoading=payload,
  
  };
  export default mutations;