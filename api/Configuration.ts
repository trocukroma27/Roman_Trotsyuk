import {AxiosRequestConfig} from 'axios';

class Configuration{
    private static ACCESS_TOKEN: string = "B4jU-XbORj4AAAAAAAAAAS7BUmCZOzeWgF1CE59PAHPolCcb2j7K82PSJj5Cv0Zc";
    private static UPLOAD_FILE_URL: string = "https://content.dropboxapi.com/2/files/upload";
    private static GET_METADATA_URL: string = "https://api.dropboxapi.com/2/files/get_metadata";
    private static DELETE_URL: string = "https://api.dropboxapi.com/2/files/delete_v2";
    private static IMG_PATH: string = "/1.jpeg";
    private metaDataConfig: AxiosRequestConfig;
    private uploadConfig: AxiosRequestConfig;
    private deleteConfig: AxiosRequestConfig;

    constructor(){
        this.metaDataConfig = {
            method: 'post',
            url: Configuration.GET_METADATA_URL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Configuration.ACCESS_TOKEN
            },
            data: {
                "path": Configuration.IMG_PATH
            }
        }

        this.uploadConfig = {
            method: 'post',
            url: Configuration.UPLOAD_FILE_URL,
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': 'Bearer ' + Configuration.ACCESS_TOKEN,
                'Dropbox-API-Arg': `{"mode":"add","path":"${Configuration.IMG_PATH}","mute":false,"autorename":true}`
            },
            data: {
                binary: "../resources/1.jpeg"
            }
        }

        this.deleteConfig = {
            method: 'post',
            url: Configuration.DELETE_URL,
            headers: {
                'Authorization': 'Bearer ' + Configuration.ACCESS_TOKEN,
                'Content-Type': 'application/json'
            },
            data: {
                "path": Configuration.IMG_PATH
            }
        }
    }

    getMetaDataConfig(){
        return this.metaDataConfig;
    }

    getUploadConfig(){
        return this.uploadConfig;
    }

    getDeleteConfig(){
        return this.deleteConfig;
    }
}

export default Configuration;