const stateReducer = (state, {type, payload}) => {
    switch(type) {
      case 'setNewMain':
        if(state.main.usedList.indexOf(payload) === state.secondary.activeIdx) {
          
        }
        return state;
      default:
        return state;
    }
}
export default stateReducer;