//solve quadratic equation ax*2+bx+c=0,
//here a,b and c are coefficients
function quadratic(a,b,c)
{
    if(a==0)
    {
        if(b==0)
        {
            if(c==0)
           {
            document.write("a=b=c=0:any x solves the equation<br>");
           }
           else
           {
            alert("a=b=0,c!=0:the equation has no solves<br>")
           } 
        }
        else
        {
            document.write("a=0,b!=0：the soluion is x="+(-c/b)+"<br>");
        }
    }
    else//a!=0
    {
        let delta=b*b-4*a*c;
        if(delta<0)
        {
            document.write("delta<0：the soluion has no result<br>");
        }
        else if(delta=0)
        {
            document.write("delta=0：the only soluion is x="+(-b/2/a)+"<br>"  );
        }
        else//delta>0
        {
            document.write("delta>0：there are two solution x1="+((-b+Math.sqrt(delta))/2/a)+","
                    +"x2="+((-b-Math.sqrt(delta))/2/a))+"<br>";
        }
    }
}
quadratic(0,0,0);
quadratic(1,0,0);
quadratic(1,2,3);
quadratic(3,2,3);