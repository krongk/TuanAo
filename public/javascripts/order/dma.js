//-- DMA Probe Module
//-- Copyright 2008 Datamaster.com.cn, All Rights Reserved.
//-- V2.200 Build20090611

//Manual Setting
var _dm_host="http://s1.datamaster.com.cn";
var _dm_gif="/_mt.gif";
var _dm_jsv="2.200";
var _dm_domain_id="";
var _dm_domain="";
var _dm_jsvar='';
var _dm_transvar='';
var _dm_init = 0;

//SSL Host redefine
if("https:" == document.location.protocol)
{
 _dm_host="https://s1.datamaster.com.cn";
}
 
//Variable Initiation
var _dm_date=new Date();
var _dm_now=Math.round(_dm_date.getTime()/1000);

var _dm_dc=document,_dm_lo=document.location,_dm_jss,_dm_suffix,_dm_uid,_dm_split="|",_dm_img,_dm_string;

//Old Function
function rccStart() {
	_dm_domain_id=_rcc_domain_id;
	_dm_domain=_rcc_domain;

	dmStart();
}


//Main Function
function dmStart() {

	if(!_dm_domain_id)
	{
		return;
	}

	if (_dm_jss) {
		return;
	}

	if(typeof(DMjsvar) == "string")
	{
		_dm_jsvar=DMjsvar;
	}
	
	if(typeof(DMtransvar) == "string")
	{
		_dm_transvar=dm_es(DMtransvar);
	}

	_dm_jss=1;

	_dm_domain=dm_domain();
	_dm_suffix=_dm_domain_id;


	var _dm_r=dm_r(),_dm_sr=dm_sr(),_dm_sc=dm_sc(),_dm_ul=dm_ul(),_dm_je=dm_je(),_dm_fl=dm_fl(),_dm_dt=dm_dt(),_dm_if=dm_if();

	var p,p1,p2,p3,p4,p5,t,t1,_dm_cc=1,_dm_bt=0,_dm_tp=0,_dm_ts=0,_dm_va="",_dm_vb="",_dm_rf=_dm_r;
	
	p=_dm_r.indexOf("/");
	p1=p;

	if (p<0) {
		p=_dm_r.length;
	}
	
	t=_dm_r.indexOf(_dm_domain);
	if ((t>-1) && t+_dm_domain.length==p) {
		_dm_r="";
	}

	if (_dm_r) {
		_dm_tp=1;
		if (p1<0)
		{
			_dm_va=_dm_r;
			_dm_vb="";
		}
		else
		{
			_dm_va=_dm_r.substring(0,p1);
			_dm_vb=_dm_r.substring(p1,_dm_r.length);
		}
	}

	for (var i=0;i<_dm_se.length;i++)
	{
		if (_dm_va.indexOf("."+_dm_se[i]+".")>-1)
		{
			if(_dm_vb.indexOf("&"+_dm_sk[i]+"=")>-1)
			{
				_dm_tp=2;
				_dm_va=_dm_se[i];
				p2=_dm_vb.indexOf("&"+_dm_sk[i]+"=");
				p3=_dm_vb.indexOf("&",p2+1);
	
				if (p3<0) {
					p3=_dm_vb.length;
				}
				_dm_vb=_dm_vb.substring(p2+_dm_sk[i].length+2,p3);
				_dm_vb=_dm_vb.substring(0,511);
	
				break;
			}
			else if(_dm_vb.indexOf("?"+_dm_sk[i]+"=")>-1)
			{
				_dm_tp=2;
				_dm_va=_dm_se[i];
				p2=_dm_vb.indexOf("?"+_dm_sk[i]+"=");
				p3=_dm_vb.indexOf("&",p2+1);
	
				if (p3<0) {
					p3=_dm_vb.length;
				}
				_dm_vb=_dm_vb.substring(p2+_dm_sk[i].length+2,p3);
				_dm_vb=_dm_vb.substring(0,511);
	
				break;
			}
		}
	}


	if (_dm_lo.search && _dm_lo.search!="") {
		p4=_dm_lo.search.indexOf("dm_aid=");
		if(p4<0) {
			p4=_dm_lo.search.indexOf("rcc_id=");
		}
		if (p4 >= 0 && p4+39<=_dm_lo.search.length) {
			_dm_tp=3;
			_dm_vb="";
			_dm_va=_dm_lo.search.substring(p4+7,p4+39);
		}
	}


	var cot="",cot_s=0,cot_data=new Array(),col="",col_s=0,col_data=new Array();

	if(!_dm_init)
	{
		col=dm_rc("dm"+_dm_suffix)
		if (!col)
		{
			_dm_init=1;
		}
		else
		{
			col_data=col.split(_dm_split);

			cot=dm_rc("dmt"+_dm_suffix);
			cot_data=cot.split(_dm_split);

			if (col_data.length<5) {
				_dm_init=1;
			}
		}
	}

	if (_dm_init==1) {
		col="0"+_dm_split+_dm_now+_dm_split+_dm_tp+_dm_split+_dm_va+_dm_split+_dm_vb;

		col_data=col.split(_dm_split);

		cot_data[0]=0;
		cot_data[1]=0;
	}

	if (!cot_data[0] || parseInt(cot_data[0]) < 1) {
		cot_data[0]=0;
		cot_data[1]=0;
		col_data[0]=parseInt(col_data[0])+1;
		
		if(parseInt(col_data[0])>1 && parseInt(col_data[1])>1)
		_dm_bt = _dm_now - parseInt(col_data[1]);
	}

	if (_dm_tp) {
		col_data[2]=_dm_tp;
		col_data[3]=_dm_va;
		col_data[4]=_dm_vb;

		cot_data[1]=1;
		_dm_ts=2;
	}


	cot_data[0]=parseInt(cot_data[0])+1;
	col_data[1]=_dm_now;
	

	if (parseInt(cot_data[1])==1 && _dm_ts==0) {
		_dm_ts=1;
	}

	if (!cot_data[1]){cot_data[1]=0;}
	if (!col_data[0]){col_data[0]=1;}
	if (!col_data[2]){col_data[2]=0;}
	if (!col_data[3]){col_data[3]="";}
	if (!col_data[4]){col_data[4]="";}

	cot=cot_data[0]+_dm_split+cot_data[1];
	cot_s=dm_wc("dmt"+_dm_suffix,cot,0);

	col=col_data[0]+_dm_split+col_data[1]+_dm_split+col_data[2]+_dm_split+col_data[3]+_dm_split+col_data[4];
	col_s=dm_wc("dm"+_dm_suffix,col,1);

	if (!cot_s || !col_s) {
		_dm_cc=0;

		col_data[0]=1;
		col_data[2]=_dm_tp;
		col_data[3]=_dm_va;
		col_data[4]=_dm_vb;
	}
	
	_dm_string="JSv="+_dm_jsv+"&DMac="+_dm_domain_id+"&DMcc="+_dm_cc+"&DMif="+_dm_if+"&DMjv="+_dm_jsvar+"&DMb="+col_data[0]+"&DMd="+cot_data[0]+"&DMbt="+_dm_bt+"&DMtp="+col_data[2]+"&DMts="+_dm_ts+"&DMva="+col_data[3]+"&DMvb="+col_data[4]+"&DMtv="+_dm_transvar+"&DMrf="+_dm_rf+"&DMsr="+_dm_sr+"&DMsc="+_dm_sc+"&DMje="+_dm_je+"&DMul="+_dm_ul+"&DMfl="+_dm_fl+"&DMdt="+_dm_dt;
	
	_dm_img=new Image(1,1);
	_dm_img.id="dmTracker";
	_dm_img.src=_dm_host+_dm_gif+"?"+_dm_string;

	_dm_img.onload=function() {
		dm_done();
	}

	return;
}




