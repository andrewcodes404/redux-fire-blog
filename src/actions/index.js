import firebase from "firebase/app";
import 'firebase/database'

import uuidv1 from "uuid/v1"

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = 'FETCH_POST'
export const DELETE_POST = 'DELETE_POST'



var config = {
    apiKey: "AIzaSyCkYhf8WzA2VlXo0IhmFQbDnVUuf8FR5Ww",
    authDomain: "redux-fire-blog-6ee63.firebaseapp.com",
    databaseURL: "https://redux-fire-blog-6ee63.firebaseio.com",
    projectId: "redux-fire-blog-6ee63",
    storageBucket: "redux-fire-blog-6ee63.appspot.com",
    messagingSenderId: "36251234219"
};
firebase.initializeApp(config);

var database = firebase.database();

export function fetchPosts() {
    return dispatch => {
        database.ref().once('value')
            .then(snapshot => {
                dispatch({
                    type: 'FETCH_POSTS',
                    payload: snapshot.val()
                })
            })
    }
}


export function createPost (values, callback){
    const userId = uuidv1()
    return dispatch => {
        firebase.database().ref(userId).set(values)
            .then(() => callback())
    }
    
}

export function fetchPost(id) {
    // console.log("FROM ACTION id : ", id);
    return dispatch => {
        database.ref(id).once('value')
            .then(snapshot => {
                console.log("snapshot.val() : ", snapshot.val());
                dispatch({
                    type: 'FETCH_POST',
                    payload: snapshot.val()
                })
            })
    }
}

export function deletePost(id, callback) {
    return dispatch => {
        database.ref(id).remove()
        // no need for snapshot as this callback redirects 
        // to PostsIndex which will gather the sate by itself
            .then(()=>callback())
    }
}