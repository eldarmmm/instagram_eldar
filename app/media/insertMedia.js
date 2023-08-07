const Media = require('./Media')

const fs = require('fs');
const path = require('path');

function readMediaFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

const filePath = 'C:\\Users\\Анель\\Desktop\\Full stack\\NODE\\kinopoisk\\public\\images\\profileimg.png';;

readMediaFile(filePath)
  .then((mediaData) => {
    const mediaName = 'profileimg.png';
    const mimeType = 'image/png';

    return Media.create({
      name: mediaName,
      data: mediaData,
      mimeType: mimeType,
    });
  })
  .then((createdMedia) => {
    console.log('Media created and saved:', createdMedia);
  })
  .catch((error) => {
    console.error('Error while saving media:', error);
  });
