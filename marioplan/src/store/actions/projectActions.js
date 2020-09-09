export const createProject = (project) => {
    return (dispatch, getState, {getFireBase, getFirestore}) => {
        // make async call to database

        // this gives us a reference to our firestore database
        const fireStore = getFirestore();
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: 1234,
            createdAt: new Date()

        }).then(() => {

            // the action is the messsage
            // the reducer listens for the action and then updates the action
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })
        

    }
};