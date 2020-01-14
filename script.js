let hour=$(".hour");

let obj={};
let array=[];
let row=$(".row");
let column=$(".col");
let past=$(".past");
let para=$("p");

let textArea= $(".textarea");
//textArea.text(moment().format('h'));

let desc= $(".description");
desc.text(moment().format('dddd')+ ", "+ moment().format('MMMM Do YYYY'));


$(document).ready(function(){
    //localStorage.clear();
    
    let getLocal=JSON.parse(localStorage.getItem("final"));
    $.each(getLocal,function(item,content){
        $("div").each(function(){
            let search= $(this).find("p");
            console.log(search);
            if (content.time==search.text()){
                let newText=$(this).find("textarea");
                newText.text(content.input);
            }

    })
})

    let counter=0;
    $("div").each(function(){
        
        let i= $(this).attr('id');
        if(i== moment().format('h')){
            //console.log(i)
            let out=$(this).find("#past");
            out.attr("id","present");
            counter=1;
            // console.log(out);
        } 
        if (counter==1){
            let out=$(this).find("#past");
            out.attr("id","future");
        }

    });

});
    $("i").on("click",function(){
        let textTag=$(event.target.parentElement.parentElement).find($('textarea'));
        let input= textTag[0].value;
        

        let pTag=$(event.target.parentElement.parentElement).find($('p'));

            let time=pTag[0].innerHTML;
            //console.log(time);
            obj={"time":time,"input":input};
            
            getLocal=JSON.parse(localStorage.getItem("final"));
            if(getLocal){
                getLocal.push(obj);
            }
            else{
                getLocal=[];
                getLocal.push(obj);
            }
            let setLocal=localStorage.setItem("final",JSON.stringify(getLocal));
            //localStorage.clear();


        
    })







