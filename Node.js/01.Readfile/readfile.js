/*var fs=require('fs');
console.log('before');
const data="";
var cpy="";
const readClbck=(err,data)=>{
   
    fs.writeFile('./copy.json',data,writeClbck);
    console.log('end read...');
}

const writeClbck=(err)=>{
    console.log('end write');
}
fs.readFile('./file.json',readClbck);


console.log('End');

/*fs.readFile(path, function(err,file) {
    console.log('during');
    console.log(''+ file);
});
console.log('after');
*/

