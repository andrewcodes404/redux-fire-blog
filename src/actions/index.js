// import axios from "axios";
/// delete this 👆 when finnished??
import firebase from "firebase/app";
import 'firebase/database'

import uuidv1 from "uuid/v1"

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = 'FETCH_POST'
export const DELETE_POST = 'DELETE_POST'


// http://reduxblog.herokuapp.com/api/posts?key=andrewcodes404
// const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
// const API_KEY = '?key=andrewcodes404'

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


// function writeUserData(userId, name, email, imageUrl) {
//     firebase.database().ref('users/' + userId).set({
//         username: name,
//         email: email,
//         profile_picture: imageUrl
//     });
// }

export function createPost (values, callback){
    
    const userId = uuidv1()
    return dispatch => {
        firebase.database().ref(userId).set(values)
            .then(() => callback())
            // .then(snapshot => {
            //     dispatch({
            //         type: FETCH_POSTS,
            //         payload: snapshot.val()
            //     })
            // })
    }
    
}



// 🤔 🤔 🤔 🤔 🤔 🤔 🤔 🤔 🤔 🤔 
//  Okay I think here we are retriving just one item from the db
// in PostsShow.js   you use the id against all the items???
// 👇 👇 👇 👇 👇 👇 👇 👇 ANYWAY THIS IS WHERE YOU GOT TO 👇 👇 👇 👇 👇 👇
// 👇 👇 👇 👇 👇 👇 👇 👇 ANYWAY THIS IS WHERE YOU GOT TO 👇 👇 👇 👇 👇 👇
// 👇 👇 👇 👇 👇 👇 👇 👇 ANYWAY THIS IS WHERE YOU GOT TO 👇 👇 👇 👇 👇 👇
// 👇 👇 👇 👇 👇 👇 👇 👇 ANYWAY THIS IS WHERE YOU GOT TO 👇 👇 👇 👇 👇 👇
// 👇 👇 👇 👇 👇 👇 👇 👇 ANYWAY THIS IS WHERE YOU GOT TO 👇 👇 👇 👇 👇 👇

export function fetchPost(id) {
    console.log("FROM ACTION id : ", id);
    // const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
    return dispatch => {
        database.ref(id).once('value')
            .then(snapshot => {
                console.log("snapshot.val() : ", snapshot.val());
                dispatch({
                    type: 'FETCH_POSTS',
                    payload: snapshot.val()
                })
            })
    }
}

export function deletePost(id, callback) {
    //no need for 'const request' as we are not sending in payload
    //  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    //     .then(() => callback());
    return {
        type: DELETE_POST,
        // payload: id
        payload: id
    }
}

// export function fetchPost(id) {
//     const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
//     return {
//         type: FETCH_POST,
//         payload: request
//     }
// }

// export function deletePost(id, callback) {
//     //no need for 'const request' as we are not sending in payload
//     axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
//         .then(() => callback());
//     return {
//         type: DELETE_POST,
//         payload: id
//     }
// }