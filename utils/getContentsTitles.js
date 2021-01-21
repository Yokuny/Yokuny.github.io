import fs from 'fs'
import path from 'path'
//pega o diretorio com dos arquivos
const contentDirectory = path.join(process.cwd(), 'content')
export default function getContentsTitles(){
    // pega os arquivos em si
    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames.map(fileName => {
        return {
          params: {
            title: fileName.replace(/\.js$/, '')
          }
        }
    })
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       title: 'Felipe Rangel Ribeiro'
    //     }
    //   },
    //   {
    //     params: {
    //       title: 'Tiago Rangel Ribeiro'
    //     }
    //   }
    // ]
}