//Functions
function dm_done() {
	_dm_jss=2;
	return;
}

function dm_domain() {
	var p,d=_dm_dc.domain;
	if (!_dm_domain) {
		return d;
	}
	else {
		p=d.indexOf(_dm_domain);
		if ((p>-1) && (p+_dm_domain.length==d.length)) {
			return _dm_domain;
		}
		return d;
	}
}

function dm_if() {
	if (top.location != self.location)return 1;
	return 0;
}

function dm_r() {
	var r=_dm_dc.referrer;

	if(typeof(top._dm_iff) == "number")
	{
		//r="";
		//r=top._dm_ifr;
		top._dm_iff = 0;
	}

	if (!r) {
		r="";
	}
	else {
		if (r.indexOf("http://")==0)
		{
			r=r.substring(7,r.length);
		}
		else if (r.indexOf("https://")==0)
		{
			r=r.substring(8,r.length);
		}

		if (r.lastIndexOf("/")==r.length-1)
		{
			r=r.substring(0,r.length-1);
		}
	}

	r=r.substring(0,511);
	return r;
}

function dm_dt() {
	var dt="";
	if (_dm_dc.title) {
		dt=_dm_dc.title;
		dt=dt.substring(0,64);
		dt=dm_es(dt);
	}
	return dt;
}

