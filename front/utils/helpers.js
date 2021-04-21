import * as Permissions from "expo-permissions"
import * as ImagePicker from "expo-image-picker"
import { Dialog} from 'react-native-paper';

export const loadImageFromGallery = async(array)=>{
    const response = {status:false, image:null}
    const resultPremissions = await Permissions.askAsync(Permissions.CAMERA)
    if(resultPremissions.status === "denied"){
        Dialog.alert("Acepta los permisos para acceder a las imágenes del teléfono.")
        return response
    }
    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing:true,
        aspect: array
    })
    if(result.cancelled){
        return response
    }
    response.status = true
    response.image = result.uri
    return response
}