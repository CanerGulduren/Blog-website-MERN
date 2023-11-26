
import getImageURL from "../utils/blog/get/getImageUrl";

const useGetImage = async (imageID) => {
    const url = await getImageURL(imageID);
    return url;
};

export default useGetImage
