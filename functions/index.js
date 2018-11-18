const functions = require('firebase-functions');
const {Storage} = require('@google-cloud/storage');
const os = require('os');
const path = require('path');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
const gcs = new Storage();
exports.onFileChange = functions.storage.object().onFinalize(event => {
    // const object = event.data;
    // const bucket = object.bucket;
    // const contentType = object.contentType;
    // const filetPath = object.name;
    // console.log('Change is detected');

    // if(path.basename(filetPath).startsWith("renamed-")){
    //     return;
    // }

    // const destBucket = gcs.bucket(bucket);
    // const tempFilePath = path.join(os.tmpdir(), path.basename(filetPath));
    // const metadata = {contentType: contentType};

    // return destBucket.file(filetPath).download({
    //     destination: tempFilePath
    // })
    // .then(()=>{
    //     return destBucket.upload({
    //         destination: "renamed-" + path.basename(filetPath),
    //         metadata:metadata
    //     })
    // })
});
exports.uploadFile = functions.https.onRequest((req, res)=>{
    if(req.method !== 'POST'){
        return res.status(500).json({
            message:'Not allowed'
        })
    }
    // res.header('Content-Type','application/json');
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send(200).json({
        message:'it worked'
    })
})