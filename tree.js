
let path = require("path");
let fs = require("fs");
function treeFn(dirPath) {
    if (dirPath == undefined) {

        treeHelper(process.cwd(), "");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            treeHelper(dirPath, "");
        } else {

            console.log("Kindly enter the correct path");
            return;
        }
    }
}

function treeHelper(dirPath, indent) {
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    } else {
        let dirName = path.basename(dirPath)
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let j = 0; j < childrens.length; j++) {
            let further = fs.readdirSync(path.join(dirPath, childrens[j]))
            for(let i = 0;i < further.length;i++)
            {
                let childPath = path.join(dirPath, further[i]);
                console.log(indent + "    └──" + childPath);
                let inner = fs.readdirSync(childPath);
                    for (let k = 0;k < inner.length;k++){
                        let path = path.join(dirPath, inner[k]);
                        console.log(indent + "└──" + path);
                    }
            //treeHelper(childPath, indent + "\t");
            }
        }
    }


}
module.exports = {
    treefxn: treeFn
}