function dm_sr() {
	var sr="";
	if (self.screen) {
	sr=screen.width+"x"+screen.height;
	}
	else if (self.java) {
		var j=java.awt.Toolkit.getDefaultToolkit();
		var s=j.getScreenSize();
		sr=s.width+"x"+s.height;
	}
	return sr;
}

function dm_sc() {
	var sc="";
	if (self.screen) {
	sc=screen.colorDepth+"-bit";
	}
	return sc;
}

function dm_ul() {
	var ul="";
	var n=navigator;
	if (n.language) {
		ul=n.language.toLowerCase();
	}
	else if (n.browserLanguage) {
		ul=n.browserLanguage.toLowerCase();
	}
	return ul;
}

function dm_je() {
	var je="";
	var n=navigator;
	je=n.javaEnabled()?1:0;
	return je;
}

function dm_fl() {
 var f="",n=navigator;
 if (n.plugins && n.plugins.length) {
  for (var ii=0;ii<n.plugins.length;ii++) {
   if (n.plugins[ii].name.indexOf('Shockwave Flash')!=-1) {
    f=n.plugins[ii].description.split('Shockwave Flash ')[1];
    break;
   }
  }
 } else if (window.ActiveXObject) {
  for (var ii=10;ii>=2;ii--) {
   try {
    var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+ii+"');");
    if (fl) { f=ii + '.0'; break; }
   }
   catch(e) {}
  }
 }
 return f;
}



function dm_rc(n) {
	var co=_dm_dc.cookie;
	var v,t,p=co.indexOf(n);
	if (p<0) {
		return "";
	}

	if (p>0) {
		n=" "+n;
		p=co.indexOf(n);
	}
	
	if (p<0) {
		return "";
	}

	t=co.substring(p+1+n.length,co.length);
	p=t.indexOf(";")
	if (p < 0) {
			v=t;
	}
	else {
		v=t.substring(0,p);
	}

	v=dm_ues(v);
	return v;
}

function dm_wc(n,v,t) {
	var exp,l,r;

	l=" expires=Sun, 18 Jan 2038 00:00:00 GMT;";

	if (t==1) {
		exp=l;
	}
	else {
		exp="";
	}

	_dm_dc.cookie=n+"="+dm_es(v)+"; path=/;"+exp+" domain="+_dm_domain+";";

	r=dm_rc(n);
	if (r!=v) {
		dm_dc(n);
		return 0;
	}
	return 1;
}

function dm_dc(n) {
	var e;
	e=new Date(_dm_date.getTime()-1);
	e=" expires="+e.toGMTString()+";";

	_dm_dc.cookie = n+"=; path=/;"+e+" domain="+_dm_domain+";";
	return;
}

