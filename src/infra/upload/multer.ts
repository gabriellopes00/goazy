import multer from 'multer'
import { v4 as uuid } from 'uuid'
import { resolve } from 'path'

export function upload(dest: string) {
  return {
    storage: multer.diskStorage({
      destination: resolve(__dirname, '..', '..', dest),
      filename: (_, file, cb) => {
        const filename = `${file.originalname}_${uuid()}`
        return cb(null, filename)
      }
    })
  }
}
