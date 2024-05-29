flag = 1
function yes(){
    alert("Yes. You are right!")
}

function love(){
    if(flag == 1){
        ans_no.style.top = '90px';
        ans_no.style.left = '500px';
        flag = 2;
    } else if(flag == 2){
        ans_no.style.top = '180px';
        ans_no.style.left = '50px';
        flag = 3;
    } else if(flag == 3){
        ans_no.style.top = '235px';
        ans_no.style.left = '360px';
        flag = 1;
    }
}