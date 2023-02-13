const initiliState = {
    query: "1"
}


const Query = (state = initiliState, action) => {
    if (action.type === "query") {
        return {
            ...state,
            query: action.payload
        }
    }
    return state
}

export default Query