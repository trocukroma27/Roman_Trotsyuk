import axios, {AxiosResponse} from "axios";
import Configuration from "./Configuration";

class DropBoxAPI{
    private config: Configuration;

    constructor(){
        this.config = new Configuration();
    }
    
    getMetaData(): Promise<AxiosResponse>{
        return axios(this.config.getMetaDataConfig());
    }

    uploadFile(): Promise<AxiosResponse>{
        return axios(this.config.getUploadConfig());
    }

    deleteFile(): Promise<AxiosResponse>{
        return axios(this.config.getDeleteConfig());
    }
}

export default DropBoxAPI;