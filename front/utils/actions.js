// import * as firebase from "firebase"
// import {fileToBlob} from "./helpers"

// export const uploadImage= async(image, path, name)=>{
//     const result = { statusResponse: false, error:null, url:null}
//     const ref = firebase.storage().ref(path).child(name)
//     const blob = await fileToBlob(image)

//     try{
//         await ref.put(blob)
//         const url= await firebase.storage().ref(`${path}/${name}`).getDowloadURL()
//         result.statusResponse = true
//         result.url = url
//     }catch(error){
//         result.error = error
//     }
//     return result
// }

// export const updateProfile = async(data)=>{
//     const result = {statusResponse: true, error: null}
//     try{
//         await firebase.auth().currentUser.updateProfile(data)
//     }catch{
//         result.statusResponse = false
//         result.error = error
//     }
//     return result
// }