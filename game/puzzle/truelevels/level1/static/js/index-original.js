var f=0;
function get(){
    var v=hex_md5(document.getElementById('in').value);
    if(v=='4a4b95e23'+'784821549837819d97cbfe2'&&f==0){
        f=1;
        document.getElementById('title').innerHTML='恭喜你通过了前面的小关卡，现在来开始第一关吧！';
        document.getElementById('laugh').innerHTML='';
        document.getElementById('in').value='';
        document.getElementById('t0').innerHTML='提示:找规律';
        document.getElementById('t1').innerHTML='AB+CD=WDNM';
        document.getElementById('t2').innerHTML='CD+EF=DJNTM';
        document.getElementById('t3').innerHTML='(AB+2CD)/EF*AB*EF/AB+2EF-EF=';
    }
    else if(v=='bcc2f57d3913ab43ccaa0'+'4d92503e9ba'&&f==1){
        var ans1='本关秘钥:Cyka';
        var ans2='Blyat<';
        var ans3='br>下一关提';
        var ans4='示:truelev';
        var ans5='els/level2';
        document.getElementById('hint').innerHTML=ans1+ans2+ans3+ans4+ans5;
        document.getElementById('laugh').innerHTML='';
    }
    else{
        if(f==1){
            document.getElementById('laugh').innerHTML='yee，你可太拉了';
        }
        if(f==0){
            document.getElementById('laugh').innerHTML='这都错了，您不会没做上一关吧！';
        }
    }
}
