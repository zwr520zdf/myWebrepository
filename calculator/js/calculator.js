var num;  	//用来输入按键
var b=0;  //用来字符串拼接
var rst=false;///判断是否输入了=号
var reg=/[0-9]/; //正则校验是否为0-9
var x=0;//用于判断非数字字符不能重复
function start() {
    b=0;//清空b存储的数字
    document.getElementById("text").value = null;
    /*使所有input按键生效*/
    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
    }
    document.getElementById("text").focus();
    
}

function stop() {
    document.getElementById("text").value = null;
    /*使除了开机的input按键都失效*/
    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }
    inputs[1].disabled = false;
    
}



function number(num) {

    if(rst){//判断是否输入=号
        rst=false;
        //判断=号后是输入数字还是运算，数字则重写运算， 正则表达式校验
        if(reg.test(num)){
            document.getElementById("text").value=num;
            b=num;
        }else{
            //输入非数字，继续运算
            b += document.getElementById(num).value;
            document.getElementById("text").value = b;
        }
    }
    //如没有输入=号
    else {
        if(b==0&&reg.test(num)){
            //判断b是否0，当为0不显示0只显示输入数字
            document.getElementById("text").value = num;
            b=num;
        }
        
            
        else{
            b += document.getElementById(num).value;
            document.getElementById("text").value = b;
        }

    }
    

    
}


        
    


function result() {
    /*eval()函数计算可以用于普通数学运算*/
    document.getElementById("text").value = eval(b);
    //计算完后b清0
    b=eval(b); 
    rst=true;
}

function clearScreen() {
    b=0;
    document.getElementById("text").value = b;
    /*获取焦点*/
    document.getElementById("text").focus();
}

function genhao() {
    result();
    document.getElementById("text").value = Math.sqrt(b);
    b=Math.sqrt(b);
}

function dian() {
        
        b += ".";
    document.getElementById("text").value =b;
    
}

function fenshu() {
    result();
    if(b==0){
        //分母不能为0
        b=0;
    }else{
        var a = document.getElementById("text").value
        document.getElementById("text").value = 1 / a;
        b=1/a;
    }
    
}

function tuige(){
    //原字符串长度
    var str=document.getElementById("text");
    //截取0到倒数第二位组成新的字符串
    var newstr=str.value.substring(0,str.value.length-1);
    str.value=newstr;
    b=newstr;
}

function baifenhao(){
    //执行结果
    result();
    b=b*0.01;
    document.getElementById("text").value=b;
}

function pingfang(){
    result();
    b=b*b;
    document.getElementById("text").value=b;
}