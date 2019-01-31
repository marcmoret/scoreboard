document.addEventListener('DOMConetentLoaded', function(){

    const firestore = firebase.firestore();
    firestore.settings({ timestampsInSnapshots: true});

})