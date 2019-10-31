const initState = {
    projects: [
        {id: '1', title: 'help me find speech', content: 'bla bla bla'},
        {id: '2', title: 'dump me find speech', content: 'bla2 bla2 bla2'},
        {id: '3', title: 'ride me find speech', content: 'bla3 bla3 bla3'},
        {id: '4', title: 'leave me find speech', content: 'bla4 bla4 bla4'},
        {id: '5', title: 'fight me find speech', content: 'bla5 bla5 bla5'}
    ]
}

const projectReducer = ( state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT' : 
            console.log('Created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR' : 
            console.log('Created project', action.err);
            return state;
        default:
            return state;    
    }    
}

export default projectReducer