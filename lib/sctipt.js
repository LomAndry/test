function formReset()
{
document.getElementById("frm1").reset();
}
	function chet()
{
//Fon radotaet
var p1=document.getElementById('c1'); 
var p2=document.getElementById('c2'); 
var p3=document.getElementById('c3'); 
	if (c1.selected) 
		vt="blue" ;
	if (c2.selected) 
		vt="white";
	if (c3.selected) 
		vt="black";

var st="<head><style>body{background-color:"+vt+";}</style></head>" 
//fon konetc
//cvet teksta ready
var n1=document.getElementById('a1'); 
var n2=document.getElementById('a2'); 
var n3=document.getElementById('a3'); 
	if (a1.checked) 
		cl="white" ;
	if (a2.checked) 
		cl="black";
	if (a3.checked) 
		cl="blue";
var mt="<head><style>body{color:"+cl+";}</style></head>" 
//cvet teksta konetc
//kartinka & zagolovok
var p=document.getElementById("zg");
var text=p.value
var p1=document.getElementById("j");
var podp=p1.value
var p2=document.getElementById("k1");
var p3=document.getElementById("k2"); 
var p4=document.getElementById("k3"); 
if (p2.checked)	
	{m='dog.jpg'}
if (p3.checked)	
	{m='flower.jpg'}
if (p4.checked)	
	{m='byket.jpg'}
var st1="<body><h1>"+text+"</h1><img src="+m+""+"></body><br/><p>"+podp+"</p>"
// kartinka & zagolovok ready
var win=window.open("","","width=800,height=600"); 
win.document.open();  
str=st1
win.document.write(st+mt+str);
btm='<input type="button" value="закрыть"'+'onClick="window.close();">'; 
win.document.write(btm);  
win.document.close(); 
} 