
import axios from 'axios';

import * as types from './types';

let actions={
  [types.VIEW_TITLE]:({commit,state},payload)=>commit(types.VIEW_TITLE,payload),
  [types.VIEW_FOOT]:({commit,state},payload)=>commit(types.VIEW_FOOT,payload),
  [types.VIEW_LOADING]:({commit,state},payload)=>commit(types.VIEW_LOADING,payload),
  [types.CHANGE_NAVINDEX]:({commit,state},payload)=>commit(types.CHANGE_NAVINDEX,payload),
  [types.CHANGE_NEWITEM]:({commit,state},payload)=>{
    console.log("CHANGE_NEWITEM");
    commit(types.CHANGE_NEWITEM,payload);

  },
  [types.CHANGE_TOPNAME]:({commit,state},payload)=>commit(types.CHANGE_TOPNAME,payload),
};
export default actions;