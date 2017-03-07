var arr = ["apple","orange",'pear','jade', 'jade'];
function noPassValue(){
    return arr.reduce(function(prev,next){
        console.log("prev:",prev);
        console.log("next:",next);
        //console.info('prev type:'+ typeof(prev)); //prev type:string
        return prev + " " +next;
    });
}
function passValue(){
    return arr.reduce(function(prev,next){
        console.log("prev:",prev);
        console.log("next:",next);
        prev[next] = 1;
        //console.info('prev type:'+ typeof(prev)); // object
        return prev;
    },{});
}
console.log("No Additional parameter:",noPassValue());
console.log("----------------");
console.log("With {} as an additional parameter:",passValue());


var arr2 = ["apple","orange","apple","orange","pear","orange"];
function getWordCnt(){
    return arr2.reduce(function(prev,next){
        prev[next] = (prev[next] + 1) || 1;
        return prev;
    },{});
}
console.log(getWordCnt());
