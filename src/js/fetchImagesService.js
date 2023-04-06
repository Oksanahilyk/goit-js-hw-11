import axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '34928465-e902867f7aa528d34cce8c98e';
const PARAM = 'per_page=40&orientation=horizontal&image_type=photo&safesearch=true';

class FetchImagesService {
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchImages () {
        try{
            const response = await axios.get(`/?key=${API_KEY}&q=${this.searchQuery}&page=${this.page}&${PARAM}`);
            this.incrementPage();
            return response;
        
        } catch (error) {
            console.log(error);
        }
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
}

export { FetchImagesService };
