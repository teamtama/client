import { useCallback, useState } from 'react';
import { useAlert } from '../contexts/AlertContext';
import Resizer from 'react-image-file-resizer';

const useResizeFileToBlob = () => {
  const { setAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const resizeFileToBlob = useCallback(async (file: File): Promise<any> => {
    setLoading(true);
    try {
      const promise = new Promise((resolve) => {
        Resizer.imageFileResizer(
          file,
          200,
          200,
          'JPEG',
          70,
          0,
          (uri) => {
            resolve(uri);
          },
          'blob',
        );
      });
      const blobData = await promise;
      setLoading(false);
      return blobData;
    } catch (err) {
      setAlert(err.message, 'error');
      setLoading(false);
    }
  }, []);

  return {
    resizeFileToBlob,
    resizeLoading: loading,
  };
};

export default useResizeFileToBlob;
