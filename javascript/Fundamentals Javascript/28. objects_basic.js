// Object is collection of key value pair.value can be another object,function,string, number ,undefined or nothing else.
// object should always close with middle bracket and semicolon
// Key values pairs seprated by comma

const circle ={
    radius:1,
    location:{
        x:1,
        y:1
    },
    isVisible:true,
    draw :function(){
        console.log('draw');
    }

};

circle.draw();