function dm_es(c) {
 if (typeof(encodeURIComponent) == 'function') {
  return encodeURIComponent(c);
 } else {
  return escape(c);
 }
}


function dm_ues(c) {
 if (typeof(decodeURIComponent) == 'function') {
  return decodeURIComponent(c);
 } else {
  return unescape(c);
 }
}

function dm_random()
{
 var s=Math.round(Math.random()*2147483647);
 return s;
}

//Trans Interface
var _dm_transSign = 0;

function dmTransInterface(memo)
{
	if(!memo)
	{
		return;
	}

	if(_dm_transSign)
	{
		return;
	}

	_dm_transSign = 1;

	var _dm_transImg;
	var _dm_transGif="/_tt.gif";
	
	var _dm_random = dm_random();

	_dm_transImg=new Image(1,1);

	memo = dm_es(memo);

	var _dm_transString = "JSv="+_dm_jsv+"&DMac="+_dm_domain_id+"&DMrdm="+_dm_random+"&DMtv="+_dm_transvar+"&DMtif="+memo;

	_dm_transImg.src = _dm_host+_dm_transGif+"?"+_dm_transString;

	_dm_transImg.onload=function() {
		_dm_transSign = 0;
	}
}

//Video Interface
var _dm_videoSign = 0;


function dmVideoInterface(name,action)
{
	if(!name)
	{
		return;
	}
	
	if(_dm_videoSign)
	{
		return;
	}
	
	_dm_videoSign = 1;
	
	var _dm_videoImg;
	var _dm_videoGif="/_vt.gif";
	
	var _dm_random = dm_random();

	_dm_videoImg=new Image(1,1);

	if(action != "pos0" && action != "pos50" && action != "pos100")
	{
		return;
	}

	name = dm_es(name);

	var _dm_videoString = "JSv="+_dm_jsv+"&DMac="+_dm_domain_id+"&DMrdm="+_dm_random+"&DMvplay="+action+"&DMvname="+name;

	_dm_videoImg.src = _dm_host+_dm_videoGif+"?"+_dm_videoString;

	_dm_videoImg.onload=function() {
		_dm_videoSign = 0;
	}
}


//SEO Variable Initiation
var _dm_se=new Array();
var _dm_sk=new Array();

_dm_se[0]="google";_dm_sk[0]="q";
_dm_se[1]="baidu";_dm_sk[1]="wd";
_dm_se[2]="baidu";_dm_sk[2]="word";
_dm_se[3]="cn.yahoo";_dm_sk[3]="p";
_dm_se[4]="yahoo";_dm_sk[4]="p";
_dm_se[5]="soso";_dm_sk[5]="w";
_dm_se[6]="live";_dm_sk[6]="q";
_dm_se[7]="3721";_dm_sk[7]="p";
_dm_se[8]="3721";_dm_sk[8]="name";
_dm_se[9]="sogou";_dm_sk[9]="query";
_dm_se[10]="search";_dm_sk[10]="q";
_dm_se[11]="163";_dm_sk[11]="q";
_dm_se[12]="aol";_dm_sk[12]="query";
_dm_se[13]="tom";_dm_sk[13]="word";
_dm_se[14]="zhongsou";_dm_sk[14]="word";
_dm_se[15]="114.vnet";_dm_sk[15]="kw";
_dm_se[16]="netscape";_dm_sk[16]="query";
_dm_se[17]="cnn";_dm_sk[17]="query";
_dm_se[18]="ask";_dm_sk[18]="q";
_dm_se[19]="lycos";_dm_sk[19]="query";
_dm_se[20]="bing";_dm_sk[20]="q";
_dm_se[21]="youdao";_dm_sk[21]="q";
_dm_se[22]="gougou";_dm_sk[22]="search";
_dm_se[23]="altavisia";_dm_sk[23]="q";

_dm_domain="ftuan.com";
_dm_domain_id="4b95fa11dc415";
dmStart();
