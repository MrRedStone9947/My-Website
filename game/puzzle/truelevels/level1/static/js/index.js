var f=0;
function get(){
    var v=document.getElementById('in');
    console.log(v);
    if(v=='8139ca2f8d66'+'2f052a5b9eff9a344e7e'&&f==0){
        f=1;
        document.getElementById('title').innerHTML='恭喜你通过了前面的小关卡，现在来开始第一关吧！';
        document.getElementById('laugh').innerHTML='';
    }
    else if(v=='bcc2f57d3913ab43ccaa0'+'4d92503e9ba'&&f==1){
        document.getElementById('hint').innerHTML='asdasd';
        document.getElementById('laugh').innerHTML='';
    }
    else{
        document.getElementById('laugh').innerHTML='这都错了，您不会没做上一关吧！';
    }
}
