const initiliState = {
    Global: "halo"
}


const Global = (state = initiliState, action) => {
    if (action.type === "Global") {
        return {
            ...state,
            Global: action.payload
        }
    }
    return state
}

export default Global