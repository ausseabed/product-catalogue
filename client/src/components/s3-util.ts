import AWS, { S3 } from 'aws-sdk'

const REGION = 'ap-southeast-2'

export class S3Util {
  static getBucketFromS3Uri (urlString: string): {Bucket: string; Key: string}| undefined {
    const regex = /s3:\/\/(?<bucket>[^/]*)\/(?<key>.*)/

    const found = regex.exec(urlString)

    if (!found || found.length < 3) {
      console.log('uri did not resolve')
      return undefined
    }

    const headParams = {
      Bucket: found[1],
      Key: found[2]
    }
    return headParams
  }

  static getHttpsUrl (headParams: {Bucket: string; Key: string}, region: string = REGION): string {
    return `https://${headParams.Bucket}.s3.${region}.amazonaws.com/${headParams.Key}`
  }

  static async objectExists (headParams: {Bucket: string; Key: string}, region: string = REGION): Promise<boolean> {
    AWS.config.region = region
    const s3 = new S3()
    try {
      const headObjectData = await s3.makeUnauthenticatedRequest('headObject', headParams).promise()
      if (headObjectData.ContentLength) {
        return this.formatBytes(headObjectData.ContentLength) !== undefined
      } else {
        return false
      }
    } catch (reason) {
      return false
    }
  }

  static async getS3ObjectMeta (headParams: {Bucket: string; Key: string}, region: string = REGION): Promise<string> {
    AWS.config.region = region
    const s3 = new S3()
    try {
      const headObjectData = await s3.makeUnauthenticatedRequest('headObject', headParams).promise()
      if (headObjectData.ContentLength) {
        return this.formatBytes(headObjectData.ContentLength)
      } else {
        console.log('could not find size')
      }
    } catch (reason) {
      console.log(reason)
    }
    return ''
  }

  static formatBytes (bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
  }
}
