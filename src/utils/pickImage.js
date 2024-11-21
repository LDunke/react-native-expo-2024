export function usePickImage() {

    async function pickImage() {
        try {
            
        } catch (error) {
            console.log("pickImage: ", error);
            // throw new Error("Erro ao buscar imagem");
            throw error;
        }
    }

    return{ pickImage }
}