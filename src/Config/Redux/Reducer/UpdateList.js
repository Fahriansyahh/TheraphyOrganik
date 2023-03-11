const initiliState = {
    dataId: ""
}


const UpdateList = (state = initiliState, action) => {
    if (action.type === "UpdateList") {
        return {
            ...state,
            query: action.payload
        }
    }
    return state
}

export default UpdateList