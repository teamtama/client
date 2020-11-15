import firebase from '../../firebase/clientApp';
import { v4 as uuidv4 } from 'uuid';

interface IUploadImageProps {
  beforeFile?: string;
  blob: Blob;
  filename: string;
  ext: 'png' | 'jpeg';
}

export const uploadImage = async ({
  beforeFile,
  blob,
  filename,
  ext,
}: IUploadImageProps): Promise<any> => {
  try {
    const storageRef = firebase.storage().ref();

    // 기존 이미지가 있을 때
    if (beforeFile) {
      const _beforeFile = beforeFile.substring(
        beforeFile.lastIndexOf("o/") + 2,
        beforeFile.lastIndexOf("?")
      );
      const beforeRef = storageRef.child(_beforeFile);
      await beforeRef.delete();
    }

    let downloadUrl;
    if (blob) {
      const fileRef = storageRef.child(`${uuidv4()}_${filename}.${ext}`);
      await fileRef.put(blob);
      downloadUrl = await fileRef.getDownloadURL();
    }
    return downloadUrl;
  } catch (e) {
    console.log(e);
  }
};
