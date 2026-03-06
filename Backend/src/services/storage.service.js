const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: process.env.publicKey,
    privateKey: process.env.privateKey,
    urlEndpoint: process.env.urlEndpoint
});

export default imagekit;

async function uploadFile(file, filename) {
    const result = await imagekit.upload({
            file: file,
            filename: filename
    })
    return result;
}


module.exports={

    uploadFile,
}