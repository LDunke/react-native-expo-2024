import * as ImagePicker from 'expo-image-picker';

export function usePickImage() {

    async function pickImage() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
                aspect: [1, 1]
            });
        } catch (error) {
            console.log("pickImage: ", error);
            // throw new Error("Erro ao buscar imagem");
            throw error;
        }
    }

    return{ pickImage }
}