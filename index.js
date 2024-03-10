import inquirer from 'inquirer';
import fs from 'fs';
import { circle, triangle, square } from './lib/style.js';

// class creates logo based off user input; prompt questions
class makemylogo {
  constructor() {
    this.questions = [
      {
        type: 'input',
        name: 'text',
        message: 'Text for your logo? (Up to 3 characters)',
        validate: function(texti) {
            if (texti.length > 3){
                return "3 Characters or less"
            } else { return true; }
        },
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Shape?',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
     name: 'colorshape',
        message: 'What color do you want your logo?',
      },
      {
         type: 'input',
         name: 'colortext',
         message: 'What color do you want the text?',
      },
    ];
  }

//  create logo from user input; save to file
  genlogo() {
    inquirer.prompt(this.questions).then(answers => {
      const { text, shape, colorshape, colortext } = answers;
      let logo;

      switch (shape) {
        case 'circle':
        logo = new circle(colorshape);
        break;
        case 'triangle':
         logo = new triangle(colorshape);
         break;
        case 'square':
         logo = new square(colorshape); 
        break;
      }
     
      const logosh = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${logo.render()}
     <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${colortext}" font-size="40">${text}</text> </svg>`;
      fs.writeFileSync('logo.svg', logosh);
      console.log('Logo has been made.');
    });
  }
}
// Create new class and make the logo
export default makemylogo;
const logos = new makemylogo();
logos.genlogo();