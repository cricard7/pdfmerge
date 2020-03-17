
// https://www.npmjs.com/package/easy-pdf-merge

const merge = require('easy-pdf-merge');

merge(['File One.pdf', 'File Two.pdf'], 'File Ouput.pdf', function(err){
    if(err) {
      return console.log(err)
    }
    console.log('Successfully merged!')
  });
