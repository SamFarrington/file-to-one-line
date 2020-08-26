const fs = require('fs');

const main = () => {
    const arguments = process.argv.slice(2);

    const inputFile = arguments[0];
    const outputFile = arguments[1];
    
    const oneLineFile = fs.readFileSync(inputFile)
        .toString('utf8')
        .split('\n').join('\\n')
        .split('\r').join('\\r');
    
    if(outputFile){
        fs.writeFileSync(outputFile, oneLineFile);
    } else {
        console.log(oneLineFile);
    }
}

module.exports = main();
