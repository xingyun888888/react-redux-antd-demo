export const add =  (state ={count:0}, action={}) => {
    switch (action.type){
        case 'ADD':
            var count = state.count+1;
            return {count:count};
        default: return state;
    }
};
export const plus =  (state = {'count':0}, action={}) => {
    switch (action.type){
        case 'PLUS':
            var count = state.count-1;
            return {count: count};
        default: return state;
    }
};
export const getdate = (state = {data:{},loading:false}, action={}) => {
    switch (action.type){
        case 'LOADING':
            return {
                data:{},
                loading:true
            };
        case 'DISPATHDATA1':
            return {
                data: action.json,
                loading:false
            };
        default: return state;
    }
}
