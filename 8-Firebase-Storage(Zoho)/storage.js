(function() {
    const firebaseConfig = {
        apiKey: "AIzaSyDf9wdD3WuUeyNrrzmhJ0izjqU9jf79_lE",
        authDomain: "courso-78c60.firebaseapp.com",
        databaseURL: "https://courso-78c60-default-rtdb.firebaseio.com",
        projectId: "courso-78c60",
        storageBucket: "courso-78c60.appspot.com",
        messagingSenderId: "8689552942",
        appId: "1:8689552942:web:af68791f3a92c6ab3cd9bf",
        measurementId: "G-0SXHVMRQSB"
      };

    //Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    //create a root refernce
    var storage = firebase.storage()
    var storageRef = storage.ref()

    // get UI elements
    const file = document.getElementById('file');
    const upload = document.getElementById('upload');
    const download = document.getElementById('download');
    const status = document.getElementById('status');
    const image = document.getElementById('image');

    // upload file
    upload.addEventListener('click', e =>{
        var ref= storageRef.child('globe');
        let photo = document.getElementById("file").files[0];

        //upload
        ref.put(photo).then(function(snapshot){
            console.log('uploaded a blob or file');
            status.innerHTML = 'upload a blob or file!'
        })
    })

    // download file
    download.addEventListener('click',e =>{
        var ref =storage.ref('globe');

        ref.getDownloadURL().then(function(url){
            image.src = url;
            status.innerHTML = 'Download blob or file'
        }).catch(function(error){console.log(error)})
    })


}());