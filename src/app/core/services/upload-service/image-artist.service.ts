import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
declare var AWS: any;
import { Constants } from "../../shared/constants/constants";

@Injectable({
  providedIn: "root"
})
export class ImageArtistService {
  awsCredentials = {
    accessKeyId: Constants.accessKeyId,
    region: Constants.region,
    secretAccessKey: Constants.secretAccessKey
  };
  bucketName = Constants.artist_bucketname;

  currentUpload = new BehaviorSubject<any>({
    fileName: null,
    totalSize: 0,
    uploadedSize: 0
  });

  isFileUploding = new BehaviorSubject(false);

  constructor() {}

  /**
   * @function uploadFiles
   * @description After File Upload
   * @param files
   * @param folder
   * @param callback
   */
  public uploadFile(file: File, folder: string, callback) {
    this.postToS3Bucket(file, folder, (fileLink, uploadErr) => {
      this.currentUpload.next({
        fileName: null,
        totalSize: null,
        uploadedSize: null
      });
      if (uploadErr) {
        callback(null, uploadErr);
      } else {
        callback(fileLink, null);
      }
    });
  }

  /**
   * @function postToS3Bucket
   * @description Upload files to AWS Bucket
   * @param file
   * @param folder
   * @param callback
   */
  private postToS3Bucket(file: File, folder: string, callback) {
    AWS.config.update(this.awsCredentials);
    if (file) {
      let key = `${folder}/${Date.now()}_${file.name}`;
      const s3 = new AWS.S3();
      const params = {
        Bucket: this.bucketName,
        Key: key,
        ContentType: file.type,
        Body: file,
        ACL: "public-read"
      };

      s3.putObject(params, (err, res) => {
        if (err) {
          console.log("Error uploading data: ", err);
        }
      });

      s3.upload(params)
        .on("httpUploadProgress", event => {
          this.currentUpload.next({
            fileName: file.name,
            totalSize: Number.parseInt(event.total),
            uploadedSize: Number.parseInt(event.loaded)
          });
        })
        .send((err, data) => {
          if (err) {
            console.log("There was an error uploading your file: ", err);
            callback(null, err);
            return false;
          }
          callback(data.Location, null);
          return true;
        });
    } else {
      console.log("Error in file upload : file not found");
      callback(null, "Error in file upload");
    }
  }

  getFileType(fileType: any): string {
    debugger;
    let newType = "";
    const type = fileType.type.split("/")[0];
    type === "image" ? (newType = "Images") : (newType = "Videos");
    return newType;
  }

  public base64ToFile(dataurl: any, extension: any) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    let filename = Date.now() + "." + extension;
    return new File([u8arr], filename, { type: mime });
  }
}
