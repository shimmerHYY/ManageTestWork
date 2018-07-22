/**
 * Created by Administrator on 2017/11/1.
 */
/*function addloadEvent(func){
    var oldonload=window.onload;
    if(typeof  window.onload !='function'){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}*/
function click(){
    var pic=document.getElementById("pic");
    var light=document.getElementById("light");
    var but=document.getElementById("but");
    pic.onclick=function(){
        light.style.display="block";
    };
    but.onclick=function(){
        light.style.display="none";
    }
}
function click_a(){
    var fangdajing=document.getElementById("fangdajing");
    var light_a=document.getElementById("light_a");
    var but_a=document.getElementById("but_a");
    fangdajing.onclick=function(){
        light_a.style.display="block";
    };
    but_a.onclick=function(){
        light_a.style.display="none";
    }
}
function click_b(){
    var pigai=document.getElementById("pigai");
    var light_b=document.getElementById("light_b");
    var but_b=document.getElementById("but_b");
    pigai.onclick=function(){
        light_b.style.display="block";
    };
    but_b.onclick=function(){
        light_b.style.display="none";
    }
}
function click_c(){
    var p_1=document.getElementById("p_1");
    var light_c =document.getElementById("light_c");
    var but_c = document.getElementById("but_c");
    p_1.onclick=function(){
        light_c.style.display="block";
    };
    but_c.onclick=function(){
        light_c.style.display="none";
    }
}

function click_d(){
    var p_2=document.getElementById("p_2");
    var light_d =document.getElementById("light_d");
    var but_d = document.getElementById("but_d");
    p_2.onclick=function(){
        light_d.style.display="block";
    };
    but_d.onclick=function(){
        light_d.style.display="none";
    }
}
function click_e(){
    var p_3=document.getElementById("p_3");
    var light_e =document.getElementById("light_e");
    var but_e = document.getElementById("but_e");
    p_3.onclick=function(){
        light_e.style.display="block";
    };
    but_e.onclick=function(){
        light_e.style.display="none";
    }
}

function click_f(){
    var p_4=document.getElementById("p_4");
    var light_f =document.getElementById("light_f");
    var but_f = document.getElementById("but_f");
    p_4.onclick=function(){
        light_f.style.display="block";
    };
    but_f.onclick=function(){
        light_f.style.display="none";
    }
}
function click_g(){
    var p_5=document.getElementById("p_5");
    var light_g =document.getElementById("light_g");
    var but_g = document.getElementById("but_g");
    p_5.onclick=function(){
        light_g.style.display="block";
    };
    but_g.onclick=function(){
        light_g.style.display="none";
    }
}
function click_h(){
    var p_6=document.getElementById("p_6");
    var light_h =document.getElementById("light_h");
    var but_h = document.getElementById("but_h");
    p_6.onclick=function(){
        light_h.style.display="block";
    };
    but_h.onclick=function(){
        light_h.style.display="none";
    }
}
window.onload=function(){
    click();
    click_a();
    click_b();
    click_c();
    click_d();
    click_e();
    click_f();
    click_g();
    click_h();
};
