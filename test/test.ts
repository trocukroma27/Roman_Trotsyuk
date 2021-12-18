import { expect } from 'chai';
import 'mocha';

import DropBoxAPI from "../api/DropBoxAPI";
let dropBox: DropBoxAPI = new DropBoxAPI();

describe("Upload file to DropBox", () => {
    it("Upload file", async () => {
        const res = await dropBox.uploadFile();
        expect(res.status).to.equal(200);
    })
})

describe("Get file metadata in DropBox", () => {
    it("Read meta data", async () => {
        const res = await dropBox.getMetaData();
        expect(res.status).to.equal(200);
    });
})

describe("Delete file from DropBox", () => {
    it("Delete file", async () => {
        const res = await dropBox.deleteFile();
        expect(res.status).to.equal(200);
    })
})