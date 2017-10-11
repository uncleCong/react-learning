const initialState = [];

export default (state = initialState,action) => {
  switch (action.type){
    case "ADD_TODO":
      return [
        ...state,
        {
          text:action.text,
          statue:'undo',
          id:action.id
        }
      ]
    case "TOGO_TODO":
    case "REMOVE_TODO":
    default:
      return state;
  }
}