let n;



n=prompt("Enter string","");
let sub;
sub=prompt("Enter substring","");
let str=n;
let count=0;
for (var i = 0; i < n.length; i++) {
  if(n.length-i<sub.length)break;

  if(sub==n.substring(i,i+sub.length))//fkshdjkjkdhkjsdhkj
  {
    ++count;
    if(count%2==0)
    {
      n=n.slice(0,i)+count +n.slice(i+sub.length,n.length);

    }
  }
}


alert(str+"\n"+n);
