const fs = require('fs');
const path = require('path');

const dirCleaner = () => {
  const directory = './uploads';

  fs.readdir(directory, (error, files) => {
    if (error) throw error;

    files.forEach( (file) => {
      fs.unlink(path.join(directory, file), (error) => {
        if (error) throw error;
      });
    });
  });
}

module.exports = dirCleaner;
