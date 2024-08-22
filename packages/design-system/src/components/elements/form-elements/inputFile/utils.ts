export const getFileBlob = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = function () {
      resolve(reader.result);
    };
    reader.onerror = function (err) {
      reject(err);
    };
    reader.readAsArrayBuffer(file);
  });
};

export const getFileType = (mimeType: string) => {
  if (
    mimeType === 'image/jpg' ||
    mimeType === 'image/png' ||
    mimeType === 'image/jpeg'
  ) {
    return 'image';
  } else {
    return 'document';
  }
};
