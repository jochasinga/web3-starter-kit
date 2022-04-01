import { NFTStorage, File } from 'nft.storage'

import mime from 'mime'

import fs from 'fs'

import path from 'path'

async function storeNFT(token, imagePath, name, description) {
    const image = await fileFromPath(imagePath)

    const nftstorage = new NFTStorage({token})

    return nftstorage.store({
        image,
        name,
        description,
    })
}

async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new File([content], path.basename(filePath), { type })
}

async function upload(token, imagePath, name, description) {
    const result = await storeNFT(token, imagePath, name, description)
    return result
}

export { upload }