import exp from "constants";
import express from "express";
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

const app = express();
const port = 3000;
app.use(express.static('public'))
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index.ejs');
})
app.listen(port,()=>{
    console.log(`Server running on ${port} port...`);
})
app.get('/generate',(req,res)=>{
    const improvedAdjectives = [
        ...adjectives,
        'abrasive',
        'brash',
        'callous',
        'daft',
        'eccentric',
      ];
      const xMen = [
      'professorX',
      'beast',
      'colossus',
      'cyclops',
      'iceman',
      'wolverine',
      ];
      
      const characterName = uniqueNamesGenerator({
        dictionaries: [improvedAdjectives, colors, xMen,animals],
        length: Math.floor(2+Math.random()*3),
        separator: '-',
        style :'capital'
      }); 
      res.render('index.ejs',{Name: characterName}) ;    
})