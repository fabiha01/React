const initState = {
    projects: [
        {id: '1', title: 'Help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'Collect all stars', content: 'blah2 blah blah'},
        {id: '3', title: 'egg hunt with Yoshi', content: 'blah3 blah blah'}

    ]

}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }

    return state

}

export default projectReducer;