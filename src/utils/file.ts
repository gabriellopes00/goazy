import { promises } from 'fs'

export async function deleteFile(path: string) {
  try {
    await promises.stat(path)
  } catch (error) {
    return
  }

  await promises.unlink(path)
}
