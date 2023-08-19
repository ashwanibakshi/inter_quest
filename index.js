function stringg(paragraph,banned){
     paragraph = paragraph.replace(/,/g,'');
     paragraph = paragraph.toLowerCase();
     paragraph = paragraph.split(" ");

   banned.forEach((b)=>{
     paragraph.forEach((p,index)=>{
             if(b===p){
              paragraph.splice(index,1);
             }
     });
   });
let res=[];
  paragraph.forEach((x)=>{
       let count = 0;
       paragraph.forEach((y)=>{
             if(x===y){
              count++;
             }
       });
       res.push(count);
  });
  // var x = paragraph[res.indexOf(Math.max(...res))];
  //  console.log(x,res.indexOf(Math.max(...res)),Math.max(...res),res);
  console.log(paragraph[res.indexOf(Math.max(...res))]);
} //stringg function ends

 
let par = "bob hit, many call with Ball got hit with call with or call";
let ban = ["hit","with"];

stringg(par,ban);