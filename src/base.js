/*
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBwH2bcpI3CVnk29GQYKqSNaKTTBYrqHMU",
    authDomain: "catch-of-the-day-luism.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-luism.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;
