import qr from 'qr-image';
import inquirer from 'inquirer';
import fs, { createWriteStream } from 'fs';


const questions = [
    {
      type: 'input',
      name: 'url', 
      message: 'please send url:',
    }
  ];

inquirer.prompt(questions).then((answers) => {
let givenUrl = answers.url;
console.log(`The URL is ${givenUrl}`);
fs.writeFile('URL.txt', givenUrl, (err)=>{ //this so I don't forget the URL
    if (err) throw err; //this so I don't forget the URL
  console.log("URL saved to local text file"); //this so I don't forget the URL
let qr_png = qr.image(givenUrl, { type: 'png' });
  qr_png.pipe(createWriteStream('qr_image_generated.png'));
});
}).catch(error => {
    if(error.isTtyError) {      
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
            console.log('Error:', error);
    }
  });

