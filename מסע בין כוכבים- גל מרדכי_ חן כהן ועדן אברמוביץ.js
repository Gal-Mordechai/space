(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_1", frames: [[0,0,2000,1125]]},
		{name:"מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_2", frames: [[0,0,2000,1125]]},
		{name:"מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_3", frames: [[0,0,1992,985],[0,987,1444,962]]},
		{name:"מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_4", frames: [[0,740,1357,828],[0,0,1661,738]]},
		{name:"מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5", frames: [[1933,1024,93,99],[1633,1025,119,200],[1903,923,22,51],[1937,0,96,209],[1705,746,125,127],[1939,1369,88,10],[1854,923,47,51],[1933,923,107,99],[1734,135,173,164],[1249,1096,241,224],[1492,1025,139,179],[1251,468,190,190],[1544,135,188,180],[1909,211,77,86],[1544,317,163,145],[1893,572,141,37],[1893,427,147,143],[1763,427,128,178],[1705,875,147,103],[1934,1125,84,86],[1484,900,219,123],[1754,1146,178,79],[918,1326,561,328],[1484,468,277,178],[1734,301,219,124],[1526,0,409,133],[1705,648,241,96],[1705,980,32,32],[1854,840,178,81],[1492,1206,134,110],[1754,1064,176,80],[1481,1419,175,80],[1251,0,273,251],[1481,1501,176,79],[1658,1419,176,79],[1761,1311,176,79],[1807,1227,176,79],[1939,1308,72,59],[1955,299,72,59],[1955,360,72,59],[0,664,1247,660],[1832,746,163,92],[1251,253,291,213],[1249,664,233,430],[1481,1582,176,79],[0,0,1249,662],[1481,1322,278,95],[0,1326,916,257],[1659,1500,176,79],[1836,1392,175,79],[1628,1227,177,82],[1484,648,219,124],[1754,980,177,82],[1484,774,219,124],[1988,211,45,81]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_19 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Group_16 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.background = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.backwhit = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bibi = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.bigbubble = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap36 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap87 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boxcombolight = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.buttonimg = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.ComboBox = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.dana = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.colorstar10 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.eilat = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.facebook = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib._final = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.firstStone1 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.golda = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.holon = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.kfarsaba = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.linkdin = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.music = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.musicstop = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.opengame = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pause = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.pauseStop = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.smallbubbleImg = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.stone = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.stoneship = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.tiktok = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.timeout = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.timer = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.titlefirst = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.twitter = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.viewblueplanetearthspace3drendering = function() {
	this.initialize(img.viewblueplanetearthspace3drendering);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7000,4529);


(lib.waze = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.whitebox = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.WhiteBoxGreen = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.whiteRectangle = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.zoharwhite = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.zoom = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.רקע = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.רקע1 = function() {
	this.initialize(img.רקע1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3334,1421);


(lib.רקע2 = function() {
	this.initialize(img.רקע2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3334,1420);


(lib.רקע3 = function() {
	this.initialize(img.רקע3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5334,2084);


(lib.רקע4 = function() {
	this.initialize(ss["מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.רקע6 = function() {
	this.initialize(img.רקע6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6192,3000);


(lib.רקע7 = function() {
	this.initialize(img.רקע7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4167,1667);


(lib.רקע8 = function() {
	this.initialize(img.רקע8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4167,1667);


(lib.רקע9 = function() {
	this.initialize(img.רקע9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3084,926);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.finalPhoto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.mistakeTxt = new cjs.Text("", "34px 'Rubik Light'", "#FFFFFF");
	this.mistakeTxt.name = "mistakeTxt";
	this.mistakeTxt.textAlign = "center";
	this.mistakeTxt.lineHeight = 45;
	this.mistakeTxt.lineWidth = 97;
	this.mistakeTxt.parent = this;
	this.mistakeTxt.setTransform(538,380.95);

	this.gradeTxt = new cjs.Text("", "34px 'Rubik Light'", "#FFFFFF");
	this.gradeTxt.name = "gradeTxt";
	this.gradeTxt.textAlign = "center";
	this.gradeTxt.lineHeight = 45;
	this.gradeTxt.lineWidth = 132;
	this.gradeTxt.parent = this;
	this.gradeTxt.setTransform(783.75,380.95);

	this.timeTxt = new cjs.Text("", "34px 'Rubik Light'", "#FFFFFF");
	this.timeTxt.name = "timeTxt";
	this.timeTxt.textAlign = "center";
	this.timeTxt.lineHeight = 45;
	this.timeTxt.lineWidth = 97;
	this.timeTxt.parent = this;
	this.timeTxt.setTransform(1040.95,380.95);

	this.instance = new lib._final();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.timeTxt},{t:this.gradeTxt},{t:this.mistakeTxt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.finalPhoto, new cjs.Rectangle(0,0,1357,828), null);


(lib.shipstone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stoneship();
	this.instance.setTransform(44,82,0.6206,0.6206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shipstone, new cjs.Rectangle(44,82,144.6,266.9), null);


(lib.ClipGroup_27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVgNIACgKQACAFAGAHQALANAWAEQgMAMgKAGQgRgOgEgXg");
	mask.setTransform(2.575,2.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9579A7","#FFFFFF"],[0,1],-2.2,-0.2,2.3,0.2).s().p("AgZAYIAFgzIAuAEIgFAzg");
	this.shape.setTransform(2.575,2.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27, new cjs.Rectangle(0.4,0.4,4.3999999999999995,4.8999999999999995), null);


(lib.ClipGroup_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAEARQgagHgOgOQAbAQAWgFQAOgCAFgNQADgHgBgGQACAFABAHQAAAPgJAQQgLgBgNgEg");
	mask.setTransform(4.1013,2.85);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#9579A7"],[0,1],-3.9,-0.3,3.4,0.3).s().p("AgrAWIAFgyIBSAIIgFAwg");
	this.shape.setTransform(4.35,2.85);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25, new cjs.Rectangle(0.4,0.7,7.3999999999999995,4.3999999999999995), null);


(lib.ClipGroup_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgjAfQgTgDgEgLQgDgLAPgLQAPgNAZgHQAXgHATADQATACADALQADALgOAMQgPAMgZAHQgQAFgPAAIgLAAg");
	mask.setTransform(8.2,6.9379);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#003CEE","#0036D6","#00289E","#001C6E","#001246","#000A27","#000412","#000104","#000000"],[0,0.055,0.2,0.341,0.482,0.62,0.753,0.882,1],0,0,0,0,0,6).s().p("AhRgdICGgnIAdBiIiGAng");
	this.shape.setTransform(8.175,6.925);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23, new cjs.Rectangle(2.3,3.8,11.8,6.3), null);


(lib.ClipGroup_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhuBlQgRgPgLgSIgJgPIgXACQgFgUgHgUQAkg6A9guQB7hdCBA/QAOAxACA3QABAtgIAfIgBADQgPAageAVQgvAghBACIgIAAQhHAAgxgsg");
	mask.setTransform(23.2809,28.2801);

	// Layer_3
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(0,-0.05,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21, new cjs.Rectangle(5,13.8,36.6,28.999999999999996), null);


(lib.ClipGroup_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgqAeIgJhCQANAYAdAOQAQAJAXgCQAKgBAMgEIg4AhIgGAAQgRAAgPgHg");
	mask.setTransform(5.825,4.5863);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#9579A7"],[0,1],-5.4,-0.4,5.2,0.5).s().p("Ag5AlIAHhTIBsAKIgHBSg");
	this.shape.setTransform(5.825,4.65);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(0.7,0.9,10.3,7.4), null);


(lib.ClipGroup_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgwAKIgIgcQASADAWABQAuACAbgKQgEAHgJAIQgQARgWAKQgogCgSAGg");
	mask.setTransform(6.1,3.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#9579A7"],[0,1],-5.8,-0.4,5.5,0.5).s().p("Ag8AXIAFg3IB0AKIgEA3g");
	this.shape.setTransform(6.1,3.325);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(0.4,1,11.4,4.7), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhwCHQg2gWgrhPQgohIAHgpQAEgdAHgVQALgUAVgCQAigCAqBTQAVAqAOApIAZgIIAIAPQALASAPAPQAwAyBGAEQBfAHA8g/QgqAvg9AYQg7AWhAAGIghACQg2AAgrgRg");
	mask.setTransform(27.8041,19.7218);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#9579A7"],[0,1],-24.5,-2.1,24.9,2.1).s().p("AkSCeIAfloIIGAtIggFog");
	this.shape.setTransform(27.475,20.275);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(3.4,4.6,48.800000000000004,30.299999999999997), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnmJ0IAAznIPNAAIAATng");
	mask.setTransform(48.725,62.775);

	// Layer_3
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-0.05,76.2,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0,76.2,53.5,49.39999999999999), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhdBAIgPgRIgfhoIAEgBQAaAAATAFQAVAFAsgFQAvgFAZgOQATgKASgOQAOgLAEgBIACAAQAJAAAKAMIAKAUQAJAZgDAeQgDAigwAtQgwAtgoAFIgIABQgoAAgtgtg");
	mask.setTransform(15.8625,13.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F4DBEE","#D1BDE5"],[0,1],-0.5,-0.4,0,-0.5,-0.4,12.7).s().p("AifBrIAVjvIEqAaIgUDvg");
	this.shape.setTransform(16.025,13.325);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(1.9,2.5,27.900000000000002,21.7), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaClIgHgcQgfh6gfgxIAAgBIB8iFIAJAaQAIAWAbBDQAXA8AAAYQAAAhgnA4QgUAcgTAVg");
	mask.setTransform(12.4753,18.55);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F4F1FF","#D1BDE5"],[0,1],9.2,-1.1,0,9.2,-1.1,13.6).s().p("Ah8CmIAflfIDaATIgeFfg");
	this.shape.setTransform(12.475,18.55);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(2.9,1.7,19.200000000000003,33.8), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnmJ0IAAznIPNAAIAATng");
	mask.setTransform(48.725,62.775);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CAB3DA").s().p("AgLDzIAAgBIAAgBQgLgjgXgnQgqhGhAgtQAFgJAJgaIBKj6IAvAFQA0ABAXgQIAEAFQAiAxAIBKIACAlIASAvQATA4AGA1IACAbQgIAUgTAbQglA2g2AeIgtAHg");
	this.shape.setTransform(58.175,71.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(43,47.4,30.400000000000006,48.699999999999996), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgTCJQglgBgggVQgUgNgMgQIgBgBIgBgBIgBgBQgFgCgFgEQgKgJABgOQABgNAGgWIAFgTIAKgCQADgPAOgEIAjgDQAegFAZgNQAYgNAigZQAegWAPgNIAFgFQAGgKAMgGIAYABQAEAHABARQADAigOAxIAAAAIgCAJQgLAkgUAhQgVAkgZAWQgiAdghAAIgEAAg");
	mask.setTransform(16.765,16.2285);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F4DBEE","#D1BDE5"],[0,1],-0.5,-0.5,0,-0.5,-0.5,13.8).s().p("AirCIIAakqIE9AcIgaEpg");
	this.shape.setTransform(17.2,16.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(2.5,2.5,28.6,27.5), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhcDHIgMgHIgIhCQgFgvACgOQADgXBLjJIAPgpQA+AZAqBNQAYAsAKArIAAABIABABIAAAAIgiAzQgkA2gJAQQgLAUgeAbQggAcgVAJIgCABQgKAEgKAAQgHAAgHgCg");
	mask.setTransform(15.2733,22.121);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F4F1FF","#D1BDE5"],[0,1],0.3,0.1,0,0.3,0.1,16.4).s().p("AiXDKIAlmqIEKAXIglGqg");
	this.shape.setTransform(15.225,22.475);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(3.6,2,23.4,40.3), null);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiCDfQg2gWgrhPQgohJAHgpQAEgcAHgVQAghzBZgtQAkgSAygKQAugJAwAAIAVAAQAfACAYAGQAQAEALAGIAEABIAGAEQBCAyAWBuQARBXgQA+IgBACQgFASgUAXIgCACQgqAvg9AYQg7AWhAAGIghABQg3AAgqgQg");
	mask.setTransform(31.1112,28.5491);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D1BDE5","#FFFFFF"],[0,1],-2,23.5,2.2,-25).s().p("Ak3DzIAvoXIJAAyIguIXg");
	this.shape.setTransform(31.175,29.275);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, new cjs.Rectangle(4.9,4.6,52.4,47.9), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhUAzIAAhlICpAAIAABlg");
	mask.setTransform(8.525,5.125);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#53345F").s().p("AAXAwQgtgOgkglQgRgTgKgQICKgMIAgACQACAegFAbQgKAqgfAAQgIAAgKgDg");
	this.shape.setTransform(8.55,5.1369);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,17.1,10.3), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhPCZQgPgNgLgRIgIgOIgWACQgFgVgGgRQgMgngUggIgRgdQgDgQAPgiQAVgvAugfQA8gmBMgBQAfABAUAGQAPADALAGIADABIAGAEQA0AnAXBSQANAuACAyQABArgHAdIgBADQgOAZgdATQgsAeg9ACIgGAAQhDAAgvgqg");
	mask.setTransform(23.1544,22.9293);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#007C7E","#0F183B"],[0,1],-1.6,19,1.7,-19.7).s().p("AjoDCIAlmoIGsAlIglGog");
	this.shape.setTransform(23.275,23.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(3.6,3.4,39.199999999999996,39.1), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AifE/IgGgzIADgCIAhARQAmAOAdgJQAggMAfhHQAghDgHgSQgQgygngoQgbgcgigTIAPgpQAEgKAJgZQgjAfglgCQglgBgfgVQgVgNgMgQQAPASAZAMQAoASA0gKQAYgFATgSQAkghAPhGQAMg0gDgeIgCgKQgFgMgJgGIgIgEIAFgFQAHgJAMgHIAFAAIACAJQAJAwAAAzQAAAtgKAhQgWBSgMAPIAlA5QAqA6AZAOQAbANAwgiQAqgdAPgcIARgcIACAaIAJAZQhFCBgGAqQgGAsANBCIgEgBQgfh6gfgyIgnAFIgiA0QgiA2gJAQQgMAUgeAbQggAcgVAJIgCABg");
	mask.setTransform(29.4,37.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#9579A7"],[0,1],-24.3,-2.1,23.6,2).s().p("AklFOIA+rIIINAtIg9LIg");
	this.shape.setTransform(29.375,37.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(5.8,4,47.2,67.8), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVB9QAaAOATgVQAXgagMg9QgKg3gmg7QgUgdgRgSIAHgBQArAAAeBJQAPAkAGAjIAAAUQgBBRgiAOQgIAEgIAAQgLAAgKgHg");
	mask.setTransform(7.65,14.0762);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D1BDE5","#F4DBEE"],[0,1],-1,11.6,1.2,-14.1).s().p("AhMCQIAakqIB/ALIgaEqg");
	this.shape.setTransform(7.675,15.525);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(2.5,0.9,10.3,26.400000000000002), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgPAoIACAbIgxgxIgGhjIAKgCIABABQAaAAASAEQgNAXAEAfQAIA+BTAuQgpAAgrgsg");
	mask.setTransform(8.325,9.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9579A7","#FFFFFF"],[0,1],-7.5,-0.6,7.6,0.7).s().p("AhSBTIAPiyICWANIgPCyg");
	this.shape.setTransform(8.325,9.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(1.5,1.2,13.7,16.8), null);


(lib.ClipGroup_19_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgbHRQg2gKgagEQgygHgdgKQgngMgWgVQgSgQgegkQgHgJgXgWQgUgUgIgMIgTgeQgohfABhOQABhIAlg3QAkg4BEgjQARgJAegGIA0gKIAugSQAdgMAWACQA2AFAogGQAhgFAugRQAegLBKgVQA7gQAdgPQA9gfANgoIABgFQAIgagKgMQgOgKgFgKIgKgZQgGgMgUgPIgOgJQBPAoAcA8IAGAQQAFAegFAZQgNA3hEAoQgHAFghAOQgZALgQAOQggAbgnALQgNAEg7AJQgZADgyAZQgtAXgYgBQhFgCgkAlQgVAWgiA0QgJALgWAWQgRATgFARQgOAwAQBAQARBFArAmQAfAdA4AUQAgAMBHAVQArAOAzgBQAvgBAvgOQAtgNAvgeQAtgcAjgjIAJgLQg6Bch9ArQg+AXhGAJIgZABQgZAAgegFg");
	mask_1.setTransform(88.3164,88.0946);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F98100","#F57F00","#E97900","#D56E00","#B96000","#954D00","#683600","#351B00","#000000","#000000"],[0,0.082,0.165,0.247,0.329,0.412,0.498,0.576,0.651,1],-34.8,-38,11.1,12.2).s().p("AtzgqIOYtJINOOeIuYNIg");
	this.shape_1.setTransform(88.35,88.35);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_1, new cjs.Rectangle(47.2,41.1,82.3,94), null);


(lib.ClipGroup_17_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AkoBVIAYgwQAPgaAPgRQAGgGANgIIAVgNIAfgVIA2gzQAggfAbgMQA2gYBiACQBRABAeADQA9AIAgAWIACACQAKAHAKARQAFAIABALIABACQACAYgRASIgBABQgKAKgYAIIgvAQIg0AYQgiARgVAEQgnAJhdgBQhagBgoAKQgrAMg6ApIgRALQgRAIgYAKQgSALgKAcQAKgrAUgrg");
	mask_1.setTransform(32.716,17.2175);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#000000","#000000","#040200","#100800","#241300","#402100","#643400","#904B00","#C36500","#F98100"],[0,0.678,0.718,0.761,0.8,0.843,0.882,0.922,0.965,1],25.5,28.8,0,25.5,28.8,60.8).s().p("AlHCsIAAlXIKPAAIAAFXg");
	this.shape_1.setTransform(32.775,17.175);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_1, new cjs.Rectangle(0,0.1,65.5,34.3), null);


(lib.ClipGroup_14_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhDH0Qg2gKgagEQgygHgdgKQgngMgWgVQgSgQgegkQgHgJgXgWQgUgUgIgMIgTgeQgohfABhOQABgkAJghQgDATADALQAEAPANAHQAJAFAEAJIAIAcQAEATAGAJQAOAVAmAfQAnAgAKAOIADAFIAEAPQAGAUAFAGQASAlAZAWQAfAdA4AUQAgAMBHAVQArAOAzgBQAvgBAvgOQAtgNAvgeQAtgcAjgjIAJgLQg6Bch9ArQg+AXhGAJIgYABQgZAAgfgFgACsEtQAPgCAGgEQAWgLAPgWQAFgHAFgRQAEgRAFgHQAGgKAcgMQAdgMAHgJQAUgZgYgRIAjgWQAUgOAHgLQAFgIALgaQAIgRAUgeQAUgdAFgMIACgEQAPgjgKgmQgIghgXgaQAsAjAJBeQAIBKgPBHQgJAugYArQgZAugjAeQgnAggsAHQg5AIgTAAQgYAAgUgJgAm/j4QAVgrAKgRQgEALgEAVIgFAPQgEAJgBAHQgBAHABAKIABARIABACQgRAIgIAHQgMAKgIAWQAKgrAUgrgAFDjuQgOgSgYgDQAfgXAKgcIABgFQAIgagKgMQgOgKgFgKIgKgZQgGgMgUgPIgOgJQBPAoAcA8IAGAQQAFAegFAZQgKApgkAeQARgZgRgVgAlCmEIA2gzQAggfAbgMQA2gYBjACQBQABAeADQA9AIAgAWIACACQAKAHAKARQAFAIABALIABACQABARgIAOIgwgZQgHgDgNgMQgNgLgHgDQgTgIgTgBIgiACIgRgBIgPgBIgJgCIgXgDIgFgBQgNAAgdAEQgbAEgLgBQgigCgOABQgXACgYAKQgcANgJASQgMAWgFAFQgGAFgLACIgSADIgcAIIAegVg");
	mask_1.setTransform(47.8141,50.612);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#E6F5F5","#E6F5F5","#E5F1F0","#E1E6E2","#DAD4CB","#D1BAAB","#CCAC99"],[0,0.333,0.463,0.608,0.761,0.925,1],-2.1,-19.4,0,-2.1,-19.4,70.3).s().p("AnhH8IAAv3IPDAAIAAP3g");
	this.shape_1.setTransform(48.225,50.825);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_1, new cjs.Rectangle(0,0.1,95.7,101.10000000000001), null);


(lib.ClipGroup_12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgwENQgfgFgBgRQgCgRAVgBQAFgBASAFQAPADAQgEQAUgFAYgJQAPgDAQASQAaAggzAHQgOACgRAAQgaAAgigFgABXD2IgMgRQgEgJAPgCIATgDQAGACgEAOQgBAFgIAHQgFAFgDAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAgAhdDRQgFgFgCgHQgEgMAMgaQALgWALgMQADgEAHgFQAIgFADgDQACgDAEgIQADgIAEgCQAWgRAdgQQAfgQAagIIATgDQAMgBAHgCQADgBAFgGIAJgGQAOgFAbgCIAbgGQARgFAKgCQALgBAXABQgJAagkAhQgJAIgUAMQgVAMgJAIQgcAZgcAlQgaAcg2AUQgdALgbACIgKABQgTAAgYgFgACdCsQgcgLAbg0QAIgPAVgIQAXgJALAKQAIAFAEANQAEAOgJADQgKADgZAcQgQAUgNAAIgFgBgADpBPQgJgbASgKQAOgIAYAFQAXAEAEAJQAFAKgdACIgZAQQgKAGgGAAQgHAAgCgHgAknhXQAJgYAOgfQAWgcAigEQAGgBALABIARgBQAJgBALgFIAfgTQASgMANgFQAYgKAvAAQAjgBAmAGIAeAGQASADAMAAQAIAAAMgFQAOgFAFgBQAGgBALAAQALABAFgBQAagFALgIIAdgaIAKgIQADgBAGACQAHAFADAFQAKARAEAQQgEAWgdAPQgWALgdAEQgIABgPAAIgXgBQgsAGgWABIgZAAQgQAAgKABQgFAAgJAEIgOAGIgpAGQgWADgYAIQgVALgLADIgXAFQgPACgHADQgJAEgOALQgOAMgIAEQgMAHgWAGQgYAGgHADQgMAGgLAOIgUAgQgDgdAPgug");
	mask_1.setTransform(30.9618,27.5295);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#C2F5F4","#000012"],[0,1],-6.2,-26.1,0,-6.2,-26.1,55.9).s().p("AlSEWIAAorIKkAAIAAIrg");
	this.shape.setTransform(33.85,27.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_1, new cjs.Rectangle(0.2,0.2,61.599999999999994,54.699999999999996), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjfEWQgigcgKgQIgXg4IgGgQQgGgPACgOQADgPAKgLQAhglAxgZQAQgIAegHIA0gKIAugSQAdgLAWACQA2AGAogHQAhgFAvgRQAdgLArgMIBBgSQgBAlgPAmIgGAWQgGAWgUAHQgSAGgYAEIgsAHQgYAEgzAYQgtAYgZgBQhEgDgkAlQgVAWghA1QgJALgUAUQgRASgGAPQgVgIgOgKgAjwiMQARgcAXgSIAvggIAjgeQASgOAZgLQAggMAjgIQAMgCAjAAIAeACIAdABQAvAAAUAGQAdAKAfAhQAHAHAIAQQglALgUAJIg1AZQgiARgUAFQgoAIhcgBQhbgBgnALQghAIgmAYQAJgVAIgPg");
	mask.setTransform(30.5132,29.65);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#A48A7B","#000A00"],[0,1],-2.4,-13.3,0,-2.4,-13.3,54.8).s().p("AkuEoIAApPIJdAAIAAJPg");
	this.shape.setTransform(30.325,29.625);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0.4,0.1,60.300000000000004,59.199999999999996), null);


(lib.ClipGroup_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlDFLQiGiIAAjDQAAjBCGiJQCHiKC8AAQC+AACGCKQCGCJAADBQAADDiGCIQiGCKi+AAQi8AAiHiKg");
	mask_1.setTransform(45.8,46.9);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#71F5FF","#67E9FF","#4CC9FF","#44BFFF","#CE2FEB","#CE2FEB"],[0,0.149,0.424,0.498,0.922,1],-9,-24.1,0,-9,-24.1,79.6).s().p("AnJHVIAAupIOTAAIAAOpg");
	this.shape_1.setTransform(45.8,46.9);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_1, new cjs.Rectangle(0,0,91.6,93.8), null);


(lib.ClipGroup_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlvFVQgwh7AkhmIASg0QANgdASgQQATgRAcgIQAlgLAHgEQAxgbAcgMQArgTAngGQAcgEBcgIQBLgGArgJQAagGAtgXQBhgoAOgjQAIgRgPgPQgXgVgCgDQgPggghgSQhIgkiggFQA+gSA6gCIAFAAQAnAAArALQAuALAnAUIAOAIQAUAPAGAMIAKAaQAGAKAOALQAKAMgKAeQgNAng9AgQgcAOg7ARQhLAUgdALQgvARghAFQgoAHg2gGQgWgCgdAMIguATIg0AKQgeAGgQAIQhqA2gbBlQgbBmA5CHQgMgWgIgVg");
	mask_1.setTransform(42.4533,38.375);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#E87923","#AD4200"],[0,1],-15.9,-4.1,0,-15.9,-4.1,62.3).s().p("AmeGAIAAr/IM9AAIAAL/g");
	this.shape_1.setTransform(41.525,38.375);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_1, new cjs.Rectangle(3,0,79,76.8), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgNH5QgbABgogIIhDgMQgygHgdgKQgmgMgXgUQgRgRgfgkQgHgIgXgXQgTgUgJgLIgSgeQgphfABhPQAChIAkg3QAkg3BEgkQARgIAegHIA0gKIAugSQAdgMAWACQA2AGApgHQAggFAugRQAegLBLgVQA6gQAdgOQA9ggANgnIABgGQAIgagKgLQgNgLgGgJIgKgaQgGgMgUgPIgOgIQBPAoAcA8IAHAQQAFAdgGAaQgNA2hEAoQgHAFghAPQgZAKgPAOQghAcgnALQgNADg7AJQgZAEgxAYQgtAYgZgBQhFgDgkAkQgVAWghA1QgKALgWAWQgRATgFARQgOAwAQBAQARBFArAnQAgAdA3ATQAgAMBHAVQArAOAzgBQAvAAAvgOQAtgNAvgeQAtgdAjgjIAJgKQg6Bbh8AsQg/AWhGAJQgMABgNAAgADYE3QgcAAgXgOQgQgJgJghQgHgfAGgOQAEgJAVgKIAsgUIA1gaQAcgQASgdQAMgTAmgZQAjgVAPghQAqhbglheQAjAUAQA2QAOAuABA+IAAADQAAA0gJAsQgPBIgtA5QgyBBhDAKQg2AJgUAAIgCAAgAm+j3IAYgxQAOgZAQgTQAFgGANgHIAVgOIAggVIA1gzQAhgfAagLQAxgYBbAAIANABQBQABAfAEQA9AHAfAXIACAAQAKAJAKAQQAFAJABAKIABACQADAZgRARIgCACQgKAJgYAIIgvAQIg0AZQghARgUAFQgaAFglACIhCAAQgvAAgXABQgmABgbAIQgrAMg6AoIgRALQgRAJgXAKQgTALgKAbQAKgrAVgqg");
	mask.setTransform(47.8,50.55);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#ED9600","#E94E1B"],[0,1],-10.4,-23.7,0,-10.4,-23.7,71.8).s().p("AndH5IAAvyIO7AAIAAPyg");
	this.shape.setTransform(47.8,50.55);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,95.6,101.1), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhOF8QhHgVgggLQg4gUgfgdQgrgngRhFQgQg/AOgxQAFgQARgUQAWgVAJgMQAigzAVgWQAkglBFACQAYABAugXQAxgZAZgEQA7gJANgDQAngLAggcQAQgNAZgLQAhgPAHgEQBEgpANg2QAFgagFgdQAJAcgGAgQgDASgLAZQgLAcgTAOIgfAXIghAmQgUAVgRAHQghAOheATQhiATgrAQQh6AugxBRQgUAggDArQgDA0AAAQQABAoANAaQASAiAaAXQAlAiAzAQQAwARAcACQAsABBFgWQAPgFAcgEQAegFANgEQBkgcBAhPIgDAJQgIAVgRARQgjAjgtAdQgvAegtANQgvAOgvABIgHAAQguAAgpgOg");
	mask_1.setTransform(34.8683,39.4032);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F5812A","#B84706"],[0,1],-0.1,26.5,0,-0.1,26.5,73.5).s().p("AlXGKIAAsTIKvAAIAAMTg");
	this.shape_1.setTransform(34.375,39.45);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(1.1,0.1,67.60000000000001,78.7), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlRCyQgKhUARhLQAMgeAWgLIA1gaQA6gpArgMQAagHAmgCQAXgBAvABIBBAAQAlgCAagGQAUgEAigRIA1gZIAugQQAZgIAJgKIACgBQAMgNACgSQACgPgHgPIAKATQAXAmgPAUQgZATgLALQgZAdgNAJQgTAPgdAFQglAHhGgBIgaAAIhGABQgmABgdAGQgTAFgdAPQgfAQgMADIgqAKQgWAGgOAGQgcAPgVAcQg2BNARChQgTgTgHhAg");
	mask_1.setTransform(34.4917,26.375);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F5812A","#BD5519"],[0,1],-11.1,-5.4,0,-11.1,-5.4,60.2).s().p("AliEGIAAoMILFAAIAAIMg");
	this.shape_1.setTransform(35.475,26.25);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(0.3,0.3,68.4,52.2), null);


(lib.ClipGroup_1_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AieDBQgDgWAEgJQAEgIAVgLIAsgUQAlgQAQgJQAcgRARgdQAJgOAOgKQAGgGATgMQASgKAKgKQAOgOAKgUQAqhdgkhfQAGAEAEAEQAXAaAIAhQAJAmgOAjIgCAEQgGANgTAdQgUAegIAQIgQAiQgHALgVAOIgKAHQgPALgOAGIgoASQgZAKgRAMQg/AvgMAXQgIARAGAXQgJgRgEgXg");
	mask_1.setTransform(16.3865,23.25);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#D45C00","#8C3500"],[0,1],-13.1,9.7,0,-13.1,9.7,40.5).s().p("AinDpIAAnRIFPAAIAAHRg");
	this.shape_1.setTransform(16.8,23.25);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_1, new cjs.Rectangle(0.4,0,32.1,46.5), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlDFLQiGiIAAjDQAAhdAjhVQADAvgBASQgCAQgJAeQgIAegBAQQgCAuANAxQACALAKAPIAOAYQADAIAFAWQAFATAGAJQAKAPATARIAfAeIAXATQANAKAHAKQAEAFAEATQAEAQAHAHQAWAYAqAPQAJADAPAAIAZgBIAmABIAlABIAnAIQAZAGANABQAYACAWgIQAPgFAWgMIAkgUIAZgOQAPgIALgEQAGgCAQgBQAOgCAHgEQAYgMAPgXQAFgHAFgRQAEgSAFgGQAGgMAOgPIAXgaIAMgMQAGgHADgHQADgIADgMIADgUQAUhGAHgjQAHgogEgXQAAgJgIgPQgHgQgCgHQgCgMgCgcQgCgagEgNQgCgLgIgOIgNgWQgFgKgSgYQgPgWgHgNQgDgFgCgNQgCgNgDgEQgIgJgNgJIgXgPIgOgLQgHgGgGgDQgLgFgWgHQgVgIgKgFIgUgLQgNgJgHgCQgTgIgUgBQgJgCgSACQgSACgIgBIgYgDIgXgEIgjAAIgsABQA8gRA9AAQC+AACGCKQCGCJAADBQAADDiGCIQiGCKi+AAQi8AAiHiKgAgvFrQgdgKgGgNQgKgYAyAAQAqgCASAJQATAJgIAOQgIALgRAIQgJAEgLAAQgOAAgRgGgAhtFkQgTAAgEgCQgHgCAFgIQAEgHAFgCQAFgCAOAFQAOAFACAEQADADgCAEQAAACgMAAIgIAAgAFhgXQgGgCAAgFIgBgSIgHgRQgEgLAEgGQAEgGALAIQAIAHAEAFQAFAJgCALQAAALgFAIQgEAHgFAAIgCgBg");
	mask_1.setTransform(45.8,46.9);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F5F5FF","#F5F5FF","#F0EAFA","#E1CDED","#CA9DD9","#C899D7"],[0,0.325,0.455,0.682,0.976,1],-7.4,-12.4,0,-7.4,-12.4,72).s().p("AnJHVIAAupIOTAAIAAOpg");
	this.shape_1.setTransform(45.8,46.9);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,91.6,93.8), null);


(lib.ClipGroup_23_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AicG4QhRgTgigRQgSgIgkgmQgigjgcgmQhPhogNgoQgEgQgCgiQgCgnACgtQADg1ADgTQABAQAFAPQAFAQAHAGQAHAHALgFQAogWAJgCQAOgDANAGQAOAFAHAMQADAFAFAXQAEAVACATQAGA3AQAgQASAlAlAQQALAFAqAGQApAGAEADQASAIAGAWIAHAnQANAfArALQAPAEAvAIQAqAJANAKIAgAbQAkAUAtgMQAdgHAUgNQAFgDAggdQAXgUAUgEQAEAAAHABQAHACADgBQARgDAMgJQATgOANgUQAOgUAQgkIAYg7QAOgjAIgNQAKgRAQgTQAMgQACgcQgBAmgLA6QgKA0gGAQQgDAIgfAoQgcAjgaAeQgfAlgpAkQgqAkgcAOQgZANhYAOQgzAIhAAAQg+AAhfgXgAAPCEQgEgFgQgiQgPgcgMgJIgSgGQgQgGgGgEQgNgIgTgsIgghWQgMgggcgVQgegYgdAJQgIACgWANQgTALgNABQgIABgNgHIgTgJQgBgBgPAFIgWAGQgQADgHgLQgHgLADgOIAEgRIADgSQABgDgCgFIgCgJQABgYAegaQARgOAggZQAHgIAGgOQALgUASgMQAbgRAngOQAUgIAzgPIBPgXQAwgOAOABQA+ADBNAbQBUAdA6AqQAKAHAbANQAYALALAJQAPANAPAbQANAXADAOIAGAUIAMAfQAUA3AEARQAMAxgMAXIgOASQgIALgBALIAAAWQgBAPgDAFQgIAMgVANIgnAZIgbAWQgWARgQAHQgKAEguAAQg3AAgQACQgLABgZAFIgpAJQgKADgJAAQgaAAgTgVgABoBDQgDADgDAMQgDALgBAGQAAAEACAEQACAEADAAIA2gJIASgCQAMAAAHgCQAHgCABgGQAAgEgHgJQgHgKgFgCQgPgGgZAAQgbAAgKAIgAg5izQgSABgGAZQgFATADAVQAGAlAQAaQAGAKASAGQATAHAMgEQALgEACgMQABgJgFgQQgEgRAAgIIAFgiQAEgXgFgFQgLgKgSgGQgOgEgNAAIgEAAgAiZkGQgOAAgHAJQgEAEgBAGQgCAHACAEQAKAUAfAcQAIAIAJgDQAIgEADgNQAHgcgBgSQgBgKgLgEQgNgGgSAAIgGAAgAkSjtQgOACgMAQQgMAQAHAJQAHAIAIgDQAHgCAMgGIATgKIAPgGQAFgEgBgIQgBgIgEgBQgLgFgMAAIgNACg");
	mask_1.setTransform(48.925,46.4216);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#000000","#000000","#000000","#0E0915","#442E67","#6F4CA8","#8F61D7","#A26EF4","#A973FF"],[0,0.039,0.843,0.855,0.894,0.933,0.965,0.988,1],18.3,12.3,0,18.3,12.3,66.9).s().p("AnnHPIAAueIPPAAIAAOeg");
	this.shape_1.setTransform(48.825,46.35);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_1, new cjs.Rectangle(0.2,0.2,97.5,92.5), null);


(lib.ClipGroup_21_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgDBAQgYgFgIgQQgDgGgBgJIgDgPQgGgNgBgGQgCgXAMgkQgCAQACARQAGAkAQAaQAGAKARAGQATAHAMgEQAMgEABgLQgBAWgMAFQgLAFgNAAQgIAAgIgCg");
	mask_1.setTransform(5.1612,6.5594);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00E1FF","#000000"],[0,1],2.5,-1.1,0,2.5,-1.1,10.7).s().p("AgyBEIAAiHIBlAAIAACHg");
	this.shape.setTransform(5.1,6.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_1, new cjs.Rectangle(0.1,0,10.1,13.1), null);


(lib.ClipGroup_19_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AAJAqQgJgGgNgVQgXghgBgPQgBgDACgHQgBAGACAEQAKAUAeAaIACACQAIAGAHgDIAEgCQAFgFACgJQAFgRABgLQgBAegEAMIgDAJQgBADgGACIgDAGQgCAFgCABIgEACIgEgCg");
	mask_2.setTransform(3.895,4.375);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00E1FF","#000000"],[0,1],0.3,-2,0,0.3,-2,10.1).s().p("AgmAsIAAhXIBNAAIAABXg");
	this.shape_2.setTransform(3.875,4.375);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_2, new cjs.Rectangle(0.1,0,7.7,8.8), null);


(lib.ClipGroup_17_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgWAXQgMgEgDgJQgEgMAfgWQgKAIgEAKQgFAJAFAGQAHAIAIgDQAIgCALgGIATgJIAKgEQgPAIgbAVQgFADgFAAQgEAAgFgCg");
	mask_2.setTransform(4.1465,2.4842);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00E1FF","#000000"],[0,1],-5.7,1.2,0,-5.7,1.2,10.9).s().p("AgnAbIAAg1IBPAAIAAA1g");
	this.shape_2.setTransform(4,2.7);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_2, new cjs.Rectangle(0.3,0,7.7,5), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgtAUQgHgBgBgEQgDgKAKgZIgDAQQAAAEACADQACAEACAAIA1gIIATgCQAMAAAGgCQAGgCACgEIgBAEQgEAEgDABQgEACgRADIgXAFQgXAKgNADIgFAAIgHgBg");
	mask.setTransform(5.724,2.1321);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00E1FF","#000000"],[0,1],-3,-2.4,0,-3,-2.4,9.4).s().p("Ag3AWIAAgrIBvAAIAAArg");
	this.shape.setTransform(5.6,2.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(0.3,0,10.899999999999999,4.3), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB6DuQgWgHgWgSQgbgYgIgEQgLgGglgGIgzgHQgZgCgJgDQgNgDgPgOQgLgLgDgIQgFgKABgSQAAgXgBgGQgCgMgVgGQgQgEgQABQgaADgNAAQgcAAgVgIQgbgKgJgUQgQghgCgrQABgygBgbQgBgZgJgRQgMgYgYADQgHABgGADQgHAFgMAMQgNANgGAEQgJAGgLgGQgLgFgDgKQgFgMgBgjIACgKQABAQAEAPQAGAQAHAGQAHAHAKgFQApgWAIgCQAOgDAOAGQANAFAIAMQADAFAFAYQAEAVACATQAFA3ARAgQASAkAkAQQALAFAqAGQApAGAFADQASAIAGAWIAHAnQAMAfAsALQAOAEAvAIQArAJAMAKIAgAbQAkAUAugMQAcgHAVgNQAEgDAhgdQAWgUAVgEQADAAAHABQAHACAEgBQARgDALgJQATgOAOgUQAOgUAPgkIAZg6QAOgjAHgNQAFgIALgOQgHANgoBnQgZBEgkAlQgKAJgRAJQgSAJgOgDQgOgEgDABQgNAFgOAOQgQATgLAKQgPAOgoAMQgeAJgQAAQgHAAgEgBg");
	mask.setTransform(47.225,23.9444);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00E1FF","#000000"],[0,1],-19.1,-14.9,0,-19.1,-14.9,89.9).s().p("AnXDyIAAnjIOvAAIAAHjg");
	this.shape.setTransform(47.2,24.225);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0.1,0,94.30000000000001,47.9), null);


(lib.ClipGroup_11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiMEsIgggbQgJgIgWgFQAdgLARgbQAVghAHgGQAdgYAygIIBQgMQATgDAJgLQAOgQACgUQADgaACgDQADgJAJgMIAOgUIAXgTIAogYQAUgNAIgMQAEgFAAgPIABgXQAAgLAJgLIAOgSQAMgXgMgxQgFgRgTg3IgNgfIgBgFQBHBsAACBQAAAigGAiIgLANQgHAJgGAKQgHANgOAjIgZA7QgPAkgOAUQgOAUgTAOQgLAJgRADQgEABgHgCQgHgBgDAAQgVAEgWAUQggAdgEADQgVANgcAHQgRAFgPAAQgbAAgXgNgAjkDuQgRAAgFgEQgIgGADgPQACgQAQgDQAFgBAJACIAPAAIALgCQAHgDAEABQANACACAJQAEAMgKAKQgIAIgUAFQgFACgIAAIgKgBgAALB+QgFgBgBgFQgBgKAIgLQAIgMAMgDQAHgCAFAEQAFAEACALQACAKgDAEQgEAGgNADQgJADgHAAIgGgBg");
	mask_1.setTransform(26.0609,31.2715);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFFFFF","#F4FAFA","#D6EEED","#A6DAD7","#64BEB9","#35AAA4"],[0,0.325,0.396,0.522,0.682,0.875,1],-28.3,-20.4,0,-28.3,-20.4,71.2).s().p("AkCFAIAAp/IIFAAIAAJ/g");
	this.shape_1.setTransform(25.875,32);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_1, new cjs.Rectangle(0.4,0,51.4,62.6), null);


(lib.ClipGroup_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAADEQgngOgVgcQgNgQgHg5IgHhQQgFgxgoAIQgPADgyAbQgRAJgDgUQgBgIACgYQAIhGAthPQABgBAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAABQAAABAAABIgFAPIgHAWQgDARACAJQAFAaAggLIAQgEQALgDAEACQADACgBAMQgCAPARABQAOABAfgPIAsgVQAYgIAXAIQAZAJANAYQAQAeALAsIASBJQAGAUAKAHQAJAHAdAEIAUAFQAFACAEAIQAEAIgBAFQgBAJgKACQhPAOAGAGQABACAMAFQALAEAAAEQACAJgSAPQgTAQgTADQgVADgUAAQgiAAgdgKg");
	mask_1.setTransform(22.5138,20.645);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#91FBFF","#000000"],[0,1],-2.9,-24.4,0,-2.9,-24.4,61.1).s().p("AjdDTIAAmlIG7AAIAAGlg");
	this.shape_1.setTransform(22.2,21.125);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_1, new cjs.Rectangle(0.7,0.1,43.699999999999996,41.199999999999996), null);


(lib.ClipGroup_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AicG4QhRgTgigRQgSgIgkgmQgigjgcgmQhPhogNgoQgEgQgCgiQgCgnACgtQADg1ADgTQABARAGARIgBARIAAAEQABAVAJAVQADAGAKAOQAJANACAIQAKAfADAiQAFAcAgAgQAYAXAaAJQAQAGAbAEIApAGQAGADAKAQQANAVAFAFQARASA+ARQAgAJAoAJQAJADAUAAQATAAALgCQANgCAKABQAIACAMAFQAQAHAJAIQArApA8gQQAdgHAUgNQAFgDAggdQAXgUAUgEQAEAAAHABQAHACADgBQARgDAMgJQATgOANgUQAOgUAQgkIAYg7QAOgjAIgNQAFgKAIgJIALgOQANgSADgdQgBAmgLA6QgKA0gGAQQgDAIgfAoQgcAjgaAeQgfAlgpAkQgqAkgcAOQgZANhYAOQgzAIhAAAQg+AAhfgXgAFPAyQACgNgEgbQgHgtAKgbIARghQAEgJAAgKQgBgNgJgVQgKgXgCgKIgBgVQAAgNgDgHQgFgNgKgPIgTgbQgMgZgKgLQgFgGgJgGIgQgLQgGgFgLgLIgSgQIgZgOQgRgIgIgGQgEgCgIgKQgHgIgGgCQgegNg5gKIhdgMQAjgJAMAAQA+ADBNAbQBUAdA6AqQAKAHAbANQAYALALAJQAPANAPAbQANAXADAOIAGAUIAMAfQAUA3AEARQAMAxgMAXIgCADIgNAQQgHAKgBALIAAAWQgBAPgDAFQgIAMgVANIgnAZIgYATQAJgfACgVg");
	mask_1.setTransform(48.925,46.3237);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFFFFF","#F8F4F9","#E7D6E8","#CAA6CD","#A263A8","#700F79","#670070"],[0,0.455,0.502,0.584,0.694,0.824,0.973,1],-11.8,-12.4,0,-11.8,-12.4,74.9).s().p("AnnHPIAAudIPPAAIAAOdg");
	this.shape_1.setTransform(48.825,46.3);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_1, new cjs.Rectangle(0.2,0.1,97.5,92.5), null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ai6EgQgRgJgVgWQgEgDgEgJIgIgNQgMgPgOgJQgRgJgDgFQgPgPgGgQQgFgOAAgTIAFgBQApgVAIgDQAOgCAOAFQANAGAIAMQADAEAFAZQAEAUACATQAGBCAXAiQgNgCgHgEgAB6DaQgKgPgJgGIgSgHQgPgFgHgEQgMgIgTguIgghWQgMgggbgUQgfgXgdAIQgHACgWANQgTALgNABQgIAAgNgGIgTgJQgCAAgOAEIgXAGQgPADgHgLQgHgJACgQIAFgRIADgRQAAgEgCgFIgCgJIABgHQAFgXAigbIAWgQIASgQQAGgGAGgLIACgFQALgTASgMQAagSAngOQAVgIAygOIAZgJIAOABQAOACAOgBQAlgCAZAEQArAIAaANQAJAEAMALIAUASIAhAWQARANAGAWQAEAMABATIABAhQABAKAIAkQAGAdAAARIgBAQQgDAVgKASQgEAJgOAOQgNAOgFAJQgDAHgBAQQgCAQgDAHQgJAVgUALQgeARgDADQgGAHgIANIgNAUQgVAagHAFIgPgdgABOgnQgSABgGAZQgEATADAVQAGAkAPAbQAGAJATAGQASAHAMgEQAFgCAFgEQAEgFAAgFQABgIgEgRQgFgRAAgIIAGgiQAEgWgGgEQgLgLgSgFQgPgFgMAAIgFAAgADljDQgJABgBAGQgBAOAIAKQADADAHAEQAGADADAEQAEAHADAQQAAABAIAEQAJAGACADQAFAHAAAMQABAagLATIgVAoQgIASABAOQABAWAMAEQANADANgRQATgaACgbQADgXgIgkQgBgGgFgMIgGgTIgCgTQAAgNgBgHQgEgQgOgOQgNgNgNAAIgFABgAgQh6QgOAAgHAJQgEAEgCAGQgCAHADAEQAKAVAeAbQAHAIAJgDQAIgDADgOQAIgcgCgSQgBgKgKgDQgOgHgRAAIgFAAgAiKhhQgNADgMAPQgNARAHAIQAHAIAIgDQAIgCAMgGIATgKIAOgGQAGgDgBgJQgBgHgFgCQgLgEgLAAIgOABgAh8jfQgLAGgEAFQgEAHgIATIgIAUIgIAGIgKAFQgSAFgGAHQgEADgDAMQgCAMAFADQAJAEAPgCQADAAAFgEQAGgEACgBQADgBAMAAQAJAAAEgDQAJgGADgQQABgGgBgOIgBgOQABgIAGgHIAIgKQACgCABgIQAAgIgCgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEAAgGADg");
	mask_1.setTransform(31.325,29.45);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#8D6EFF","#000000"],[0,1],-19.4,-25.6,0,-19.4,-25.6,62.9).s().p("Ak4EmIAApMIJxAAIAAJMg");
	this.shape_1.setTransform(31.325,29.45);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(0,0,62.7,58.9), null);


(lib.ClipGroup_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrEnIibhSIi2ipIhViLIgRg6IgBgiQAKg+BXgdQBLgbCCAAQByABCNASQCrAYBvAvQB+A3ABBEIgBARIgGAaIgpBnIgiBIIhHBLIhdA3IhuAyg");
	mask_2.setTransform(48.35,30.55);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#4F309E","#46288E","#391D77"],[0,0.365,1],-47.1,0,47.2,0).s().p("AnjEyIAApjIPGAAIAAJjg");
	this.shape_2.setTransform(48.35,30.55);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_2, new cjs.Rectangle(0,0,96.7,61.1), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlPE/QiLiEAAi7QAAi6CLiEQCLiEDEAAQDFAACLCEQCLCEAAC6QAAC7iLCEQiLCEjFAAQjEAAiLiEg");
	mask.setTransform(47.525,45.125);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#71F5FF","#6AE9FF","#57CAFF","#54C5FF","#1483FF","#1483FF"],[0,0.125,0.353,0.384,0.922,1],-17.2,-20.2,0,-17.2,-20.2,77.6).s().p("AnaHDIAAuFIO1AAIAAOFg");
	this.shape.setTransform(47.525,45.125);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,95.1,90.3), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AicG4QhRgTgigRQgSgIgkgmQgigjgcgmQhPhogNgoQgHgaAAg8IAAgDIABgtQADg1ADgTQABAQAFAPQAFAQAHAGQAHAHAKgFQArgWAHgCQAOgDANAGQAOAFAHANQADAFAFAWQAEAVACATQAGA3AQAgQASAlAlAQQALAFAqAGQApAGAEADQASAIAGAWIAHAnQANAfArALQAPAEAvAIQAqAJANAKIAgAbQAkAUAtgMQAdgHAUgNQAFgDAggdQAXgUAUgEIALABQAGACAEgBQARgDAMgJQATgOANgUQAOgUAQgkIAYg7QANggAJgQQAKgRAQgTQAMgQACgcQgBAmgLA6QgKA0gGAQQgDAIgfAoQgcAjgaAeQgfAlgpAkQgqAkgcAOQgZANhYAOQgzAIhAAAQg+AAhfgXgAAPCEQgEgFgQgiQgPgcgMgJIgSgGQgQgGgGgEQgNgIgTgsIgghWQgMgggcgVQgegYgdAJQgIACgWANQgTALgNABQgIABgNgHIgTgJQgBgBgPAFIgWAGQgQADgHgLQgHgLADgOIAEgRIADgSQABgDgCgFIgCgJQABgYAegaQARgOAggZQAHgIAGgOQALgUASgMQAbgRAngOQAUgIAzgPQB2gkAVAAIACAAQA+ADBNAbQBUAdA6AqQAKAHAbANQAYALALAJQAPANAPAbQANAXADAOIAGAUIAMAfQAUA3AEARQAMAxgMAXIgOASQgIALgBALIAAAWQgBAPgDAFQgIAMgVANIgnAZIgbAWQgWARgQAHQgLAFg3gBQgtAAgQACQgeADgvAMQgKADgJAAQgaAAgTgVgABoBDQgDADgDAMQgDALgBAGQAAAEACAEQACAEACAAIABAAIA2gJIASgCQAMAAAHgCQAGgCACgGQAAgEgHgKQgIgJgEgCQgPgGgZAAQgbAAgKAIgAg5izQgSABgGAZQgFATADAVQAGAlAQAaQAFAIAOAGQANAGANAAQAFAAAFgBQAFgCADgEQAEgFABgFQABgJgFgQQgEgRAAgIIAFgiQAEgXgFgFQgLgKgSgGQgOgEgNAAIgEAAgAiZkGQgOAAgHAJQgEAEgBAGQgCAHACAEQAKAUAfAcQAFAFAIAAIAEAAQAIgEADgNQAHgcgBgSQgBgKgLgEQgNgGgSAAIgGAAgAkSjtQgOACgMAQQgMAQAHAJQAEAGAIAAIADgBQAHgCAMgGIATgKIAPgGQAFgEgBgIQgBgIgEgBQgLgFgMAAIgNACg");
	mask_2.setTransform(48.725,46.275);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#7A369E","#6E349E","#4F309E","#33128A"],[0,0.227,0.631,1],-14.2,-20.9,0,-14.2,-20.9,70.9).s().p("AnmHPIAAudIPNAAIAAOdg");
	this.shape_2.setTransform(48.725,46.275);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(0,0,97.5,92.6), null);


(lib.ClipGroup_85 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhBAkQgSglgIgaQANgMAYgRQAagRASgIQAOADAXALQAUAJAHAFQAXAjAOAsIgdAkQgkAOgoAFQgZgSgagbg");
	mask.setTransform(9.15,8.15);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","#000000"],[0,0,1],-7.7,-12,0,-7.7,-12,18.5).s().p("AhbBRIAAiiIC2AAIAACig");
	this.shape.setTransform(9.15,8.15);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_85, new cjs.Rectangle(0,0,18.3,16.3), null);


(lib.ClipGroup_83 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhTByQgPgGgIgFQgEgWABgfQAFgQATghQAVghAQgTQA0gwAxgVQAOAIAQAOQARANAKAMQgQA/gjBEQg2Alg7AaQgMgBgRgGg");
	mask.setTransform(11.0659,12.1);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","#000000"],[0,0,1],-2.9,-17.8,0,-2.9,-17.8,23.9).s().p("AhuB5IAAjxIDdAAIAADxg");
	this.shape.setTransform(11.05,12.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_83, new cjs.Rectangle(0.1,0,22,24.2), null);


(lib.ClipGroup_81 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkBeQgjgegtgdQACgdAIgSQAxgzA3geQBBA2A2AdQgOAeg4AmQg1AkgdAAIgBAAg");
	mask.setTransform(11.725,9.4013);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","#000000"],[0,0,1],-10,-19.4,0,-10,-19.4,29).s().p("Ah0BfIAAi9IDpAAIAAC9g");
	this.shape.setTransform(11.725,9.475);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_81, new cjs.Rectangle(0,0,23.5,18.8), null);


(lib.ClipGroup_78 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgUAPIAAgdIApAAIAAAdg");
	mask.setTransform(2.05,1.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#796AE5").s().p("AgGAPQgDgBgGgLQgGgMADgDQADgEAPAEQAQADAEAJQACACgMAHQgKAGgFAAIgBAAg");
	this.shape.setTransform(2.0393,1.4996);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_78, new cjs.Rectangle(0,0,4.1,3), null);


(lib.ClipGroup_77 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag1gTQAAgWADgbIAvgPQAaAaAQApQAQAmgCAiQgXAMgYAGIgwAKQgLg2AAgxg");
	mask.setTransform(5.3566,8.375);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#1A4340","#FFFFFF"],[0,1],-9,-4.8,0,-9,-4.8,18.6).s().p("Ag2BUIAAinIBsAAIAACng");
	this.shape.setTransform(5.45,8.375);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_77, new cjs.Rectangle(0,0,10.7,16.8), null);


(lib.ClipGroup_75 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlPFeQiLiRAAjNQAAjNCLiRQCLiRDEAAQDFAACLCRQCLCRAADNQAADNiLCRQiLCSjFgBQjEABiLiSg");
	mask.setTransform(47.5,49.55);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#94FFE1","#88F9DC","#67E8D1","#33CEBD","#2DCBBB","#008A86","#008A86"],[0,0.09,0.255,0.475,0.498,0.961,1],-14.9,-23.4,0,-14.9,-23.4,78).s().p("AnaHvIAAveIO1AAIAAPeg");
	this.shape.setTransform(47.5,49.55);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_75, new cjs.Rectangle(0,0,95,99.1), null);


(lib.ClipGroup_73 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgjAAQgJgzAAgNQALgDAMAAIAGAAQAQAMAQASQASAUAKARQgcAggmAkQgFgMgJg4g");
	mask.setTransform(4.475,6.825);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AB46DB","#AB46DB","#DA92F7"],[0,0,1],-2.4,17.3,0,-2.4,17.3,24.5).s().p("AgsBEIAAiHIBZAAIAACHg");
	this.shape.setTransform(4.475,6.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_73, new cjs.Rectangle(0,0,9,13.7), null);


(lib.ClipGroup_72 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgWAhQgdgkgEgKQAngkAbghQAhAkAMA2QgDAXgDAOQgDAIgIAMQgJAMgHAGQgPgLgegng");
	mask.setTransform(5.625,8.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B24CED","#791D9B"],[0,1],-1.9,-9.1,0,-1.9,-9.1,19.3).s().p("Ag3BTIAAilIBvAAIAAClg");
	this.shape.setTransform(5.625,8.325);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_72, new cjs.Rectangle(0,0,11.3,16.7), null);


(lib.ClipGroup_71 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAIgLQgJgRgSgUQgQgSgRgMQAJACAQALQAOAJAGAGQAYAZAZA1QAHATAEAgQgMg2ghgkg");
	mask.setTransform(5.325,7.925);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B24CED","#73069B"],[0,1],-10.1,8.1,0,-10.1,8.1,16.2).s().p("Ag0BPIAAidIBpAAIAACdg");
	this.shape.setTransform(5.325,7.925);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_71, new cjs.Rectangle(0,0,10.7,15.9), null);


(lib.ClipGroup_70 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AggAeQAWgkArgoQgTAwgIAtQgSgEgUgNg");
	mask.setTransform(3.325,4.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D487FF","#D487FF","#7F34CB"],[0,0,1],-1.1,-2.7,0,-1.1,-2.7,12.7).s().p("AggAvIAAhdIBBAAIAABdg");
	this.shape.setTransform(3.325,4.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_70, new cjs.Rectangle(0,0,6.7,9.4), null);


(lib.ClipGroup_69 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgIgfQATANATAEQgBAOABAVQgbAJggABQAFgeAQggg");
	mask.setTransform(3.025,3.15);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D487FF","#D487FF","#7F34CB"],[0,0,1],4.5,-11,0,4.5,-11,24.4).s().p("AgdAfIAAg+IA7AAIAAA+g");
	this.shape.setTransform(3.025,3.15);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_69, new cjs.Rectangle(0,0,6.1,6.3), null);


(lib.ClipGroup_68 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AghgSQAhgCAbgJQADAPAFANQgeAJgmAWQgCgaACgWg");
	mask.setTransform(3.55,3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9D41FC","#6514A9"],[0,1],2.3,-2.9,0,2.3,-2.9,24.5).s().p("AgiAeIAAg7IBFAAIAAA7g");
	this.shape.setTransform(3.525,3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_68, new cjs.Rectangle(0.1,0,7,6), null);


(lib.ClipGroup_67 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZASQgPgIgIgGQAmgWAdgKQAOATAQAMQgKAIgOAHQgPAHgKADQgJgCgQgIg");
	mask.setTransform(4.9,2.85);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9D41FC","#6514A9"],[0,1],-4.6,-8.7,0,-4.6,-8.7,19.3).s().p("AgwAcIAAg4IBhAAIAAA4g");
	this.shape.setTransform(4.9,2.85);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_67, new cjs.Rectangle(0,0,9.8,5.7), null);


(lib.ClipGroup_66 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgnBMQgFgNgDgPQgBgWABgOQAIgtATgxQAVgQAVgIQAIALAJAVQAJAXAAAQQgDAagPAmQgRAtgWAhQgQgNgOgSg");
	mask.setTransform(4.905,10.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9D41FC","#6514A9"],[0,1],-9.1,-2.4,0,-9.1,-2.4,17.6).s().p("AgwBrIAAjVIBhAAIAADVg");
	this.shape.setTransform(4.875,10.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_66, new cjs.Rectangle(0.1,0,9.700000000000001,21.4), null);


(lib.ClipGroup_65 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSgQQARgKAKgBQAEAEAHAMQAGALADAGQgiALgXAKQADgYAHgTg");
	mask.setTransform(2.925,2.75);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#C799FF","#C799FF","#7C4BC4"],[0,0,1],0.4,-3.4,0,0.4,-3.4,9.5).s().p("AgcAbIAAg2IA5AAIAAA2g");
	this.shape.setTransform(2.925,2.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_65, new cjs.Rectangle(0,0,5.9,5.5), null);


(lib.ClipGroup_64 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAAQgHgMgEgEQAlAAAbAHQAHAIAIAOIgFAAQggABgVADQgDgIgHgJg");
	mask.setTransform(4,1.675);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#6D31B5","#6D31B5","#9B5BF5"],[0,0,1],6.3,3.9,0,6.3,3.9,12.6).s().p("AgnARIAAghIBPAAIAAAhg");
	this.shape.setTransform(4,1.675);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_64, new cjs.Rectangle(0,0,8,3.4), null);


(lib.ClipGroup_63 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AACgHQAWgDAegBQgUABgiAIQgjAHgSAHQAWgKAhgJg");
	mask.setTransform(5.675,1.225);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#5617A3"],[0,1],-3.5,11.4,0,-3.5,11.4,16.6).s().p("Ag4ANIAAgZIBxAAIAAAZg");
	this.shape.setTransform(5.65,1.275);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_63, new cjs.Rectangle(0.3,0,10.799999999999999,2.5), null);


(lib.ClipGroup_61 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbAQQAHgXAHgLQACgEAIgJIAPgNQAOAWAKAXQgFAPgJAOQgYAMghADQAAgGAIgXg");
	mask.setTransform(3.6,4.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BA92FF","#BA92FF","#7A5AEF"],[0,0,1],7.2,1.7,0,7.2,1.7,14.9).s().p("AgjAtIAAhZIBHAAIAABZg");
	this.shape.setTransform(3.6,4.525);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_61, new cjs.Rectangle(0,0,7.2,9.1), null);


(lib.ClipGroup_60 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgNAPQgKgHgFgIQAggDAZgMQAAAPgDAOQgEABgRAAIgHABIgLgBg");
	mask.setTransform(2.9,1.5583);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9969FF","#6B3FE0"],[0,1],0.8,-2.6,0,0.8,-2.6,8.5).s().p("AgcAQIAAgfIA5AAIAAAfg");
	this.shape.setTransform(2.9,1.575);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_60, new cjs.Rectangle(0,0,5.8,3.1), null);


(lib.ClipGroup_59 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgNACQAJgNAEgQQAIgDAIgBQABAOgDARQgBAEgNANQgLANgFACQADgPAAgPg");
	mask.setTransform(1.6542,3.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9969FF","#613BCE"],[0,1],-4.7,-4.2,0,-4.7,-4.2,9.8).s().p("AgQAgIAAg/IAhAAIAAA/g");
	this.shape.setTransform(1.675,3.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_59, new cjs.Rectangle(0,0,3.3,6.4), null);


(lib.ClipGroup_58 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgTgWIABAAQAMAAAMAOQAHAJAHARQgIACgIADQgJgXgOgWg");
	mask.setTransform(2.025,2.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9969FF","#6B3FE0"],[0,1],-3.3,-1.3,0,-3.3,-1.3,10.9).s().p("AgTAXIAAgtIAnAAIAAAtg");
	this.shape.setTransform(2.025,2.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_58, new cjs.Rectangle(0,0,4.1,4.6), null);


(lib.ClipGroup_56 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgWglQADADATALQASAKAFABQgEAggGASQgegugFgdg");
	mask.setTransform(2.325,3.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#C799FF","#C799FF","#7C4BC4"],[0,0,1],9.7,-10.3,0,9.7,-10.3,21.8).s().p("AgWAmIAAhLIAtAAIAABLg");
	this.shape.setTransform(2.325,3.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_56, new cjs.Rectangle(0,0,4.7,7.6), null);


(lib.ClipGroup_55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhPAoQgFgBgTgKQgTgLgEgDQAngbBLgSQBCgRA/AAQAFATAEAJQgpAghFAjQhUgGgLgCg");
	mask.setTransform(12.65,4.825);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#C799FF","#C799FF","#7C4BC4"],[0,0,1],1.7,21.2,0,1.7,21.2,28.5).s().p("Ah+AwIAAhfID8AAIAABfg");
	this.shape.setTransform(12.65,4.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_55, new cjs.Rectangle(0,0,25.3,9.7), null);


(lib.ClipGroup_54 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhgACQBGgiAoghQAPAWAcAhQAaAgANAMQgIARgNAPIgDAAQhEAAhkhAg");
	mask.setTransform(9.65,6.6267);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AC70FF","#AC70FF","#6D31B5"],[0,0,1],-24.4,-32.1,0,-24.4,-32.1,48.7).s().p("AhgBDIAAiFIDAAAIAACFg");
	this.shape.setTransform(9.65,6.675);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_54, new cjs.Rectangle(0,0,19.3,13.3), null);


(lib.ClipGroup_53 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AADATQgbgggPgWQgEgJgFgTQAXADAJADQAYATAdAmQAIAPAEAaQgBAIgFAPQgNgMgbghg");
	mask.setTransform(4.9,6.425);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#5A1DA3"],[0,1],-16.5,12.9,0,-16.5,12.9,23.6).s().p("AgwBAIAAh/IBhAAIAAB/g");
	this.shape.setTransform(4.9,6.425);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_53, new cjs.Rectangle(0,0,9.8,12.9), null);


(lib.ClipGroup_52 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhOA9QgHgEgSgWQgSgWgRgZQAGgTAEggQALACBVAGQBmBBBFgCQgfAZg3AQQgwAPgsAAQgUAAgTgDg");
	mask.setTransform(13.925,6.385);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#9B5BF5","#6D31B5"],[0,0,1],-5.3,-23.2,0,-5.3,-23.2,37).s().p("AiKBFIAAiJIEVAAIAACJg");
	this.shape.setTransform(13.925,6.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_52, new cjs.Rectangle(0,0,27.9,12.8), null);


(lib.ClipGroup_50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdAOQADgPAJgNQAIgEAMgDQAOgDAJAAIAEAAQgGAYgKAZQgXgEgUgHg");
	mask.setTransform(2.975,2.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D487FF","#D487FF","#7F34CB"],[0,0,1],2.4,-7.1,0,2.4,-7.1,13.6).s().p("AgdAZIAAgxIA7AAIAAAxg");
	this.shape.setTransform(2.975,2.525);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_50, new cjs.Rectangle(0,0,6,5.1), null);


(lib.ClipGroup_49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AANAWQgQgLgGgFQgRgQgKgYQAUAHAWAEQAKAcAVAeQgGgCgSgLg");
	mask.setTransform(3.7,3.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#7019BC","#7019BC","#9D41FC"],[0,0,1],4.7,4.9,0,4.7,4.9,50.9).s().p("AgkAjIAAhFIBJAAIAABFg");
	this.shape.setTransform(3.7,3.525);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_49, new cjs.Rectangle(0,0,7.4,7.1), null);


(lib.ClipGroup_48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgygEQAKgZAGgZQAzAZAiAXQABAJgDALQgQASgXAOIgOAFIgQAEQgVgegJgdg");
	mask.setTransform(5.1361,5.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9D41FC","#6514A9"],[0,1],-7.3,-3.5,0,-7.3,-3.5,19.5).s().p("AgzA3IAAhtIBmAAIAABtg");
	this.shape.setTransform(5.15,5.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_48, new cjs.Rectangle(0,0,10.3,11), null);


(lib.ClipGroup_46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgegdQAZAdAkAWQgEAEgHAEQgbgegXgdg");
	mask.setTransform(3.1,3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#5617A3"],[0,1],4.1,-5.3,0,4.1,-5.3,8.4).s().p("AgeAeIAAg7IA9AAIAAA7g");
	this.shape.setTransform(3.1,3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_46, new cjs.Rectangle(0,0,6.2,6), null);


(lib.ClipGroup_45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgfAIIAKgIQAZgCAYgHQABAJADAJIgbABQgSAAgSgCg");
	mask.setTransform(3.225,1.0393);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#5617A3"],[0,1],-2.1,-8.9,0,-2.1,-8.9,11.8).s().p("AgfALIAAgVIA/AAIAAAVg");
	this.shape.setTransform(3.225,1.075);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_45, new cjs.Rectangle(0,0,6.5,2.1), null);


(lib.ClipGroup_44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgNAAQAEgIAFgKIASAFQgLARgLAOQgDgJgCgJg");
	mask.setTransform(1.35,1.85);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#5617A3"],[0,1],-6.8,-4.4,0,-6.8,-4.4,10.4).s().p("AgNASIAAgkIAbAAIAAAkg");
	this.shape.setTransform(1.35,1.85);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44, new cjs.Rectangle(0,0,2.7,3.7), null);


(lib.ClipGroup_43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAAnQgEgOgMgpQgBgNABgOQAHADAGAFQAQAlAFAqIgSgFg");
	mask.setTransform(1.825,4.375);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#622CA3"],[0,1],-9.4,3.6,0,-9.4,3.6,12.5).s().p("AgRAsIAAhXIAjAAIAABXg");
	this.shape.setTransform(1.8,4.375);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43, new cjs.Rectangle(0.1,0,3.5,8.8), null);


(lib.ClipGroup_42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AARAIQgUgEgPAAQgPAAgTAFQAYgLASgHQAUgEAUAAIAXACQgBAMABANIgkgGg");
	mask.setTransform(5.325,1.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BA82FF","#BA82FF","#7C4BC4"],[0,0,1],0.5,7,0,0.5,7,10.4).s().p("Ag0AOIAAgbIBpAAIAAAbg");
	this.shape.setTransform(5.325,1.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42, new cjs.Rectangle(0,0,10.7,2.8), null);


(lib.ClipGroup_41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag6gEQgDgOAAgXQAUgFAOAAIABAAQAOAAAVADIAkAHQAMApAFAOQgGAJgDAJQgYAHgaADQgkgXgZgcg");
	mask.setTransform(6.175,4.725);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BA82FF","#BA82FF","#7C4BC4"],[0,0,1],-2,-6.2,0,-2,-6.2,15.7).s().p("Ag9AvIAAhdIB7AAIAABdg");
	this.shape.setTransform(6.175,4.725);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41, new cjs.Rectangle(0,0,12.4,9.5), null);


(lib.ClipGroup_39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaACQgXglgMghQBIAwAzAyQgPAWgZARQgZgcgXgng");
	mask.setTransform(6.15,6.875);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AC70FF","#AC70FF","#6D31B5"],[0,0,1],-5.8,-6.7,0,-5.8,-6.7,33.6).s().p("Ag9BFIAAiJIB7AAIAACJg");
	this.shape.setTransform(6.15,6.875);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39, new cjs.Rectangle(0,0,12.3,13.8), null);


(lib.ClipGroup_38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgDAXQgogMgbgNQAZgQAOgWQAqAQAtAEQAMAYADAlQgggEgqgOg");
	mask.setTransform(7.05,4.125);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#622CA3"],[0,1],6.4,-18.7,0,6.4,-18.7,28.4).s().p("AhGApIAAhRICNAAIAABRg");
	this.shape.setTransform(7.05,4.125);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38, new cjs.Rectangle(0,0,14.1,8.3), null);


(lib.ClipGroup_37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhdAgQAbgbATgdQAxgbAmgnQAcACAagFIgEAfQgSA3gkArQg0Amg/AUQgCglgMgZg");
	mask.setTransform(9.425,9.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#5A1DA3"],[0,1],-17.9,-26.8,0,-17.9,-26.8,37.9).s().p("AhdBeIAAi7IC7AAIAAC7g");
	this.shape.setTransform(9.425,9.425);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37, new cjs.Rectangle(0,0.1,18.9,18.7), null);


(lib.ClipGroup_36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag2g1QA1AXA4ATQgmAmgxAbQgQg2gGg1g");
	mask.setTransform(5.525,5.425);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BA82FF","#BA82FF","#7C4BC4"],[0,0,1],-15.4,-23.5,0,-15.4,-23.5,31.3).s().p("Ag2A2IAAhrIBtAAIAABrg");
	this.shape.setTransform(5.525,5.425);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36, new cjs.Rectangle(0,0,11.1,10.9), null);


(lib.ClipGroup_35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABZBJQg6gTg0gXQg2gdhDg1QAngQAmgGQBIAZAvAaQA0ArAlAxQgSAEgRAAIgTgBg");
	mask.setTransform(14.25,7.3779);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#6D31B5","#6D31B5","#9B5BF5"],[0,0,1],14.2,6.7,0,14.2,6.7,30.1).s().p("AiOBKIAAiTIEdAAIAACTg");
	this.shape.setTransform(14.25,7.425);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35, new cjs.Rectangle(0,0,28.5,14.8), null);


(lib.ClipGroup_34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEBoQgzg0hIgvQACgcAIgTQAxgzA3geQBBA2A2AdQAGA1AQA2QgSAegcAbQgtgEgpgQg");
	mask.setTransform(12.825,12.425);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#C799FF","#C799FF","#7C4BC4"],[0,0,1],-8.3,-8.1,0,-8.3,-8.1,45.1).s().p("Ah/B8IAAj3ID/AAIAAD3g");
	this.shape.setTransform(12.825,12.425);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34, new cjs.Rectangle(0,0,25.7,24.9), null);


(lib.ClipGroup_33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgyBgIgNgPQAIg7gDguQATgSAsgZQAigUAWgJQAGA1gHA4QgMAagLAUQgJAPgNAJQgMAGgUAFQgQADgJAAIgIgBg");
	mask.setTransform(6.4009,9.7058);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AB46DB","#AB46DB","#DA92F7"],[0,0,1],-7.7,-4.9,0,-7.7,-4.9,22.6).s().p("AhABiIAAjDICBAAIAADDg");
	this.shape.setTransform(6.475,9.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33, new cjs.Rectangle(0,0,12.8,19.4), null);


(lib.ClipGroup_32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjgCQAKACAWgEQAWgFALgGQANgJAJgPQAXgFAXAAIADAAIAqAIQALANAKARQgfAYgmATQgdAIgbAAQgygZgYgWg");
	mask.setTransform(10.025,4.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B24CED","#791D9B"],[0,1],-1.4,-9.2,0,-1.4,-9.2,18.8).s().p("AhjAtIAAhZIDHAAIAABZg");
	this.shape.setTransform(10.025,4.525);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32, new cjs.Rectangle(0,0,20.1,9.1), null);


(lib.ClipGroup_31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgBgWQAKAVAQATQgZgBgYAGQAMgUALgZg");
	mask.setTransform(2.5,2.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D173F7","#D173F7","#933CBC"],[0,0,1],3.2,-3.6,0,3.2,-3.6,11.3).s().p("AgYAXIAAgtIAxAAIAAAtg");
	this.shape.setTransform(2.5,2.325);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31, new cjs.Rectangle(0,0,5,4.7), null);


(lib.ClipGroup_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgWAEQAVgVAYgQQgGAjgRAgIAAAAQgLgRgLgNg");
	mask.setTransform(2.3,3.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#B24CED","#73069B"],[0,1],-11,-6.9,0,-11,-6.9,15.3).s().p("AgWAiIAAhDIAtAAIAABDg");
	this.shape.setTransform(2.3,3.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30, new cjs.Rectangle(0,0,4.6,6.8), null);


(lib.ClipGroup_29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgdBHQgQgUgLgVQAHg4gGg1QAOABALAFQAZATANAOQAfAoASAqQgZAPgVAXIgogJg");
	mask.setTransform(5.725,7.975);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#7A10AD","#7A10AD","#B24CED"],[0,0,1],9.1,2.9,0,9.1,2.9,28.4).s().p("Ag4BQIAAifIBxAAIAACfg");
	this.shape.setTransform(5.725,7.975);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29, new cjs.Rectangle(0,0,11.5,16), null);


(lib.ClipGroup_28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgGgUQAJAUAFAUIgIABQgJgkADgFg");
	mask.setTransform(1.0359,2.125);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#5A1DA3"],[0,1],3.1,-0.7,0,3.1,-0.7,12.1).s().p("AgIAVIAAgpIARAAIAAApg");
	this.shape.setTransform(0.9,2.125);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28, new cjs.Rectangle(0.3,0,1.5,4.3), null);


(lib.ClipGroup_27_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgNARQAKgQAIgXIAHgBIACAAQgCAXgFAYg");
	mask_1.setTransform(1.4,2.425);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#9B5BF5","#5A1DA3"],[0,1],-5.3,-2.1,0,-5.3,-2.1,9.1).s().p("AgNAYIAAgvIAbAAIAAAvg");
	this.shape_1.setTransform(1.4,2.425);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27_1, new cjs.Rectangle(0,0,2.8,4.9), null);


(lib.ClipGroup_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOgLQAIgFADgEIATAHQgIAOgXAUQgBgTACgNg");
	mask.setTransform(1.63,2.075);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#5A1DA3"],[0,1],-4.2,-5.1,0,-4.2,-5.1,9.7).s().p("AgPAVIAAgpIAfAAIAAApg");
	this.shape.setTransform(1.625,2.075);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26, new cjs.Rectangle(0,0,3.3,4.2), null);


(lib.ClipGroup_25_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgGARQgPgKgHgGQgEgHgDgHQAJgFAOgLQAZAPAXAAQgCAOABASQgJAGgLAGIgVgNg");
	mask_1.setTransform(3.575,2.95);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#AC70FF","#AC70FF","#6D31B5"],[0,0,1],0,-6.6,0,0,-6.6,11.8).s().p("AgjAeIAAg7IBHAAIAAA7g");
	this.shape_1.setTransform(3.575,2.95);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_1, new cjs.Rectangle(0,0,7.2,5.9), null);


(lib.ClipGroup_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAMgnIAGAFQgLAggDAbQgNALgJAEQAKgiAUgtg");
	mask.setTransform(1.85,4.025);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#5A1DA3"],[0,1],5,2.4,0,5,2.4,13.4).s().p("AgSAoIAAhPIAkAAIAABPg");
	this.shape.setTransform(1.85,4.025);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24, new cjs.Rectangle(0,0,3.7,8.1), null);


(lib.ClipGroup_23_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgQAJQAPgNASgJQgTARgIAKg");
	mask_2.setTransform(1.7,1.425);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#B173FF","#B173FF","#7C4BC4"],[0,0,1],0.2,-1.1,0,0.2,-1.1,10.7).s().p("AgQAOIAAgbIAhAAIAAAbg");
	this.shape_2.setTransform(1.7,1.425);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_2, new cjs.Rectangle(0,0,3.4,2.9), null);


(lib.ClipGroup_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgnAlQADgcAMgfQAIgLATgSQAQAEAPAIQgDAFAJAlQgKAYgJAQQgEAEgIAFQgVAAgbgPg");
	mask.setTransform(3.95,5.175);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#C799FF","#C799FF","#7C4BC4"],[0,0,1],-1.3,-5.2,0,-1.3,-5.2,15.3).s().p("AgnA0IAAhnIBPAAIAABng");
	this.shape.setTransform(3.95,5.175);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22, new cjs.Rectangle(0,0,7.9,10.4), null);


(lib.ClipGroup_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAcAbIgPgCQghgVgWgeQAIAFAPAFQARAGALACQAQAUASAPIgDAAIgMAAg");
	mask.setTransform(4.325,2.7333);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BD6AFF","#BD6AFF","#7F34CB"],[0,0,1],-2.4,-5.8,0,-2.4,-5.8,15.1).s().p("AgqAcIAAg3IBVAAIAAA3g");
	this.shape.setTransform(4.325,2.775);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(0,0,8.7,5.5), null);


(lib.ClipGroup_19_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhIANQA7gZA1glQAPAkASAVQgJAIgrAQQgqAQgRABQgTgPgPgVg");
	mask.setTransform(7.375,4.95);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#7019BC","#7019BC","#9D41FC"],[0,0,1],13.8,11,0,13.8,11,24).s().p("AhJAxIAAhiICSAAIAABig");
	this.shape.setTransform(7.35,4.95);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_0, new cjs.Rectangle(0.1,0,14.6,9.9), null);


(lib.ClipGroup_19_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhuBUQAdgjBFg+QBDg+AdgkQARAXAKAbQgGBlgbAqQgWALgrAJQgnAJghABQgUgCgfgag");
	mask_3.setTransform(11.05,11.2);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#1A4340","#FFFFFF"],[0,1],-3.6,-6.8,0,-3.6,-6.8,20.1).s().p("AhuBwIAAjfIDdAAIAADfg");
	this.shape_3.setTransform(11.05,11.2);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_3, new cjs.Rectangle(0,0,22.1,22.4), null);


(lib.ClipGroup_18_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglAmQAjhFAQhAQAMASAIASQAEANgBAQQgHAlgIAcQgKAcgPAgQgTgWgPgjg");
	mask.setTransform(3.75,9.55);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9D41FC","#6514A9"],[0,1],-26,-8.6,0,-26,-8.6,33.6).s().p("AglBfIAAi+IBKAAIAAC+g");
	this.shape.setTransform(3.75,9.55);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_0, new cjs.Rectangle(0,0,7.5,19.1), null);


(lib.ClipGroup_17_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhSByQgQgGgIgFQgEgWABgfQAFgQATghQAVghAQgTQA0gwAxgVQAOAIAQAOQARANAKAMQgQA/gjBEQg2Alg6AaQgNgBgQgGg");
	mask.setTransform(11.0659,12.1);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D487FF","#D487FF","#7F34CB"],[0,0,1],-4.1,-6.2,0,-4.1,-6.2,53.1).s().p("AhuB5IAAjxIDdAAIAADxg");
	this.shape.setTransform(11.05,12.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_0, new cjs.Rectangle(0.1,0,22,24.2), null);


(lib.ClipGroup_17_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AkrB0ICdhyQA6BNAJgGQAJgFgrhZIEAi8IBJAtQAuAbAbAYQAKAzgFAtQgKATgRAZQgRAZgHAFQgmAbgwASQgoAPgZACQg4gIgkgNQgJAAggAKQgVAkgdAXQgVALgtAPQgqAOgQADQgzgqglg0g");
	mask_3.setTransform(29.9698,20.975);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#1A4340","#FFFFFF"],[0,1],-5.6,-27,0,-5.6,-27,51.9).s().p("AksDSIAAmjIJZAAIAAGjg");
	this.shape_3.setTransform(30.075,20.975);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_3, new cjs.Rectangle(0,0,60,42), null);


(lib.ClipGroup_15_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOgLIAWAQIAGADQgGAEgFAAQgKgLgHgMg");
	mask.setTransform(1.45,1.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BA82FF","#BA82FF","#7C4BC4"],[0,0,1],0,-2.3,0,0,-2.3,5.1).s().p("AgOAMIAAgXIAcAAIAAAXg");
	this.shape.setTransform(1.45,1.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_0, new cjs.Rectangle(0,0,2.9,2.4), null);


(lib.ClipGroup_15_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ag4AjIgQhPQBQAfBBA6QgwgJhRgBg");
	mask_1.setTransform(7.3,4.475);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#1A4340","#FFFFFF"],[0,1],-8.5,0.1,0,-8.5,0.1,16.7).s().p("AhIAtIAAhZICRAAIAABZg");
	this.shape_1.setTransform(7.3,4.475);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_1, new cjs.Rectangle(0,0,14.6,9), null);


(lib.ClipGroup_14_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgkAWQAGgaAKgTQAbADAegCQgWAXgsAXg");
	mask.setTransform(3.675,2.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#622CA3"],[0,1],-8.1,-11.6,0,-8.1,-11.6,15.5).s().p("AgkAYIAAgvIBJAAIAAAvg");
	this.shape.setTransform(3.675,2.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_0, new cjs.Rectangle(0,0,7.4,4.8), null);


(lib.ClipGroup_13_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgQA+QgJgYgIggIAAgFQABgmACgcQAHgHAMgHQAMACAbAAIAFAEQgaAeAJAjQgEAVAJAVQgKATgGAbg");
	mask.setTransform(3.35,7.95);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#CCA3FF","#CCA3FF","#7C4BC4"],[0,0,1],-3.3,-12.4,0,-3.3,-12.4,22.3).s().p("AghBQIAAifIBCAAIAACfg");
	this.shape.setTransform(3.35,7.95);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_0, new cjs.Rectangle(0,0,6.7,15.9), null);


(lib.ClipGroup_13_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgyAAIA4gXQARAZAcAWQgzgGgygSg");
	mask_1.setTransform(5.125,2.375);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#1A4340","#FFFFFF"],[0,1],-3,-5.4,0,-3,-5.4,10.7).s().p("AgyAYIAAgvIBlAAIAAAvg");
	this.shape_1.setTransform(5.125,2.375);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_1, new cjs.Rectangle(0,0,10.3,4.8), null);


(lib.ClipGroup_12_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYA2QgJgVAEgXQgJghAageIATgCQAHAPAIAiQALAngBAVIgaACQgPAAgPgCg");
	mask.setTransform(3.6121,5.5568);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#622CA3"],[0,1],-5.3,-7.7,0,-5.3,-7.7,20).s().p("AgiA4IAAhvIBFAAIAABvg");
	this.shape.setTransform(3.475,5.575);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_0, new cjs.Rectangle(0.4,0,6.5,11.1), null);


(lib.ClipGroup_11_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgMABIASgFIAHAHIgTACg");
	mask.setTransform(1.3,0.475);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#6D31B5"],[0,1],-1.4,-0.1,0,-1.4,-0.1,7.2).s().p("AgMAFIAAgJIAZAAIAAAJg");
	this.shape.setTransform(1.3,0.475);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_0, new cjs.Rectangle(0,0,2.6,1), null);


(lib.ClipGroup_11_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AibBgIDBjAQA/AlA3AvQg+A0hLAcQhMAdhUAAg");
	mask_2.setTransform(15.6,9.675);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#1A4340","#FFFFFF"],[0,1],-1,-8.3,0,-1,-8.3,19.5).s().p("AibBhIAAjBIE3AAIAADBg");
	this.shape_2.setTransform(15.6,9.675);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_2, new cjs.Rectangle(0,0,31.2,19.4), null);


(lib.ClipGroup_10_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgcAHQAPgHAQgHIAaAKIgTAFQgZAAgNgBg");
	mask.setTransform(2.925,0.825);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D4B3FF","#D4B3FF","#7C4BC4"],[0,0,1],-0.8,-0.3,0,-0.8,-0.3,10.4).s().p("AgcAIIAAgPIA5AAIAAAPg");
	this.shape.setTransform(2.925,0.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_0, new cjs.Rectangle(0,0,5.9,1.7), null);


(lib.ClipGroup_9_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgJgjQAHAbARAkQgOADgPAFQgCghAHgmg");
	mask.setTransform(1.6265,3.55);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#C799FF","#C799FF","#8E56E0"],[0,0,1],-1.3,-0.7,0,-1.3,-0.7,35.1).s().p("AgPAkIAAhHIAfAAIAABHg");
	this.shape.setTransform(1.575,3.55);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_0, new cjs.Rectangle(0.1,0,3.1,7.1), null);


(lib.ClipGroup_9_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgMA5IgkgPIAwhkQAKAGANAMQALAKADAFQAEAHADALQAFAKAAAFIgEALQgDAKgCADQgNAPgWALQgDABgDAAQgFAAgGgCg");
	mask_2.setTransform(4.85,5.9317);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#1A4340","#FFFFFF"],[0,1],-2.4,-3,0,-2.4,-3,9.7).s().p("AgwA8IAAh3IBhAAIAAB3g");
	this.shape_2.setTransform(4.85,5.975);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_2, new cjs.Rectangle(0,0,9.7,11.9), null);


(lib.ClipGroup_8_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgogoQAQgFAOgCQAaAbAYASQgHAVgQAdQgagigfg2g");
	mask.setTransform(4.05,4.825);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AC70FF","#AC70FF","#6D31B5"],[0,0,1],0.8,-8.8,0,0.8,-8.8,21.6).s().p("AgoAwIAAhfIBQAAIAABfg");
	this.shape.setTransform(4.05,4.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_0, new cjs.Rectangle(0,0,8.1,9.7), null);


(lib.ClipGroup_7_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhYADQAPgdAIgWQApgFAigPQAoBHAnAzQgTAIgeAGQg5gShHgvg");
	mask.setTransform(8.925,6.85);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#622CA3"],[0,1],-2.5,-8.7,0,-2.5,-8.7,67.9).s().p("AhYBEIAAiIICxAAIAACIg");
	this.shape.setTransform(8.925,6.85);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_0, new cjs.Rectangle(0,0,17.9,13.7), null);


(lib.ClipGroup_7_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgYBCIgUgPIgTgQIBYhrQAKAMALATQAMAUACAGQACAJACANQABAPgCAFIgHANQgHALgEADQgTANgeAGIgDAAQgJAAgIgHg");
	mask_2.setTransform(6.395,7.3118);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#1A4340","#FFFFFF"],[0,1],-3.6,-4.3,0,-3.6,-4.3,13.7).s().p("AhABJIAAiSICAAAIAACSg");
	this.shape_2.setTransform(6.45,7.35);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_2, new cjs.Rectangle(0,0,12.8,14.6), null);


(lib.ClipGroup_6_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhHgqIAegkQAkAFAYAJQAeAcAXAhQgbAxgmAhQgmgzgohGg");
	mask.setTransform(7.2,7.925);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#622CA3"],[0,1],-16.4,-9.1,0,-16.4,-9.1,34.8).s().p("AhHBPIAAidICPAAIAACdg");
	this.shape.setTransform(7.2,7.925);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0, new cjs.Rectangle(0,0,14.4,15.9), null);


(lib.ClipGroup_5_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgaAGQAGgcgEgtQAjBDAQBEQgYgigdgcg");
	mask.setTransform(2.65,6.75);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#9B5BF5","#5A1DA3"],[0,1],-17.9,6.6,0,-17.9,6.6,20.3).s().p("AgaBEIAAiHIA1AAIAACHg");
	this.shape.setTransform(2.65,6.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0, new cjs.Rectangle(0,0,5.3,13.5), null);


(lib.ClipGroup_5_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AkBEVQgSgVABgUQAAgEAEgIQAEgJAAgEQAAgMgLgnQgKgngFgKQgCgFgIgFQgIgGgDgDQgCgDABgOQABgNAEgCQAEgBAHAGQAIAGADABQAUACAqgIQAkgHAZgIQAMgEAGgJQAmhCAGhZQABgNgGgNQgDgGgUgZIgTgZQgCgPAwgcQAmgVAVgHQBPgaA8AGQBGAHA5AzQAUASAKARQAJAPgEAGQgEAGgHAAQgKgBgYgJQhcgmguAAQgcAAgcARQgYAQgSAZQgJAMgCAfQgCAfAGAOQAOAjAWAdQAMANAbAaQAMALgDAJQgDAJgNABQhCAJgfAVQg6ApgeAlQgaAfAQApQADAIAAAEQABAIgGACQgDABgQgCQgPgCgFADQgFAEgJAKQgIAKgGADQgDACgEAAQgKAAgNgPgADcB/QgggFgcgaQgEgDADgDQAFgGAWgDQAOgBAPAAQAOAAAGAGQAIAIgEARQgDARgMAAIgEgBgAEkgjQgGgMABgNQABgKAGgDQAFgCAJAGQAGAEABAHQABAIgGALQgEAIgFABIgBABQgFAAgDgGgAEkhVQgFAAgDgDQgHgIgKgSQgKgTgCgLQgCgKAMgJQAMgJAGAJQAJAOAHAXQAIAcgIAKQgCADgEAAIgBAAg");
	mask_2.setTransform(31.6354,30.455);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#C4FFE2","#000000"],[0,1],-21.7,-23.8,0,-21.7,-23.8,68.4).s().p("Ak7EvIAApdIJ3AAIAAJdg");
	this.shape_2.setTransform(31.6,30.275);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_2, new cjs.Rectangle(0.1,1.3,63.1,58.400000000000006), null);


(lib.ClipGroup_4_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AATAuQgOgtgWgiQgIgFgTgIQgYgLgOgDQAuAFAUAGQARAFAfAMIAyAUQADAsgFAdQgZgKgkgFg");
	mask_1.setTransform(8.3181,6.075);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#9B5BF5","#9B5BF5","#6D31B5"],[0,0,1],-11.7,5.4,0,-11.7,5.4,23).s().p("AhTA9IAAh5ICnAAIAAB5g");
	this.shape_1.setTransform(8.375,6.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0_1, new cjs.Rectangle(0,0,16.7,12.2), null);


(lib.ClipGroup_3_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhBAkQgSglgIgaQANgMAYgRQAagRASgIQAOADAXALQAUAJAHAFQAXAjAOAsIgdAkQgkAOgoAFQgZgSgagbg");
	mask_1.setTransform(9.15,8.15);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#B980FF","#B980FF","#883FF2"],[0,0,1],-8.7,3.3,0,-8.7,3.3,35.5).s().p("AhbBRIAAiiIC2AAIAACig");
	this.shape_1.setTransform(9.15,8.15);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_1, new cjs.Rectangle(0,0,18.3,16.3), null);


(lib.ClipGroup_3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AlPFeQiLiRAAjNQAAhVAbhPQgOBNANARIALAIQAGAEAAAKIgIBEQgHA3AHAcQAOA2AaAJQADABAYABQATABASANQBZA+AuAtQANAMgEAwQgCAQAOAKQAMAHASACQARAAAHgNIAOgVQAOgMAhgOQArgRA+gMQA+gMAvAAIAeADQAWACAEgBQA1gKAfggQALgKACgRQACgKABgeIACgiQAGgiAbgtQAXgmAEg0QABgGgEgUQgEgUAAgHQABgIAFgGQAEgIABgHQADgfgnhRQgmhQgZgTQgIgGgJAAQgHgBgIgIQgDgEgQgZQgPgYgNgLQhMhAgyAAQgXACgRgCQgvgIgYgBQgggBgrAGQhLAMhPAwQA7grBEgXQBHgYBKAAQDFAACLCRQCLCRAADNQAADNiLCRQiLCSjFgBQjEABiLiSg");
	mask_3.setTransform(47.5,49.55);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#FFFFFF","#F4FAFA","#D6EEED","#A6DAD7","#64BEB9","#35AAA4"],[0,0.325,0.396,0.522,0.682,0.875,1],-15.9,-19.6,0,-15.9,-19.6,78.6).s().p("AnaHvIAAveIO1AAIAAPeg");
	this.shape_3.setTransform(47.5,49.55);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_3, new cjs.Rectangle(0,0,95,99.1), null);


(lib.ClipGroup_1_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgFAPQgDgBgGgMQgHgLADgDQACgCAEAAQAIAAAKAEQAMAEABAFQACACgLAIQgJAGgEAAIgCAAg");
	mask_2.setTransform(2.2616,1.4813);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#6D31B5","#6D31B5","#9B5BF5"],[0,0,1],-0.7,-2.2,0,-0.7,-2.2,3.6).s().p("AgVAPIAAgeIArAAIAAAeg");
	this.shape_2.setTransform(2.2,1.55);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_2, new cjs.Rectangle(0.3,0,3.9000000000000004,3), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AlPFeQiLiRAAjNQAAjNCLiRQCLiRDEAAQDFAACLCRQCLCRAADNQAADNiLCRQiLCSjFgBQjEABiLiSg");
	mask_3.setTransform(47.5,49.55);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#000000","#000000","#000000","#0B1510","#366751","#58A884","#70D7A9","#7FF4C0","#85FFC8"],[0,0.039,0.843,0.855,0.894,0.933,0.965,0.988,1],6.2,8.8,0,6.2,8.8,58.5).s().p("AnaHvIAAveIO1AAIAAPeg");
	this.shape_3.setTransform(47.5,49.55);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(0,0,95,99.1), null);


(lib.ClipGroup_44_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgKF8QgPgMAAgYQABgXAOgOQALgLAPgBQAagCAiAIQAfAIAbANQAiARgNAUQgKAQggAJQgoALgeAAQgiAAgTgPgAjDFuQghgPgggYQglgdgMgaQgQgiAZgKQAPgGAkADQAfADAkAGQAyAJAVAUQAaAagHAxQgHAsghACIgEAAQgVAAgmgSgAmWCqQgFAAgDgDQgJgFgIgPQghg8gChQQgChVAlgwQATgZAWAIQALAEAZAZQAgAfAYAOQAiAVAugIQAsgIAcgdQAUgVAMgdQAFgNAMgrIATg9QAMgjATgTQAOgOAVgGQAOgEAaAAQAdAAAvAHIBMALIBiANQA7ACAjgaQAOgKAAgUQgBgUgOgLQAcgNAyBJQARAagCAQQgDASgeASQh6BJg6AoQg7AngvAyQgzA6gmAmQgmAlgiAXQglAXgnALQgtANhLgDQhggDgcADIgiADQgMADgQAOQgDACgEAAIgBAAgADwCGQgogTgLgsQgLgpAUgoQAPggAugnQAsgmAjgMQAugQAdAPQAeAOAPAwQAPAvgKA8QgMBBgiAbQggAZg3AAQgxAAgpgUgAjqh/QgNgHgFgSQgFgVARghIAPgcQAKgSADgLIAFgcQACgOAJgIQAIgIAKgDQAMgCAJAGQAcAWgCAtQgCAmgUAiQgbAsgbAKQgHADgHAAQgHAAgGgDg");
	mask_1.setTransform(48.4333,40.693);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#000000","#000000","#000000","#150B10","#673651","#A85885","#D770AA","#F47FC1","#FF85CA"],[0,0.039,0.922,0.925,0.949,0.965,0.98,0.992,1],18.8,4.6,0,18.8,4.6,64.8).s().p("AngGWIAAsrIPBAAIAAMrg");
	this.shape_1.setTransform(48.05,40.625);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44_1, new cjs.Rectangle(1.8,1.2,93.4,79.1), null);


(lib.ClipGroup_42_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ag2BaQgNgVADgZQAEgoAfgkQAPgTAVgSQAbgWASgGQAMgDACADQACAGgRAXQgdAlgHAKQgOAWgIATQgFANgDAXQgDAXgDAIQgEALgLABIgDAAQgJAAgGgJg");
	mask_1.setTransform(6.7333,10.0219);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF8FCD","#000000"],[0,1],-8.2,-11.2,0,-8.2,-11.2,28.5).s().p("AhDBnIAAjNICHAAIAADNg");
	this.shape_1.setTransform(6.825,10.25);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42_1, new cjs.Rectangle(0.2,0.1,13.100000000000001,19.9), null);


(lib.ClipGroup_40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgoAOQgOgCgDgFQgDgFAKgIQAIgHAXgCQATgBAPADQAwAKgEAJQgFAJgsABIgHAAQgUAAgXgCg");
	mask.setTransform(6.5489,1.7811);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF8FCD","#000000"],[0,1],-3.7,-10.9,0,-3.7,-10.9,16.9).s().p("AhJARIAAghICTAAIAAAhg");
	this.shape.setTransform(7.375,1.725);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40, new cjs.Rectangle(0.7,0.2,11.8,3.1999999999999997), null);


(lib.ClipGroup_38_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AANAKQgcgCgSgHQgPgEAAgDQAAgEARAAQATgBAbAGQAkAHgCAGQgBADgPAAIgUgBg");
	mask_1.setTransform(4.928,1.476);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F7C7FF","#000000"],[0,1],-11,3.5,0,-11,3.5,19.6).s().p("Ag3AOIAAgcIBvAAIAAAcg");
	this.shape_1.setTransform(5.6,1.45);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38_1, new cjs.Rectangle(0,0.4,9.9,2.2), null);


(lib.ClipGroup_36_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgZA2QgEgGAQgZQAOgXACgfQAAgIAEgHQAEgJAHABQAEABACAHQADAGgBAIQgCAVgGAPQgHAQgMAPQgRAUgGAAIgBgBg");
	mask_1.setTransform(2.8061,5.6694);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F7C7FF","#000000"],[0,1],-4,-6.6,0,-4,-6.6,16.8).s().p("AgbA5IAAhxIA3AAIAABxg");
	this.shape_1.setTransform(2.775,5.675);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36_1, new cjs.Rectangle(0.2,0.2,5.3,11), null);


(lib.ClipGroup_34_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgUA9QgFgEACgRQADgWAKgbQAKghAMgLQALgKABADQABACgGALQgPAdgKAnIgFAVQgEAUgDAAIgCgBg");
	mask_1.setTransform(2.5519,6.8828);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F7C7FF","#000000"],[0,1],-5,-1.7,0,-5,-1.7,16.1).s().p("AgaBJIAAiRIA1AAIAACRg");
	this.shape_1.setTransform(2.675,7.325);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34_1, new cjs.Rectangle(0.2,0.7,4.8,12.4), null);


(lib.ClipGroup_32_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhgA1QglgbgYg0QgEgJAFgKQAFgJAFAGIAaAiQARAVAOALQA0AqA8gNQAsgKAiggQAigeAPgrQAEgLADAAQADgBAAAFQgCASgFANQgRAugvAlQgvAkgsAEIgOABQgsAAgkgbg");
	mask_1.setTransform(16.372,8.5017);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F7C7FF","#000000"],[0,1],-5,-10,0,-5,-10,31.3).s().p("AihBWIAAirIFDAAIAACrg");
	this.shape_1.setTransform(16.2,8.55);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32_1, new cjs.Rectangle(0.4,0.5,32,16), null);


(lib.ClipGroup_30_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgpBLQgNgHgFgSIgBgKQASAjAigVQAfgUAUglQAUgngEgjQAFAXgHAdQgGAZgMAVQgbAsgaAKQgHADgHAAQgHAAgGgDg");
	mask_1.setTransform(6.1292,7.819);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FCF9FC","#F2E9F3","#E2CEE3","#CBA8CE","#AE77B3","#8B3D92","#670070"],[0,0.094,0.22,0.361,0.514,0.675,0.843,1],-5,-6.4,0,-5,-6.4,23).s().p("Ag/BRIAAihIB/AAIAAChg");
	this.shape_1.setTransform(6.375,8.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30_1, new cjs.Rectangle(0,0,12.3,15.7), null);


(lib.ClipGroup_28_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhQCGQA/gCAqgnQAqgnAGhFQAGhFgggzQAQASAJAdQAPAvgKA8QgMBBgiAbQggAZgzAAQgNAAgPgCg");
	mask_1.setTransform(8.0912,13.6142);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FCF9FC","#F2E9F3","#E2CEE3","#CBA8CE","#AE77B3","#8B3D92","#670070"],[0,0.094,0.22,0.361,0.514,0.675,0.843,1],-4.3,-2.9,0,-4.3,-2.9,30.8).s().p("AhVCKIAAkTICrAAIAAETg");
	this.shape_1.setTransform(8.575,13.775);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28_1, new cjs.Rectangle(0,0,16.2,27.3), null);


(lib.ClipGroup_26_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhFAlQAaABAfgIQAigIAWgQQAegVgpgYIANAGQAiAQgNATQgKAQggAKQgoAMgdAAQgOAAgLgDg");
	mask_1.setTransform(7.043,3.953);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FCF9FC","#F2E9F3","#E2CEE3","#CBA8CE","#AE77B3","#8B3D92","#670070"],[0,0.094,0.22,0.361,0.514,0.675,0.843,1],-3.6,-3,0,-3.6,-3,15.7).s().p("AhSAqIAAhTIClAAIAABTg");
	this.shape_1.setTransform(8.325,4.175);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_1, new cjs.Rectangle(0,0,14.1,7.9), null);


(lib.ClipGroup_24_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgWBHQAoACAMggQAEgLAAgQQAAgngXgVQgRgQgngMIABAAQAxAJAVAUQAaAagHAwQgFAhgUAKQgIADgKAAQgKAAgOgEg");
	mask_1.setTransform(4.634,7.5315);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FCF9FC","#F2E9F3","#E2CEE3","#CBA8CE","#AE77B3","#8B3D92","#670070"],[0,0.094,0.22,0.361,0.514,0.675,0.843,1],-4.9,-2,0,-4.9,-2,16).s().p("AgyBOIAAibIBlAAIAACbg");
	this.shape_1.setTransform(5.1,7.775);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_1, new cjs.Rectangle(0,0,9.3,15.1), null);


(lib.ClipGroup_22_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ABgA1QgWgBhAgMIhrgWQhAgNgtAAQAOgCATAAQAdAAAvAHIBMALIBhANQA7ACAjgaQAMgJACgQQABgRgKgNIgGgFIAFgCQAEgBADACQANAFAHALQAHAMgBAOQgCAagZARQgbATguAAIgLAAg");
	mask_1.setTransform(20.7063,5.3183);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FCF9FC","#F2E9F3","#E2CEE3","#CBA8CE","#AE77B3","#8B3D92","#670070"],[0,0.094,0.22,0.361,0.514,0.675,0.843,1],20.3,-19,0,20.3,-19,42.8).s().p("AjPA8IAAh3IGeAAIAAB3g");
	this.shape_1.setTransform(20.75,6);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_1, new cjs.Rectangle(0,0,41.4,10.7), null);


(lib.ClipGroup_20_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhUF9QBXgBBQgiQACALgPALQgNAKgUAGQgnAMgeAAQggAAgUgPgAjdF/QgSgDgggOQghgPgfgYQglgdgNgbQgGgMAAgJQBXBbB8AdQgLAOgUAAIgKgBgAFPALQAKhKgOhJQAjAMARA2QAPAugLA8QgLBCgiAaQgWARgeAFQAihCALhJgAEakJQgPgbgPgTQAZgGATgOQANgJABgSQABgRgKgMIgGgGQAdgNAyBJQALASADAMQADAOgIALQgJAMgSAMIg0AgQgLgZgLgSg");
	mask_1.setTransform(39.1662,40.7095);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFFFFF","#FCF9FC","#F2E9F3","#E2CEE3","#CBA8CE","#AE77B3","#8B3D92","#670070"],[0,0.494,0.541,0.604,0.678,0.753,0.835,0.922,1],-10,-8.9,0,-10,-8.9,60.2).s().p("AmMGWIAAsrIMYAAIAAMrg");
	this.shape_1.setTransform(39.65,40.625);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_1, new cjs.Rectangle(0,1.2,78.4,79.1), null);


(lib.ClipGroup_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAATQgsgLgmgbQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAIADgBQAYgGA4AKQAfAGASAIQAWAJALAPQADAEgCADQgBADgEABIgLAAQgkAAgggJg");
	mask.setTransform(8.4781,3.2351);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF8FCD","#000000"],[0,1],-4.3,-13.9,0,-4.3,-13.9,24.2).s().p("AhUAfIAAg9ICpAAIAAA9g");
	this.shape.setTransform(8.5,3.075);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(0,0.4,17,5.699999999999999), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkKDeQgcg3gJhAQgKhCAMhDIACgFQAGgIAGgBQAGAAAKAJIAlAoQAXAaAQAKQAzAfA6gSQA4gRAeg0QALgSAIghIAQhBQASg8AZgXQAdgbA5AHQBCAIAdAYQAQAMAHASQAUAyAGA2QAEAhgVAaQgHAIgYAPIghAXQgZAVgOAiQgPAjgNAMQgvArgsAXQgyAZg3AFQggACgqgEIhOgGQgMgBgRAFIgVAGIgDAAQgRAAgIgPg");
	mask.setTransform(31.7965,24.4932);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF8FCD","#000000"],[0,1],-13.4,-21.6,0,-13.4,-21.6,59.3).s().p("Ak5DyIAAnjIJzAAIAAHjg");
	this.shape.setTransform(31.425,24.15);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(1,0.8,61.7,47.400000000000006), null);


(lib.ClipGroup_14_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AAnAzQgrgBgtgsQgZgbgLgLQgTgRgRADQAPgIARAKQAJAFAUAUQAgAeAYAOQAaAQAkgBQAigCAdgSQgsAfglAAIgBAAg");
	mask_2.setTransform(12.15,5.9726);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#FCF9FC","#F2E9F3","#E2CEE3","#CBA8CE","#AE77B3","#8B3D92","#670070"],[0,0.094,0.22,0.361,0.514,0.675,0.843,1],7.1,-5.4,0,7.1,-5.4,17.5).s().p("Ah5BAIAAh/IDyAAIAAB/g");
	this.shape_2.setTransform(12.15,6.425);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_2, new cjs.Rectangle(0,0.9,24.3,10.2), null);


(lib.ClipGroup_12_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgKF8QgPgMAAgYQABgXAOgOQALgLAPgBQAagCAiAIQAfAIAbANQAiARgNAUQgKAQggAJQgoALgeAAQgiAAgTgPgAjDFuQghgPgggYQglgdgMgaQgQgiAZgKQAPgGAkADQAfADAkAGQAyAJAVAUQAaAagHAxQgHAsghACIgEAAQgVAAgmgSgAmWCqQgFAAgDgDQgJgFgIgPQghg8gChQQgChVAlgwQATgZAWAIQALAEAZAZQAgAfAYAOQAiAVAugIQAsgIAcgdQAUgVAMgdQAFgNAMgrIATg9QAMgjATgTQAOgOAVgGQAOgEAaAAQAdAAAvAHIBMALIBiANQA7ACAjgaQAOgKAAgUQgBgUgOgLQAcgNAyBJQARAagCAQQgDASgeASQh6BJg6AoQg7AngvAyQgzA6gmAmQgmAlgiAXQglAXgnALQgtANhLgDQhggDgcADIgiADQgMADgQAOQgDACgEAAIgBAAgADwCGQgogTgLgsQgLgpAUgoQAPggAugnQAsgmAjgMQAugQAdAPQAeAOAPAwQAPAvgKA8QgMBBgiAbQggAZg3AAQgxAAgpgUgAjqh/QgNgHgFgSQgFgVARghIAPgcQAKgSADgLIAFgcQACgOAJgIQAIgIAKgDQAMgCAJAGQAcAWgCAtQgCAmgUAiQgbAsgbAKQgHADgHAAQgHAAgGgDg");
	mask_2.setTransform(48.4333,40.693);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F946DE","#CC39B5","#5A1950","#000000","#000000"],[0,0.122,0.396,0.604,1],-19.2,-25.1,0,-19.2,-25.1,64.8).s().p("AngGWIAAsrIPBAAIAAMrg");
	this.shape_1.setTransform(48.05,40.625);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_2, new cjs.Rectangle(1.8,1.2,93.4,79.1), null);


(lib.ClipGroup_9_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AkBEGQhahaANiNQAMiMBrhtQBrhsCKgNQCLgNBZBbQBaBbgNCMQgMCMhrBtQhrBsiKANIghACQh1AAhOhQg");
	mask_3.setTransform(37.775,38.275);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FF8FCD","#000000"],[0,1],0,0,0,0,0,33.2).s().p("Al5F/IAAr9ILzAAIAAL9g");
	this.shape_3.setTransform(37.75,38.275);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_3, new cjs.Rectangle(4.1,4.1,67.4,68.4), null);


(lib.ClipGroup_7_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgKF1QgPgMAAgYQABgXAOgNQALgLAOgBQAagDAiAJQAeAIAaANQAiAQgMAWQgKATgfAIQghAKgeAAQgmgBgVgRgAjFFrQghgOgfgZQglgcgMgaQgPghAagMQATgIAjADQAqAFAXAEQAxAJAWAUQAZAZgHAxQgHAvgpAAQgYAAgigQgAnLg1IAAAAQALgsAXgcQATgZAVAIQALAEAZAYQAgAfAXANQAiAVAsgIQAsgHAbgeQAUgUAMgdIASg3IARg8QANgiASgTQAOgOAVgGQAOgDAaAAQAcgBAuAHIBLALIBhANQA6ACAigZQAOgLgBgTQAAgUgOgLIAHgCQA0A4AgBCQgHAKgSAIIhiAvQg4AdgmAaQgoAbgrAwIhHBWQhYBrhOAXQgrAMhRgKQhfgLghADQgeADgLADQgTAFgQAOIgBAAQgxhmAAhxgAFFCWQgxAAgogUQgngSgLgrQgLgpAUgoQAPgfAsgmQAsgmAigMQAugPAdAOQAdAOAPAwQAPAtgLA8QgLBAgiAbQgfAYg0AAIgCAAgAj+igQgCgYARggQADgGANgQQALgMACgKIAFgcQADgPAIgHIAPgOQAIgHAHAHQAvAlgVBDQgUBCg9APQgHACgFAAQgUAAgDgXg");
	mask_3.setTransform(45.9662,39.1);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#843E8C","#340E47"],[0,1],-22.4,-35.1,0,-22.4,-35.1,84.5).s().p("AnQGLIAAsVIOgAAIAAMVg");
	this.shape_3.setTransform(46.45,39.475);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_3, new cjs.Rectangle(0,0,92,78.2), null);


(lib.ClipGroup_5_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AlUFaQiNiPAAjLQAAjKCNiPQCNiPDHAAQDIAACNCPQCNCPAADKQAADLiNCPQiNCPjIAAQjHAAiNiPg");
	mask_3.setTransform(48.225,48.925);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#000000","#000000","#000000","#150B10","#673651","#A85885","#D770AA","#F47FC1","#FF85CA"],[0,0.039,0.843,0.855,0.894,0.933,0.965,0.988,1],2.9,4,0,2.9,4,55.2).s().p("AnhHpIAAvRIPDAAIAAPRg");
	this.shape_3.setTransform(48.225,48.925);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_3, new cjs.Rectangle(0,0,96.5,97.9), null);


(lib.ClipGroup_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AlUFaQiNiPAAjLQAAjKCNiPQCNiPDHAAQDIAACNCPQCNCPAADKQAADLiNCPQiNCPjIAAQjHAAiNiPg");
	mask_2.setTransform(48.225,48.925);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFADDB","#FDA1D4","#F881C3","#EF4EA6","#E8218D","#63004E","#63004E"],[0,0.071,0.196,0.365,0.498,0.961,1],-19,-29.6,0,-19,-29.6,90.4).s().p("AnhHpIAAvRIPDAAIAAPRg");
	this.shape_2.setTransform(48.225,48.925);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_2, new cjs.Rectangle(0,0,96.5,97.9), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgKF8QgPgMAAgYQABgXAOgOQALgLAPgBIAKgBQAZAAAfAJQAcAHAYAMQAiARgNAUQgKAQggAJQgoALgeAAQgiAAgTgPgAjDFuQghgPgggYQglgdgMgaQgWgwA6AAQANAAALABQAfADAkAGQAyAJAVAUQAaAagHAxQgHAsghACIgDAAQgWAAgmgSgAmWCqQgFAAgDgDQgJgFgIgPQgRgfgJgnQgJgnAAgnIAAgBQAAhPAjgtQATgZAWAIQALAEAZAZQAgAfAYAOQAiAVAugIQAsgIAcgdQAUgVAMgdQAFgNAMgrIATg9QAMgjATgTQAOgOAVgGQAOgEAaAAQAdAAAvAHIBMALIBiANQA7ACAjgaQAOgKAAgUQgBgUgOgLQAEgCAEAAQATAAAZAcQAKAKAQAYQARAagCAQQgDASgeASQh6BJg6AoQg7AngvAyQgzA6gmAmQgmAlgiAXQglAXgnALQggAJgoABQgYABgxgCQg+gDglAEIgiADQgMADgQAOQgDACgEAAIgBAAgADwCGQgogTgLgsQgLgpAUgoQAPggAugnQAsgmAjgMQAXgIAUAAQA3AAAWBFQAPAvgKA8QgMBBgiAbQggAZg3AAQgxAAgpgUgAjqh/QgNgHgFgSQgFgVARghIAPgcQAKgSADgLIAFgcQACgOAJgIQALgLAOAAQAHAAAHAEQAcAWgCAtQgCAmgUAiQgbAsgbAKQgHADgHAAQgHAAgGgDg");
	mask.setTransform(46.7162,39.5413);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F242F5","#66005E"],[0,1],-19.9,-32.1,0,-19.9,-32.1,89.1).s().p("AnXGQIAAsgIOvAAIAAMgg");
	this.shape.setTransform(47.2,40.05);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(0,0,93.5,79.1), null);


(lib.ClipGroup_1_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhVB/QgogTgLgsQgLgpAUgoQAPggAugnQAsgmAigMQAXgIAUAAQA3AAAWBFQAPAvgKA8QgMBBgiAbQggAZg3AAQgwAAgpgUg");
	mask_3.setTransform(15.421,14.725);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#F242F5","#66005E"],[0,1],-16.2,-13.8,0,-16.2,-13.8,39.7).s().p("AiYCZIAAkxIExAAIAAExg");
	this.shape_3.setTransform(15.25,15.25);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_3, new cjs.Rectangle(1.3,0,28.3,29.5), null);


(lib.ClipGroup_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AlUFaQiNiPAAjLQAAjKCNiPQCNiPDHAAQDIAACNCPQCNCPAADKQAADLiNCPQiNCPjIAAQjHAAiNiPgAggnbQgVAAgiAIIg2ANQiIAhhYBvQhZByAACRQAAA8ASA+QATBBAgAqQAUAbAmAXIBEApQBTA5ARAJQA7AfA3gEQBcgHAegLQA8gXAThFQASg9BPhMQBIhGAGgyQAGgsgPgtQgSgugGgTQgGgVgEhgQgEhHgdgeQg1g2hBgXQg9gWhTAAIgZABg");
	mask_4.setTransform(48.225,48.925);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#FFFFFF","#F8F4F9","#E7D6E8","#CAA6CD","#A263A8","#700F79","#670070"],[0,0.455,0.502,0.584,0.694,0.824,0.973,1],-4.2,-11.6,0,-4.2,-11.6,59).s().p("AnhHpIAAvRIPDAAIAAPRg");
	this.shape_4.setTransform(48.225,48.925);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_4, new cjs.Rectangle(0,0,96.5,97.9), null);


(lib.ClipGroup_26_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiTGHQhQhDgthaQgeg6gNhAIAAgBQgLgxAAg1QAAiRBOh6QAggyApgoQBFhDBYgkQBagmBkAAIAgABQBAAEA7AUQgvgNg0gEIgggBQhkAAhbAmQhXAlhFBCQgqApgfAyQhOB7AACPQAAAzALA0IAAAAQAOBBAdA5QAuBcBPBBQBKA+BaAeQhngchVhHg");
	mask_2.setTransform(32.675,49);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FCFADA","#020303"],[0,1],-19.2,-33,0,-19.2,-33,64.8).s().p("AlGHqIAAvTIKNAAIAAPTg");
	this.shape_2.setTransform(32.675,49);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_2, new cjs.Rectangle(0,0,65.4,98), null);


(lib.ClipGroup_24_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AmwGbIAAs1INhAAIAAM1g");
	mask_2.setTransform(43.275,41.125);

	// Layer_3
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0.05,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_2, new cjs.Rectangle(0,0.1,86.5,82), null);


(lib.ClipGroup_22_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ag8DjQhhgJgzhJQgyhJAZhdQAZheBXg8QBWg8BgAJQBhAJAzBJQAyBJgZBcQgZBehXA9QhLA0hSAAIgZgBg");
	mask_2.setTransform(51.575,51.5);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F47720","#C26627","#754628","#452F20","#241B15","#0D0C0A","#020303"],[0,0.114,0.357,0.573,0.761,0.91,1],0,0,0,0,0,25.1).s().p("AoDhYIJjmqIGkJbIpkGqg");
	this.shape_2.setTransform(51.6,51.5);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_2, new cjs.Rectangle(27.3,28.7,48.60000000000001,45.599999999999994), null);


(lib.ClipGroup_20_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("ACoAuQhIgZhiAGQhkAGg1ALQgaAGgGAEIgygqIAJgnICVgrIE9BDIgSBKQgRgNgjgMg");
	mask_2.setTransform(23.75,7.125);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9A3D97","#9A3D97","#FABFB4"],[0,0.004,1],-23.1,0,23.2,0).s().p("AjtBHIAAiNIHbAAIAACNg");
	this.shape_2.setTransform(23.75,7.125);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_2, new cjs.Rectangle(0,0,47.5,14.3), null);


(lib.ClipGroup_18_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAvAkQgIgOgYAAQgYABgNALQgHAFgBAFIgtg9IBJgfIBOAvIgbAyQABgHgDgGg");
	mask_1.setTransform(7.55,4.9);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9A3D97","#9A3D97","#FFFFFF"],[0,0.004,1],-7.5,0,7.6,0).s().p("AhLAxIAAhhICXAAIAABhg");
	this.shape_1.setTransform(7.55,4.9);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_1, new cjs.Rectangle(0,0,15.1,9.8), null);


(lib.ClipGroup_16_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAaAlQgKgRgRgFQgRgFgPAIQgJADgDAFIgKg8IARgRIBeAVIgXBSQgBgHgGgIg");
	mask_1.setTransform(5.6,5.175);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9A3D97","#9A3D97","#FABFB4"],[0,0.004,1],-5.6,0,5.6,0).s().p("Ag3A0IAAhnIBvAAIAABng");
	this.shape_1.setTransform(5.6,5.175);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_1, new cjs.Rectangle(0,0,11.2,10.4), null);


(lib.ClipGroup_14_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhggBIARg+QAcADAfAHQAVAGAUAGIAbALIATAIIAEACIAaAOQg1gTgJAMQgHAKAGAiQACASAFAPg");
	mask_3.setTransform(9.675,6.375);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9A3D97","#9A3D97","#FABFB4"],[0,0.004,1],-9.4,0,9.5,0).s().p("AhgBAIAAh/IDBAAIAAB/g");
	this.shape_3.setTransform(9.675,6.375);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_3, new cjs.Rectangle(0,0,19.4,12.8), null);


(lib.ClipGroup_13_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AirHXQh5gthoh6QhhhyALi4QAJidBNiCQA4heDThHQBqgjBdgRQCDAqCEBnQBBA0AoArQBDCCgfDYQgPBtgdBTQg0AKgaAyQgNAZgCAXQgNARgkAWQhJAqh5AVQg2AJgxAAQhXAAhLgcg");
	mask_2.setTransform(53.721,49.8812);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#6184C3","#5E7FBD","#5572B1","#475FA1","#36458D","#2A3180"],[0,0.137,0.333,0.565,0.824,1],-30.3,-24.5,0,-30.3,-24.5,86.7).s().p("AocH+IAAv8IQ5AAIAAP8g");
	this.shape_2.setTransform(54.1,51.05);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_2, new cjs.Rectangle(5.4,0,96.69999999999999,99.8), null);


(lib.ClipGroup_12_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ag5G4Qh/gQhkhUQgjgdgdglQgWgbgRgfIgIgPIAAgBIgIgQQgNgdgHgXQgHgWgDgSIgBAAIgEgdQgFgfAAggQAAgXACgMIACgXQAJhCAbg6QAMgcARgbQAcgsAlgkQA9g8BPggQBRgiBYAAIAsACQAcADAfAHQAWAGAUAGIAbALIATAIIAEACIAaAOQAxAcApAoIAOAPIAYAcQAbAhATAnQAYAuAMAxQANA0AAA2QAAA/gRA8QgiB1hbBVQhAA8hRAeQhLAdhSAAg");
	mask_3.setTransform(44.375,44.375);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F37366","#F37366","#ED6F65","#E06564","#CF5662","#B9415F","#9F245B","#991D5A","#8E3694","#8E3694"],[0,0.004,0.231,0.408,0.565,0.71,0.851,0.878,0.984,1],-27.4,-20.7,0,-27.4,-20.7,78.5).s().p("Am7G8IAAt3IN3AAIAAN3g");
	this.shape_2.setTransform(44.375,44.375);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_3, new cjs.Rectangle(0,0,88.8,88.8), null);


(lib.ClipGroup_11_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AB2BuQAfhOg5hbQggg0hPgPQhNgOgiAhQgbAZAQBGQANA8AjA8QgfgtgUg2QgphrAygtQAegaAvAAQA5AABAAkQA8AhAUAiQAXAogCBEQgDA+gSAgQgOAYgcAIIgZACQAbgUAPgog");
	mask_3.setTransform(21.6434,17.025);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#3982C4","#448ECC","#56A3DA","#62B1E3","#66B6E6"],[0,0.161,0.506,0.8,1],-8.4,-8.2,0,-8.4,-8.2,29.5).s().p("AjHCsIAAlYIGOAAIAAFYg");
	this.shape_3.setTransform(19.95,17.25);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_3, new cjs.Rectangle(5.3,0,32.7,34.1), null);


(lib.ClipGroup_9_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgDBIQhjgJhGgzQg4goABgaQAAgSAcAAIANABQgDAFgBAIQgEAPAIARQAMAZAqATQA2AaBSAGQBXAGBCgoQAzgfABgWQABgJgVgLIgVgIIAZAEQAbAIAHARQAEALgOATQgQAUgdASQhAAphSAAIgdgBg");
	mask_4.setTransform(22.9024,7.2889);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#66B6E6","#62B1E3","#56A3DA","#448ECC","#3982C4"],[0,0.2,0.494,0.839,1],0,6.7,0,-7.8).s().p("AjpBPIAAidIHTAAIAACdg");
	this.shape_4.setTransform(23.35,7.9);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_4, new cjs.Rectangle(0.1,0,45.6,14.6), null);


(lib.ClipGroup_8_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ag0CIQgdgKAFhIQAEg8AUgxQAOgjAmgbQAggXATAAIADABQALACAIATQAEAJABAJQgFgDgJgDQgRgGgPAEQgaAHgZAtQgaAugDArQgDAiAKAfQAIAaAKAFQALAGAegGQgHAGgMADQgLADgKAAQgPAAgPgFg");
	mask_2.setTransform(9.5443,14.0985);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#66B6E6","#62B1E3","#56A3DA","#448ECC","#3982C4"],[0,0.2,0.494,0.839,1],0,13.7,0,-14.5).s().p("AhWCSIAAkjICtAAIAAEjg");
	this.shape_2.setTransform(8.675,14.575);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_2, new cjs.Rectangle(1.8,0,15.599999999999998,28.2), null);


(lib.ClipGroup_7_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Ag6A8QgOgMAIgnQAIgmASgFIAfgiQA8APAKAOQANARgaBAQgIAVgqAFIgVABQgZAAgMgJgAgSgXQgPACgEAYQgFAaANAMQAFAFAJAAQAPAAAQgNQAQgPgDgOQgEgQgMgHQgIgFgMAAIgLABg");
	mask_4.setTransform(7.8096,6.8944);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#3982C4","#568ECA","#8AADD9","#B4CAE6","#D3E1F0","#E8F1F6","#EFF8FA"],[0,0.094,0.325,0.537,0.729,0.89,1],-6.3,0,6.8,0).s().p("AhLBIIAAiPICXAAIAACPg");
	this.shape_4.setTransform(7.625,7.2);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_4, new cjs.Rectangle(1.1,0,13.5,13.8), null);


(lib.ClipGroup_6_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgQAvQgLgGgKgvQgCgPASgOQAQgOAOAAIAEABQAMADAJAbQAIAZgHAIIgFAeQgVAFgLAAQgJAAgFgDgAgNgQQgIAQAIAKQAJALAIAAQAHAAAKgHQAHgFgGgQQgGgRgLgFIgFgBQgHAAgGAOg");
	mask_2.setTransform(8.4355,8.5786);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3982C4","#568ECA","#8AADD9","#B4CAE6","#D3E1F0","#E8F1F6","#EFF8FA"],[0,0.094,0.325,0.537,0.729,0.89,1],3.5,-1.9,-3.5,1.9).s().p("AhVgbIBtg8IA+BzIhtA7g");
	this.shape_2.setTransform(8.6,8.75);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_2, new cjs.Rectangle(4.6,3.6,7.700000000000001,10), null);


(lib.ClipGroup_4_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgUBWQgWgPgDhAQgEg/AUgZQAJgLANAAQAPAAATAOQAKAHAHAHQgHgFgJgCQgUgEgQAPQgTAQgCAnQgBAlAOAbQALATAagBQAOAAAMgEQgKAIgNAGQgMAGgLAAQgLAAgKgHg");
	mask_2.setTransform(5.6239,9.313);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#66B6E6","#62B1E3","#56A3DA","#448ECC","#3982C4"],[0,0.2,0.494,0.839,1],0,8.6,0,-9.9).s().p("AgzBkIAAjHIBmAAIAADHg");
	this.shape_2.setTransform(5.15,10);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0_2, new cjs.Rectangle(1,0,9.3,18.7), null);


(lib.ClipGroup_3_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgaH7IgogDQiSgUhxhfQgoghgigrQgYgegUgkIgJgRIgBgBIgIgSQgNgcgKggQgHgXgFgXIAAAAIgGghQgFghAAgnQAAgUACgVIADgaQAJhJAfhFQAPgfATgfQAggyArgqQBGhEBaglQBcgnBlAAIBCAFQAYBAAlAzQA1BKBKAlQBlAzBPglQAJAOAJASQAcA2ANA3QAPA6AAA/QAABIgUBFQgUBGgpBBQgOgSgSgLQgRgLgNABQgbABgLA2QgLA2ARAlQhCA7hXAhQhWAhheAAgAjnFhQgSAFAFAUQAFATAZAXQBAA6BeAGIAgABQBbAABCgjQA5geAIgkQADgLgpgNQgpgMhAgHQg7gHg3AAQhdAAhPATgAlXDqQgNAEAGAZQAHAZARAEIAIABQANAAADgSQADgMgRgQQgNgOgKAAIgEABgAArCAQgWAIgEAgQgFAhAaAHIAJABQASAAAQgJQAVgMAEgVQAEgUgZgNQgPgIgNAAQgIAAgGACgAm7AAQgRABgLAZQgLAYgCAgQgFBSAtAKIAFABQAXAAAcgYQAegaAAgeQAAghgfggQgdgegYAAIgBAAgACqjRQgZAQADA0QACAxAaA5QAaA6AnAmQArArAuAAQAPAAAPgFQBfgeAAhhQAAhLgmg0QghgrhNgWQgigJgdAAQgrAAgfAUgAlPkhQgVACgTAOQggAXgVAwQgVAvACA2QABAzAUAXQAFAFAMAAQAfAAAngVQAsgYAMgfQAahDgfhEQgLgZgPgRQgNgOgHAAIgBAAg");
	mask_2.setTransform(50.775,50.775);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#BEE6EE","#BEE6EE","#BCE3EE","#B3DDF1","#AEDAF5","#A7D3F1","#96C1E7","#7DA6D8","#5D85C4","#3E6CB5","#3E6CB5"],[0,0.004,0.376,0.561,0.616,0.655,0.71,0.776,0.847,0.906,1],-31.4,-23.7,0,-31.4,-23.7,93.2).s().p("An7H8IAAv3IP3AAIAAP3g");
	this.shape_2.setTransform(50.775,50.775);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_2, new cjs.Rectangle(0,0,101.6,101.6), null);


(lib.ClipGroup_3_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AhlB0QgdgRghgYIAAjMQAogEAzABQBlACA2AYQA2AYATA8QAJAdgBAZQgTgRgegRQg8gig2ABQg8ACgRA3QgQAyAcAsQALARgJAAQgJAAgegRg");
	mask_4.setTransform(16.4102,14.5713);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9A3D97","#9A3D97","#FABFB4"],[0,0.004,1],-16.6,0,16.2,0).s().p("AimCeIAAk7IFMAAIAAE7g");
	this.shape_4.setTransform(16.65,15.775);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_4, new cjs.Rectangle(0,1.3,32.8,26.599999999999998), null);


(lib.ClipGroup_1_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgaBbQhig8gnhYQgUgsAAghQAPACAZAJQAxASAyAgQhjgugPAGQgFACAGAXQAIAYARAdQAwBOBGAjQBJAkA8gGQAggDAPgKIgXgfIATARQATASADAGQgPATgjAIQgPADgQAAQg6AAhHgsg");
	mask_4.setTransform(18.4,13.5253);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#3982C4","#5A93CE","#7AA8DA","#8DB6E1","#94BCE4","#94BCE4"],[0,0.231,0.537,0.792,0.957,1],-11.4,-8.6,0,-11.4,-8.6,29).s().p("Ai3CeIAAk8IFvAAIAAE8g");
	this.shape_4.setTransform(18.4,15.85);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_4, new cjs.Rectangle(0,0,36.8,27.1), null);


(lib.ClipGroup_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AA0AnQAAgugfgIQgegHguAlQgXATgRAVQAOgqAdgyQAPgZAMgQQAUgLAzAOQAbAHAXAJIgyCPQAGgWAAgXg");
	mask_5.setTransform(9.6,9.65);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9A3D97","#9A3D97","#FABFB4"],[0,0.004,1],-9.5,0,9.6,0).s().p("AhfBaIAAizIC/AAIAACzg");
	this.shape_5.setTransform(9.6,9.025);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_5, new cjs.Rectangle(0,1.3,19.2,16.8), null);


(lib.ClipGroup_44_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhFgCQAMgRATgKQAbgOAnAEQAyAGAEApIAAAHQgcgmhGAPQgbAGgVAVQgKAMgFAKQgGgXAQgUg");
	mask_2.setTransform(8.878,5.5717);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7A56A3","#FFFFFF"],[0,1],-7.8,0,8.5,0).s().p("AhUAwIAAhfICpAAIAABfg");
	this.shape_2.setTransform(8.525,4.825);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44_2, new cjs.Rectangle(0.7,1.5,16.400000000000002,8.2), null);


(lib.ClipGroup_42_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiBAkQAMglAoguQAyg3AwgJQAsgIAlAfQAhAaAEAsIAAABQgJgQgWgMQgsgZg/ARQg5AQgqBDQgaApgMArQgFgoAMgmg");
	mask_2.setTransform(14.0492,11.7179);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7A56A3","#FFFFFF"],[0,1],-13.7,0,14,0).s().p("AiLB0IAAjnIEWAAIAADng");
	this.shape_2.setTransform(13.95,11.55);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42_2, new cjs.Rectangle(0.2,0.4,27.7,22.700000000000003), null);


(lib.ClipGroup_40_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgrgFQgOgSAHgDQALgFAaAEQAcAFAPAMQAPALAIATQgWghghgIQgegHgEAOQgDAOAfAeQgWgTgNgQg");
	mask_1.setTransform(6.0333,3.2809);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1573B3","#FFFFFF"],[0,1],-4.9,0,5.7,0).s().p("Ag4AfIAAg9IBxAAIAAA9g");
	this.shape_1.setTransform(5.675,3.125);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40_1, new cjs.Rectangle(0.7,0.3,10.700000000000001,6), null);


(lib.ClipGroup_37_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhugIQAHg2AVgPQAXgQAmAAQAmAAAfAQQAiARASAwQAOAngBAwQAAgRgDgUQgIgugXgaQgcgggtgDQgvgEgeAhQgaAcgHA1QgDAcACAZQgMgxAHg1g");
	mask_1.setTransform(12.1629,9.925);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1573B3","#FFFFFF"],[0,1],-11.1,0,11.6,0).s().p("Ah2BgIAAjAIDtAAIAADAg");
	this.shape_1.setTransform(11.875,9.65);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37_1, new cjs.Rectangle(0.8,0.6,22.7,18.7), null);


(lib.ClipGroup_35_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgmABQADgFAJgGQARgLATgDQAWgEAGAKQADAGABAGQgQgOgaAIQgUAHgJAQQgEAIgBAHQgMgNAIgMg");
	mask_1.setTransform(4.4058,3.2779);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#1573B3","#FFFFFF"],[0,1],0.1,0.4,0,0.1,0.4,3.5).s().p("AgqAeIAAg7IBVAAIAAA7g");
	this.shape_1.setTransform(4.3,2.95);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35_1, new cjs.Rectangle(0.2,0.7,8.4,5.2), null);


(lib.ClipGroup_33_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhNA1QgRgLgHgLQAOgrBbgiQAugRArgIQANAmgFAgQgEAdgRARQgXAXg1AEIgKAAQgqAAgdgTg");
	mask_1.setTransform(10.2444,7.193);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFCEA","#B9B6AB","#6E6A65","#403E3B","#222120","#0C0D0D","#020303"],[0,0.141,0.369,0.58,0.761,0.91,1],2.6,5.3,0,2.6,5.3,8.9).s().p("AhnBKIAAiTIDPAAIAACTg");
	this.shape_1.setTransform(10.425,7.4);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33_1, new cjs.Rectangle(0,0,20.5,14.4), null);


(lib.ClipGroup_31_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgQgBQAAgNAFgCQAJgEAGAEQAJAFAEALQgDgGgHgEQgIgEgGAFQgKAHAHAVQgFgKgBgKg");
	mask_1.setTransform(2.3229,2.4433);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#1573B3","#FFFFFF"],[0,1],0.1,0.2,0,0.1,0.2,1.8).s().p("AgVAUIAEgqIAnADIgEAqg");
	this.shape_1.setTransform(2.175,2.325);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31_1, new cjs.Rectangle(0.7,0.6,3.3,3.8000000000000003), null);


(lib.ClipGroup_29_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgjgCQgEgbAMgGQARgKARAHQAUAIAKAaQgHgOgSgHQgSgIgNAMQgMALAFAZQABALAGAQQgNgUgDgYg");
	mask_1.setTransform(4.4592,4.7765);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#1573B3","#FFFFFF"],[0,1],0.4,0.3,0,0.4,0.3,4).s().p("AgoAtIAAhZIBQAAIAABZg");
	this.shape_1.setTransform(4.05,4.475);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29_1, new cjs.Rectangle(0.8,0.6,7.3,8.4), null);


(lib.ClipGroup_27_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AAiAsQg+hyhRhLQA/ASApgCQARAMAYAeQAwA7AaBSIgRAbQgQAhAFAgQgQgsggg6g");
	mask_2.setTransform(15.45,17.9);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#81459B","#8888C2"],[0,1],-2,12.9,2,-12.6).s().p("AiaCKIAyk8IEDApIgzE8g");
	this.shape_2.setTransform(15.475,17.925);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27_2, new cjs.Rectangle(4.5,3.4,22,29.1), null);


(lib.ClipGroup_26_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ag9HWQiJgShphZQgngggegnQgXgdgSghIgJgQIAAAAIgIgSQgMgagKgeIgLgqIAAAAIgFgfQgFghAAgiQAAgTACgTIACgZQAKhFAcg/QAPggARgaQAdguApgoQBBg/BTgjQBXgkBeAAIAPAAIAQABQAoADAnAJQAYAGAUAHIA2AWQBDAhA5A3IApAtQAcAkAVApQAZAyANA0QAOA5AAA4QAABDgTBAQgkB9hgBbQhDA+hYAiQhRAfhXAAg");
	mask_3.setTransform(47.375,47.375);

	// Layer_3
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_3, new cjs.Rectangle(0,0,94.8,94.8), null);


(lib.ClipGroup_24_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AiVA9QgngdgRgdQAFgwgNgtQgHgWgIgMQAWgDAaAAQCqAACIBjQBEAwAiAxQg4gGhFAgIg5AhQh0gHhPg8g");
	mask_3.setTransform(26.75,19.8);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#6D2C91","#8888C2"],[0,1],-1.8,12,1.7,-10.2).s().p("AkLB5IAzk+IHkBNIgzE+g");
	this.shape_2.setTransform(26.775,19.775);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_3, new cjs.Rectangle(3.9,7.1,45.7,25.5), null);


(lib.ClipGroup_23_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhNBnQgWgygSgUIgBgUQAAgsAUglQAdg5BFgXIArAFQAwAEAagJQAEAXgEAjQgIBGgoA9QghA0gyAiQgZARgTAFQgHgVgMgZg");
	mask_3.setTransform(26.675,27.45);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B090C3","#81459B"],[0,1],5.8,5.1,-9.8,-8.5).s().p("AkRAVIEAkmIEjD9IkBEmg");
	this.shape_3.setTransform(27.375,27.425);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_3, new cjs.Rectangle(14.8,12.5,23.8,29.9), null);


(lib.ClipGroup_22_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ag3DXQhSgJgZhNQgchYA+h9QBAiDBUAAIAFAAQBHAFAsA8QAXAeAIAdQAFBYgbBKQgbBNg2AlQgvAfg2AAIgWgBg");
	mask_3.setTransform(42.0252,39.7875);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#583A97","#E2C1DC"],[0,1],14,10.7,-12.7,-9.7).s().p("AmZA8IFpnWIHKFfIlpHWg");
	this.shape_3.setTransform(40.95,41.1);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_3, new cjs.Rectangle(24.9,18.2,34.300000000000004,43.2), null);


(lib.ClipGroup_20_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhoCrQgvgggEhAQgEg4AchBQAag9AqgrQAsgsAkAAIABAAQBcABAgBKQAYA4gOBCQgGAcgWAmQgaAsggAfQg1AzgxAAQgjAAghgYg");
	mask_3.setTransform(29.5829,24.6642);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#5F5EAA","#846FB2"],[0,1],-2.1,16.1,3,-23.1).s().p("AkDDbIBBnxIHGA8IhBHxg");
	this.shape_3.setTransform(25.95,27.85);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_3, new cjs.Rectangle(13.9,5.2,31.4,39), null);


(lib.ClipGroup_19_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgdClIgOgCQgsgIgYgeQgVgYgEgmQgFgoALglQAMgnApgtQAxg4AxgIIARgCQAiAAAeAZQAgAaAEAsQAIBKg+BTQg5BNgyAAIgGAAg");
	mask_4.setTransform(30.54,30.6368);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#8062AA","#7D60A9","#755CA7","#6755A4","#534DA0","#47489E","#47489E"],[0,0.239,0.467,0.686,0.898,0.996,1],-11.4,14,9.4,-11.5).s().p("Ak0AhIEYlWIFREUIkYFXg");
	this.shape_4.setTransform(30.9,30.95);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_4, new cjs.Rectangle(16.7,14.2,27.8,32.900000000000006), null);


(lib.ClipGroup_18_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgOBdQhPgCgSgqQgOgiARgrQAJgWAMgPQAvgbAyAAQAfAAAaAKQAgAMAOAxQAPAzgfAfQgiAghEAAIgJAAg");
	mask_2.setTransform(19.7634,17.9805);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#C9A7CF","#81459B"],[0,1],-9.8,1.8,0,-9.8,1.8,17.7).s().p("AjIhNIE0htIBdEIIk0Btg");
	this.shape_2.setTransform(20.1,18.675);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_2, new cjs.Rectangle(8,8.7,23.6,18.6), null);


(lib.ClipGroup_17_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Ag4BCQgfgKgJgSQgVgqAbghQAVgYAjgKQAKgDARAAQAsAAAhASQApAXgGArQgIA7hYAFIgLABQgcAAgagJg");
	mask_4.setTransform(18.1662,15.0167);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#AA89BF","#C4B2D7"],[0,1],10.8,-3.7,-8.9,3.2).s().p("AithBIEMheIBPDhIkMBeg");
	this.shape_4.setTransform(17.425,16);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_4, new cjs.Rectangle(7.6,7.6,21.200000000000003,14.9), null);


(lib.ClipGroup_16_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhCAtQgKgNgDgLQgGgWAQgVQAMgRATgKQAVgKAfAAQAbAAASAKQAUAMADAaIAAAHIgCAHQgJAng8AOQgUAEgQAAQgcAAgNgPg");
	mask_2.setTransform(8.878,6.043);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#846FB2","#826DB1","#7A68AE","#6C5FAA","#5E56A5"],[0,0.286,0.553,0.808,1],0,5.3,0,-6.7).s().p("AhUBEIAAiHICpAAIAACHg");
	this.shape_2.setTransform(8.525,6.775);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_2, new cjs.Rectangle(0.7,0,16.400000000000002,12.1), null);


(lib.ClipGroup_15_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ag9BZQgIhqA+gxQAegYAggDQAbAthGBTQgYAegYASQgPALgGAAQgEAAAAgFg");
	mask_2.setTransform(7.4103,9.378);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DEA4CA","#C47CB4"],[0,1],0,8,0,-10.7).s().p("AhUBrIAAjVICpAAIAADVg");
	this.shape_2.setTransform(8.5,10.7);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_2, new cjs.Rectangle(1.1,0,12.6,18.8), null);


(lib.ClipGroup_14_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("ABWBNQglgFgtgSQh2gugLg9QgCgMAOgHQAOgGAZAAQBIAAA+AlQBLArgKBEQgBAJgSAAIgUgCg");
	mask_4.setTransform(12.8714,7.8508);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#A885BD","#B178B4"],[0,1],0,6.8,0,-8.9).s().p("AiFBaIAAizIELAAIAACzg");
	this.shape_4.setTransform(13.425,8.975);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_4, new cjs.Rectangle(0.3,0,25.2,15.7), null);


(lib.ClipGroup_13_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("ABNA5QgegGgegLQhagighg6QgEgHAWAAIAUABQAPACARAEQBFARAnAjQANAKAIALQAKAMAEALQADAMgFADIgEABQgGAAgSgDg");
	mask_3.setTransform(10.9976,5.9808);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#515CA9","#6055A4"],[0,1],0,5.8,0,-6.2).s().p("AhtA+IAAh7IDaAAIAAB7g");
	this.shape_3.setTransform(10.95,6.15);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_3, new cjs.Rectangle(0.2,0,21.6,12), null);


(lib.ClipGroup_12_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AhAgkQBFARAnAiQANALAIALQhIgNg5g8g");
	mask_4.setTransform(6.5,3.675);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#5F5EAA","#846FB2"],[0,1],0,3.6,0,-3.6).s().p("AhAAlIAAhJICBAAIAABJg");
	this.shape_3.setTransform(6.5,3.675);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_4, new cjs.Rectangle(0,0,13,7.4), null);


(lib.ClipGroup_11_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgpBCQgFgEADgXQADgbANgXQALgVAYgSQAXgQAKAAIADABQAEAFgFATQgDAKgLAYQgIARgQAUQgNASgOALQgLAIgFAAIgDgBg");
	mask_4.setTransform(4.7983,6.7266);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#846FB2","#5F5EAA"],[0,1],0,6.7,0,-6.7).s().p("AgvBEIAAiHIBfAAIAACHg");
	this.shape_4.setTransform(4.75,6.8);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_4, new cjs.Rectangle(0.3,0,9.1,13.5), null);


(lib.ClipGroup_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAEgQQAOgTAPgPQgDAKgLAYQgIASgPAUQgOARgOAMQANgkAXgfg");
	mask_1.setTransform(7.8,8.05);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#8581BD","#AA89BF"],[0,1],-0.6,-0.3,0.7,0.5).s().p("AhNAWIBAhlIBbA6IhABlg");
	this.shape_1.setTransform(7.825,8.025);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_1, new cjs.Rectangle(4.5,3,6.6,10.1), null);


(lib.ClipGroup_9_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgHAwQgHgEgHgLIAAgBQgNgUgEgYQgDgaALgHQAKgFAKAAQAeAAAOAkIABAEIABABIAAACIACAEQAGAZgSASQgKALgLAAQgGAAgGgDg");
	mask_5.setTransform(9.8108,9.3434);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#8581BD","#B58FC2","#F0CBE0"],[0,0.49,1],-4.5,-2.8,3.6,2.3).s().p("AhhAZIBOh7IB1BLIhOB6g");
	this.shape_5.setTransform(9.775,9.85);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_5, new cjs.Rectangle(5.9,4.2,7.9,10.3), null);


(lib.ClipGroup_7_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgFAVQgDgCgCgFIgBAAQgFgKAAgLQgBgMAGgDIAIgBQAOAAAFASIABAEIAAABQACALgJAIQgFAFgEAAQgDAAgDgDg");
	mask_1.setTransform(4.5911,4.3536);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#8581BD","#B58FC2","#F0CBE0"],[0,0.49,1],-2,-1.5,1.5,1.2).s().p("AgtAHIAog0IAyAnIgnA0g");
	this.shape_1.setTransform(4.55,4.6);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_0_1, new cjs.Rectangle(2.9,2,3.5000000000000004,4.8), null);


(lib.ClipGroup_7_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AhRAeQgUgQgKgQQA3gTA4gQQBuggACASQADAfgXAfQgdApg4AGIgLAAQgqAAgjgcg");
	mask_5.setTransform(11.1926,8.0255);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#EDEAF5","#C3B5D9","#A58EC3","#9175B4","#8464AB","#7C59A5","#7A56A3"],[0,0.051,0.231,0.412,0.58,0.741,0.882,1],-11.2,0,11.1,0).s().p("AhwBJIAAiRIDhAAIAACRg");
	this.shape_5.setTransform(11.325,7.275);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_5, new cjs.Rectangle(0,2.2,22.4,11.7), null);


(lib.ClipGroup_5_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgRAfQgKgDgHgIQgMgNAIgMQADgFAJgGQAYgPAWgBQAOAAAEAHQADAGABAGQACAMgHALQgHAMgRAGIgDABIgBAAIgFACIgKACQgGAAgFgCg");
	mask_1.setTransform(4.5293,3.45);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7C69AF","#584DA0"],[0,1],4.2,0.1,-4.1,0).s().p("AgtAiIABhFIBZACIgBBFg");
	this.shape_1.setTransform(4.55,3.575);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0_1, new cjs.Rectangle(0.3,0.2,8.5,6.5), null);


(lib.ClipGroup_5_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AiMFzQhLg/grhWQgdg4gNg7IAAgBQgKgxAAgxQABiKBJhzQAdguApgnQBChABTgjQBVgkBfAAIAfABQA8AEA4ATQgvgNgugDIgfgBQheAAhXAkQhTAjhBBAQgnAkgeAwQhLB0ABCKQAAAxAKAwIAAABQANA9AbA2QArBWBMBAQBGA7BXAcQhigahShEg");
	mask_4.setTransform(31.05,46.55);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FCFADA","#020303"],[0,1],-18.3,-31.4,0,-18.3,-31.4,62.4).s().p("Ak2HRIAAuiIJsAAIAAOig");
	this.shape_4.setTransform(31.05,46.55);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_4, new cjs.Rectangle(0,0,62.1,93.1), null);


(lib.ClipGroup_3_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgyB5QgjgOgKgXQgGgMgEgSQgMgxAHg0QAHg2AVgPQAWgQAoAAQAlAAAfAQQAiARASAwQAPAqgCAxIAAACQAABUheAGIgLABQgeAAgcgMg");
	mask_3.setTransform(25.5676,24.0195);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#8581BD","#8B82BE","#9B87BF","#B58FC2","#B58FC2","#F0CBE0"],[0,0.125,0.31,0.525,0.529,1],-11.8,-7.4,10.9,6.9).s().p("Aj7BAIDJk+IEuDAIjJE9g");
	this.shape_3.setTransform(25.225,25.5);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_3, new cjs.Rectangle(14.2,10.8,22.7,26.499999999999996), null);


(lib.ClipGroup_3_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgoDNQg6gDgrgYIgegYQAnhdAvhbQBei3ArAJQA2AMAlA/QAoBCgPBFQgRBNg8A9Qg9A9g/AAIgHAAg");
	mask_5.setTransform(17.2164,22.0355);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#7A56A3","#7C59A5","#8464AB","#9175B4","#A58EC3","#C3B5D9","#EDEAF5","#FFFFFF"],[0,0.118,0.259,0.42,0.588,0.769,0.949,1],-18,0,16.4,0).s().p("Ai0DXIAAmtIFpAAIAAGtg");
	this.shape_5.setTransform(18.075,21.525);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_5, new cjs.Rectangle(0,1.5,34.5,41.1), null);


(lib.ClipGroup_1_0_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgLAPQgWgSgNgRQgOgSAHgDQAFgCANAAQAQAAARAEQASAFALAJQAPAMAIASQANAcgSAKIgGABQgQAAgigdg");
	mask_5.setTransform(10.5016,9.9397);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#7065AD","#8E75B5","#CAB1D5"],[0,0.49,1],-5.6,-3.5,5.5,3.5).s().p("AhmAUIBNh4ICABRIhNB4g");
	this.shape_5.setTransform(10.25,10.125);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_5, new cjs.Rectangle(4.9,5.5,11.200000000000001,8.9), null);


(lib.ClipGroup_1_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgvCcQgegDgVgLICukqQAPA4AGA/QALB+gvAlQgoAfgxAAIgTgBg");
	mask_6.setTransform(9.9284,15.7307);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#EDEAF5","#C3B5D9","#A58EC3","#9175B4","#8464AB","#7C59A5","#7A56A3"],[0,0.051,0.231,0.412,0.58,0.741,0.882,1],-11.8,0,8,0).s().p("Ah1CrIAAlWIDrAAIAAFWg");
	this.shape_6.setTransform(11.8,17.15);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_6, new cjs.Rectangle(0,0,19.9,31.5), null);


(lib.ClipGroup_30_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhPB0Qg6gKgRgpQgRgpAhgwQAhgwBAgbQBAgaA5AKQA6AKARApQASApgiAvQghAxhAAaQguAUgsAAQgQAAgPgDg");
	mask_2.setTransform(27.4862,26.2231);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F15E22","#C55526","#783F27","#462B1F","#251A15","#0D0C0A","#020303"],[0,0.102,0.349,0.569,0.757,0.91,1],0,0,0,0,0,16.6).s().p("AkSheIGPinICWFkImPCng");
	this.shape_2.setTransform(27.475,26.225);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30_2, new cjs.Rectangle(11.4,14.4,32.2,23.700000000000003), null);


(lib.ClipGroup_27_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Al3DZIAAmxILuAAIAAGxg");
	mask_3.setTransform(37.55,21.675);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D73B4").s().p("AjuCpQhDgUg3gWQAxAOB4APQCtAWAagPQAlgWBPhCQBahLAMgfQARgvAGhWIAWg0IAuAJQgRAfgSAlQgKAWgGAuQgHA2gDALQgGAUg9AlQhHArgKALQgcAegpAfIBOgQQBUgjBZh2QAsg8Abg0QgFAWgNAgQgZBAgkAvQg7BNgoAfQhEA0hgAGIgRABQhXAAiZgwg");
	this.shape_3.setTransform(38.9625,21.6761);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27_3, new cjs.Rectangle(2.9,0,72.19999999999999,43.4), null);


(lib.ClipGroup_26_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AiMFzQhKg+gshXQgbg1gPg+IAAgBQgKgxAAgxQABiKBJhzQAggxAmgkQBChABTgjQBWgkBfAAIAeABQA9AEA3ATQgrgNgygCIgfgBQhegBhXAlQhTAihBBAQgpAngcAuQhKB0AACJQAAAyAKAwIAAAAQAMA6AcA6QAtBXBKA+QBGA7BXAcQhkgbhQhDg");
	mask_4.setTransform(31.05,46.55);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#F8EE51","#020303"],[0,1],-18.3,-31.4,0,-18.3,-31.4,62.4).s().p("Ak2HRIAAuiIJsAAIAAOig");
	this.shape_3.setTransform(31.05,46.55);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_4, new cjs.Rectangle(0,0,62.1,93.1), null);


(lib.ClipGroup_24_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgaAdIAAg5IA1AAIAAA5g");
	mask_4.setTransform(2.675,2.9);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D73B4").s().p("AgEAbQgIgEgCABQgGgFgFgHQABgDgBgDIAAgNQABgIAHgGQAHgGAJgBQAEgBAHAEQAHAEADAEQAHAKAAANQABALgGAIQgDAEgJAAIgDAAQgFAAgGgCg");
	this.shape_3.setTransform(2.6988,2.901);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_4, new cjs.Rectangle(0.1,0,5.300000000000001,5.8), null);


(lib.ClipGroup_23_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgMAPIAAgdIAZAAIAAAdg");
	mask_4.setTransform(1.325,1.475);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D73B4").s().p("AgDAOQgEAAgCgDQgBgFgCgBQABgIACgHIAFgBQAGgEAEADIAEAFQACACABAFQAAAGgCADQgDAFgEAAIgEABIgDgBg");
	this.shape_4.setTransform(1.325,1.4979);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_4, new cjs.Rectangle(0,0.1,2.7,2.9), null);


(lib.ClipGroup_22_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AhmBNIAAiZIDNAAIAACZg");
	mask_4.setTransform(10.275,7.725);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D73B4").s().p("AgqBDQgLgEgVgKQgOgGgGgKQgIgLAAgIIACgJIACAAIAKgQQAIgKAIgGIApggQAPgJAXgIQATgGAQADQASAEAOAOQAQAPAGANQANAZgNAoQgHATgLAJQgIAFgIACIgVAEQgNACgNAAQgdAAgcgKg");
	this.shape_4.setTransform(10.2689,7.7338);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_4, new cjs.Rectangle(0,0,20.6,15.5), null);


(lib.ClipGroup_21_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgMAQIAAgfIAZAAIAAAfg");
	mask_2.setTransform(1.275,1.6);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D73B4").s().p("AgDAQQgEgFgCAAIABgOIgEACQgBgHAFgEQACgDAEAAQAMgCACAJQADAMgJAIQgFAEgDAAIgBAAg");
	this.shape_1.setTransform(1.2769,1.6017);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_2, new cjs.Rectangle(0,0,2.6,3.2), null);


(lib.ClipGroup_20_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgNAbIAAg2IAbAAIAAA2g");
	mask_4.setTransform(1.425,2.75);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D73B4").s().p("AgGAYIgEgCQgDgOAAgFQADgOACgDQAFgLADgBQACgBACABQAHABADAKIAAAWQAAAJgDAHQgBAEgIAAQgEAAgEgDg");
	this.shape_4.setTransform(1.3975,2.75);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_4, new cjs.Rectangle(0,0,2.8,5.5), null);


(lib.ClipGroup_19_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgmAdIAAg5IBNAAIAAA5g");
	mask_5.setTransform(3.925,2.9);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7D73B4").s().p("AglAaQgCgDACgFIAEgHQAJgMASgNQAJgIARgGIgGAGIAEgCIAFgBQAGgBAFAEQAEAEABAHQABAFgDADIgFAJQgGAHgMAEIgRAIQgKAEgKAAQgLAAgDgDg");
	this.shape_5.setTransform(3.9347,2.9);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_5, new cjs.Rectangle(0,0,7.9,5.8), null);


(lib.ClipGroup_18_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhYCGIAAkLICxAAIAAELg");
	mask_3.setTransform(8.9,13.35);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D73B4").s().p("AhLCFQgGgCgEgLQgDgHAAgQQAAgGACgYQAEghAGgZQAMgpAFgMIAPgnIABgCIAGgHQACgEALgMIAIgIIATgKQALgFAOgBQAFgBAVAEQALADAJAIQAJAIAEALQAGASgKAhIgLAaIgJAUIgKAVQgFAJgMAPQgIAMgiAiQgdAdgWAKIgJAFIgFABIgEgBg");
	this.shape_3.setTransform(8.8833,13.3472);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_3, new cjs.Rectangle(0,0,17.8,26.7), null);


(lib.ClipGroup_17_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgPAVIAAgpIAfAAIAAApg");
	mask_5.setTransform(1.6,2.125);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7D73B4").s().p("AgBATQgGgDgDgHIgDgJIgCgEIABgEIACgJQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAIAEAAQAJADAEAFQAGAGACAJQACAKgHAFQgDADgDAAg");
	this.shape_5.setTransform(1.5965,2.1375);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_5, new cjs.Rectangle(0,0,3.2,4.3), null);


(lib.ClipGroup_16_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgwBOIAAibIBhAAIAACbg");
	mask_3.setTransform(4.875,7.8);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D73B4").s().p("AgEBOQgPgCgLgKIgGgIIgFgJQgFgJgBgFIgBABIADgLQABgFADgEIAOgQQALgOAFgUIACgRQAAgKADgGQADgIACgBQAEgCAFADIAHAGIAJAKQAZAaAAAnQAAAWgGARIgHAPQgEAGgJAGQgKAGgMAAIgFAAg");
	this.shape_3.setTransform(4.875,7.7847);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_3, new cjs.Rectangle(0,0,9.8,15.6), null);


(lib.ClipGroup_15_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgLAMIAAgXIAXAAIAAAXg");
	mask_3.setTransform(1.225,1.2);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D73B4").s().p("AgCAMIgFgBIgCgOIgBACQgDgCAEgEQAEgDADgBQAHgBAFAFQADADgBAEQgBAGgDACQgFAEgDAAIgCAAg");
	this.shape_3.setTransform(1.2275,1.1923);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_3, new cjs.Rectangle(0,0,2.5,2.4), null);


(lib.ClipGroup_14_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AhjBvIAAjdIDHAAIAADdg");
	mask_5.setTransform(10.025,11.05);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7D73B4").s().p("AAeBuQgkgFgrguQgMgMgFgIIgMgWQgHgNgCgKQgCgKgEgKIgGgQQgBgDADgOQACgKAEgJQACgFAMgKIgBgCIADgGQACgEAHgDQAJgDATAEQAMADAYAQIAiAbIATAQIATARQAJAKANAUQALATgEAaQgFAegTATQgPAOgVAAIgJAAg");
	this.shape_5.setTransform(10.0373,11.0725);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_5, new cjs.Rectangle(0,0.1,20.1,22), null);


(lib.ClipGroup_13_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgiAXIAAgtIBFAAIAAAtg");
	mask_4.setTransform(3.5,2.275);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D73B4").s().p("AgaASQgHgCgBgFQgBgCAEgFQAHgHAKgHIATgMIgEAEIACgBIAEgBIAFAAIAGgCQAKAAAFAKQAFAJgFAIQgEAGgIAFQgIAFgIABIgIABQgLAAgMgFg");
	this.shape_4.setTransform(3.5222,2.2795);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_4, new cjs.Rectangle(0,0,7,4.6), null);


(lib.ClipGroup_12_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AjCCwIAAlfIGFAAIAAFfg");
	mask_5.setTransform(19.525,17.625);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D73B4").s().p("AAmCuIgmgFIgqgFIgfgFQgRgDgHgDQgMgFgGgLQgLgUgMgGQgFgDgQgEQgOgEgGgFQgMgLgDgUQgCgIAFgJIALgPQAKgOAJgHIASgMQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIACgEIABgGIAAgKIgDgMQgBgOAIgaQAQgzAYgYQAMgNAOgGQATgHAUABQAuACAtAoQASAPAOARIAiAnQAhAqAUAkQAWAngHAhQgEARgMARQgLAQgPAKQgkAZgnADIgKAAQgNAAgQgCg");
	this.shape_4.setTransform(19.5187,17.608);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_5, new cjs.Rectangle(0,0,39.1,35.3), null);


(lib.ClipGroup_11_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgLAMIAAgXIAXAAIAAAXg");
	mask_5.setTransform(1.175,1.15);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7D73B4").s().p("AgFAKIgGgFQAAgIADgIIABADQADgDAIAGQAIAFgBAGQAAADgDABIgHABIgDABIgDgCg");
	this.shape_5.setTransform(1.1553,1.15);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_5, new cjs.Rectangle(0,0,2.3,2.3), null);


(lib.ClipGroup_10_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgqAlIAAhJIBVAAIAABJg");
	mask_2.setTransform(4.325,3.675);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7D73B4").s().p("AgVAiQgHgEgCgEIgEgLIgDgHIgDgGIgBgBIAJgOIAHgGQANgLANgFQAJgCAIACQAQAEAEAGQAFAFgBAJQAAADgDALQgFARgJAGQgHAGgKADIgSACQgGAAgFgDg");
	this.shape_2.setTransform(4.3833,3.6625);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_2, new cjs.Rectangle(0.2,0,8.4,7.4), null);


(lib.ClipGroup_9_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AivCpIAAlRIFeAAIAAFRg");
	mask_6.setTransform(17.55,16.875);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7D73B4").s().p("AgxCnIghgGIgYAAQgWgBgNgRQgLgNgMgXQgEgIgDgMIgDgVQgBgHABgIIADgQIAFghQAGgmAIgRQANgaAXgbQgHAKADgCIAJgKQAFgGAOgIIAQgPQAKgIAJgEQANgGATgEIAfgGQAggGAiAHQAoAIAWARIAVASQALALAEAMQAHATgCALQgCATgFALQgGASgJAKIgOALQgLAKgDABIgPANQgWAUgMAKQgWARgOAeIgMAaQgHAPgIAJQgOARgcAAQgKAAgKgCg");
	this.shape_6.setTransform(17.5391,16.8599);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_6, new cjs.Rectangle(0,0,35.1,33.7), null);


(lib.ClipGroup_7_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Ag9HWQiIgShqhZQgnghgegmQgUgZgVglIgJgQIAAAAIgIgRQgPgigGgWQgGgUgFgXIgBAAIgFgfQgFgfAAgkQAAgVACgRIADgYQAJhFAdhAQANgeASgcQAggxAmglQBBg/BUgjQBXgkBdAAIAfABQApADAmAJQAaAGASAHIAyAUIAEACQBGAiA2A2IApAtQAcAkAVAqQAZAxANA0QAOA2AAA7QAABDgTBAQgkB9hgBbQhFBAhWAgQhRAfhXAAg");
	mask_6.setTransform(47.375,47.375);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#DE6864","#DE6864","#D96663","#CD5F62","#BC5562","#A54760","#8A365D","#6E2259","#621A57","#621A57"],[0,0.004,0.196,0.341,0.475,0.6,0.718,0.827,0.871,1],-29.3,-22.1,0,-29.3,-22.1,76.1).s().p("AnZHaIAAuzIOzAAIAAOzg");
	this.shape_6.setTransform(47.375,47.375);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_6, new cjs.Rectangle(0,0,94.8,94.8), null);


(lib.ClipGroup_5_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AlUCCQAAiKBKhzQAggxAmglQBBg/BUgjQBWgkBeAAIAfABQBdAGBUApIgFABQgHABgIgCIgKgEIgRgEIgRgFQgEgBgHABQgDABgJgDIgNgDIgkgKQgHgCgPAAIgRACIgXgCQgKgBgFABQgFACgIAAIgQADQgPADgMAAIgKAAQgGgBgDABIgIAIQgKAJgEAFQgIALAAAHQAAAIAGAKQAEAKgHAEQgMAJgMADQgKADgEgEQgDgFgCgBIgHABQgLAEgHABIgKADIgGgBIgGAAIgTAEQgIABgHgFQgDgDgDABQgCAAgEAFIgEAHIgOAXQgEAHgDADIgVAPIgbAWQgFADgHAEIgNAFIgQAFIgGADIgEAHQgKAMgDAFIgEALIgHAQIgEARIgEARIgJASQgEAIgEAYQgBAMACAIIABAVQAAAKgKAKIgHAGIgIAGQgIAHgDAHIAAAIIgEARIgBAhIACAKIAAAIIAGAcIAGASIAGAYIACATIACAQQAAAIgCAPQAAAIADAMIAFATIADALQgzhlAAhxg");
	mask_5.setTransform(34.075,34.375);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F37C85","#F37C85","#EE7983","#E3717C","#D36573","#BF5567","#B54E61"],[0,0.012,0.314,0.537,0.737,0.922,1],-34,0,34.1,0).s().p("AlUFYIAAqvIKpAAIAAKvg");
	this.shape_5.setTransform(34.075,34.375);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_5, new cjs.Rectangle(0,0,68.2,68.8), null);


(lib.ClipGroup_3_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Ag9DkQhLgXhNgMQhggPg7gfIgogcQgLgPABgFQADgIAHAAIAGABQATAOAkASQBHAlBQAWQA8AQAvAGQAwAFAugEQBEgRBDhNQAqgvAwgqQAagZgEggQgDgiAXg0QAMgaAMgTQgeAOgXAVQgRAPgeAtQgYAkggAPQgxAXhbAKQhlAMg5gWQhTgfhdgiQgFgHgDgKQgGgUAIgPQALgUAegCQAOgCANADIAQAzQAXA1AlALQBHAVAqACQBUADBjgpQBggpAshNQAWgmADgeIAMgFQAOgFALAAQAQAAAHAJQAKAKABARQAAAJgBAGQgUAZgSAgQglBAAFAnQAFApgdAeQgRAShOA1QgwAhgIATQgGAMAKAEQAkgIAGgCQBhglBShrQBNhlgDhFIAMgEQAMgEACADQAIAMgJAUQggBDg2BIQhsCShwAeQhQAWg1AAQgUAAgQgDg");
	mask_4.setTransform(42.0118,23.0976);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FDB813","#FDB813","#FDB615","#FCB01A","#FAA721","#F89928","#F6892F","#F37435","#F36E36"],[0,0.004,0.357,0.533,0.667,0.784,0.886,0.98,1],-42,0,41.7,0).s().p("AmlD0IAAnnINLAAIAAHng");
	this.shape_4.setTransform(42.15,24.425);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_4, new cjs.Rectangle(0.2,0,83.7,46.2), null);


(lib.ClipGroup_3_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AkjBkIAAjHIJHAAIAADHg");
	mask_6.setTransform(29.225,9.975);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7D73B4").s().p("AgsBjQhYgBhYgxQgtgYgagYQChBbCbgaQA7gJAwgaQApgVARgXQAagkApgcQAUgOAPgIQgyBZgvAzQgjAmgyAMQgmAJhOAAIgmgBg");
	this.shape_6.setTransform(29.225,9.9731);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_6, new cjs.Rectangle(0,0,58.5,20), null);


(lib.ClipGroup_2_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ABpCVQgOgDgKgPIgHgOQAdAEgdg7Qgbg3gsgwQggglg5ghQgcgQgWgKQgLgBAAgJQAAgCAHgCQAXALAdARQA8AiAgAdQAoAiAIANQAIALAWA3QASAtAZAeQANAPAKAGQgLADgKAAQgLAAgLgDg");
	mask_1.setTransform(14.775,15.225);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FDB813","#FDB813","#FDB615","#FCB01A","#FAA721","#F89928","#F6892F","#F37435","#F36E36"],[0,0.004,0.357,0.533,0.667,0.784,0.886,0.98,1],-9.1,-7.2,0,-9.1,-7.2,24).s().p("AiTCaIAAkzIEnAAIAAEzg");
	this.shape_1.setTransform(14.775,15.375);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_1, new cjs.Rectangle(0,0,29.6,30.5), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhwCAIAAj/IDhAAIAAD/g");
	mask_1.setTransform(11.3,12.825);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D73B4").s().p("ABjBfQgTgpglgtQgkgrg8grQgegWgXgNIgGgPQAyAVAiAVQBEAqAgAxQAgAyAHApQADAVgCAKQgDgMgKgVg");
	this.shape_1.setTransform(11.3021,12.825);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,22.6,25.7), null);


(lib.ClipGroup_1_0_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AhOFSQgfgHgNgPQA/gNAlgTQASgJAdgYQAggaAcgeQAAgNgGgSQgLgigYgUQgUgShSgCQhwgEg2gLQhLgPhehmQgvgygggxQgSgTAAgKIAAgCQACgHAJgBQAFAAAEABQAtA2A1A4QBpByAiAOQAVAJAYgFQAPgEAZgMIAagNQANgFAJAAQAQACARAOQAVARAMAEQAKAEAmADQAhACANAKQAEAFAOArQAJAeAfgHQAYggAGgXQAyijAlgZQATgMAogHQAkgGAngBQAfgLAUhHQAWhKgLhHQARADACAEQAHAOgLARQgRBEgGAxQgDAegPAYIgNASQAuASAWgSQANgKACgRIAIAJQAJALgCAPQgBAPgJAIIgJAFQgLgFgWgFQgsgJg2AAQg4ABggAPQgRAIgUAVQgMAMgUA+QgRA0gFAbIgBALQAAAJACATIADAgIAAAHQACACABARQAFARATAAQAhABAugjQA/gyAIgEQAtgXAYgKIAHAIQAHAJgEAHQgIAMgcAGQgOABgTAGQgmALgaAUQgwAmgPAJQgkATgggKIAAgBQAAABgBAAQAAAAgBABQgBAAAAAAQgBAAgBAAIgHgDQgOgFgVAEQgoAKgfAQQgfARglAfQgNALADALQABAFAEAEQgLAHgRABQgIAAgIgDgACHCTQgFADgFAGIgHAHIgEAHIgIAOIgCAGIgBADIgCAKQADACAHAGIAGABIAGACIAYAAIALgDQADgBABgFQABgFgCgKIgCgJIgBgLIgDgJIgCgHQgDgIgEgBIgBgBQgEAAgGADg");
	mask_6.setTransform(49.0613,34.05);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FDB813","#FDB813","#FDB615","#FCB01A","#FAA721","#F89928","#F6892F","#F37435","#F36E36"],[0,0.004,0.357,0.533,0.667,0.784,0.886,0.98,1],-49.1,0,49,0).s().p("AnrFVIAAqpIPWAAIAAKpg");
	this.shape_6.setTransform(49.15,34.05);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_6, new cjs.Rectangle(0,0,98.1,68.1), null);


(lib.ClipGroup_1_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AjlBkIAAjIIHLAAIAADIg");
	mask_7.setTransform(22.975,10.05);

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7D73B4").s().p("AjXBdIgOgIQBthJA0gUQAdgLAUAHQAeAKAPAAQAdABAsghQAYgSAngiQAUgQAaADQANABAJAEIgLAOQgEAFgYARQgtAjg0AdQgfASglgEQgugIghAAQgpgBguAtQgXAWgPAWQgTAAgSgHg");
	this.shape_7.setTransform(22.975,10.0581);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_7, new cjs.Rectangle(0,0,46,20.1), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnZD9IAAn5IOyAAIAAH5g");
	mask.setTransform(47.35,25.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D73B4").s().p("ABVD0QgGgQgLgSQgVgkgbgKQgQgGhfgBQhlgCg9gSQhDgThThrQgqg0gcgyQAgAkAqArQBUBTA2AfQA1AeA7gFIBygLQAvAAAaAmQAbAnAaABQAlACAUg4IAOg4QAlhpBXgcQAsgOAkAIQAogcAYhXQAMgsADgmIAFAsQABAMgEASQgFAlgRAiQgTAhgJAJIgGACQAXAOAgADQAQABALgCIgHAqQgFABgNgBQgZgDgdgMQgigNgqAEQgmADgaAQQgVALgVArIgkBTQgQAjgDAmQAAATABAMQgNgVgYATIgUAYg");
	this.shape.setTransform(47.35,25.325);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,94.7,50.7), null);


(lib.ClipGroup_33_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AilBtQgdgsAcg/QAcg+BFguQBEgtBFgBQBFAAAdAsQAdAsgcA/QgcA+hFAtQhFAuhEABIgCAAQhDAAgdgsg");
	mask_2.setTransform(35.8625,35.625);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#6FCCDD","#63A3AE","#456568","#2D3D3D","#1A2121","#0B0D0D","#020303"],[0,0.114,0.357,0.573,0.761,0.91,1],0,0,0,0,0,19.6).s().p("AlmhCIG2khIEXGlIm4Eig");
	this.shape_2.setTransform(35.9,35.625);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33_2, new cjs.Rectangle(17.8,20.4,36.2,30.5), null);


(lib.ClipGroup_31_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ag0ggQhDg9gygxQBqBZBkA2QAzAcAeAKQAYAfAQAoQAIAUAEANQhZg3iFh4g");
	mask_2.setTransform(16.95,14.325);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#80A9CE","#5C739D"],[0,1],0,14.3,0,-14.3).s().p("AipCPIAAkdIFTAAIAAEdg");
	this.shape_2.setTransform(16.95,14.325);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31_2, new cjs.Rectangle(0,0,33.9,28.7), null);


(lib.ClipGroup_29_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AAIBKQhUgygmhHIApg8QANAmAfAqQA7BWBVAdIgeAUQgigKgrgYg");
	mask_2.setTransform(11.525,10.8);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BBC0E1","#7D73B4"],[0,1],0,10.8,0,-10.8).s().p("AhyBsIAAjXIDlAAIAADXg");
	this.shape_2.setTransform(11.525,10.8);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29_2, new cjs.Rectangle(0,0,23.1,21.6), null);


(lib.ClipGroup_26_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AAPAnQgRAAgQgNQgRgLgGgQQgGgQAIgLQAIgLARABQAQABARAMQARAMAGAPQAGAQgIALQgHAKgPAAIgDAAg");
	mask_5.setTransform(9.1579,9.15);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#4D74B9","#4B6CA6","#3F5071","#30394A","#21262F","#14161A","#080A0A","#020303"],[0,0.047,0.247,0.435,0.608,0.769,0.902,1],0,0,0,0,0,4.9).s().p("AhbAOIBMhpIBrBPIhNBng");
	this.shape_4.setTransform(9.175,9.15);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_5, new cjs.Rectangle(4.7,5.3,8.899999999999999,7.8), null);


(lib.ClipGroup_24_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Ag6A7QgYgYAAgjQAAghAYgZQAZgYAhAAQAjAAAYAYQAYAZAAAhQAAAjgYAYQgYAYgjAAQghAAgZgYg");
	mask_5.setTransform(8.325,8.325);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#4D74B9","#4B6CA6","#3F5071","#30394A","#21262F","#14161A","#080A0A","#020303"],[0,0.047,0.247,0.435,0.608,0.769,0.902,1],0,0,0,0,0,8.4).s().p("AhSBTIAAilIClAAIAAClg");
	this.shape_4.setTransform(8.325,8.325);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_5, new cjs.Rectangle(0,0,16.7,16.7), null);


(lib.ClipGroup_22_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AAWBdIgYgHQgigUgkgsIAPg9QARgYAUgRQApghAYApQAYAoAEBCQABAigDAZQgJADgMAAQgMAAgQgDg");
	mask_5.setTransform(7.3,13.7907);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#80A9CE","#5C739D"],[0,1],0,11.4,0,-7.7).s().p("AhNB4IAAjvICbAAIAADvg");
	this.shape_5.setTransform(7.8,11.975);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_5, new cjs.Rectangle(0,4.2,14.6,19.2), null);


(lib.ClipGroup_20_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E7DCED","#A78BC0"],[0,1],-0.1,0,0.1,0).s().p("AAAAAIAAAAIABAAIAAAAg");
	this.shape_5.setTransform(0.125,0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_5, new cjs.Rectangle(0,0,0.3,0.1), null);


(lib.ClipGroup_19_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AhLAEQAJgKAPgRQAfghAhgZIBIAEQgkAdgoAjQhOBEgPAbg");
	mask_6.setTransform(8.525,8.2);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#8D3995","#7270B4"],[0,1],0,8.2,0,-8.2).s().p("AhUBSIAAijICpAAIAACjg");
	this.shape_6.setTransform(8.525,8.2);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_6, new cjs.Rectangle(0,0,17.1,16.4), null);


(lib.ClipGroup_18_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AhLAOIAMACQARgDAXgSQAXgUAIgcQAFgOAAgKIBIAEIipCXg");
	mask_4.setTransform(13.125,12.85);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#5B2B84","#7452A2"],[0,1],-3.1,9.6,3,-9.2).s().p("AiCA/IA+i/IDHBCIg+C/g");
	this.shape_4.setTransform(13.125,12.85);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_4, new cjs.Rectangle(4.6,5.1,17.1,15.6), null);


(lib.ClipGroup_17_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Ag9HWQiJgShphZQgngggegnQgXgdgSghIgJgQIAAAAIgIgSQgMgagKgeQgFgRgGgZIAAAAIgFgfQgFghAAgiQAAgTACgTIACgZQAJhFAdg/QAMgaAUggQAdgvApgnQBBg/BTgjQBXgkBeAAIAPAAIAQABQAoADAnAJQAYAGAUAHIA2AWQBEAhA3A3IApAtQAcAjAWAqQAYAvAOA3QAOA5AAA4QAABDgTBAQgkB+hhBaQhCA+hYAiQhRAfhXAAg");
	mask_6.setTransform(47.375,47.375);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#70CFF2","#70CFF2","#70C9EE","#6DBEE7","#68ABDB","#6392CB","#5D75B8","#575CA9","#5758A6","#574CA0","#563895","#563594"],[0,0.004,0.082,0.188,0.306,0.435,0.573,0.686,0.757,0.863,0.988,1],-29.3,-22.1,0,-29.3,-22.1,76.1).s().p("AnZHaIAAuzIOzAAIAAOzg");
	this.shape_6.setTransform(47.375,47.375);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_6, new cjs.Rectangle(0,0,94.8,94.8), null);


(lib.ClipGroup_16_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AlUCCQAAiJBKh0QAdguAogoQBCg/BTgjQBWgkBfAAIAeABQBfAGBTApIgFABQgHABgIgCQgGgDgEgBQgMgDgFgBQgIgBgJgEQgFgCgHACQgDABgIgDQgEgCgJgBIgkgKQgHgCgPAAIgRACIgXgCQgLgBgFABQgEACgIAAIgQACQgPAEgNAAIgJgBIgKABIgEAEIgDAEIgOAOQgJALABAHQAAAGAFAMQAFAKgHAEQgMAJgMADQgJADgGgEQgCgFgCgBIgHABIgSAFIgLADIgFgBQgEgBgDAAIgTAFQgHABgHgFQgEgDgCABQgEABgCAEIgEAHIgFAIIgJAPIgHAKIgVAPIgbAWQgFADgIAEIgNAFIgVAIQgCABgDAFQgJALgDAHIgFALIgGAPIgEARIgFARIgJATQgDAHgEAZQgBAIACAMQABAFAAAQQAAAJgKALQgEAFgLAHQgJAJgCAFIAAAIIgEARIgBAWIAAALIACAKIAAAIIAGAcIAFASQADAIADAQIACATIADAQIgCAXQAAAIADAMIAFATIADALQgzhkAAhyg");
	mask_4.setTransform(34.075,34.375);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#8BD7F6","#8BD7F6","#8CD4F4","#8ECDEF","#92C3E9","#96B6DF","#9BA4D3","#9BA2D1"],[0,0.012,0.286,0.486,0.667,0.831,0.984,1],-34,0,34.1,0).s().p("AlUFYIAAqvIKpAAIAAKvg");
	this.shape_4.setTransform(34.075,34.375);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_4, new cjs.Rectangle(0,0,68.2,68.8), null);


(lib.ClipGroup_14_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AA3BGQhzhChbhYIBTghQAhANAqAbQBYA2A0BFIAFBIQgogPg5ghg");
	mask_1.setTransform(15.2,11.775);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7270B4","#8D3995"],[0,1],-14.8,0,14.8,0).s().p("AiXB2IAAjrIEvAAIAADrg");
	this.shape_1.setTransform(15.2,11.775);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_0_1, new cjs.Rectangle(0,0,30.4,23.6), null);


(lib.ClipGroup_13_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhODBQhlhDgHhMQgGhEBdhpQBQhZAwgUQAdgLAmAAQAWAAAQADIA1F6QgSATgYAVQgwAqghALIgrANQgwgSgzghg");
	mask_1.setTransform(34.0067,35.7);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2F2670","#6D57A5"],[0,1],-7,21.3,8.4,-25.8).s().p("AlPDEIC2ooIHpCgIi2Ipg");
	this.shape_1.setTransform(33.575,35.7);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_0_1, new cjs.Rectangle(15.3,11.3,37.400000000000006,48.8), null);


(lib.ClipGroup_13_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E7DCED","#A78BC0"],[0,1],-0.5,0,0.6,0).s().p("AgFABIAAgBIALAAIAAABg");
	this.shape_5.setTransform(0.575,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_5, new cjs.Rectangle(0,0,1.2,0.2), null);


(lib.ClipGroup_12_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgIDsQhLgYhBhTQg7hMAJghQAdhyBghOQBNhAA4AAIAKABQAwAQArBLQAsBOgFBGQgFBEhZBZQhLBMggAAIgHgBg");
	mask_1.setTransform(35.2664,35.9779);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#743996","#8958A4"],[0,1],-6.9,21.1,7.8,-23.8).s().p("AleDEIC4owIIFCqIi3Ivg");
	this.shape_1.setTransform(35.125,36.5);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_0_1, new cjs.Rectangle(15.3,12.3,40,47.400000000000006), null);


(lib.ClipGroup_11_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ai3BeQAdhyBghOQBNhAA4ABIAKABQAaAIAcAeQAbAeATApQgTghgdgdQgdgdgWgHQgSgFglAMQgoANgnAdQhrBQgRCIQgCASANAdQgcgwAGgVg");
	mask_1.setTransform(18.7799,16.3);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#833996","#AF6DAD"],[0,1],0,16.3,0,-16.2).s().p("Ai6CjIAAlFIF0AAIAAFFg");
	this.shape_1.setTransform(18.65,16.275);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_0_1, new cjs.Rectangle(0.3,0.1,37,32.5), null);


(lib.ClipGroup_11_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AhJFOIgUgCIgUgDIg2gFQgagCghgFQghgJgRgBQgQAAgoAFQgRADgXgFQgMgagJgeQgFgRgGgZIAAAAIgGgfQgEghAAgiQAAgUACgTQAPAOAGADIALACIASABQALABAFAEIAZAQIAHAAIAWAAQAIgBAmAAQAKgBAMgJQAOgLAGgCQAFgCAIAAIARgCQAKgBAPgHIAYgKIAXgIQAQgGAegQQAQgGAegQIAVgJQANgGAJgDIATgCQANgCAGgCQAegJAVgKQATgJARgUQAHgHAOgIQAQgIAGgGQATgSAIgcQAOgyAGgPIAIgTQAEgMgCgJIgJghIgFgRIgDgTQAAgHgFgJQgDgDgMgHIgIgEIAyAUIADACQBEAhA4A3IAZAaIgCAHQgJAbgCAPQgEAZgLAfIgPAaIgLAPQgIAJgEAGIgDALIgCAMQgGATgJAOQgIAOgGAUIgJAjQgJAegEAJQgIAXgMANQgZAegQALIgYARIggAYQgUAPgQAOIgPAPQgJAJgGAEQgLAHgTAEQggAIgTACIgyAHQgXADgRAAIgMAAgAhEEiQADAHAGAGQACACAKAEQANAGAIAAQAUAAAUgLIAOgHQAFgFADgHQADgIABgJQAAgKgDgGIgJgJQgJgJgJgEQgbgMgbAPQgSALgGAMQgBADgCACQABANAFALIgBgBQgDAAABAGgAjaEmQAEAHAFADQAKAGAOAAQAOgBANgFQAPgGAFgKIAFgOQABgHgBgHQgCgMgPgHQgYgMgPAIQgMAGgLAKIgLALQgGAOgCALIAEgBQAFAAAEAGgABFEVIACACQAAACADAEQACADACABQAGAAAGgGQAMgJgEgHQgCgFgFgBIgJgEgAl+CPIgJAOIgGATQgBAEABAHIADALQABAKAKAOQAMAPAUAFQAuANAugRIAfgMQATgKAGgOIABgHIABgTQAAgHgDgHIgHgMQgEgHgFgDQgMgGgXADIgUAFQgEABgQAAIgugCQgXAAgSACgAjSBzIAAAFQACAKAEAFQADAHAIgCQAMgBAFgGQAHgKgKgIQgLgJgLAEIABgBQgJAEgBACgAEQAlQgBgDAFgCQAEgBAFAAQALAAADgBQANgGAFgVIAFgcQAEgQAEgLQAOgeAFgQQAKgggJgTQgGgNgRgCQgNgCgOAGQgWALgNAZQgMAYAAAYIACAdIADAeIAFAcQABAIAIASIAAAAgADBg6QgFAFgEAIQgFALAAANQAAARAYgJQAMgFAJgNQAKgKgCgIQgBgLgMgEIgMgCIgOAIg");
	mask_6.setTransform(41.5,33.4205);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#BBC0E1","#7D73B4"],[0,1],-40.4,0,40.5,0).s().p("AmeFPIAAqdIM9AAIAAKdg");
	this.shape_6.setTransform(41.5,33.525);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_6, new cjs.Rectangle(0,0,83,66.9), null);


(lib.ClipGroup_9_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhYheQADgJAFgHQALgQAIAAIABAAQASABAtAkQA3ArARAuQAPAngBAtQgBAVgDAPIgbAHg");
	mask_1.setTransform(16.4032,18.25);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2F2670","#6D57A5"],[0,1],-3.2,9.9,3.1,-9.5).s().p("AioBnIBekdIDzBRIhdEcg");
	this.shape_1.setTransform(16.875,18.25);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_0_1, new cjs.Rectangle(7.5,5.6,17.8,25.4), null);


(lib.ClipGroup_9_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AhqEnQgTgKgKgCQgOgDgXABIglACQgPgBgrgIQgJgCgQgIQgRgJgIgCQgJgDgZgBQgWgBgLgEQgEgCgUgNIgFgDIgIgQIAPAHQAQAIAcADIAuAFIAyAKQAeAGAUACQAUADAUgDIA5gFIAwgMQAdgHAUADIAKACIAJACQAFgBAHgEIALgIQAFgEAPgEQAMgEAGgGQAOgMAYgNQAYgMAagWQAQgNAcgdQAtguASghQAJgQAFgdQAGgjAFgNQASgsAMgRQAHgJAPgQQAFgGAFgJIAJgPIAKgRIAKgSQAFgLgBgXIAAgpQAcAjAVAqIAAACQAAAIgDAKIgHAQQgHARgGALQgEAHgPAmIgMAnQgIAWgJAOQgHAMgHAWQgJAYgEAJQgOAcgmAhIgYAaQgPAWgLAHQguAegWARIgSARQgLALgIAFIgWALIgWAMIgoAWQgKAEgNABIgWAAQgWACggAKIgUAGIgIABQgGAAgGgCg");
	mask_7.setTransform(42.225,29.6864);

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#BBC0E1","#7D73B4"],[0,1],-41.1,0,41.2,0).s().p("AmlEqIAApUINLAAIAAJUg");
	this.shape_7.setTransform(42.225,29.85);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_7, new cjs.Rectangle(0,0,84.5,59.4), null);


(lib.ClipGroup_8_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgbAqQgXAAgWgFIg6gmIEFgoIgtA6QgNAHgUAGQgpAMgmAAg");
	mask_1.setTransform(13.1,4.2);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#743996","#6253A3","#6352A2"],[0,0.918,1],0,4.2,0,-4.2).s().p("AiCAqIAAhTIEFAAIAABTg");
	this.shape_1.setTransform(13.1,4.2);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_0_1, new cjs.Rectangle(0,0,26.2,8.4), null);


(lib.ClipGroup_7_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AAfBsQg1gWghgaQgdgYgCgxQgBgZAFgVQAEgSAMgUQANgVAMgDIABAAQAQAAAqAsQAtAtANAiQALAfAAApQAAAWgDAWQAAAEgGAAQgLAAgkgOg");
	mask_2.setTransform(10.2667,12.153);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#743996","#8958A4"],[0,1],0,11.7,0,-12.5).s().p("AhiB+IAAj7IDFAAIAAD7g");
	this.shape_2.setTransform(9.85,12.55);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_0_2, new cjs.Rectangle(1.6,0,17.4,24.3), null);


(lib.ClipGroup_7_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AhLElIglgCQiIgShqhZQgngggdgnQANADAZALIATAEQALADAHAEIASAIQAKAEAJACIBEAPQANADAUgBIAggBQAbAAAOAFIAhAJQAHABAJgCIAPgFIA1gMIAlgKQAZgHANgEQAdgJASgDIAPgBIAPgBQAYgEAVgIQAfgMAdgXIAOgNIANgMIAKgGQAEgCAEgHIAUgcQANgQAGgLQAHgNAEgSIAGggQAFgZAZguQANgWADgLQAKgTADgLQAHgYAAgWIACgSIACgTQAOA5AAA6QAABDgSBAIggAtQgJAPgGAHIgTARQgKAJgJAPIgNAcQgPAhgWAYQgZAcgeAMIgRAGQgMADgGAEQgVAKgaAIQgYAHgpAUQgqAVgWAHQg2AQgZAFgAizDcIgLACIgGAEIAAADQgBACACAEQAEAJAHAFQAKALAGAEQAMAIAOAEQAQAGAOAAIATgBIATgCIAdgDQAJgBAWgMIALgHIAJgKQAIgLgGgMQgDgGgFgFQgGgEgNgCQgPgDgjAEQgUACgcAHIgVAFQgEABgLgBIgXgBIgDAAgABpCvQgVACgFADQgKADgJAJQgMANgEAFIgEAIIAAALQgEAEAFAGQAEAEAGABQAEAAAIgDQAJgDAGgDIAqgXQAJgFACgDQAIgJgFgLQgDgJgSAAIgIAAgAgYC4QgGAEACADQACACAIABQAGABAKgCQADgBACgBQAAgBABgBQAAAAAAgBQABAAAAgBQgBAAAAgBQAAgBgFgEQgDgBgHABIgHgBg");
	mask_7.setTransform(42.325,29.35);

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#BBC0E1","#7D73B4"],[0,1],-41.2,0,41.3,0).s().p("AmmElIAApKINNAAIAAJKg");
	this.shape_7.setTransform(42.325,29.35);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_7, new cjs.Rectangle(0,0,84.7,58.7), null);


(lib.ClipGroup_6_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ABAB5QAEgaABgVQABgngOgmQgNgigugoQgsglgPADQgFABgHAGQALgOAJgCIABAAQARAAApArQAtAuANAhQAMAgAAApQgBAVgDAXQAAACgFAAIgCAAg");
	mask_1.setTransform(7.45,12.1042);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#833996","#AF6DAD"],[0,1],0,12.1,0,-12.1).s().p("AhNB5IAAjxICbAAIAADxg");
	this.shape_1.setTransform(7.8,12.125);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0_1, new cjs.Rectangle(0,0,14.9,24.2), null);


(lib.ClipGroup_5_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AguA6QgPgGALgxQALgvAQgQQAFgEAHAAQARAAAWAWQAXAXAEAWQAGAdglAVQgVAMgUAAQgPAAgOgHg");
	mask_2.setTransform(11.0988,10.3663);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#5B2B84","#7452A2"],[0,1],-1.9,6,2.1,-6.4).s().p("AhrA6IA4ioICfA0Ig4Cpg");
	this.shape_2.setTransform(10.8,11.1);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0_2, new cjs.Rectangle(5.6,3.9,11.1,12.999999999999998), null);


(lib.ClipGroup_5_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AkHDRQgTgCgPgHQAJhFAdg/QALASgFAZQgDASAIALQAIAJATAFQASAEAbgFIAagCQAQgBALgCIATgGQALgDAIgBIAZgFIAPgEIAOgDIAXAAQAOAAARgJIAdgQQAYgNASgGQAYgJAJgLQAEgEAFgKIAJgKQAHgIARgYIANgVQADgFAFgFIAIgIQANgOAIgPQAMgZgGgkIgHgcIgHgdQgFgRgUgMIAQABQApADAnAJQAWAigIAjQgHAggSAkQgLAYgfAaQgeAYgSAWIgXAdQgNAQgPAJQhMAthrAbQgLADgQAAIgbABQgLACgPAFIgZALQgkAOgPAEQgYAHgTAAIgLgBgADnh1QAAALACAJIACAKQADAEAFABQAEABAEgCQAQgJAIgYIADgQQABgFgEgRIgDgNQgDgJgEgEQgEgEgGgBQgHgBgFACQgIADgDAMQgBACAAABQAAABgBABQAAAAAAAAQAAAAgBgBQACAWAAAag");
	mask_6.setTransform(29.8067,20.9534);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#BBC0E1","#7D73B4"],[0,1],-29.9,0,29.7,0).s().p("AkrDTIAAmlIJXAAIAAGlg");
	this.shape_6.setTransform(29.975,21.1);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_6, new cjs.Rectangle(0,0,59.6,41.9), null);


(lib.ClipGroup_4_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AglAwQgLgFAIgpQAJgmANgNQAEgEAFAAQAOAAASASQASATADASQAFAYgeASQgRAKgPAAQgMAAgMgGg");
	mask_3.setTransform(8.9992,8.452);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#8C439A","#8958A4"],[0,1],-1.6,4.9,1.7,-5.3).s().p("AhXAwIAuiKICBAqIguCLg");
	this.shape_3.setTransform(8.775,9.1);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0_3, new cjs.Rectangle(4.6,3.1,8.9,10.8), null);


(lib.ClipGroup_3_0_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AAkA6QiAhJg7hFIBTghIAJAhQAQApAkAmQAjAmA+ALQAgAFAYgDIAGBIQg0gXhAglg");
	mask_5.setTransform(22.2,20.775);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#5B2B84","#7452A2"],[0,1],-2,6.2,2.8,-8.5).s().p("AjdBfIBkkuIFXBxIhjEug");
	this.shape_5.setTransform(22.175,20.775);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_5, new cjs.Rectangle(7,9,30.4,23.6), null);


(lib.ClipGroup_3_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AiMFzQhLg/gshWQgcg6gNg6QgKgxAAgxQAAiJBKh0QAdguApgnQBBhABTgjQBXgkBeAAIAeABQA9AEA4ATQgvgNgugDIgfgBQheAAhXAkQhTAjhBBAQgpAngcAtQhLB0ABCKQAAAxAKAwIAAABQAMA8AcA3QAsBXBLA/QBHA8BWAbQhkgbhQhDg");
	mask_7.setTransform(31.05,46.55);

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FCFADA","#020303"],[0,1],-18.3,-31.4,0,-18.3,-31.4,62.4).s().p("Ak2HRIAAuiIJsAAIAAOig");
	this.shape_7.setTransform(31.05,46.55);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_7, new cjs.Rectangle(0,0,62.1,93.1), null);


(lib.ClipGroup_1_0_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("ABGBPQgugEgvgbQgngWgZg2QgOgbgFgXQAHASAOAXQAbAtAhAWQAnAcAzAMQAZAGARABQgJACgNAAIgPAAg");
	mask_7.setTransform(10.7,7.9333);

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#91489C","#AF6DAD"],[0,1],0,7.3,0,-8.5).s().p("AhqBWIAAirIDVAAIAACrg");
	this.shape_7.setTransform(10.7,8.55);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_7, new cjs.Rectangle(0,0,21.4,15.9), null);


(lib.ClipGroup_1_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AgZBXQgTgfglghQgkggglguQgTgXgLgRQBugOBjgBQDHgCgxBEQgyBEhLAyQglAagbALQgCgJgJgPg");
	mask_8.setTransform(18.467,15.4222);

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#BBC0E1","#5C739D"],[0,1],0,13.3,0,-8.9).s().p("AjaCFIAAkJIG1AAIAAEJg");
	this.shape_8.setTransform(21.925,13.275);

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_8, new cjs.Rectangle(0,4.3,37,22.3), null);


(lib.ClipGroup_29_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AAiC3QhIgXgkggQgjgfgUgjQgTghADgYQACgWAXgkQAVgfAfggQAggiAbgXQAggdAGAGQgJAPgQAOQgLAKgLAfQgLAhgEAnIgIBFQAAApAXAZQAVAXA2AAQA8gBAGAEQATALAEAeQAEAggWANQgIAFgPAAQgaAAgtgPg");
	mask_3.setTransform(14.9168,20.5225);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C6E6DB","#96A9A3","#5D6662","#383C3A","#1E211F","#0B0D0C","#020303"],[0,0.141,0.373,0.58,0.761,0.91,1],-15.1,0,14.2,0).s().p("AiZDQIAAmfIEzAAIAAGfg");
	this.shape_3.setTransform(15.375,20.8);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29_3, new cjs.Rectangle(0.3,0.8,29.3,39.5), null);


(lib.ClipGroup_27_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AAEBPQgSgDgOglQgFgPACgVQABgKAFgZQAGgbAagMQAZgMABALQABAFgLAYQgLAZAAALQABAMAKASQAKASAAACQABAHgLAOQgKAPgIAAIgBAAg");
	mask_4.setTransform(3.6995,8.4944);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C6E6DB","#96A9A3","#5D6662","#383C3A","#1E211F","#0B0D0C","#020303"],[0,0.141,0.373,0.58,0.761,0.91,1],-3.2,0,3.4,0).s().p("AgjBSIAAijIBHAAIAACjg");
	this.shape_4.setTransform(3.575,8.225);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27_4, new cjs.Rectangle(0.4,0.7,6.6,15.7), null);


(lib.ClipGroup_25_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AmzCwIAAlfINnAAIAAFfg");
	mask_2.setTransform(43.6,17.625);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#55479B").s().p("AjDCmQhjgEgVgFQgXgFhhhAQAwAOBCAOQCFAcBeACQBgACBGgTQAOgEBagiQA3gVA6gjQBEgnAWgdQAUgaAVg9QAKgeAGgZQgIAlgLApQgWBRgRAQQgSAThDAuQg/ArgSAJQg0AagHADQg4AUhBgIQhDAKgagCIgxAIQgNACgNAAQgdAAgegKg");
	this.shape_2.setTransform(43.6,17.615);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_2, new cjs.Rectangle(0,0,87.2,35.3), null);


(lib.ClipGroup_23_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AAACRIhwgGQhKgFguABQgyAChugUIAkgPQApAHAzAFQBkAKAvgHQAJgBBUgFQBCgEAxgMQBlgaBJg/IAsgmQATgTALgRQAcgoAIgkIATAAQgFAVgKAbQgVA2gcAgQgfAhgnAbQgbAUgYAKQgoAUgvARQhMAcgrAAIgDAAg");
	mask_5.setTransform(39.4,14.4767);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F8EE51","#350D36"],[0,1],-23.1,-9.8,0,-23.1,-9.8,45.3).s().p("AmJCRIAAkiIMTAAIAAEig");
	this.shape_5.setTransform(39.375,14.55);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_5, new cjs.Rectangle(0.1,0,78.7,29), null);


(lib.ClipGroup_21_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ah7EzIhxgGQglgCgjgUQgRgKgdgXQgMgKgHgjQgIgqgLgSQgRgcgIgiQgJgiAFgVQADgRAignIAggkIgiA2QgdA9AXAkQAXAjAUA8IAXBCQAIAOBEARQBCARAVgFQAogJATgDQAsgFAaAKIBdgGQAXAAAsgWQAJgFBLgZQAWgKA8gtQAMgJAZgdQAYgdAGgMQAHgNAOg1QAOg1AFggQAEgegKg1QgJgxgMgZQgJgSgagVIgYgRIADgNIAjgVIAfAxQAfA4AEArIAGBTQADA4gHAXQgKAjgPAmQgVA2gRAVQgaAggnAkQgxAvgbAKQgfAMhJAMQhLANgyABIgHAAQgfAAhHgEg");
	mask_3.setTransform(43.03,31.0775);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#633A64"],[0,1],-24.9,-21,0,-24.9,-21,57.5).s().p("AmtE3IAAptINbAAIAAJtg");
	this.shape_2.setTransform(42.975,31.125);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_3, new cjs.Rectangle(0.7,0,84.7,62.2), null);


(lib.ClipGroup_19_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AkQB4IAAjvIIhAAIAADvg");
	mask_7.setTransform(27.275,11.975);

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7D73B4").s().p("AjqBDQAigqAagYQAcgaA8gcQBBgeBXgYQBNgUBJAOQAkAHAVAMIgwgGIgzADQg4AEgZAGQgaAGg3ARIgwARIhaAoIiSB/QAGgOAggng");
	this.shape_7.setTransform(27.275,11.9746);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_7, new cjs.Rectangle(0,0,54.6,24), null);


(lib.ClipGroup_18_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AiGBvIAAjdIENAAIAADdg");
	mask_5.setTransform(13.5,11.075);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7D73B4").s().p("AiBBLQgJgmAGgKQAHgNAZgTQAXgUAUgKIA3gjQApgbAdgHQAdgHAWACQALACAFACQgMgDgRADQgTAEhQApQgYAMgjAcQgjAagNARQgKAOgGAmQgDATAAARQgGgRgEgTg");
	this.shape_5.setTransform(13.5009,11.0921);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_5, new cjs.Rectangle(0,0.1,27,22.099999999999998), null);


(lib.ClipGroup_17_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AjiC4IAAlvIHFAAIAAFvg");
	mask_7.setTransform(22.7,18.425);

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7D73B4").s().p("AiyC4QgSgCgLgHQgIgFgHg3IgEgtQADARANAbQATApAQACQAaADAjgGQAygKAsgaQAxgeBOhYQBNhWAHgjIAMg8IADgCQAEgBAHADQALAEgCANQgFAcgGAYQgGAUgNAhQgOAkgGAIIgWAjQgTAfgLAIQgLAIg4AeIg+AiQgKAGg1ASIhHAYQgPAFgQAAIgIAAg");
	this.shape_7.setTransform(22.759,18.4141);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_7, new cjs.Rectangle(0.1,0,45.3,36.9), null);


(lib.ClipGroup_16_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AmIEEIAAoHIMRAAIAAIHg");
	mask_5.setTransform(39.275,25.95);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7D73B4").s().p("Aj5D6IhDgVQgZgGgLglQgHgtgFgSQgGgWgMgcIgKgYQAQAgAfAxQAnA+BAARQAbAHA2ACQA6ADAygFIBfgHQAygFAsgPQA1gSAvgkQAugiAigwQAdgnAHgkQAFgtAGghQAHgpgKg/QgFgfgGgXIAUAVQAWBDACAkQABAZgJAxQgIAtgIAQQgEAKgHAgQgKAfgWAWQg8A9grARQgRAHgrAXIg7AgQgVALgyADQgxADgigHQgdgFg1AGQgpAFgXAHIgIAAQgPAAgegJg");
	this.shape_5.setTransform(39.2852,25.9485);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_5, new cjs.Rectangle(0,0,78.6,51.9), null);


(lib.ClipGroup_15_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AiPDEQhCgBgNgGQgEgBgKgUQgGgMAFgqIAHgoIAIAxQAKAxAKADQATAFAlgHQA0gJA7gfQANgGBQgjQAjgPAdgeQAhghAXgtQAIgOAXg2QALgcAEgdQAEgcgEgLIAIAKQAJAPAAAXQAAAegIAoQgIAqgMAbQgNAegcAhQggAngjAUQiPBShnAAIgCAAg");
	mask_4.setTransform(24.749,19.5756);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#633A64"],[0,1],-13.8,-13.2,0,-13.8,-13.2,34.1).s().p("AjzDEIAAmHIHnAAIAAGHg");
	this.shape_4.setTransform(24.4,19.625);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_4, new cjs.Rectangle(0.7,0,48.099999999999994,39.2), null);


(lib.ClipGroup_13_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AinA4QAvgyBAgmQA/gnBpgQQA0gJAngBIgOAHQhMAVgxAMQgiAJgiAPQgXAKgxAXQgjASgwApQgZAVgSASQAMgRAXgZg");
	mask_6.setTransform(20.25,9.8);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#633A64"],[0,1],-11.9,-6.6,0,-11.9,-6.6,24.5).s().p("AjKBiIAAjDIGVAAIAADDg");
	this.shape_6.setTransform(20.25,9.8);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_6, new cjs.Rectangle(0,0,40.5,19.6), null);


(lib.ClipGroup_11_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AgIgUQAtgdAqgNQAVgHAMAAQgYAPgWARQgPANgTAIQgLAGgqAQQgfAMghAbQgQAOgKALQAAgZBnhBg");
	mask_7.setTransform(11.225,7);

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#633A64"],[0,1],-6.6,-4.7,0,-6.6,-4.7,14.4).s().p("AhvBGIAAiLIDfAAIAACLg");
	this.shape_7.setTransform(11.225,7);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_7, new cjs.Rectangle(0,0,22.5,14), null);


(lib.ClipGroup_9_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AgfAKQAQgZAPgKQAQgJARABQAIABAFADQgiAHgTATQgUARgSAUQAFgLAJgNg");
	mask_8.setTransform(4.575,4.0648);

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","#633A64"],[0,1],-2.6,-1.9,0,-2.6,-1.9,6.3).s().p("AgtAlIAAhJIBbAAIAABJg");
	this.shape_8.setTransform(4.575,3.725);

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_8, new cjs.Rectangle(0,0.7,9.2,6.8), null);


(lib.ClipGroup_7_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AgjAhQgDgIAIgLIAJgJQgJALADADQAHAEAUgIQAOgGAJgYQAFgMACgMQAEAGACAJQADASgOAQQgPAUgVAHQgIADgFAAQgIAAgDgHg");
	mask_8.setTransform(4.0114,3.965);

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","#633A64"],[0,1],-2.5,-3,0,-2.5,-3,5.9).s().p("AgrArIAAhVIBXAAIAABVg");
	this.shape_8.setTransform(4.35,4.3);

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_8, new cjs.Rectangle(0.4,0,7.3,8), null);


(lib.ClipGroup_6_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgSHQQgPgBgYgDQh/gRhmhKQgLgIgHgGQAHgGAPgDIAOgCIgigbIhWguQgXgegVgkIgJgRIAAAAIgJgSQgPgjgIgaQgHgVgEgYIAAAAIgGggQgFghAAgmIAAgQIACgZIACgZIAAgCIAGghQAEgVAIgZQAKggAMgeQAQghAPgWQAhgSAXgKQJKh0AJgKQAFgGAVAAQAOAAANACQAoAaAlAkIAQAQIAcAgQAfAqAVApQAKARAGARIAAAAQAcBvgQB4QgIA6gOAmQASgGAPAAIgEAOQgPA1gYAsQgoBKg9A5QhKBEhbAiQhUAhhfAAg");
	mask_3.setTransform(49.6,46.4);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#DCA0C8","#DCA0C8","#D69CC6","#C890C0","#B27DB7","#9566AB","#7D52A1","#784EA0","#6B459B","#563594","#563594"],[0,0.004,0.106,0.235,0.388,0.549,0.686,0.761,0.871,1,1],-31.8,-21.7,0,-31.8,-21.7,77.4).s().p("An6HQIAAufIP1AAIAAOfg");
	this.shape_3.setTransform(50.725,46.4);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_3, new cjs.Rectangle(0,0,99.2,92.8), null);


(lib.ClipGroup_5_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AgSHQQgPgBgYgDQh/gRhmhKQgLgIgHgGQAHgGAPgDIAOgCIgigbIhWguQgXgegVgkIgJgRIAAAAIgJgSQgPgjgIgaQgHgVgEgYIAAAAIgGggQgFghAAgmIAAgQIACgZIACgZIAAgCIAGghQAEgVAIgZQAKggAMgeQAQghAPgWQAhgSAXgKQJKh0AJgKQAFgGAVAAQAOAAANACQAoAaAlAkIAQAQIAcAgQAfAqAVApQAKARAGARIAAAAQAcBvgQB4QgIA6gOAmQASgGAPAAIgEAOQgPA1gYAsQgoBKg9A5QhKBEhbAiQhUAhhfAAg");
	mask_7.setTransform(49.6,46.4);

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#DCA0C8","#DCA0C8","#D69CC6","#C890C0","#B27DB7","#9566AB","#7D52A1","#784EA0","#6B459B","#563594","#563594"],[0,0.004,0.106,0.235,0.388,0.549,0.686,0.761,0.871,1,1],-31.8,-21.7,0,-31.8,-21.7,77.4).s().p("An6HQIAAufIP1AAIAAOfg");
	this.shape_7.setTransform(50.725,46.4);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_7, new cjs.Rectangle(0,0,99.2,92.8), null);


(lib.ClipGroup_4_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgZHZQgUgBgQgDQh2gOhhhHQgOgJgNgMIgHgGQghgcgdglQgXgdgSghIgJgQIAAAAIgIgSQgMgagJgdQgGgRgFgaIAAAAIgGgfQgFglAAgeIABgPIABgXIACgXIAAgCIAGgeQACgPAJgdQAIgdANgdQAMgaAUggQAPgXAMgOQASgYAYgZQBCg/BTgjQBXgkBeAAIAPABIAQABQAWABAVADIABAAIAjAHIAsANIA1AWQBGAiA2A2IAQAPIAaAfQAcAiAVAqQAYAwAOA2QAIAjAEAhQACAZAAAUQAAASgDAjQgEAngMAoIAAABQgOAugXAsQgnBIg4A0QhEA/hXAhQhRAfhXAAg");
	mask_3.setTransform(47.4,47.4);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#DCA0C8","#DCA0C8","#D69CC6","#C890C0","#B27DB7","#9566AB","#7D52A1","#784EA0","#6B459B","#563594","#563594"],[0,0.004,0.106,0.235,0.388,0.549,0.686,0.761,0.871,1,1],-29.3,-22.1,0,-29.3,-22.1,76.1).s().p("AnZHaIAAuzIOzAAIAAOzg");
	this.shape_3.setTransform(47.375,47.375);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_3, new cjs.Rectangle(0,0,94.8,94.8), null);


(lib.ClipGroup_2_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgCAbQgMgJgSgtIAfARIAiAaQgIAIgPACIgKACIgCgBg");
	mask_2.setTransform(3.275,2.7563);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#684199","#633E98","#563695","#563594"],[0,0.4,0.98,1],-2,-1.3,0,-2,-1.3,4.9).s().p("AggAcIAAg3IBBAAIAAA3g");
	this.shape_2.setTransform(3.275,2.825);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_2, new cjs.Rectangle(0,0,6.6,5.5), null);


(lib.ClipGroup_1_0_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AgPAqQAQg+ADgXQALAzABAcQgMAIgKAAQgFAAgEgCg");
	mask_8.setTransform(1.7,4.389);

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#2B2978","#2F2B7D","#332C81"],[0,0.675,1],-1,-2.2,0,-1,-2.2,5.1).s().p("AgQAuIAAhbIAhAAIAABbg");
	this.shape_8.setTransform(1.675,4.575);

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_8, new cjs.Rectangle(0.1,0,3.3,8.8), null);


(lib.ClipGroup_1_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AhnBeQgGgRADgUQAAAHABAHQAEATALACQAPAEArgaQBAgnAIgGQAXgRANhIQAFgdgCgLIALAJQARASABATQACAngtAsQgbAcgPAMQgcAXgXAGIguAPIgHAAQgQAAgGgPgABKhsIAEAAIABAEg");
	mask_9.setTransform(11.4213,12.4285);

	// Layer_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","#633A64"],[0,1],-6.1,-7.4,0,-6.1,-7.4,17).s().p("AhvB7IAAj2IDfAAIAAD2g");
	this.shape_9.setTransform(11.2,12.35);

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_9, new cjs.Rectangle(0.7,1.5,21.5,21.9), null);


(lib.ClipGroup_46_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ag3ANQAEhLAVgQQAWgQAiAUQASALANANQgZAHggASQgVAMgSAyQgKAZgFAYQgCgjABgmg");
	mask_1.setTransform(15.0969,15.9616);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFCEA","#B9B6AB","#6E6A65","#403E3B","#222120","#0C0D0D","#020303"],[0,0.141,0.369,0.58,0.761,0.91,1],-3.9,-6,2.7,4.4).s().p("AiSgoICshuIB5C+IisBug");
	this.shape_1.setTransform(14.7,15.05);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_46_1, new cjs.Rectangle(9.5,7.4,11.3,17.200000000000003), null);


(lib.ClipGroup_43_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ai9ArQg0gsAMg0QATgJAlgHQBMgOBeANQBdAOBRAeQAoAPAWALQgngIgzgGQhlgNg5AJQg5AKglArQgTAWgHAUQgcgMgagWg");
	mask_1.setTransform(33.3875,33.2811);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFCEA","#B9B6AB","#6E6A65","#403E3B","#222120","#0C0D0D","#020303"],[0,0.141,0.369,0.58,0.761,0.91,1],-14,-13.2,13.1,12.5).s().p("AlFAFIE5lJIFRFBIk4FIg");
	this.shape_1.setTransform(32.55,32.5);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43_1, new cjs.Rectangle(10.1,25.6,46.6,15.399999999999999), null);


(lib.ClipGroup_41_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgogBQAlgrAXAEQAZAEARAgQAIAPAEAQQgGgIgMgIQgYgOgfADQgdACgaAUQgMAKgHAKQAOgWATgVg");
	mask_1.setTransform(11.85,12.1368);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFCEA","#B9B6AB","#6E6A65","#403E3B","#222120","#0C0D0D","#020303"],[0,0.141,0.369,0.58,0.761,0.91,1],-2.1,-2,5.4,5.1).s().p("Ah2ACIBzh4IB5B1IhyB3g");
	this.shape_1.setTransform(11.85,11.85);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41_1, new cjs.Rectangle(4.5,8,14.8,8.3), null);


(lib.ClipGroup_39_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAjgEQgEgDgrADQgmADAAgTQACgDAGgDQANgGATABQAUAAARAJQAMAGAIAJQAHAIgEAgQgDgagMgLg");
	mask_1.setTransform(8.4227,8.5981);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFCEA","#B9B6AB","#6E6A65","#403E3B","#222120","#0C0D0D","#020303"],[0,0.141,0.369,0.58,0.761,0.91,1],-3.7,-3.5,4.2,4).s().p("AhVACIBThXIBYBUIhTBXg");
	this.shape_1.setTransform(8.55,8.55);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39_1, new cjs.Rectangle(3.3,5.4,10.3,6.5), null);


(lib.ClipGroup_37_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AA0AdQgUgWgQgCQgMgBgcAGQgYAGgIgHQgKgJgBgRQgBgTAIgIIAcgEQAgACAZAXQAZAXAMAbQAGANABAJQgHgKgKgKg");
	mask_2.setTransform(12.7947,13.25);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFCEA","#B9B6AB","#6E6A65","#403E3B","#222120","#0C0D0D","#020303"],[0,0.141,0.369,0.58,0.761,0.91,1],-5,-4.7,6.5,6.2).s().p("Ah9ADIB6iAICBB7Ih6CAg");
	this.shape_2.setTransform(12.6,12.6);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37_2, new cjs.Rectangle(6,8.4,13.7,9.799999999999999), null);


(lib.ClipGroup_35_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhIAAQAIgGANgGQAbgLAZABQAaABAZAOQANAHAIAGQgggIgWAGQgYAOgQAEIgKABQgXAAgSgXg");
	mask_2.setTransform(10.875,9.7872);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFCEA","#B9B6AB","#6E6A65","#403E3B","#222120","#0C0D0D","#020303"],[0,0.141,0.369,0.58,0.761,0.91,1],-4.4,-4.1,3.6,3.5).s().p("AhsACIBphuIBwBrIhpBug");
	this.shape_2.setTransform(10.9,10.875);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35_2, new cjs.Rectangle(3.6,7.5,14.6,4.699999999999999), null);


(lib.ClipGroup_33_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgwA2QgOgGAFgmQAFgmAYgLQAhgQA2ABQgIABgLAFQgWAJgRARQgKAMgRAnQgKAagJAAIgDgBg");
	mask_3.setTransform(12.5092,11.8578);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFCEA","#B9B6AB","#6E6A65","#403E3B","#222120","#0C0D0D","#020303"],[0,0.141,0.369,0.58,0.761,0.91,1],-3.6,-3.4,0.5,0.5).s().p("Ah5ADIB2h8IB9B3Ih3B8g");
	this.shape_3.setTransform(12.225,12.225);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33_3, new cjs.Rectangle(6.6,6.4,11.9,10.999999999999998), null);


(lib.ClipGroup_31_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ah6ASQABgUAcgSQAjgWA1AGQAyAFAsAeQAWAPAMAOQgxAAhAADQhBAHgaAAIgCAAQgpAAACgUg");
	mask_3.setTransform(17.3725,17.0124);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFCEA","#B9B6AB","#6E6A65","#403E3B","#222120","#0C0D0D","#020303"],[0,0.141,0.369,0.58,0.761,0.91,1],-6.2,-5.9,7.9,7.4).s().p("AisADICmiuICyCpIilCug");
	this.shape_3.setTransform(17.25,17.225);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31_3, new cjs.Rectangle(5.1,13.2,24.6,7.699999999999999), null);


(lib.ClipGroup_29_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgaDKQhOgzgugaQhTgvgcAOQgZAMgTBEIgNAvQgLh9BUh1QApg7AsgjQAdArA4gHQArgGAvghQAlgZAsg5QAggpAJAJQAOANgQAoQgPAogUACQgXAEgfAVQgiAYADARQAFAaAiAkQAoAqAtAHQAkAFAjgjQAfgeAOAIQAfARAWAuQAZA2gaAjQgoA2hZAeQgtAPgpAAQhAAAg2gjg");
	mask_4.setTransform(33.6987,25.2052);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#A3CD39","#020303"],[0,1],-18.4,-7,0,-18.4,-7,49.4).s().p("AlVEOIAAobIKrAAIAAIbg");
	this.shape_4.setTransform(34.15,27);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29_4, new cjs.Rectangle(1.7,1.6,64.1,47.3), null);


(lib.ClipGroup_27_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Ag9HWQiIgShqhZQgnghgegmQgXgdgSghIgJgQIAAAAIgIgRQgPgigGgWQgIgYgEgTIAAAAQgEgUgBgLQgFgfAAgkQAAgTACgTIADgYQAIhEAdhBQAPggARgaQAegvAognQBBg/BUgjQBWgkBeAAIAfABQApADAmAJQAYAGAUAHIAyAUIAEACQBEAiA4A2IApAtQAcAkAVAqQAZAxANA0QAOA5AAA4QAABDgTBAQgkB9hgBbQhFBAhWAgQhRAfhXAAg");
	mask_5.setTransform(47.375,47.375);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#3FB764","#3FB764","#3FB365","#3AAB67","#33A06C","#299171","#207F74","#116B75","#015575","#005075","#005075"],[0,0.004,0.176,0.31,0.427,0.541,0.651,0.753,0.851,0.871,1],-29.3,-22.1,0,-29.3,-22.1,76.1).s().p("AnZHaIAAuzIOzAAIAAOzg");
	this.shape_5.setTransform(47.375,47.375);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27_5, new cjs.Rectangle(0,0,94.8,94.8), null);


(lib.ClipGroup_25_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AAQCEQg3gLgVh8QgIg0AJgrQAFgWAGgMIBwDGQADAggPATQgMAQgRAAIgHgBg");
	mask_3.setTransform(7.4172,13.2598);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#037D70","#58A455","#76C043","#76C043"],[0,0.627,0.988,1],0,10.9,0,-15.6).s().p("AhICcIAAk3ICQAAIAAE3g");
	this.shape_3.setTransform(7.25,15.6);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_3, new cjs.Rectangle(1,0,12.9,26.5), null);


(lib.ClipGroup_23_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AlUCCQAAiKBKhzQAegvAognQBBg/BUgjQBVgkBfAAIAfABQBdAGBUApIgFABQgHABgIgCIgKgEIgRgEIgRgFQgEgBgHABQgDABgJgDIgNgDIgkgKQgHgCgPAAIgRACIgXgCQgKgBgGABQgEACgIAAIgQADQgPADgMAAIgKAAQgGgBgEABIgEAEIgDAEQgKAJgEAFQgIALAAAHQAAAHAFALQAFAKgHAEQgNAJgLADQgJADgFgEQgDgFgCgBIgHABIgSAFIgKADIgGgBIgGAAIgUAEQgHABgHgFQgDgDgDABQgCAAgEAFIgEAHIgVAhIgGAEIgPALIgbAWQgFADgHAEIgNAFIgQAFIgGADIgEAHQgLANgCAEIgFALIgGAQIgEARQgCAKgDAHIgIASQgEAIgEAYQgBAIACAMQABAFAAAQQAAAKgKAKIgHAGIgIAGQgJAIgCAGQgBADABAFIgEARIgBAWIAAALIACAKIAAAIIAGAcIAGASIAGAYIACATIACAQQAAAIgCAPQAAAIADAMIAFATIADALQgzhlAAhxg");
	mask_6.setTransform(34.075,34.375);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A1CD3A","#A1CD3A","#9EC83C","#93BE43","#82B14E","#6B9F5B","#4D8C68","#207671","#007073"],[0,0.012,0.247,0.42,0.573,0.71,0.843,0.969,1],-34,0,34.1,0).s().p("AlUFYIAAqvIKpAAIAAKvg");
	this.shape_6.setTransform(34.075,34.375);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_6, new cjs.Rectangle(0,0,68.2,68.8), null);


(lib.ClipGroup_21_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Ag4BMQgGgOAFgZQAIgiAZgfQAYgeAggMQARgGAMgBQhnCbgNAAIgBgCg");
	mask_4.setTransform(6.3435,7.7574);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#76C043","#76C043","#3EB549","#17B24B"],[0,0.012,0.765,1],2.9,-0.9,0,2.9,-0.9,6.7).s().p("Ag9BUIAAinIB7AAIAACng");
	this.shape_3.setTransform(6.2,8.425);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_4, new cjs.Rectangle(0.3,0,12.1,15.5), null);


(lib.ClipGroup_19_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("ABiBhQg6gHhOg4Qgygigfg0QgQgZgFgTIEZC8QgJAFgTAAIgPAAg");
	mask_8.setTransform(14.1,9.7409);

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#B5D334","#B5D334","#8EC73F","#59BA47"],[0,0.016,0.494,1],6.3,-1.7,0,6.3,-1.7,10).s().p("AiMBvIAAjdIEZAAIAADdg");
	this.shape_8.setTransform(14.1,11.075);

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_8, new cjs.Rectangle(0,0,28.2,19.5), null);


(lib.ClipGroup_18_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AnpHsIAAvXIPTAAIAAPXg");
	mask_6.setTransform(49.025,49.175);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#044A59").s().p("AArBoQiGAAg4gZQg3gYghguQgegnAHgZQAGgZBNgOQBVgRBnAPQB0ARBGAkQA+AggBAfQgBAYgbAYQgOANgOAHQghAQh5AAIgHAAg");
	this.shape_6.setTransform(46.3671,83.0436);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_6, new cjs.Rectangle(20.4,72.7,52.00000000000001,20.799999999999997), null);


(lib.ClipGroup_17_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AAJAdQgfgDgegbQgPgNgIgOQAWANBCAGQAhADAeAAQgDAJgLAJQgSARgbAAIgIAAg");
	mask_8.setTransform(7.6,2.895);

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#B5D334","#B5D334","#8EC73F","#59BA47"],[0,0.016,0.494,1],3.4,-0.3,0,3.4,-0.3,4.1).s().p("AhLAfIAAg9ICXAAIAAA9g");
	this.shape_8.setTransform(7.6,3.1);

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_8, new cjs.Rectangle(0,0,15.2,5.8), null);


(lib.ClipGroup_16_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AnpHsIAAvXIPTAAIAAPXg");
	mask_6.setTransform(49.025,49.175);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#02787B").s().p("AgBAyQgsgLgagmIgSgkQAygdA9AQQA2AOALAaQAKAZgWAWQgQAQgcAAQgPAAgRgFg");
	this.shape_6.setTransform(47.3696,22.2409);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_6, new cjs.Rectangle(38.4,16.8,18,10.899999999999999), null);


(lib.ClipGroup_15_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AhZA5ICxhyQAEAKgGAPQgKAegtAaQgsAbgqAGIgUABIgOgBg");
	mask_5.setTransform(8.9592,5.8318);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#B5D334","#B5D334","#8EC73F","#59BA47"],[0,0.016,0.494,1],3.3,-0.6,0,3.3,-0.6,6).s().p("AhfA/IAAh9IC/AAIAAB9g");
	this.shape_5.setTransform(9.625,6.25);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_5, new cjs.Rectangle(0,0,17.9,11.7), null);


(lib.ClipGroup_14_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AnpHsIAAvXIPTAAIAAPXg");
	mask_6.setTransform(49.025,49.175);

	// Layer_3
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(21,3.2,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_6, new cjs.Rectangle(21,3.2,73.5,51.5), null);


(lib.ClipGroup_13_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("Ag6A5QgsgmgcgmQgbgmAIgNQASgeAmgRQAlgRArAAQAeAAAbAJQAdAKATASQAzAvAIBZQACAigFAcQgFAZgJADQgQAGgSAAQhDAAhbhOg");
	mask_7.setTransform(17.1015,13.4715);

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#6BBE45","#6BBE45","#96C93E","#F4EA18","#F6EB16"],[0,0.012,0.31,0.98,1],-0.6,3.8,0,-0.6,3.8,14.3).s().p("AipCXIAAktIFTAAIAAEtg");
	this.shape_7.setTransform(17.025,15.125);

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_7, new cjs.Rectangle(1.9,0,30.4,27), null);


(lib.ClipGroup_12_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgmBkQggghgEhTQgFhTAbgLQAKgEAKAAQAmAAAlAqQAlAqgFArQgEA0gnAhQgVARgRAAQgRAAgPgPg");
	mask_6.setTransform(8.7667,11.5317);

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#6BBE45","#6BBE45","#96C93E","#F4EA18","#F6EB16"],[0,0.012,0.31,0.98,1],-4.8,0.8,0,-4.8,0.8,9.8).s().p("AhUCCIAAkDICpAAIAAEDg");
	this.shape_5.setTransform(8.45,12.975);

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_6, new cjs.Rectangle(1.2,0,15.2,23.1), null);


(lib.ClipGroup_11_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AgXAbQgjgkABgWQABgNAPgIQAOgGAUAAQAUAAARAHQASAHAFANQAKAYgKAeQgJAegRAFIgEABQgRAAgdggg");
	mask_8.setTransform(5.997,5.911);

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#6BBE45","#6BBE45","#96C93E","#F4EA18","#F6EB16"],[0,0.012,0.31,0.98,1],-2,1.7,0,-2,1.7,5.8).s().p("Ag/A+IAAh7IB+AAIAAB7g");
	this.shape_8.setTransform(6.35,6.225);

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_8, new cjs.Rectangle(0.2,0,11.600000000000001,11.8), null);


(lib.ClipGroup_10_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AANB2QgbABgVgFQhfgRhPhdQghgngFgdQgFgiAggIQAugMBBAAQB4AAB4AkQB3AkgCAiQgBAnhFArQhLAxhYgBg");
	mask_3.setTransform(31.0113,11.85);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#6BBE45","#6BBE45","#96C93E","#F4EA18","#F6EB16"],[0,0.012,0.31,0.98,1],1.8,4.9,0,1.8,4.9,21.8).s().p("AkYB2IAAjsIIwAAIAADsg");
	this.shape_3.setTransform(28.05,11.85);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_3, new cjs.Rectangle(6.2,0,49.699999999999996,23.7), null);


(lib.ClipGroup_9_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AgVBZQgxgBgMgdQgLgbAtg8QAug8AhAAQAEAAAEABQAkAMAJA5QAJA7gpAdQgcATgpAAIgEAAg");
	mask_9.setTransform(9.8464,8.9273);

	// Layer_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#6BBE45","#6BBE45","#96C93E","#F4EA18","#F6EB16"],[0,0.012,0.31,0.98,1],-1,3.1,0,-1,3.1,8.4).s().p("AhoBfIAAi9IDQAAIAAC9g");
	this.shape_9.setTransform(10.45,9.475);

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_9, new cjs.Rectangle(1.3,0,17.099999999999998,17.9), null);


(lib.ClipGroup_8_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhIBNQgdgHAJg7QAJg6AigSQAVgLAdAAQApAAAeATQAfATgLATQgPAcg6AkQg0AggdAAIgKAAg");
	mask_2.setTransform(11.1529,7.7475);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#6BBE45","#6BBE45","#96C93E","#F4EA18","#F6EB16"],[0,0.012,0.31,0.98,1],-0.2,2.7,0,-0.2,2.7,8.7).s().p("AhsBSIAAijIDZAAIAACjg");
	this.shape_2.setTransform(10.9,8.175);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_0_2, new cjs.Rectangle(1.7,0,19,15.5), null);


(lib.ClipGroup_8_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AiMFzQhKg+gshXQgdg3gNg8IAAgBQgKgxAAgxQABiKBJhzQAegvAogmQBChABTgjQBVgkBfAAIAfABQA9AEA3ATQgrgNgygCIgfgBQhegBhXAlQhTAihBBAQgpAngcAuQhLB1ABCIQgBAzALAvIAAAAQANA+AbA2QAsBWBLA/QBGA7BXAcQhkgbhQhDg");
	mask_3.setTransform(31.05,46.55);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#F8EE51","#020303"],[0,1],-18.3,-31.4,0,-18.3,-31.4,62.4).s().p("Ak2HRIAAuiIJsAAIAAOig");
	this.shape_3.setTransform(31.05,46.55);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_3, new cjs.Rectangle(0,0,62.1,93.1), null);


(lib.ClipGroup_7_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgHA4QgtgPgZgjQgaglAigQQAegOAdAAQAlAAAeAWQAZAUAGAXQAIAdgfASQgTALgVAAQgQAAgQgGg");
	mask_3.setTransform(11.8474,6.2098);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#6BBE45","#6BBE45","#96C93E","#F4EA18","#F6EB16"],[0,0.012,0.31,0.98,1],0.7,1.9,0,0.7,1.9,8).s().p("AhrBEIAAiIIDXAAIAACIg");
	this.shape_3.setTransform(10.8,6.85);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_0_3, new cjs.Rectangle(2.9,0,17.900000000000002,12.4), null);


(lib.ClipGroup_6_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhEgUQhFgCgvAGQA4gQA/AAQBYAABaAgQAtARAbAQQhygviLgGg");
	mask_2.setTransform(18.525,4.375);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#76C043","#76C043","#3EB549","#17B24B"],[0,0.012,0.765,1],-0.9,1.9,0,-0.9,1.9,15.8).s().p("Ai4AnIAAhNIFxAAIAABNg");
	this.shape_2.setTransform(18.525,3.85);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0_2, new cjs.Rectangle(0,1.1,37.1,6.6), null);


(lib.ClipGroup_6_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Ag6BbQghgegHgwQgGguAYgmQAYgmApgGQAogFAiAeQAhAeAHAwQAGAvgYAmQgZAmgpAFIgMABQghAAgcgag");
	mask_4.setTransform(14.0239,15.1314);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#6ABD45","#68B644","#020303"],[0,0.02,1],0,0,0,0,0,11.7).s().p("AiLh2IDzghIAkEOIjyAhg");
	this.shape_4.setTransform(14,15.15);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_4, new cjs.Rectangle(4,3.5,20.1,23.3), null);


(lib.ClipGroup_5_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgRgLQgKgSgDgPQAKAbAaAiQAOARALALQgfgTgRglg");
	mask_3.setTransform(3.1,4.525);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#76C043","#76C043","#3EB549","#17B24B"],[0,0.012,0.765,1],1.4,-0.1,0,1.4,-0.1,3.9).s().p("AgeAtIAAhZIA9AAIAABZg");
	this.shape_3.setTransform(3.1,4.525);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0_3, new cjs.Rectangle(0,0,6.2,9.1), null);


(lib.ClipGroup_4_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AAvBIQgkgBgmgXQgngWgTgdQgTgeALgUQAMgUAkACQAjABAmAXQAnAWATAdQATAegLAUQgLASgeAAIgGAAg");
	mask_4.setTransform(17.925,17.575);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#6ABD45","#68B644","#020303"],[0,0.02,1],0,0,0,0,0,10.8).s().p("AiyApIB9jYIDoCHIh8DXg");
	this.shape_4.setTransform(17.925,17.55);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_4, new cjs.Rectangle(8.1,10.4,19.700000000000003,14.4), null);


(lib.ClipGroup_3_0_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgLgzQgWgfgSgPQBLAlAVBTQALAogFAjQgThWgrg/g");
	mask_6.setTransform(9.8925,12.65);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#B5D334","#B5D334","#8EC73F","#59BA47"],[0,0.016,0.494,1],2.4,0.5,0,2.4,0.5,7.3).s().p("AhqBWIA1jUICgApIg2DTg");
	this.shape_6.setTransform(10.7,12.65);

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0_6, new cjs.Rectangle(4.7,2.9,10.5,19.5), null);


(lib.ClipGroup_2_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AnpHsIAAvXIPTAAIAAPXg");
	mask_3.setTransform(49.025,49.175);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#02787B").s().p("AAaChIgggKQhhhHAFh7QABgqAOgnQAMggAHgEQASgJAhAaQAjAdAfA3QAhA7AKA+QALBBgXAWQgPAOgYAAQgJAAgKgCg");
	this.shape_3.setTransform(11.0998,55.6189);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_3, new cjs.Rectangle(1.2,39.3,19.900000000000002,32.7), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgPB/QhGgIgtgsQgtgrAHg0QAGg1A2gfQA2gfBFAJQBGAIAtAsQAuArgHA0QgHA0g2AgQgqAYg0AAQgOAAgPgCg");
	mask_2.setTransform(21.1556,18.175);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#6ABD45","#68B644","#020303"],[0,0.02,1],0,0,0,0,0,17).s().p("AjTCGIAnk7IF/AvIgmE8g");
	this.shape_2.setTransform(21.15,18.175);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(4.2,5.3,34,25.8), null);


(lib.ClipGroup_1_0_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AgCCNQhJgXgRhBQgGgXAAgeIAAgBQAAg1APgtQAQgvAVAAIAEAAQBcAYAjB3QAOAsAAAqQAAAogLALQgKALgaACIgKAAQgVAAgXgGg");
	mask_9.setTransform(17.2511,19.844);

	// Layer_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#6BBE45","#6BBE45","#96C93E","#F4EA18","#F6EB16"],[0,0.012,0.31,0.98,1],-2,4.8,0,-2,4.8,11.6).s().p("Ai0CJIBWlWIETBFIhWFWg");
	this.shape_9.setTransform(18.075,20.625);

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0_9, new cjs.Rectangle(7.4,5.1,19.799999999999997,29.5), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AluFlIAArJILcAAIAALJg");
	mask_1.setTransform(36.65,35.675);

	// Layer_3
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,73.3,71.4), null);


(lib.firstStone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.firstStone1();
	this.instance.setTransform(73,67,0.4712,0.4712);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.firstStone, new cjs.Rectangle(73,67,128.7,118.30000000000001), null);


(lib.zoom_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.zoom();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zoom_1, new cjs.Rectangle(0,0,45,81), null);


(lib.title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.titleTxt = new cjs.Text("", "normal 400 30px 'Rubik'");
	this.titleTxt.name = "titleTxt";
	this.titleTxt.textAlign = "center";
	this.titleTxt.lineHeight = 38;
	this.titleTxt.lineWidth = 461;
	this.titleTxt.parent = this;
	this.titleTxt.setTransform(215.4276,-82.45,0.5328,0.5619);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.titleTxt);
	}

	this.instance = new lib.bigbubble();
	this.instance.setTransform(61,-122,0.5362,0.503);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.titleTxt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(61,-122,300.9,165), null);


(lib.white = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.whiteTxt = new cjs.Text("", "normal 400 30px 'Rubik'");
	this.whiteTxt.name = "whiteTxt";
	this.whiteTxt.textAlign = "center";
	this.whiteTxt.lineHeight = 38;
	this.whiteTxt.lineWidth = 178;
	this.whiteTxt.parent = this;
	this.whiteTxt.setTransform(132.35,-1.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.whiteTxt);
	}

	this.instance = new lib.whitebox();
	this.instance.setTransform(43,-8);

	this.instance_1 = new lib.Bitmap36();

	this.instance_2 = new lib.zoharwhite();
	this.instance_2.setTransform(28,-24);

	this.instance_3 = new lib.stone();
	this.instance_3.setTransform(-11,-13,1.0696,1);

	this.instance_4 = new lib.WhiteBoxGreen();
	this.instance_4.setTransform(28,-24);

	this.instance_5 = new lib.Bitmap42();
	this.instance_5.setTransform(23,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:0,y:0}},{t:this.instance,p:{x:43,y:-8}},{t:this.whiteTxt,p:{x:132.35,y:-1.9}}]}).to({state:[{t:this.instance_1,p:{x:6,y:5}},{t:this.instance,p:{x:49,y:-3}},{t:this.instance_2},{t:this.whiteTxt,p:{x:138.35,y:3.1}}]},1).to({state:[{t:this.instance_1,p:{x:6,y:5}},{t:this.instance,p:{x:49,y:-3}},{t:this.instance_4},{t:this.whiteTxt,p:{x:138.35,y:3.1}},{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.instance_1,p:{x:0,y:0}},{t:this.instance,p:{x:43,y:-8}},{t:this.whiteTxt,p:{x:132.35,y:-1.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-24,311.3,224);


(lib.smallbubble = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.smallTxt = new cjs.Text("", "normal 300 20px 'Rubik'");
	this.smallTxt.name = "smallTxt";
	this.smallTxt.textAlign = "center";
	this.smallTxt.lineHeight = 25;
	this.smallTxt.lineWidth = 51;
	this.smallTxt.parent = this;
	this.smallTxt.setTransform(50.7964,16.1,0.8259,0.8259);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.smallTxt);
	}

	this.instance = new lib.smallbubbleImg();
	this.instance.setTransform(8,5,0.483,0.483);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.smallTxt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.smallbubble, new cjs.Rectangle(8,5,78.7,44.5), null);


(lib.pausegame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pause();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,59);


(lib.black = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.whiteRectangle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(0,0,177,82), null);


(lib.musicgame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.music();

	this.instance_1 = new lib.musicstop();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,59);


(lib.clock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.clockTxt = new cjs.Text("", "20px 'Rubik Light'", "#FFFFFF");
	this.clockTxt.name = "clockTxt";
	this.clockTxt.textAlign = "center";
	this.clockTxt.lineHeight = 27;
	this.clockTxt.lineWidth = 88;
	this.clockTxt.parent = this;
	this.clockTxt.setTransform(100,4.4);

	this.instance = new lib.timer();
	this.instance.setTransform(0,0,0.5737,0.5737);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.clockTxt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock, new cjs.Rectangle(0,0,159.5,54.5), null);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.btnTxt = new cjs.Text("", "normal 800 18px 'Rubik'", "#FFFFFF");
	this.btnTxt.name = "btnTxt";
	this.btnTxt.textAlign = "center";
	this.btnTxt.lineHeight = 24;
	this.btnTxt.lineWidth = 110;
	this.btnTxt.parent = this;
	this.btnTxt.setTransform(89.2,-143);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.btnTxt);
	}

	this.instance = new lib.buttonimg();
	this.instance.setTransform(26,-154,0.5248,0.5248);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btnTxt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(26,-154,126.5,50.400000000000006), null);


(lib.bigbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.bigTxt = new cjs.Text("", "20px 'Rubik Light'");
	this.bigTxt.name = "bigTxt";
	this.bigTxt.textAlign = "center";
	this.bigTxt.lineHeight = 27;
	this.bigTxt.lineWidth = 51;
	this.bigTxt.parent = this;
	this.bigTxt.setTransform(50.7964,16.1,0.8259,0.8259);

	this.instance = new lib.smallbubbleImg();
	this.instance.setTransform(8,5,0.483,0.483);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.bigTxt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bigbutton, new cjs.Rectangle(8,5,78.7,44.5), null);


(lib.earthFinal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.viewblueplanetearthspace3drendering();
	this.instance.setTransform(0,0,0.2004,0.1751);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.earthFinal, new cjs.Rectangle(0,0,1403.1,793), null);


(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.background9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.רקע9();
	this.instance.setTransform(0,0,0.6633,0.9277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background9, new cjs.Rectangle(0,0,2045.5,859.1), null);


(lib.background8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.רקע9();
	this.instance.setTransform(0,0,0.6633,0.9277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background8, new cjs.Rectangle(0,0,2045.5,859.1), null);


(lib.background7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.רקע8();
	this.instance.setTransform(0,0,0.3987,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background7, new cjs.Rectangle(0,0,1661.3,756.9), null);


(lib.background6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.רקע7();
	this.instance.setTransform(0,0,0.4601,0.4601);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background6, new cjs.Rectangle(0,0,1917.3,767), null);


(lib.background5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.רקע6();
	this.instance.setTransform(0,0,0.2113,0.249);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background5, new cjs.Rectangle(0,0,1308.7,747.1), null);


(lib.background4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.רקע();
	this.instance.setTransform(0,0,0.6466,0.6754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background4, new cjs.Rectangle(0,0,1293.3,759.9), null);


(lib.background3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.רקע4();
	this.instance.setTransform(0,0,0.9167,1.0928);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background3, new cjs.Rectangle(0,0,1522.6,806.5), null);


(lib.background2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.רקע3();
	this.instance.setTransform(0,0,0.2883,0.3752);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background2, new cjs.Rectangle(0,0,1538,782), null);


(lib.background1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.רקע2();
	this.instance.setTransform(0,0,0.4355,0.5195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background1, new cjs.Rectangle(0,0,1452.1,737.7), null);


(lib.background0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.רקע1();
	this.instance.setTransform(0,0,0.432,0.5416);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background0, new cjs.Rectangle(0,0,1440.3,769.6), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(8.6,5.1,1,1,0,0,0,8.6,5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,17.1,10.3), null);


(lib.ClipGroup_26_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgVAYIAAgvIArAAIAAAvg");
	mask_6.setTransform(2.575,2.8);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_27();
	this.instance_1.setTransform(2.6,2.8,1,1,0,0,0,2.6,2.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_6, new cjs.Rectangle(0.4,0.4,4.3999999999999995,4.8999999999999995), null);


(lib.ClipGroup_24_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AgkAWIAAgrIBJAAIAAArg");
	mask_6.setTransform(4.1,2.85);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_25();
	this.instance_1.setTransform(4.4,2.9,1,1,0,0,0,4.4,2.9);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_6, new cjs.Rectangle(0.4,0.7,7.3999999999999995,4.3999999999999995), null);


(lib.ClipGroup_22_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Ag6AfIAAg9IB1AAIAAA9g");
	mask_6.setTransform(8.2,6.925);

	// Layer_3
	this.instance = new lib.ClipGroup_23();
	this.instance.setTransform(8.2,6.9,1,1,0,0,0,8.2,6.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_6, new cjs.Rectangle(2.3,3.8,11.8,6.3), null);


(lib.ClipGroup_20_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AjnD2IAAnrIHPAAIAAHrg");
	mask_6.setTransform(23.2,24.625);

	// Layer_3
	this.instance = new lib.ClipGroup_21();
	this.instance.setTransform(23.2,24.6,1,1,0,0,0,23.2,24.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_6, new cjs.Rectangle(0,0,46.4,49.3), null);


(lib.ClipGroup_18_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AgzAlIAAhJIBnAAIAABJg");
	mask_7.setTransform(5.825,4.575);

	// Layer_3
	this.instance = new lib.ClipGroup_19();
	this.instance.setTransform(5.8,4.7,1,1,0,0,0,5.8,4.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_7, new cjs.Rectangle(0.7,0.9,10.3,7.4), null);


(lib.ClipGroup_16_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("Ag4AYIAAguIBxAAIAAAug");
	mask_7.setTransform(6.1,3.3);

	// Layer_3
	this.instance = new lib.ClipGroup_17();
	this.instance.setTransform(6.1,3.3,1,1,0,0,0,6.1,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_7, new cjs.Rectangle(0.4,1,11.4,4.7), null);


(lib.ClipGroup_13_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AjzCXIAAktIHnAAIAAEtg");
	mask_8.setTransform(27.825,19.7);

	// Layer_3
	this.instance = new lib.ClipGroup_14();
	this.instance.setTransform(27.4,20.2,1,1,0,0,0,27.4,20.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_8, new cjs.Rectangle(3.5,4.6,48.7,30.299999999999997), null);


(lib.ClipGroup_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AjrFTIAAqlIHXAAIAAKlg");
	mask_3.setTransform(29.4,37.9);

	// Layer_3
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(29.4,37.9,1,1,0,0,0,29.4,37.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_3, new cjs.Rectangle(5.8,4,47.2,67.8), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhEBUIAAinICJAAIAACng");
	mask_2.setTransform(8.325,9.6);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(8.3,9.6,1,1,0,0,0,8.3,9.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(1.5,1.2,13.7,16.8), null);


(lib.ClipGroup_18_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AmbHWIAAurIM3AAIAAOrg");
	mask_8.setTransform(88.325,88.1);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_19_1();
	this.instance_1.setTransform(88.4,88.4,1,1,0,0,0,88.4,88.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_8, new cjs.Rectangle(47.2,41.1,82.3,94), null);


(lib.ClipGroup_16_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AlGCsIAAlWIKNAAIAAFWg");
	mask_8.setTransform(32.7,17.2);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_17_1();
	this.instance_1.setTransform(32.8,17.2,1,1,0,0,0,32.8,17.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_8, new cjs.Rectangle(0,0.1,65.4,34.3), null);


(lib.ClipGroup_13_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AndH6IAAvyIO7AAIAAPyg");
	mask_9.setTransform(47.8,50.6);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_14_1();
	this.instance_1.setTransform(48.2,50.8,1,1,0,0,0,48.2,50.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_9, new cjs.Rectangle(0,0.1,95.6,101.10000000000001), null);


(lib.ClipGroup_11_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AkzERIAAohIJnAAIAAIhg");
	mask_9.setTransform(30.95,27.5);

	// Layer_3
	this.instance = new lib.ClipGroup_12_1();
	this.instance.setTransform(33.9,27.8,1,1,0,0,0,33.9,27.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_9, new cjs.Rectangle(0.2,0.2,61.599999999999994,54.699999999999996), null);


(lib.ClipGroup_9_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AksEoIAApPIJaAAIAAJPg");
	mask_10.setTransform(30.5,29.65);

	// Layer_3
	this.instance = new lib.ClipGroup_10();
	this.instance.setTransform(30.3,29.6,1,1,0,0,0,30.3,29.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_10, new cjs.Rectangle(0.4,0.1,60.300000000000004,59.199999999999996), null);


(lib.ClipGroup_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AnJHVIAAupIOTAAIAAOpg");
	mask_3.setTransform(45.8,46.9);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_1_1();
	this.instance_2.setTransform(45.8,46.9,1,1,0,0,0,45.8,46.9);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_3, new cjs.Rectangle(0,0,91.6,93.8), null);


(lib.ClipGroup_22_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AnmHPIAAudIPNAAIAAOdg");
	mask_7.setTransform(48.925,46.425);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_23_1();
	this.instance_1.setTransform(48.8,46.4,1,1,0,0,0,48.8,46.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_7, new cjs.Rectangle(0.2,0.2,97.5,92.5), null);


(lib.ClipGroup_20_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AgyBCIAAiDIBkAAIAACDg");
	mask_7.setTransform(5.15,6.55);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_21_1();
	this.instance_1.setTransform(5.1,6.8,1,1,0,0,0,5.1,6.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_7, new cjs.Rectangle(0.1,0,10.1,13.1), null);


(lib.ClipGroup_18_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AglAsIAAhXIBLAAIAABXg");
	mask_9.setTransform(3.9,4.35);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_19_2();
	this.instance_2.setTransform(3.9,4.4,1,1,0,0,0,3.9,4.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_9, new cjs.Rectangle(0.1,0,7.7,8.7), null);


(lib.ClipGroup_16_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AgmAZIAAgxIBNAAIAAAxg");
	mask_9.setTransform(4.15,2.475);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_17_2();
	this.instance_2.setTransform(4,2.7,1,1,0,0,0,4,2.7);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_9, new cjs.Rectangle(0.3,0,7.7,5), null);


(lib.ClipGroup_14_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("Ag2AVIAAgpIBtAAIAAApg");
	mask_7.setTransform(5.7,2.125);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_15();
	this.instance_1.setTransform(5.6,2.2,1,1,0,0,0,5.6,2.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_7, new cjs.Rectangle(0.2,0,11,4.3), null);


(lib.ClipGroup_12_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AnXDvIAAndIOvAAIAAHdg");
	mask_7.setTransform(47.2,23.925);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_13();
	this.instance_1.setTransform(47.2,24.2,1,1,0,0,0,47.2,24.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_7, new cjs.Rectangle(0,0,94.4,47.9), null);


(lib.ClipGroup_10_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AkAE5IAApxIIBAAIAAJxg");
	mask_4.setTransform(26.075,31.275);

	// Layer_3
	this.instance = new lib.ClipGroup_11_1();
	this.instance.setTransform(25.9,32,1,1,0,0,0,25.9,32);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_4, new cjs.Rectangle(0.4,0,51.4,62.6), null);


(lib.ClipGroup_8_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AjaDOIAAmbIG1AAIAAGbg");
	mask_4.setTransform(22.5,20.625);

	// Layer_3
	this.instance = new lib.ClipGroup_9_1();
	this.instance.setTransform(22.2,21.1,1,1,0,0,0,22.2,21.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_4, new cjs.Rectangle(0.7,0.1,43.699999999999996,41.1), null);


(lib.ClipGroup_6_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AnmHPIAAudIPNAAIAAOdg");
	mask_5.setTransform(48.925,46.325);

	// Layer_3
	this.instance = new lib.ClipGroup_7_1();
	this.instance.setTransform(48.8,46.3,1,1,0,0,0,48.8,46.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_5, new cjs.Rectangle(0.2,0.1,97.5,92.5), null);


(lib.ClipGroup_4_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Ak4EmIAApMIJxAAIAAJMg");
	mask_5.setTransform(31.325,29.45);

	// Layer_3
	this.instance = new lib.ClipGroup_5_1();
	this.instance.setTransform(31.3,29.4,1,1,0,0,0,31.3,29.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_5, new cjs.Rectangle(0,0,62.7,58.9), null);


(lib.Group_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_78();
	this.instance.setTransform(2,1.5,1,1,0,0,0,2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,4.1,3.1), null);


(lib.ClipGroup_84 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhbBRIAAiiIC2AAIAACig");
	mask.setTransform(9.15,8.15);

	// Layer_3
	this.instance = new lib.ClipGroup_85();
	this.instance.setTransform(9.2,8.2,1,1,0,0,0,9.2,8.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_84, new cjs.Rectangle(0,0,18.3,16.3), null);


(lib.ClipGroup_82 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhtB5IAAjxIDbAAIAADxg");
	mask.setTransform(11.075,12.1);

	// Layer_3
	this.instance = new lib.ClipGroup_83();
	this.instance.setTransform(11.1,12.1,1,1,0,0,0,11.1,12.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_82, new cjs.Rectangle(0.1,0,22,24.2), null);


(lib.ClipGroup_80 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah0BeIAAi7IDpAAIAAC7g");
	mask.setTransform(11.725,9.4);

	// Layer_3
	this.instance = new lib.ClipGroup_81();
	this.instance.setTransform(11.7,9.5,1,1,0,0,0,11.7,9.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_80, new cjs.Rectangle(0,0,23.5,18.8), null);


(lib.ClipGroup_76 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag1BUIAAinIBrAAIAACng");
	mask.setTransform(5.35,8.375);

	// Layer_3
	this.instance = new lib.ClipGroup_77();
	this.instance.setTransform(5.5,8.3,1,1,0,0,0,5.5,8.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_76, new cjs.Rectangle(0,0,10.7,16.8), null);


(lib.ClipGroup_18_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AhuBwIAAjfIDdAAIAADfg");
	mask_10.setTransform(11.05,11.2);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_19_3();
	this.instance_3.setTransform(11.1,11.2,1,1,0,0,0,11.1,11.2);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18_10, new cjs.Rectangle(0,0,22.1,22.4), null);


(lib.ClipGroup_16_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AkrDSIAAmjIJXAAIAAGjg");
	mask_10.setTransform(29.975,20.975);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_17_3();
	this.instance_3.setTransform(30.1,20.9,1,1,0,0,0,30.1,20.9);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_10, new cjs.Rectangle(0,0,60,42), null);


(lib.ClipGroup_14_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AhIAtIAAhZICRAAIAABZg");
	mask_8.setTransform(7.3,4.475);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_15_1();
	this.instance_2.setTransform(7.3,4.5,1,1,0,0,0,7.3,4.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_8, new cjs.Rectangle(0,0,14.6,9), null);


(lib.ClipGroup_12_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AgyAYIAAgvIBlAAIAAAvg");
	mask_8.setTransform(5.125,2.375);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_13_1();
	this.instance_2.setTransform(5.1,2.4,1,1,0,0,0,5.1,2.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_8, new cjs.Rectangle(0,0,10.3,4.8), null);


(lib.ClipGroup_10_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AibBhIAAjBIE3AAIAADBg");
	mask_5.setTransform(15.6,9.675);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_11_2();
	this.instance_1.setTransform(15.6,9.7,1,1,0,0,0,15.6,9.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_5, new cjs.Rectangle(0,0,31.2,19.4), null);


(lib.ClipGroup_8_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgwA7IAAh1IBhAAIAAB1g");
	mask_5.setTransform(4.85,5.925);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_9_2();
	this.instance_1.setTransform(4.9,6,1,1,0,0,0,4.9,6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_5, new cjs.Rectangle(0,0,9.7,11.9), null);


(lib.ClipGroup_6_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Ag/BJIAAiRIB/AAIAACRg");
	mask_6.setTransform(6.4,7.3);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_7_2();
	this.instance_1.setTransform(6.5,7.4,1,1,0,0,0,6.5,7.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_6, new cjs.Rectangle(0,0,12.8,14.6), null);


(lib.ClipGroup_4_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Ak6EkIAApHIJ1AAIAAJHg");
	mask_6.setTransform(31.625,30.45);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_5_2();
	this.instance_1.setTransform(31.6,30.2,1,1,0,0,0,31.6,30.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_6, new cjs.Rectangle(0.1,1.3,63.1,58.400000000000006), null);


(lib.ClipGroup_2_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("An2IBIAAwBIPtAAIAAQBg");
	mask_4.setTransform(50.3,51.275);

	// Layer_3
	this.instance = new lib.Group_9();
	this.instance.setTransform(45.05,30.25,1,1,0,0,0,2,1.5);
	this.instance.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_4, new cjs.Rectangle(43.1,28.8,4.100000000000001,3), null);


(lib.ClipGroup_2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AnaHvIAAveIO1AAIAAPeg");
	mask_4.setTransform(47.5,49.55);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_3_3();
	this.instance_1.setTransform(47.5,49.6,1,1,0,0,0,47.5,49.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_4, new cjs.Rectangle(0,0,95,99.1), null);


(lib.ClipGroup_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AnaHvIAAveIO1AAIAAPeg");
	mask_4.setTransform(47.5,49.55);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_1_3();
	this.instance_3.setTransform(47.5,49.6,1,1,0,0,0,47.5,49.6);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_4, new cjs.Rectangle(0,0,95,99.1), null);


(lib.ClipGroup_43_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AnSGMIAAsWIOlAAIAAMWg");
	mask_2.setTransform(48.4,40.7);

	// Layer_3
	this.instance = new lib.ClipGroup_44_1();
	this.instance.setTransform(48.1,40.6,1,1,0,0,0,48.1,40.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43_2, new cjs.Rectangle(1.7,1.2,93.39999999999999,79.1), null);


(lib.ClipGroup_41_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhBBjIAAjFICDAAIAADFg");
	mask_2.setTransform(6.725,10.025);

	// Layer_3
	this.instance = new lib.ClipGroup_42_1();
	this.instance.setTransform(6.8,10.2,1,1,0,0,0,6.8,10.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41_2, new cjs.Rectangle(0.2,0.1,13.100000000000001,19.9), null);


(lib.ClipGroup_39_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("Ag6AQIAAgfIB1AAIAAAfg");
	mask_2.setTransform(6.55,1.775);

	// Layer_3
	this.instance = new lib.ClipGroup_40();
	this.instance.setTransform(7.4,1.7,1,1,0,0,0,7.4,1.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39_2, new cjs.Rectangle(0.7,0.2,11.8,3.1999999999999997), null);


(lib.ClipGroup_37_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgwALIAAgVIBhAAIAAAVg");
	mask_3.setTransform(4.925,1.475);

	// Layer_3
	this.instance = new lib.ClipGroup_38_1();
	this.instance.setTransform(5.6,1.4,1,1,0,0,0,5.6,1.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37_3, new cjs.Rectangle(0,0.4,9.9,2.2), null);


(lib.ClipGroup_35_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgZA3IAAhtIA0AAIAABtg");
	mask_3.setTransform(2.8,5.675);

	// Layer_3
	this.instance = new lib.ClipGroup_36_1();
	this.instance.setTransform(2.8,5.7,1,1,0,0,0,2.8,5.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35_3, new cjs.Rectangle(0.2,0.2,5.3,11), null);


(lib.ClipGroup_33_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgXA+IAAh7IAvAAIAAB7g");
	mask_4.setTransform(2.55,6.9);

	// Layer_3
	this.instance = new lib.ClipGroup_34_1();
	this.instance.setTransform(2.6,7.3,1,1,0,0,0,2.6,7.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33_4, new cjs.Rectangle(0.2,0.7,4.8,12.4), null);


(lib.ClipGroup_31_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AifBQIAAifIE/AAIAACfg");
	mask_4.setTransform(16.375,8.525);

	// Layer_3
	this.instance = new lib.ClipGroup_32_1();
	this.instance.setTransform(16.2,8.6,1,1,0,0,0,16.2,8.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31_4, new cjs.Rectangle(0.4,0.5,32,16.1), null);


(lib.ClipGroup_29_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Ag8BOIAAibIB5AAIAACbg");
	mask_5.setTransform(6.125,7.8);

	// Layer_3
	this.instance = new lib.ClipGroup_30_1();
	this.instance.setTransform(6.4,8.1,1,1,0,0,0,6.4,8.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29_5, new cjs.Rectangle(0,0,12.3,15.6), null);


(lib.ClipGroup_27_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AhQCIIAAkPIChAAIAAEPg");
	mask_6.setTransform(8.075,13.6);

	// Layer_3
	this.instance = new lib.ClipGroup_28_1();
	this.instance.setTransform(8.6,13.8,1,1,0,0,0,8.6,13.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27_6, new cjs.Rectangle(0,0,16.2,27.2), null);


(lib.ClipGroup_25_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AhFAoIAAhPICLAAIAABPg");
	mask_4.setTransform(7.025,3.95);

	// Layer_3
	this.instance = new lib.ClipGroup_26_1();
	this.instance.setTransform(8.3,4.2,1,1,0,0,0,8.3,4.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_4, new cjs.Rectangle(0,0,14.1,7.9), null);


(lib.ClipGroup_23_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AguBLIAAiVIBcAAIAACVg");
	mask_7.setTransform(4.65,7.525);

	// Layer_3
	this.instance = new lib.ClipGroup_24_1();
	this.instance.setTransform(5.1,7.8,1,1,0,0,0,5.1,7.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_7, new cjs.Rectangle(0,0,9.3,15.1), null);


(lib.ClipGroup_21_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AjOA1IAAhpIGdAAIAABpg");
	mask_5.setTransform(20.7,5.325);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_22_1();
	this.instance_1.setTransform(20.8,6,1,1,0,0,0,20.8,6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_5, new cjs.Rectangle(0,0,41.4,10.7), null);


(lib.ClipGroup_19_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AmHGMIAAsWIMOAAIAAMWg");
	mask_9.setTransform(39.15,40.7);

	// Layer_3
	this.instance = new lib.ClipGroup_20_1();
	this.instance.setTransform(39.6,40.6,1,1,0,0,0,39.6,40.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_9, new cjs.Rectangle(0,1.2,78.3,79.1), null);


(lib.ClipGroup_17_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AhUAcIAAg3ICpAAIAAA3g");
	mask_9.setTransform(8.475,3.2);

	// Layer_3
	this.instance = new lib.ClipGroup_18();
	this.instance.setTransform(8.5,3.1,1,1,0,0,0,8.5,3.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_9, new cjs.Rectangle(0,0.4,17,5.699999999999999), null);


(lib.ClipGroup_15_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AkzDtIAAnZIJnAAIAAHZg");
	mask_6.setTransform(31.8,24.475);

	// Layer_3
	this.instance = new lib.ClipGroup_16();
	this.instance.setTransform(31.4,24.2,1,1,0,0,0,31.4,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_6, new cjs.Rectangle(1,0.8,61.7,47.400000000000006), null);


(lib.ClipGroup_13_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("Ah5AzIAAhlIDyAAIAABlg");
	mask_10.setTransform(12.15,5.95);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_14_2();
	this.instance_2.setTransform(12.2,6.4,1,1,0,0,0,12.2,6.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13_10, new cjs.Rectangle(0,0.9,24.3,10.2), null);


(lib.ClipGroup_11_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AnSGMIAAsWIOlAAIAAMWg");
	mask_10.setTransform(48.4,40.7);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_12_2();
	this.instance_1.setTransform(48.1,40.6,1,1,0,0,0,48.1,40.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11_10, new cjs.Rectangle(1.7,1.2,93.39999999999999,79.1), null);


(lib.ClipGroup_8_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AlPFVIAAqpIKfAAIAAKpg");
	mask_6.setTransform(37.75,38.275);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_9_3();
	this.instance_2.setTransform(37.8,38.2,1,1,0,0,0,37.8,38.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_6, new cjs.Rectangle(4.1,4.2,67.30000000000001,68.2), null);


(lib.ClipGroup_6_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AnLGHIAAsNIOWAAIAAMNg");
	mask_7.setTransform(45.95,39.075);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_7_3();
	this.instance_2.setTransform(46.5,39.5,1,1,0,0,0,46.5,39.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_7, new cjs.Rectangle(0,0,91.9,78.2), null);


(lib.ClipGroup_2_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AnhHpIAAvRIPDAAIAAPRg");
	mask_5.setTransform(48.225,48.925);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_5_3();
	this.instance_2.setTransform(48.2,48.9,1,1,0,0,0,48.2,48.9);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_5, new cjs.Rectangle(0,0,96.5,97.9), null);


(lib.ClipGroup_0_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AnhHpIAAvRIPDAAIAAPRg");
	mask_5.setTransform(48.225,48.925);

	// Layer_3
	this.instance_4 = new lib.ClipGroup_1_4();
	this.instance_4.setTransform(48.2,48.9,1,1,0,0,0,48.2,48.9);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_5, new cjs.Rectangle(0,0,96.5,97.9), null);


(lib.Group_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_24_2();
	this.instance.setTransform(43.2,41.1,1,1,0,0,0,43.2,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,86.6,82.3), null);


(lib.ClipGroup_25_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AlGHqIAAvTIKNAAIAAPTg");
	mask_5.setTransform(32.675,49);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_26_2();
	this.instance_1.setTransform(32.6,49,1,1,0,0,0,32.6,49);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_5, new cjs.Rectangle(0,0,65.4,98), null);


(lib.ClipGroup_21_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AjxDkIAAnHIHjAAIAAHHg");
	mask_6.setTransform(51.575,51.5);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_22_2();
	this.instance_2.setTransform(51.6,51.5,1,1,0,0,0,51.6,51.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_6, new cjs.Rectangle(27.4,28.7,48.4,45.599999999999994), null);


(lib.ClipGroup_19_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AjtBHIAAiNIHbAAIAACNg");
	mask_10.setTransform(23.75,7.125);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_20_2();
	this.instance_1.setTransform(23.8,7.1,1,1,0,0,0,23.8,7.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19_10, new cjs.Rectangle(0,0,47.5,14.3), null);


(lib.ClipGroup_17_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AhKAxIAAhhICVAAIAABhg");
	mask_10.setTransform(7.575,4.9);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_18_1();
	this.instance_1.setTransform(7.5,4.9,1,1,0,0,0,7.5,4.9);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17_10, new cjs.Rectangle(0.1,0,15,9.8), null);


(lib.ClipGroup_15_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("Ag3A0IAAhnIBvAAIAABng");
	mask_7.setTransform(5.6,5.175);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_16_1();
	this.instance_1.setTransform(5.6,5.2,1,1,0,0,0,5.6,5.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_7, new cjs.Rectangle(0,0,11.2,10.4), null);


(lib.ClipGroup_4_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AhgBAIAAh/IDBAAIAAB/g");
	mask_7.setTransform(9.675,6.375);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_14_3();
	this.instance_2.setTransform(9.7,6.4,1,1,0,0,0,9.7,6.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_7, new cjs.Rectangle(0,0,19.4,12.8), null);


(lib.ClipGroup_2_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AijCFIAAkJIFHAAIAAEJg");
	mask_6.setTransform(16.425,14.575);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_3_4();
	this.instance_3.setTransform(16.6,15.8,1,1,0,0,0,16.6,15.8);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_6, new cjs.Rectangle(0.1,1.3,32.699999999999996,26.599999999999998), null);


(lib.ClipGroup_0_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AhfBUIAAinIC/AAIAACng");
	mask_6.setTransform(9.6,9.65);

	// Layer_3
	this.instance_5 = new lib.ClipGroup_1_5();
	this.instance_5.setTransform(9.6,9,1,1,0,0,0,9.6,9);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_6, new cjs.Rectangle(0,1.3,19.2,16.8), null);


(lib.ClipGroup_43_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhRAoIAAhQICjAAIAABQg");
	mask_3.setTransform(8.875,5.6);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_44_2();
	this.instance_1.setTransform(8.5,4.8,1,1,0,0,0,8.5,4.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43_3, new cjs.Rectangle(0.7,1.6,16.400000000000002,8.1), null);


(lib.ClipGroup_41_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AiKByIAAjjIEUAAIAADjg");
	mask_3.setTransform(14.05,11.725);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_42_2();
	this.instance_1.setTransform(14,11.6,1,1,0,0,0,14,11.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41_3, new cjs.Rectangle(0.2,0.4,27.7,22.700000000000003), null);


(lib.ClipGroup_39_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ag0AdIAAg5IBpAAIAAA5g");
	mask_3.setTransform(6.05,3.3);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_40_1();
	this.instance_1.setTransform(5.7,3.1,1,1,0,0,0,5.7,3.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39_3, new cjs.Rectangle(0.8,0.4,10.6,5.8999999999999995), null);


(lib.ClipGroup_36_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhxBdIAAi5IDjAAIAAC5g");
	mask_2.setTransform(12.175,9.95);

	// Layer_3
	this.instance = new lib.ClipGroup_37_1();
	this.instance.setTransform(11.8,9.7,1,1,0,0,0,11.8,9.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36_2, new cjs.Rectangle(0.8,0.6,22.8,18.7), null);


(lib.ClipGroup_34_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgpAaIAAgzIBTAAIAAAzg");
	mask_2.setTransform(4.425,3.275);

	// Layer_3
	this.instance = new lib.ClipGroup_35_1();
	this.instance.setTransform(4.3,3,1,1,0,0,0,4.3,3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34_2, new cjs.Rectangle(0.3,0.7,8.299999999999999,5.2), null);


(lib.ClipGroup_32_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhlBIIAAiPIDLAAIAACPg");
	mask_2.setTransform(10.225,7.175);

	// Layer_3
	this.instance = new lib.ClipGroup_33_1();
	this.instance.setTransform(10.4,7.4,1,1,0,0,0,10.4,7.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32_2, new cjs.Rectangle(0,0,20.5,14.4), null);


(lib.ClipGroup_30_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgQATIAAglIAhAAIAAAlg");
	mask_3.setTransform(2.325,2.45);

	// Layer_3
	this.instance = new lib.ClipGroup_31_1();
	this.instance.setTransform(2.1,2.3,1,1,0,0,0,2.1,2.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30_3, new cjs.Rectangle(0.7,0.6,3.3,3.8000000000000003), null);


(lib.ClipGroup_28_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgjAqIAAhTIBHAAIAABTg");
	mask_2.setTransform(4.45,4.775);

	// Layer_3
	this.instance = new lib.ClipGroup_29_1();
	this.instance.setTransform(4,4.5,1,1,0,0,0,4,4.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28_2, new cjs.Rectangle(0.8,0.6,7.3,8.4), null);


(lib.ClipGroup_6_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AhvA6IAAhzIDfAAIAABzg");
	mask_8.setTransform(11.175,8.05);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_7_5();
	this.instance_3.setTransform(11.3,7.2,1,1,0,0,0,11.3,7.2);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_8, new cjs.Rectangle(0,2.3,22.4,11.600000000000001), null);


(lib.ClipGroup_4_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("Ak2HRIAAuiIJsAAIAAOig");
	mask_8.setTransform(31.05,46.55);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_5_4();
	this.instance_3.setTransform(31.1,46.6,1,1,0,0,0,31.1,46.6);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_8, new cjs.Rectangle(0,0,62.1,93.1), null);


(lib.ClipGroup_2_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AirDNIAAmZIFXAAIAAGZg");
	mask_7.setTransform(17.2,22.05);

	// Layer_3
	this.instance_4 = new lib.ClipGroup_3_5();
	this.instance_4.setTransform(18.1,21.5,1,1,0,0,0,18.1,21.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_7, new cjs.Rectangle(0,1.5,34.4,41.1), null);


(lib.ClipGroup_0_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AhiCeIAAk7IDFAAIAAE7g");
	mask_7.setTransform(9.925,15.75);

	// Layer_3
	this.instance_6 = new lib.ClipGroup_1_6();
	this.instance_6.setTransform(11.8,17.25,1,1,0,0,0,11.8,17.2);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_7, new cjs.Rectangle(0,0.1,19.9,31.4), null);


(lib.Group_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_9_6();
	this.instance.setTransform(17.6,16.9,1,1,0,0,0,17.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0,0,35.1,33.8), null);


(lib.Group_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_10_2();
	this.instance.setTransform(4.3,3.6,1,1,0,0,0,4.3,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,0,8.7,7.4), null);


(lib.Group_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_11_5();
	this.instance.setTransform(1.2,1.2,1,1,0,0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,2.4,2.3), null);


(lib.Group_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_12_5();
	this.instance.setTransform(19.5,17.6,1,1,0,0,0,19.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,39.1,35.3), null);


(lib.Group_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_13_4();
	this.instance.setTransform(3.5,2.2,1,1,0,0,0,3.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,7.1,4.6), null);


(lib.Group_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_14_5();
	this.instance.setTransform(10,11.1,1,1,0,0,0,10,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,20.1,22.1), null);


(lib.Group_9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_15_3();
	this.instance_1.setTransform(1.2,1.2,1,1,0,0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_9_1, new cjs.Rectangle(0,0,2.5,2.4), null);


(lib.Group_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_16_3();
	this.instance.setTransform(4.9,7.8,1,1,0,0,0,4.9,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0,9.8,15.6), null);


(lib.Group_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_17_5();
	this.instance.setTransform(1.6,2.1,1,1,0,0,0,1.6,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,3.2,4.3), null);


(lib.Group_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_18_3();
	this.instance.setTransform(8.9,13.3,1,1,0,0,0,8.9,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,17.8,26.7), null);


(lib.Group_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_19_5();
	this.instance.setTransform(3.9,2.9,1,1,0,0,0,3.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,7.9,5.8), null);


(lib.Group_4_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_20_4();
	this.instance.setTransform(1.4,2.8,1,1,0,0,0,1.4,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_0, new cjs.Rectangle(0,0,2.9,5.5), null);


(lib.Group_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_3_6();
	this.instance.setTransform(29.2,10,1,1,0,0,0,29.2,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,58.5,20), null);


(lib.Group_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_21_2();
	this.instance.setTransform(1.2,1.6,1,1,0,0,0,1.2,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_0, new cjs.Rectangle(0,0,2.6,3.2), null);


(lib.Group_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_22_4();
	this.instance.setTransform(10.2,7.7,1,1,0,0,0,10.2,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(0,0,20.6,15.5), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(47.4,25.3,1,1,0,0,0,47.4,25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,94.7,50.7), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_27_3();
	this.instance.setTransform(37.6,21.7,1,1,0,0,0,37.6,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,75.1,43.4), null);


(lib.Group_1_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_23_4();
	this.instance_1.setTransform(1.3,1.4,1,1,0,0,0,1.3,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0_1, new cjs.Rectangle(0,0,2.7,3), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_1_7();
	this.instance.setTransform(22.9,10.1,1,1,0,0,0,22.9,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,46,20.1), null);


(lib.Group_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_24_4();
	this.instance_1.setTransform(2.6,2.9,1,1,0,0,0,2.6,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_1, new cjs.Rectangle(0,0,5.4,5.8), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_2_1();
	this.instance.setTransform(11.3,12.8,1,1,0,0,0,11.3,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,22.6,25.7), null);


(lib.ClipGroup_29_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AigB3IAAjtIFBAAIAADtg");
	mask_6.setTransform(27.475,26.225);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_30_2();
	this.instance_1.setTransform(27.4,26.2,1,1,0,0,0,27.4,26.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29_6, new cjs.Rectangle(11.4,14.4,32.2,23.700000000000003), null);


(lib.ClipGroup_25_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Ak2HRIAAuiIJsAAIAAOig");
	mask_6.setTransform(31.05,46.55);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_26_4();
	this.instance_2.setTransform(31.1,46.6,1,1,0,0,0,31.1,46.6);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_6, new cjs.Rectangle(0,0,62.1,93.1), null);


(lib.ClipGroup_8_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AmqGVIAAspINVAAIAAMpg");
	mask_7.setTransform(42.675,40.5);

	// Layer_3
	this.instance_3 = new lib.Group_0_1();
	this.instance_3.setTransform(82.6,46.25,1,1,0,0,0,2.6,2.9);
	this.instance_3.alpha = 0.3984;
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Group_1_0_1();
	this.instance_4.setTransform(35.4,74.3,1,1,0,0,0,1.3,1.4);
	this.instance_4.alpha = 0.3984;
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Group_2_0();
	this.instance_5.setTransform(22.8,71.1,1,1,0,0,0,10.2,7.7);
	this.instance_5.alpha = 0.3984;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.Group_3_0();
	this.instance_6.setTransform(59.05,39.85,1,1,0,0,0,1.2,1.6);
	this.instance_6.alpha = 0.3984;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Group_4_0();
	this.instance_7.setTransform(60.1,66.95,1,1,0,0,0,1.4,2.8);
	this.instance_7.alpha = 0.3984;
	this.instance_7.compositeOperation = "multiply";

	this.instance_8 = new lib.Group_5();
	this.instance_8.setTransform(58.3,78.1,1,1,0,0,0,3.9,2.9);
	this.instance_8.alpha = 0.3984;
	this.instance_8.compositeOperation = "multiply";

	this.instance_9 = new lib.Group_6();
	this.instance_9.setTransform(72.3,61.7,1,1,0,0,0,8.9,13.3);
	this.instance_9.alpha = 0.3984;
	this.instance_9.compositeOperation = "multiply";

	this.instance_10 = new lib.Group_7();
	this.instance_10.setTransform(76.85,15.3,1,1,0,0,0,1.6,2.1);
	this.instance_10.alpha = 0.3984;
	this.instance_10.compositeOperation = "multiply";

	this.instance_11 = new lib.Group_8();
	this.instance_11.setTransform(80.15,29,1,1,0,0,0,4.9,7.8);
	this.instance_11.alpha = 0.3984;
	this.instance_11.compositeOperation = "multiply";

	this.instance_12 = new lib.Group_9_1();
	this.instance_12.setTransform(12.85,43.4,1,1,0,0,0,1.2,1.2);
	this.instance_12.alpha = 0.3984;
	this.instance_12.compositeOperation = "multiply";

	this.instance_13 = new lib.Group_10();
	this.instance_13.setTransform(11.15,54.55,1,1,0,0,0,10,11.1);
	this.instance_13.alpha = 0.3984;
	this.instance_13.compositeOperation = "multiply";

	this.instance_14 = new lib.Group_11();
	this.instance_14.setTransform(30.25,29,1,1,0,0,0,3.5,2.2);
	this.instance_14.alpha = 0.3984;
	this.instance_14.compositeOperation = "multiply";

	this.instance_15 = new lib.Group_12();
	this.instance_15.setTransform(56,17.6,1,1,0,0,0,19.5,17.6);
	this.instance_15.alpha = 0.3984;
	this.instance_15.compositeOperation = "multiply";

	this.instance_16 = new lib.Group_13();
	this.instance_16.setTransform(36,10.95,1,1,0,0,0,1.2,1.2);
	this.instance_16.alpha = 0.3984;
	this.instance_16.compositeOperation = "multiply";

	this.instance_17 = new lib.Group_14();
	this.instance_17.setTransform(31.55,4.25,1,1,0,0,0,4.3,3.6);
	this.instance_17.alpha = 0.3984;
	this.instance_17.compositeOperation = "multiply";

	this.instance_18 = new lib.Group_15();
	this.instance_18.setTransform(17.6,24.25,1,1,0,0,0,17.6,16.9);
	this.instance_18.alpha = 0.3984;
	this.instance_18.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_7, new cjs.Rectangle(0,0,85.4,81), null);


(lib.ClipGroup_6_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AnqHeIAAu7IPUAAIAAO7g");
	mask_9.setTransform(49.05,47.775);

	// Layer_3
	this.instance_4 = new lib.Group();
	this.instance_4.setTransform(15.7,75.7,1,1,0,0,0,11.3,12.8);
	this.instance_4.alpha = 0.3984;
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Group_1();
	this.instance_5.setTransform(64.5,84.65,1,1,0,0,0,22.9,10.1);
	this.instance_5.alpha = 0.3984;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.Group_2();
	this.instance_6.setTransform(49.2,56.5,1,1,0,0,0,47.4,25.3);
	this.instance_6.alpha = 0.3984;
	this.instance_6.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_9, new cjs.Rectangle(1.8,31.2,94.7,63.5), null);


(lib.ClipGroup_32_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AizCZIAAkxIFoAAIAAExg");
	mask_3.setTransform(35.85,35.625);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_33_2();
	this.instance_1.setTransform(35.9,35.6,1,1,0,0,0,35.9,35.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32_3, new cjs.Rectangle(17.8,20.4,36.099999999999994,30.5), null);


(lib.ClipGroup_30_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AipCPIAAkdIFTAAIAAEdg");
	mask_4.setTransform(16.95,14.325);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_31_2();
	this.instance_1.setTransform(16.9,14.3,1,1,0,0,0,16.9,14.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30_4, new cjs.Rectangle(0,0,33.9,28.7), null);


(lib.ClipGroup_28_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhyBsIAAjXIDlAAIAADXg");
	mask_3.setTransform(11.525,10.8);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_29_2();
	this.instance_1.setTransform(11.5,10.8,1,1,0,0,0,11.5,10.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28_3, new cjs.Rectangle(0,0,23.1,21.6), null);


(lib.ClipGroup_25_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AgrAnIAAhNIBXAAIAABNg");
	mask_7.setTransform(9.175,9.175);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_26_5();
	this.instance_3.setTransform(9.2,9.2,1,1,0,0,0,9.2,9.2);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_7, new cjs.Rectangle(4.8,5.3,8.8,7.8), null);


(lib.ClipGroup_23_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AhSBTIAAilIClAAIAAClg");
	mask_8.setTransform(8.325,8.325);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_24_5();
	this.instance_1.setTransform(8.3,8.3,1,1,0,0,0,8.3,8.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_8, new cjs.Rectangle(0,0,16.7,16.7), null);


(lib.ClipGroup_21_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AhIBfIAAi+ICRAAIAAC+g");
	mask_7.setTransform(7.3,13.8);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_22_5();
	this.instance_3.setTransform(7.8,12,1,1,0,0,0,7.8,12);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_7, new cjs.Rectangle(0,4.3,14.6,19.099999999999998), null);


(lib.ClipGroup_14_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AAAAAIAAAAIABAAIAAAAg");
	mask_9.setTransform(0.125,0.05);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_20_5();
	this.instance_3.setTransform(0.1,0.1,1,1,0,0,0,0.1,0.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_9, new cjs.Rectangle(0,0,0.3,0.1), null);


(lib.ClipGroup_12_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AgFABIAAgBIALAAIAAABg");
	mask_9.setTransform(0.575,0.1);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_13_5();
	this.instance_3.setTransform(0.6,0.1,1,1,0,0,0,0.6,0.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_9, new cjs.Rectangle(0,0,1.2,0.2), null);


(lib.ClipGroup_10_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AmeFOIAAqbIM9AAIAAKbg");
	mask_6.setTransform(41.5,33.425);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_11_6();
	this.instance_2.setTransform(41.5,33.5,1,1,0,0,0,41.5,33.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_6, new cjs.Rectangle(0,0,83,66.9), null);


(lib.ClipGroup_8_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AmlEpIAApRINLAAIAAJRg");
	mask_8.setTransform(42.225,29.7);

	// Layer_3
	this.instance_19 = new lib.ClipGroup_9_7();
	this.instance_19.setTransform(42.2,29.9,1,1,0,0,0,42.2,29.9);

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_8, new cjs.Rectangle(0,0,84.5,59.4), null);


(lib.ClipGroup_6_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AmmElIAApKINNAAIAAJKg");
	mask_10.setTransform(42.325,29.35);

	// Layer_3
	this.instance_7 = new lib.ClipGroup_7_7();
	this.instance_7.setTransform(42.3,29.4,1,1,0,0,0,42.3,29.4);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_10, new cjs.Rectangle(0,0,84.7,58.7), null);


(lib.ClipGroup_4_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AkpDSIAAmjIJTAAIAAGjg");
	mask_9.setTransform(29.8,20.95);

	// Layer_3
	this.instance_4 = new lib.ClipGroup_5_6();
	this.instance_4.setTransform(29.9,21.1,1,1,0,0,0,29.9,21.1);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_9, new cjs.Rectangle(0,0,59.6,41.9), null);


(lib.ClipGroup_2_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("Ak2HRIAAuiIJsAAIAAOig");
	mask_8.setTransform(31.05,46.55);

	// Layer_3
	this.instance_5 = new lib.ClipGroup_3_7();
	this.instance_5.setTransform(31.1,46.6,1,1,0,0,0,31.1,46.6);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_8, new cjs.Rectangle(0,0,62.1,93.1), null);


(lib.ClipGroup_0_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("Ai4BvIAAjdIFwAAIAADdg");
	mask_8.setTransform(18.45,15.425);

	// Layer_3
	this.instance_7 = new lib.ClipGroup_1_8();
	this.instance_7.setTransform(21.9,13.2,1,1,0,0,0,21.9,13.2);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_8, new cjs.Rectangle(0,4.3,36.9,22.3), null);


(lib.Group_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_16_5();
	this.instance_1.setTransform(39.2,25.9,1,1,0,0,0,39.2,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5_1, new cjs.Rectangle(0,0,78.6,51.9), null);


(lib.Group_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_17_7();
	this.instance_1.setTransform(22.7,18.4,1,1,0,0,0,22.7,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_1, new cjs.Rectangle(0,0,45.4,36.9), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_18_5();
	this.instance.setTransform(13.5,11.1,1,1,0,0,0,13.5,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,27,22.2), null);


(lib.Group_2_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_25_2();
	this.instance_1.setTransform(43.6,17.6,1,1,0,0,0,43.6,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0_1, new cjs.Rectangle(0,0,87.2,35.3), null);


(lib.Group_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_19_7();
	this.instance_1.setTransform(27.2,12,1,1,0,0,0,27.2,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(0,0,54.6,24), null);


(lib.ClipGroup_28_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AiRDFIAAmKIEjAAIAAGKg");
	mask_4.setTransform(14.9,20.5);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_29_3();
	this.instance_2.setTransform(15.3,20.8,1,1,0,0,0,15.3,20.8);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28_4, new cjs.Rectangle(0.3,0.8,29.3,39.5), null);


(lib.ClipGroup_26_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AggBOIAAibIBBAAIAACbg");
	mask_7.setTransform(3.7,8.55);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_27_4();
	this.instance_2.setTransform(3.6,8.2,1,1,0,0,0,3.6,8.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_7, new cjs.Rectangle(0.4,0.8,6.6,15.599999999999998), null);


(lib.ClipGroup_22_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AmICRIAAkhIMSAAIAAEhg");
	mask_8.setTransform(39.4,14.475);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_23_5();
	this.instance_2.setTransform(39.4,14.6,1,1,0,0,0,39.4,14.6);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_8, new cjs.Rectangle(0.1,0,78.7,29), null);


(lib.ClipGroup_20_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AmnE3IAAptINPAAIAAJtg");
	mask_8.setTransform(43.025,31.075);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_21_3();
	this.instance_2.setTransform(43,31.1,1,1,0,0,0,43,31.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_8, new cjs.Rectangle(0.7,0,84.7,62.2), null);


(lib.ClipGroup_14_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AjvDEIAAmHIHfAAIAAGHg");
	mask_10.setTransform(24.75,19.575);

	// Layer_3
	this.instance_4 = new lib.ClipGroup_15_4();
	this.instance_4.setTransform(24.4,19.6,1,1,0,0,0,24.4,19.6);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14_10, new cjs.Rectangle(0.7,0,48.099999999999994,39.2), null);


(lib.ClipGroup_12_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AjKBiIAAjDIGVAAIAADDg");
	mask_10.setTransform(20.25,9.8);

	// Layer_3
	this.instance_4 = new lib.ClipGroup_13_6();
	this.instance_4.setTransform(20.2,9.8,1,1,0,0,0,20.2,9.8);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12_10, new cjs.Rectangle(0,0,40.5,19.6), null);


(lib.ClipGroup_10_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AhvBGIAAiLIDfAAIAACLg");
	mask_7.setTransform(11.225,7);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_11_7();
	this.instance_3.setTransform(11.2,7,1,1,0,0,0,11.2,7);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_7, new cjs.Rectangle(0,0,22.5,14), null);


(lib.ClipGroup_8_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AgtAiIAAhDIBbAAIAABDg");
	mask_9.setTransform(4.575,4.075);

	// Layer_3
	this.instance_20 = new lib.ClipGroup_9_8();
	this.instance_20.setTransform(4.5,3.7,1,1,0,0,0,4.5,3.7);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_9, new cjs.Rectangle(0,0.7,9.2,6.8), null);


(lib.ClipGroup_2_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AgjAoIAAhPIBHAAIAABPg");
	mask_9.setTransform(4.025,3.95);

	// Layer_3
	this.instance_6 = new lib.ClipGroup_7_8();
	this.instance_6.setTransform(4.4,4.3,1,1,0,0,0,4.4,4.3);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_9, new cjs.Rectangle(0.4,0,7.3,7.9), null);


(lib.ClipGroup_0_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AhrBuIAAjbIDXAAIAADbg");
	mask_9.setTransform(11.425,12.325);

	// Layer_3
	this.instance_8 = new lib.ClipGroup_1_9();
	this.instance_8.setTransform(11.2,12.3,1,1,0,0,0,11.2,12.3);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_9, new cjs.Rectangle(0.7,1.3,21.5,22.099999999999998), null);


(lib.Group_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_0_1();
	this.instance_1.setTransform(36.6,35.6,1,1,0,0,0,36.6,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,73.5,71.5), null);


(lib.ClipGroup_45_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ag4BWIAAirIBxAAIAACrg");
	mask_1.setTransform(15.1,15.975);

	// Layer_3
	this.instance = new lib.ClipGroup_46_1();
	this.instance.setTransform(14.7,15.1,1,1,0,0,0,14.7,15.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_45_1, new cjs.Rectangle(9.5,7.4,11.3,17.200000000000003), null);


(lib.ClipGroup_42_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AjnBNIAAiZIHPAAIAACZg");
	mask_3.setTransform(33.4,33.275);

	// Layer_3
	this.instance = new lib.ClipGroup_43_1();
	this.instance.setTransform(32.5,32.5,1,1,0,0,0,32.5,32.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42_3, new cjs.Rectangle(10.2,25.6,46.5,15.399999999999999), null);


(lib.ClipGroup_40_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhJApIAAhRICTAAIAABRg");
	mask_2.setTransform(11.85,12.15);

	// Layer_3
	this.instance = new lib.ClipGroup_41_1();
	this.instance.setTransform(11.8,11.8,1,1,0,0,0,11.8,11.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40_2, new cjs.Rectangle(4.5,8,14.8,8.3), null);


(lib.ClipGroup_38_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgyAhIAAhBIBlAAIAABBg");
	mask_2.setTransform(8.4,8.6);

	// Layer_3
	this.instance = new lib.ClipGroup_39_1();
	this.instance.setTransform(8.6,8.6,1,1,0,0,0,8.6,8.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38_2, new cjs.Rectangle(3.3,5.4,10.2,6.5), null);


(lib.ClipGroup_36_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhEAxIAAhhICIAAIAABhg");
	mask_3.setTransform(12.8,13.25);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_37_2();
	this.instance_1.setTransform(12.6,12.6,1,1,0,0,0,12.6,12.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36_3, new cjs.Rectangle(6,8.4,13.7,9.799999999999999), null);


(lib.ClipGroup_34_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhHAYIAAgvICQAAIAAAvg");
	mask_3.setTransform(10.9,9.775);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_35_2();
	this.instance_1.setTransform(10.9,10.8,1,1,0,0,0,10.9,10.8);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34_3, new cjs.Rectangle(3.7,7.4,14.5,4.799999999999999), null);


(lib.ClipGroup_32_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Ag7A3IAAhtIB3AAIAABtg");
	mask_4.setTransform(12.55,11.875);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_33_3();
	this.instance_2.setTransform(12.2,12.2,1,1,0,0,0,12.2,12.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32_4, new cjs.Rectangle(6.6,6.4,11.9,10.999999999999998), null);


(lib.ClipGroup_30_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Ah6AnIAAhNID1AAIAABNg");
	mask_5.setTransform(17.375,17);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_31_3();
	this.instance_2.setTransform(17.2,17.2,1,1,0,0,0,17.2,17.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30_5, new cjs.Rectangle(5.1,13.2,24.6,7.699999999999999), null);


(lib.ClipGroup_28_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Ak/DsIAAnXIJ/AAIAAHXg");
	mask_5.setTransform(33.675,25.15);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_29_4();
	this.instance_3.setTransform(34.1,27,1,1,0,0,0,34.1,27);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28_5, new cjs.Rectangle(1.7,1.5,64,47.3), null);


(lib.ClipGroup_26_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AnpHsIAAvXIPTAAIAAPXg");
	mask_8.setTransform(49.025,49.175);

	// Layer_3
	this.instance_3 = new lib.Group_17();
	this.instance_3.setTransform(49.75,42.3,1,1,0,0,0,36.6,35.6);
	this.instance_3.alpha = 0.3984;
	this.instance_3.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26_8, new cjs.Rectangle(13.2,6.7,73.5,71.5), null);


(lib.ClipGroup_7_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("Ak2HRIAAuiIJsAAIAAOig");
	mask_9.setTransform(31.05,46.55);

	// Layer_3
	this.instance = new lib.ClipGroup_8_3();
	this.instance.setTransform(31.1,46.6,1,1,0,0,0,31.1,46.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_9, new cjs.Rectangle(0,0,62.1,93.1), null);


(lib.ClipGroup_5_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AhjB1IAAjoIDHAAIAADog");
	mask_8.setTransform(14,15.15);

	// Layer_3
	this.instance = new lib.ClipGroup_6_4();
	this.instance.setTransform(14,15.2,1,1,0,0,0,14,15.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_8, new cjs.Rectangle(4,3.5,20,23.3), null);


(lib.ClipGroup_3_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AhhBJIAAiRIDDAAIAACRg");
	mask_8.setTransform(17.95,17.55);

	// Layer_3
	this.instance = new lib.ClipGroup_4_4();
	this.instance.setTransform(17.9,17.6,1,1,0,0,0,17.9,17.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_8, new cjs.Rectangle(8.2,10.3,19.6,14.5), null);


(lib.ClipGroup_1_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AipCBIAAkBIFTAAIAAEBg");
	mask_10.setTransform(21.15,18.15);

	// Layer_3
	this.instance = new lib.ClipGroup_2_2();
	this.instance.setTransform(21.2,18.2,1,1,0,0,0,21.2,18.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_10, new cjs.Rectangle(4.2,5.3,34,25.8), null);


(lib.forcomb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.startbtn = new lib.button();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(-43.05,206.75);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, ידע כללי, 1, לוח הכפל, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(45.5,7,1,1,0,0,0,50,11);

	this.instance = new lib.boxcombolight();
	this.instance.setTransform(-13,-12,0.2849,0.2916);

	this.instance_1 = new lib.titlefirst();
	this.instance_1.setTransform(-201,-173,0.4864,0.4864);

	this.instance_2 = new lib.Bitmap87();
	this.instance_2.setTransform(-285,-35,0.3144,0.3144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.mycb},{t:this.startbtn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-285,-173,626.2,447.7), null);


(lib.Group_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_26_6();
	this.instance_1.setTransform(2.6,2.8,1,1,0,0,0,2.6,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6_1, new cjs.Rectangle(0,0,5.2,5.7), null);


(lib.Group_5_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_16_7();
	this.instance_2.setTransform(6.1,3.3,1,1,0,0,0,6.1,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5_2, new cjs.Rectangle(0,0,12.2,6.7), null);


(lib.Group_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_18_7();
	this.instance_2.setTransform(5.8,4.7,1,1,0,0,0,5.8,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_2, new cjs.Rectangle(0,0,11.7,9.3), null);


(lib.Group_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_20_6();
	this.instance_1.setTransform(23.2,24.6,1,1,0,0,0,23.2,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_1, new cjs.Rectangle(0,0,46.5,49.5), null);


(lib.Group_2_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_22_6();
	this.instance_2.setTransform(8.2,6.9,1,1,0,0,0,8.2,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0_2, new cjs.Rectangle(0,0,16.4,13.9), null);


(lib.Group_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_13_8();
	this.instance_2.setTransform(27.4,20.2,1,1,0,0,0,27.4,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_2, new cjs.Rectangle(0,0,55,40.6), null);


(lib.Group_1_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_24_6();
	this.instance_2.setTransform(4.4,2.9,1,1,0,0,0,4.4,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0_2, new cjs.Rectangle(0,0,8.7,5.7), null);


(lib.Group_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_2_3();
	this.instance_1.setTransform(29.4,37.9,1,1,0,0,0,29.4,37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0,0,58.8,75.8), null);


(lib.Group_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_0_2();
	this.instance_2.setTransform(8.3,9.6,1,1,0,0,0,8.3,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,0,16.7,19.2), null);


(lib.ClipGroup_15_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AnmJ0IAAznIPNAAIAATng");
	mask_8.setTransform(48.725,62.775);

	// Layer_3
	this.instance_2 = new lib.CachedBmp_18();
	this.instance_2.setTransform(28.75,2.15,0.5,0.5);

	this.instance_3 = new lib.Group_6_1();
	this.instance_3.setTransform(92.15,47.25,1,1,0,0,0,2.6,2.8);
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Group_1_0_2();
	this.instance_4.setTransform(23.65,66.6,1,1,0,0,0,4.4,2.9);
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Group_2_0_2();
	this.instance_5.setTransform(61.9,15.8,1,1,0,0,0,8.2,6.9);
	this.instance_5.compositeOperation = "screen";

	this.instance_6 = new lib.Group_3_1();
	this.instance_6.setTransform(63.75,24.6,1,1,0,0,0,23.2,24.6);
	this.instance_6.compositeOperation = "screen";

	this.instance_7 = new lib.CachedBmp_17();
	this.instance_7.setTransform(44.8,11.75,0.5,0.5);

	this.instance_8 = new lib.Group_4_2();
	this.instance_8.setTransform(38.85,114.5,1,1,0,0,0,5.8,4.7);
	this.instance_8.compositeOperation = "multiply";

	this.instance_9 = new lib.Group_5_2();
	this.instance_9.setTransform(72.2,114.45,1,1,0,0,0,6.1,3.3);
	this.instance_9.compositeOperation = "multiply";

	this.instance_10 = new lib.CachedBmp_16();
	this.instance_10.setTransform(29.85,21.05,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_8, new cjs.Rectangle(19.3,0,75.4,125.6), null);


(lib.ClipGroup_10_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AnmJ0IAAznIPNAAIAATng");
	mask_8.setTransform(48.725,62.775);

	// Layer_3
	this.instance_4 = new lib.CachedBmp_14();
	this.instance_4.setTransform(33.7,110.6,0.5,0.5);

	this.instance_5 = new lib.Group_18();
	this.instance_5.setTransform(70.3,56.15,1,1,0,0,0,8.3,9.6);
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.CachedBmp_13();
	this.instance_6.setTransform(73.85,38.05,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_8, new cjs.Rectangle(33.7,38.1,63.7,77.5), null);


(lib.ClipGroup_5_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AnmJ0IAAznIPNAAIAATng");
	mask_9.setTransform(48.725,62.775);

	// Layer_3
	this.instance_1 = new lib.Group_0();
	this.instance_1.setTransform(59.1,52.85,1,1,0,0,0,8.6,5.1);
	this.instance_1.alpha = 0.5;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Group_1_2();
	this.instance_2.setTransform(50.65,82.85,1,1,0,0,0,29.4,37.9);
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.CachedBmp_15();
	this.instance_3.setTransform(17.35,47.35,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_9, new cjs.Rectangle(17.4,45,62.6,75.8), null);


(lib.ClipGroup_2_0_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AnmJ0IAAznIPNAAIAATng");
	mask_5.setTransform(48.725,62.775);

	// Layer_3
	this.instance_1 = new lib.Group_2_2();
	this.instance_1.setTransform(53.8,34.3,1,1,0,0,0,27.4,20.2);
	this.instance_1.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_5, new cjs.Rectangle(26.4,14.1,55.00000000000001,40.6), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnmJ0IAAznIPNAAIAATng");
	mask.setTransform(48.725,66.275);

	// Layer_3
	this.instance = new lib.ClipGroup_15_8();
	this.instance.setTransform(48.7,66.3,1,1,0,0,0,48.7,62.8);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.setTransform(41.6,37.4,1,1,0,0,0,7.7,15.5);

	this.instance_2 = new lib.ClipGroup_2_0_5();
	this.instance_2.setTransform(48.7,66.3,1,1,0,0,0,48.7,62.8);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.setTransform(61.25,25.65,1,1,0,0,0,23.2,23.1);

	this.instance_4 = new lib.ClipGroup_4_0();
	this.instance_4.setTransform(56.1,29.2,1,1,0,0,0,31.2,29.2);

	this.instance_5 = new lib.ClipGroup_5_9();
	this.instance_5.setTransform(48.7,66.3,1,1,0,0,0,48.7,62.8);

	this.instance_6 = new lib.ClipGroup_6();
	this.instance_6.setTransform(45.25,100.8,1,1,0,0,0,15.2,22.4);

	this.instance_7 = new lib.ClipGroup_7();
	this.instance_7.setTransform(39.6,66.25,1,1,0,0,0,17.2,16.3);

	this.instance_8 = new lib.ClipGroup_8();
	this.instance_8.setTransform(48.7,66.3,1,1,0,0,0,48.7,62.8);

	this.instance_9 = new lib.ClipGroup_9();
	this.instance_9.setTransform(70.45,102.6,1,1,0,0,0,12.5,18.6);

	this.instance_10 = new lib.ClipGroup_10_8();
	this.instance_10.setTransform(48.7,66.3,1,1,0,0,0,48.7,62.8);

	this.instance_11 = new lib.ClipGroup_11();
	this.instance_11.setTransform(78.2,57.15,1,1,0,0,0,16,13.3);

	this.instance_12 = new lib.ClipGroup_12();
	this.instance_12.setTransform(48.7,66.3,1,1,0,0,0,48.7,62.8);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,3.5,97.5,125.6), null);


(lib.Group_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_18_8();
	this.instance_2.setTransform(88.4,88.4,1,1,0,0,0,88.4,88.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_2, new cjs.Rectangle(0,0,176.7,176.7), null);


(lib.Group_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_9_10();
	this.instance_3.setTransform(30.3,29.6,1,1,0,0,0,30.3,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_3, new cjs.Rectangle(0,0,60.7,59.3), null);


(lib.Group_1_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_16_8();
	this.instance_3.setTransform(32.8,17.2,1,1,0,0,0,32.8,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0_3, new cjs.Rectangle(0,0,65.6,34.4), null);


(lib.Group_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_11_9();
	this.instance_2.setTransform(33.9,27.8,1,1,0,0,0,33.9,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_3, new cjs.Rectangle(0,0,67.7,55.7), null);


(lib.Group_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_13_9();
	this.instance_2.setTransform(48.2,50.8,1,1,0,0,0,48.2,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_2, new cjs.Rectangle(0,0,96.5,101.7), null);


(lib.Group_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_0_3();
	this.instance_3.setTransform(45.8,46.9,1,1,0,0,0,45.8,46.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0,0,91.6,93.8), null);


(lib.ClipGroup_15_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AnjH5IAAvxIPHAAIAAPxg");
	mask_9.setTransform(91.75,84.55);

	// Layer_3
	this.instance_11 = new lib.Group_3_2();
	this.instance_11.setTransform(88.4,88.4,1,1,0,0,0,88.4,88.4);
	this.instance_11.compositeOperation = "screen";

	this.instance_12 = new lib.Group_1_0_3();
	this.instance_12.setTransform(77.3,51.15,1,1,0,0,0,32.8,17.2);
	this.instance_12.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_9, new cjs.Rectangle(43.4,34,96.69999999999999,101.1), null);


(lib.ClipGroup_7_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AnjH5IAAvyIPGAAIAAPyg");
	mask_10.setTransform(48.35,50.55);

	// Layer_3
	this.instance_1 = new lib.Group_19();
	this.instance_1.setTransform(48.2,51,1,1,0,0,0,45.8,46.9);
	this.instance_1.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_10, new cjs.Rectangle(2.4,4.1,91.6,93.80000000000001), null);


(lib.ClipGroup_2_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AnjH6IAAvyIPGAAIAAPyg");
	mask_10.setTransform(48.35,50.6);

	// Layer_3
	this.instance_7 = new lib.Group_0_2();
	this.instance_7.setTransform(49.3,50.8,1,1,0,0,0,48.2,50.8);
	this.instance_7.compositeOperation = "multiply";

	this.instance_8 = new lib.Group_1_3();
	this.instance_8.setTransform(40.25,47.55,1,1,0,0,0,33.9,27.8);
	this.instance_8.compositeOperation = "screen";

	this.instance_9 = new lib.Group_2_3();
	this.instance_9.setTransform(38.35,35.95,1,1,0,0,0,30.3,29.6);
	this.instance_9.alpha = 0.5;
	this.instance_9.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance_7,this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_10, new cjs.Rectangle(1.1,0.1,95.60000000000001,101.10000000000001), null);


(lib.ClipGroup_47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AnjH5IAAvxIPHAAIAAPxg");
	mask_1.setTransform(91.75,84.55);

	// Layer_3
	this.instance_13 = new lib.ClipGroup_15_9();
	this.instance_13.setTransform(88.4,88.4,1,1,0,0,0,88.4,88.4);

	this.instance_14 = new lib.ClipGroup_1_0_1();
	this.instance_14.setTransform(122.4,89.3,1,1,0,0,0,16.8,23.2);

	this.instance_15 = new lib.ClipGroup_2_10();
	this.instance_15.setTransform(92.2,84.75,1,1,0,0,0,48.8,50.8);

	this.instance_16 = new lib.ClipGroup_3_1();
	this.instance_16.setTransform(78.6,66.2,1,1,0,0,0,35.5,26.2);

	this.instance_17 = new lib.ClipGroup_4_1();
	this.instance_17.setTransform(95.55,92.1,1,1,0,0,0,34.4,39.4);

	this.instance_18 = new lib.ClipGroup_5();
	this.instance_18.setTransform(92.3,84.6,1,1,0,0,0,47.8,50.6);

	this.instance_19 = new lib.ClipGroup_6_1();
	this.instance_19.setTransform(84.9,75.35,1,1,0,0,0,41.5,38.4);

	this.instance_20 = new lib.ClipGroup_7_10();
	this.instance_20.setTransform(91.8,84.6,1,1,0,0,0,48.4,50.6);

	this.instance_21 = new lib.ClipGroup_8_1();
	this.instance_21.setTransform(91.6,85,1,1,0,0,0,45.8,46.9);

	var maskedShapeInstanceList = [this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_47, new cjs.Rectangle(43.4,34,96.69999999999999,101.1), null);


(lib.Group_9_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_4_5();
	this.instance_2.setTransform(31.3,29.4,1,1,0,0,0,31.3,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_9_2, new cjs.Rectangle(0,0,62.7,58.9), null);


(lib.Group_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_6_5();
	this.instance_1.setTransform(48.8,46.3,1,1,0,0,0,48.8,46.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_8_1, new cjs.Rectangle(0,0,97.7,92.6), null);


(lib.Group_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_8_4();
	this.instance_1.setTransform(22.2,21.1,1,1,0,0,0,22.2,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7_1, new cjs.Rectangle(0,0,44.4,42.3), null);


(lib.Group_6_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_10_4();
	this.instance_2.setTransform(25.9,32,1,1,0,0,0,25.9,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6_2, new cjs.Rectangle(0,0,51.8,64), null);


(lib.Group_5_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_12_7();
	this.instance_3.setTransform(47.2,24.2,1,1,0,0,0,47.2,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5_3, new cjs.Rectangle(0,0,94.4,48.5), null);


(lib.Group_4_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_14_7();
	this.instance_3.setTransform(5.6,2.2,1,1,0,0,0,5.6,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_3, new cjs.Rectangle(0,0,11.2,4.4), null);


(lib.Group_3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_16_9();
	this.instance_3.setTransform(4,2.7,1,1,0,0,0,4,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_3, new cjs.Rectangle(0,0,8,5.4), null);


(lib.Group_2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_18_9();
	this.instance_4.setTransform(3.9,4.4,1,1,0,0,0,3.9,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_4, new cjs.Rectangle(0,0,7.8,8.8), null);


(lib.Group_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_20_7();
	this.instance_3.setTransform(5.1,6.8,1,1,0,0,0,5.1,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_4, new cjs.Rectangle(0,0,10.2,13.6), null);


(lib.Group_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_22_7();
	this.instance_4.setTransform(48.8,46.4,1,1,0,0,0,48.8,46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,97.7,92.7), null);


(lib.ClipGroup_0_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AnmHPIAAudIPNAAIAAOdg");
	mask_10.setTransform(48.925,46.425);

	// Layer_3
	this.instance_9 = new lib.Group_20();
	this.instance_9.setTransform(48.8,46.4,1,1,0,0,0,48.8,46.4);
	this.instance_9.compositeOperation = "screen";

	this.instance_10 = new lib.Group_1_4();
	this.instance_10.setTransform(44.45,38.55,1,1,0,0,0,5.1,6.8);
	this.instance_10.compositeOperation = "screen";

	this.instance_11 = new lib.Group_2_4();
	this.instance_11.setTransform(34.55,26.6,1,1,0,0,0,3.9,4.4);
	this.instance_11.compositeOperation = "screen";

	this.instance_12 = new lib.Group_3_3();
	this.instance_12.setTransform(20.65,26.25,1,1,0,0,0,4,2.7);
	this.instance_12.compositeOperation = "screen";

	this.instance_13 = new lib.Group_4_3();
	this.instance_13.setTransform(63.25,56.9,1,1,0,0,0,5.6,2.2);
	this.instance_13.compositeOperation = "screen";

	this.instance_14 = new lib.Group_5_3();
	this.instance_14.setTransform(47.95,64,1,1,0,0,0,47.2,24.2);
	this.instance_14.alpha = 0.6016;
	this.instance_14.compositeOperation = "screen";

	this.instance_15 = new lib.Group_6_2();
	this.instance_15.setTransform(70.7,55.45,1,1,0,0,0,25.9,32);
	this.instance_15.compositeOperation = "multiply";

	this.instance_16 = new lib.Group_7_1();
	this.instance_16.setTransform(24.7,45.5,1,1,0,0,0,22.2,21.1);
	this.instance_16.compositeOperation = "screen";

	this.instance_17 = new lib.Group_8_1();
	this.instance_17.setTransform(48.8,46.4,1,1,0,0,0,48.8,46.3);
	this.instance_17.alpha = 0.6992;
	this.instance_17.compositeOperation = "multiply";

	this.instance_18 = new lib.Group_9_2();
	this.instance_18.setTransform(35.25,32.35,1,1,0,0,0,31.3,29.4);
	this.instance_18.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_10, new cjs.Rectangle(0.2,0.2,97.5,92.5), null);


(lib.ClipGroup_51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AnmHPIAAudIPNAAIAAOdg");
	mask_2.setTransform(48.925,46.425);

	// Layer_3
	this.instance_22 = new lib.ClipGroup_0_10();
	this.instance_22.setTransform(48.8,46.4,1,1,0,0,0,48.8,46.4);

	this.instance_23 = new lib.ClipGroup_1_2();
	this.instance_23.setTransform(48.9,46.35,1,1,0,0,0,48.7,46.2);

	this.instance_24 = new lib.ClipGroup_2();
	this.instance_24.setTransform(49,47.15,1,1,0,0,0,47.5,45.1);

	this.instance_25 = new lib.ClipGroup_3_2();
	this.instance_25.setTransform(49.35,58.65,1,1,0,0,0,48.4,30.6);

	var maskedShapeInstanceList = [this.instance_22,this.instance_23,this.instance_24,this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_51, new cjs.Rectangle(0.2,0.2,97.5,92.5), null);


(lib.Group_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_84();
	this.instance_1.setTransform(9.2,8.2,1,1,0,0,0,9.2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_10_1, new cjs.Rectangle(0,0,18.3,16.3), null);


(lib.Group_8_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_76();
	this.instance_2.setTransform(5.5,8.3,1,1,0,0,0,5.5,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_8_2, new cjs.Rectangle(0,0,10.9,16.8), null);


(lib.Group_7_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_18_10();
	this.instance_2.setTransform(11.1,11.2,1,1,0,0,0,11.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7_2, new cjs.Rectangle(0,0,22.1,22.4), null);


(lib.Group_6_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_16_10();
	this.instance_3.setTransform(30.1,20.9,1,1,0,0,0,30.1,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6_3, new cjs.Rectangle(0,0,60.2,42), null);


(lib.Group_5_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_14_8();
	this.instance_4.setTransform(7.3,4.5,1,1,0,0,0,7.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5_4, new cjs.Rectangle(0,0,14.6,9), null);


(lib.Group_4_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_12_8();
	this.instance_4.setTransform(5.1,2.4,1,1,0,0,0,5.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_4, new cjs.Rectangle(0,0,10.3,4.8), null);


(lib.Group_3_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_10_5();
	this.instance_4.setTransform(15.6,9.7,1,1,0,0,0,15.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_4, new cjs.Rectangle(0,0,31.2,19.4), null);


(lib.Group_2_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_80();
	this.instance_3.setTransform(11.7,9.5,1,1,0,0,0,11.7,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0_3, new cjs.Rectangle(0,0,23.5,19), null);


(lib.Group_2_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_5 = new lib.ClipGroup_0_4();
	this.instance_5.setTransform(47.5,49.6,1,1,0,0,0,47.5,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_5, new cjs.Rectangle(0,0,95,99.1), null);


(lib.Group_1_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_82();
	this.instance_1.setTransform(11.1,12.1,1,1,0,0,0,11.1,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1_1, new cjs.Rectangle(0,0,22.1,24.2), null);


(lib.Group_1_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_6_6();
	this.instance_4.setTransform(6.5,7.4,1,1,0,0,0,6.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0_4, new cjs.Rectangle(0,0,12.9,14.7), null);


(lib.Group_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_2_4();
	this.instance_4.setTransform(47.5,49.6,1,1,0,0,0,47.5,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_5, new cjs.Rectangle(0,0,95,99.1), null);


(lib.Group_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_8_5();
	this.instance_3.setTransform(4.9,6,1,1,0,0,0,4.9,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_3, new cjs.Rectangle(0,0,9.7,12), null);


(lib.Group_21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_5 = new lib.ClipGroup_4_6();
	this.instance_5.setTransform(31.6,30.2,1,1,0,0,0,31.6,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,0,63.2,60.6), null);


(lib.ClipGroup_79 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An2IBIAAwBIPtAAIAAQBg");
	mask.setTransform(50.3,51.275);

	// Layer_3
	this.instance = new lib.Group_10_1();
	this.instance.setTransform(46.45,22.2,1,1,0,0,0,9.2,8.2);
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.Group_1_1_1();
	this.instance_1.setTransform(14.3,24.7,1,1,0,0,0,11.1,12.1);
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.Group_2_0_3();
	this.instance_2.setTransform(37.65,54.9,1,1,0,0,0,11.7,9.5);
	this.instance_2.alpha = 0.75;
	this.instance_2.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_79, new cjs.Rectangle(3.2,12.6,52.4,51.800000000000004), null);


(lib.ClipGroup_74 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An2IBIAAwBIPtAAIAAQBg");
	mask.setTransform(50.3,51.275);

	// Layer_3
	this.instance = new lib.Group_21();
	this.instance.setTransform(39.1,34.3,1,1,0,0,0,31.6,30.2);
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.Group_1_5();
	this.instance_1.setTransform(50.5,51.4,1,1,0,0,0,47.5,49.6);
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Group_2_5();
	this.instance_2.setTransform(50.5,51.4,1,1,0,0,0,47.5,49.6);
	this.instance_2.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_74, new cjs.Rectangle(3,1.8,95,99.10000000000001), null);


(lib.ClipGroup_62 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An2IBIAAwBIPtAAIAAQBg");
	mask.setTransform(50.3,51.275);

	// Layer_3
	this.instance = new lib.Group_0_3();
	this.instance.setTransform(73.3,43.65,1,1,0,0,0,4.9,6);
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Group_1_0_4();
	this.instance_1.setTransform(74.05,66.85,1,1,0,0,0,6.5,7.4);
	this.instance_1.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_62, new cjs.Rectangle(67.6,37.7,12.900000000000006,36.5), null);


(lib.ClipGroup_57 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An2IBIAAwBIPtAAIAAQBg");
	mask.setTransform(50.3,51.275);

	// Layer_3
	this.instance = new lib.Group_3_4();
	this.instance.setTransform(64.65,91.25,1,1,0,0,0,15.6,9.7);
	this.instance.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_57, new cjs.Rectangle(49.1,81.6,31.199999999999996,19.30000000000001), null);


(lib.ClipGroup_51_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An2IBIAAwBIPtAAIAAQBg");
	mask.setTransform(50.3,51.275);

	// Layer_3
	this.instance = new lib.Group_4_4();
	this.instance.setTransform(39.9,98.2,1,1,0,0,0,5.1,2.4);
	this.instance.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_51_1, new cjs.Rectangle(34.8,95.8,10.300000000000004,4.799999999999997), null);


(lib.ClipGroup_47_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An2IBIAAwBIPtAAIAAQBg");
	mask.setTransform(50.3,51.275);

	// Layer_3
	this.instance = new lib.Group_5_4();
	this.instance.setTransform(74.15,9.3,1,1,0,0,0,7.3,4.5);
	this.instance.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_47_1, new cjs.Rectangle(66.9,4.8,14.599999999999994,9), null);


(lib.ClipGroup_40_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("An2IBIAAwBIPtAAIAAQBg");
	mask_3.setTransform(50.3,51.275);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7A369E").s().p("AgwCUQgngMgbgOQgbgbgXgnQgYgngLgfQADgeAHgSQAygzA2gfQAngQAmgFQBIAYAvAbQA0AtAlAwIgFAeQgRA3glAsQg1Ang/ATQgegFgrgNg");
	this.shape_2.setTransform(45.9,59.85);

	this.instance_1 = new lib.Group_6_3();
	this.instance_1.setTransform(42.4,69.15,1,1,0,0,0,30.1,20.9);
	this.instance_1.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.shape_2,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40_3, new cjs.Rectangle(12.3,43.3,60.2,46.900000000000006), null);


(lib.ClipGroup_21_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("An2IBIAAwBIPtAAIAAQBg");
	mask_8.setTransform(50.3,51.275);

	// Layer_3
	this.instance_4 = new lib.Group_7_2();
	this.instance_4.setTransform(18.05,30.2,1,1,0,0,0,11.1,11.2);
	this.instance_4.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_8, new cjs.Rectangle(7,19,22.1,22.4), null);


(lib.ClipGroup_16_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An2IBIAAwBIPtAAIAAQBg");
	mask.setTransform(50.3,51.275);

	// Layer_3
	this.instance = new lib.Group_8_2();
	this.instance.setTransform(8.5,53.25,1,1,0,0,0,5.5,8.3);
	this.instance.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16_0, new cjs.Rectangle(3,45,10.9,16.700000000000003), null);


(lib.ClipGroup_86 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("An2IBIAAwBIPtAAIAAQBg");
	mask_3.setTransform(50.3,51.275);

	// Layer_3
	this.instance_26 = new lib.ClipGroup_79();
	this.instance_26.setTransform(50.3,51.2,1,1,0,0,0,50.3,51.2);

	this.instance_27 = new lib.ClipGroup_1_0_2();
	this.instance_27.setTransform(44.8,30.35,1,1,0,0,0,2.2,1.6);

	this.instance_28 = new lib.ClipGroup_2_0_4();
	this.instance_28.setTransform(50.3,51.2,1,1,0,0,0,50.3,51.2);

	this.instance_29 = new lib.ClipGroup_3_0_1();
	this.instance_29.setTransform(46.45,22.2,1,1,0,0,0,9.2,8.2);

	this.instance_30 = new lib.ClipGroup_4_0_1();
	this.instance_30.setTransform(53.65,20.1,1,1,0,0,0,8.3,6.1);

	this.instance_31 = new lib.ClipGroup_5_0();
	this.instance_31.setTransform(64.25,25.55,1,1,0,0,0,2.6,6.8);

	this.instance_32 = new lib.ClipGroup_6_0();
	this.instance_32.setTransform(59.75,32.6,1,1,0,0,0,7.2,7.9);

	this.instance_33 = new lib.ClipGroup_7_0();
	this.instance_33.setTransform(51.5,35.2,1,1,0,0,0,8.9,6.9);

	this.instance_34 = new lib.ClipGroup_8_0();
	this.instance_34.setTransform(40.8,30.55,1,1,0,0,0,4,4.8);

	this.instance_35 = new lib.ClipGroup_9_0();
	this.instance_35.setTransform(38.25,22.95,1,1,0,0,0,1.6,3.6);

	this.instance_36 = new lib.ClipGroup_10_0();
	this.instance_36.setTransform(5.05,44.65,1,1,0,0,0,2.9,0.8);

	this.instance_37 = new lib.ClipGroup_11_0();
	this.instance_37.setTransform(7.4,45.45,1,1,0,0,0,1.3,0.5);

	this.instance_38 = new lib.ClipGroup_12_0();
	this.instance_38.setTransform(7.85,51.25,1,1,0,0,0,3.5,5.5);

	this.instance_39 = new lib.ClipGroup_13_0();
	this.instance_39.setTransform(3.4,53.35,1,1,0,0,0,3.4,8);

	this.instance_40 = new lib.ClipGroup_14_0();
	this.instance_40.setTransform(7.45,59.1,1,1,0,0,0,3.6,2.4);

	this.instance_41 = new lib.ClipGroup_15_0();
	this.instance_41.setTransform(3,60.7,1,1,0,0,0,1.4,1.2);

	this.instance_42 = new lib.ClipGroup_16_0();
	this.instance_42.setTransform(50.3,51.2,1,1,0,0,0,50.3,51.2);

	this.instance_43 = new lib.ClipGroup_17_0();
	this.instance_43.setTransform(14.3,24.7,1,1,0,0,0,11.1,12.1);

	this.instance_44 = new lib.ClipGroup_18_0();
	this.instance_44.setTransform(24,26.85,1,1,0,0,0,3.8,9.6);

	this.instance_45 = new lib.ClipGroup_19_0();
	this.instance_45.setTransform(16.2,35.55,1,1,0,0,0,7.4,5);

	this.instance_46 = new lib.ClipGroup_20();
	this.instance_46.setTransform(7.9,37.8,1,1,0,0,0,4.3,2.8);

	this.instance_47 = new lib.ClipGroup_21_8();
	this.instance_47.setTransform(50.3,51.2,1,1,0,0,0,50.3,51.2);

	this.instance_48 = new lib.ClipGroup_22();
	this.instance_48.setTransform(73.1,63.45,1,1,0,0,0,4,5.2);

	this.instance_49 = new lib.ClipGroup_23_2();
	this.instance_49.setTransform(71.65,59.65,1,1,0,0,0,1.7,1.4);

	this.instance_50 = new lib.ClipGroup_24();
	this.instance_50.setTransform(68.75,64.6,1,1,0,0,0,1.9,4);

	this.instance_51 = new lib.ClipGroup_25_1();
	this.instance_51.setTransform(70.45,70.15,1,1,0,0,0,3.6,3);

	this.instance_52 = new lib.ClipGroup_26();
	this.instance_52.setTransform(75.5,69.75,1,1,0,0,0,1.6,2);

	this.instance_53 = new lib.ClipGroup_27_1();
	this.instance_53.setTransform(76.5,66,1,1,0,0,0,1.4,2.4);

	this.instance_54 = new lib.ClipGroup_28();
	this.instance_54.setTransform(77,61.55,1,1,0,0,0,0.9,2.1);

	this.instance_55 = new lib.ClipGroup_29();
	this.instance_55.setTransform(26.35,72.45,1,1,0,0,0,5.7,8);

	this.instance_56 = new lib.ClipGroup_30();
	this.instance_56.setTransform(29.8,80,1,1,0,0,0,2.3,3.4);

	this.instance_57 = new lib.ClipGroup_31();
	this.instance_57.setTransform(20.85,77.75,1,1,0,0,0,2.5,2.3);

	this.instance_58 = new lib.ClipGroup_32();
	this.instance_58.setTransform(19.6,84.05,1,1,0,0,0,10,4.5);

	this.instance_59 = new lib.ClipGroup_33();
	this.instance_59.setTransform(14.75,74.25,1,1,0,0,0,6.5,9.8);

	this.instance_60 = new lib.ClipGroup_34();
	this.instance_60.setTransform(38.75,57.8,1,1,0,0,0,12.8,12.4);

	this.instance_61 = new lib.ClipGroup_35();
	this.instance_61.setTransform(51.55,50.65,1,1,0,0,0,14.2,7.4);

	this.instance_62 = new lib.ClipGroup_36();
	this.instance_62.setTransform(54.9,59.1,1,1,0,0,0,5.5,5.4);

	this.instance_63 = new lib.ClipGroup_37();
	this.instance_63.setTransform(56.4,67.05,1,1,0,0,0,9.4,9.4);

	this.instance_64 = new lib.ClipGroup_38();
	this.instance_64.setTransform(41.35,72.3,1,1,0,0,0,7,4.1);

	this.instance_65 = new lib.ClipGroup_39();
	this.instance_65.setTransform(32.15,65.2,1,1,0,0,0,6.2,6.9);

	this.instance_66 = new lib.ClipGroup_40_3();
	this.instance_66.setTransform(50.3,51.2,1,1,0,0,0,50.3,51.2);

	this.instance_67 = new lib.ClipGroup_41();
	this.instance_67.setTransform(66,7,1,1,0,0,0,6.2,4.7);

	this.instance_68 = new lib.ClipGroup_42();
	this.instance_68.setTransform(65.1,1.9,1,1,0,0,0,5.3,1.4);

	this.instance_69 = new lib.ClipGroup_43();
	this.instance_69.setTransform(72.15,5.05,1,1,0,0,0,1.8,4.4);

	this.instance_70 = new lib.ClipGroup_44();
	this.instance_70.setTransform(72.65,10.85,1,1,0,0,0,1.4,1.9);

	this.instance_71 = new lib.ClipGroup_45();
	this.instance_71.setTransform(68.45,11.8,1,1,0,0,0,3.2,1.1);

	this.instance_72 = new lib.ClipGroup_46();
	this.instance_72.setTransform(63.2,9.55,1,1,0,0,0,3.1,3);

	this.instance_73 = new lib.ClipGroup_47_1();
	this.instance_73.setTransform(50.3,51.2,1,1,0,0,0,50.3,51.2);

	this.instance_74 = new lib.ClipGroup_48();
	this.instance_74.setTransform(35.45,96.55,1,1,0,0,0,5.2,5.5);

	this.instance_75 = new lib.ClipGroup_49();
	this.instance_75.setTransform(29.6,98.5,1,1,0,0,0,3.7,3.5);

	this.instance_76 = new lib.ClipGroup_50();
	this.instance_76.setTransform(28.9,93.55,1,1,0,0,0,3,2.5);

	this.instance_77 = new lib.ClipGroup_51_1();
	this.instance_77.setTransform(50.3,51.2,1,1,0,0,0,50.3,51.2);

	this.instance_78 = new lib.ClipGroup_52();
	this.instance_78.setTransform(58.4,96.7,1,1,0,0,0,13.9,6.9);

	this.instance_79 = new lib.ClipGroup_53();
	this.instance_79.setTransform(70.2,87.35,1,1,0,0,0,4.9,6.4);

	this.instance_80 = new lib.ClipGroup_54();
	this.instance_80.setTransform(64.85,90.45,1,1,0,0,0,9.7,6.7);

	this.instance_81 = new lib.ClipGroup_55();
	this.instance_81.setTransform(53.6,85.75,1,1,0,0,0,12.7,4.8);

	this.instance_82 = new lib.ClipGroup_56();
	this.instance_82.setTransform(43.2,91.05,1,1,0,0,0,2.3,3.8);

	this.instance_83 = new lib.ClipGroup_57();
	this.instance_83.setTransform(50.3,51.2,1,1,0,0,0,50.3,51.2);

	this.instance_84 = new lib.ClipGroup_58();
	this.instance_84.setTransform(73.75,39.55,1,1,0,0,0,2,2.3);

	this.instance_85 = new lib.ClipGroup_59();
	this.instance_85.setTransform(74.2,44.6,1,1,0,0,0,1.7,3.2);

	this.instance_86 = new lib.ClipGroup_60();
	this.instance_86.setTransform(69.9,46.4,1,1,0,0,0,2.9,1.6);

	this.instance_87 = new lib.ClipGroup_61();
	this.instance_87.setTransform(70.6,41.75,1,1,0,0,0,3.6,4.5);

	this.instance_88 = new lib.ClipGroup_62();
	this.instance_88.setTransform(50.3,51.2,1,1,0,0,0,50.3,51.2);

	this.instance_89 = new lib.ClipGroup_63();
	this.instance_89.setTransform(40.05,4.15,1,1,0,0,0,5.7,1.2);

	this.instance_90 = new lib.ClipGroup_64();
	this.instance_90.setTransform(42.15,1.7,1,1,0,0,0,4,1.7);

	this.instance_91 = new lib.ClipGroup_65();
	this.instance_91.setTransform(37.25,2.8,1,1,0,0,0,2.9,2.8);

	this.instance_92 = new lib.ClipGroup_66();
	this.instance_92.setTransform(95.65,66.05,1,1,0,0,0,4.9,10.7);

	this.instance_93 = new lib.ClipGroup_67();
	this.instance_93.setTransform(89.75,76.5,1,1,0,0,0,4.9,2.9);

	this.instance_94 = new lib.ClipGroup_68();
	this.instance_94.setTransform(88.15,73.8,1,1,0,0,0,3.5,3);

	this.instance_95 = new lib.ClipGroup_69();
	this.instance_95.setTransform(87.85,68.65,1,1,0,0,0,3,3.1);

	this.instance_96 = new lib.ClipGroup_70();
	this.instance_96.setTransform(90.25,62.5,1,1,0,0,0,3.3,4.7);

	this.instance_97 = new lib.ClipGroup_71();
	this.instance_97.setTransform(95.25,27.3,1,1,0,0,0,5.3,7.9);

	this.instance_98 = new lib.ClipGroup_72();
	this.instance_98.setTransform(94.95,34.45,1,1,0,0,0,5.6,8.3);

	this.instance_99 = new lib.ClipGroup_73();
	this.instance_99.setTransform(91.6,26.2,1,1,0,0,0,4.5,6.8);

	this.instance_100 = new lib.ClipGroup_74();
	this.instance_100.setTransform(50.3,51.2,1,1,0,0,0,50.3,51.2);

	this.instance_101 = new lib.ClipGroup_75();
	this.instance_101.setTransform(50.5,51.4,1,1,0,0,0,47.5,49.6);

	var maskedShapeInstanceList = [this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33,this.instance_34,this.instance_35,this.instance_36,this.instance_37,this.instance_38,this.instance_39,this.instance_40,this.instance_41,this.instance_42,this.instance_43,this.instance_44,this.instance_45,this.instance_46,this.instance_47,this.instance_48,this.instance_49,this.instance_50,this.instance_51,this.instance_52,this.instance_53,this.instance_54,this.instance_55,this.instance_56,this.instance_57,this.instance_58,this.instance_59,this.instance_60,this.instance_61,this.instance_62,this.instance_63,this.instance_64,this.instance_65,this.instance_66,this.instance_67,this.instance_68,this.instance_69,this.instance_70,this.instance_71,this.instance_72,this.instance_73,this.instance_74,this.instance_75,this.instance_76,this.instance_77,this.instance_78,this.instance_79,this.instance_80,this.instance_81,this.instance_82,this.instance_83,this.instance_84,this.instance_85,this.instance_86,this.instance_87,this.instance_88,this.instance_89,this.instance_90,this.instance_91,this.instance_92,this.instance_93,this.instance_94,this.instance_95,this.instance_96,this.instance_97,this.instance_98,this.instance_99,this.instance_100,this.instance_101];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_86, new cjs.Rectangle(0,0,100.6,102.6), null);


(lib.Group_16_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_11_10();
	this.instance.setTransform(48.1,40.6,1,1,0,0,0,48.1,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_16_1, new cjs.Rectangle(0,0,96.1,81.3), null);


(lib.Group_15_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_13_10();
	this.instance_1.setTransform(12.2,6.4,1,1,0,0,0,12.2,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_15_1, new cjs.Rectangle(0,0,24.3,12.9), null);


(lib.Group_14_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_15_6();
	this.instance_1.setTransform(31.4,24.2,1,1,0,0,0,31.4,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_14_1, new cjs.Rectangle(0,0,62.9,48.3), null);


(lib.Group_13_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_17_9();
	this.instance_1.setTransform(8.5,3.1,1,1,0,0,0,8.5,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_13_1, new cjs.Rectangle(0,0,17,6.2), null);


(lib.Group_12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_19_9();
	this.instance_1.setTransform(39.6,40.6,1,1,0,0,0,39.6,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_12_1, new cjs.Rectangle(0,0,79.3,81.3), null);


(lib.Group_11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_21_5();
	this.instance_1.setTransform(20.8,6,1,1,0,0,0,20.8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_11_1, new cjs.Rectangle(0,0,41.5,12), null);


(lib.Group_10_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_23_7();
	this.instance_2.setTransform(5.1,7.8,1,1,0,0,0,5.1,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_10_2, new cjs.Rectangle(0,0,10.2,15.6), null);


(lib.Group_9_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_25_4();
	this.instance_3.setTransform(8.3,4.2,1,1,0,0,0,8.3,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_9_3, new cjs.Rectangle(0,0,16.7,8.4), null);


(lib.Group_8_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_27_6();
	this.instance_3.setTransform(8.6,13.8,1,1,0,0,0,8.6,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_8_3, new cjs.Rectangle(0,0,17.2,27.6), null);


(lib.Group_7_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_29_5();
	this.instance_3.setTransform(6.4,8.1,1,1,0,0,0,6.4,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7_3, new cjs.Rectangle(0,0,12.8,16.1), null);


(lib.Group_6_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_31_4();
	this.instance_4.setTransform(16.2,8.6,1,1,0,0,0,16.2,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6_4, new cjs.Rectangle(0,0,32.4,17.1), null);


(lib.Group_5_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_5 = new lib.ClipGroup_33_4();
	this.instance_5.setTransform(2.6,7.3,1,1,0,0,0,2.6,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5_5, new cjs.Rectangle(0,0,5.4,14.7), null);


(lib.Group_4_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_5 = new lib.ClipGroup_35_3();
	this.instance_5.setTransform(2.8,5.7,1,1,0,0,0,2.8,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_5, new cjs.Rectangle(0,0,5.6,11.4), null);


(lib.Group_3_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_37_3();
	this.instance_1.setTransform(5.6,1.4,1,1,0,0,0,5.6,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_0_1, new cjs.Rectangle(0,0,11.2,2.9), null);


(lib.Group_3_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_5 = new lib.ClipGroup_0_5();
	this.instance_5.setTransform(48.2,48.9,1,1,0,0,0,48.2,48.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_5, new cjs.Rectangle(0,0,96.5,97.9), null);


(lib.Group_2_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_39_2();
	this.instance_4.setTransform(7.4,1.7,1,1,0,0,0,7.4,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0_4, new cjs.Rectangle(0,0,14.8,3.5), null);


(lib.Group_2_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_6 = new lib.ClipGroup_2_5();
	this.instance_6.setTransform(48.2,48.9,1,1,0,0,0,48.2,48.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_6, new cjs.Rectangle(0,0,96.5,97.9), null);


(lib.Group_1_0_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_5 = new lib.ClipGroup_41_2();
	this.instance_5.setTransform(6.8,10.2,1,1,0,0,0,6.8,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0_5, new cjs.Rectangle(0,0,13.7,20.5), null);


(lib.Group_1_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_5 = new lib.ClipGroup_6_7();
	this.instance_5.setTransform(46.5,39.5,1,1,0,0,0,46.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_6, new cjs.Rectangle(0,0,92.9,79), null);


(lib.Group_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_43_2();
	this.instance_4.setTransform(48.1,40.6,1,1,0,0,0,48.1,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_4, new cjs.Rectangle(0,0,96.1,81.3), null);


(lib.Group_22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_6 = new lib.ClipGroup_8_6();
	this.instance_6.setTransform(37.8,38.2,1,1,0,0,0,37.8,38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0,0,75.5,76.6), null);


(lib.ClipGroup_10_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AntHpIAAvRIPcAAIAAPRg");
	mask_9.setTransform(51.15,48.925);

	// Layer_3
	this.instance_7 = new lib.Group_0_4();
	this.instance_7.setTransform(48.1,52.65,1,1,0,0,0,48.1,40.6);
	this.instance_7.alpha = 0.5;
	this.instance_7.compositeOperation = "screen";

	this.instance_8 = new lib.Group_1_0_5();
	this.instance_8.setTransform(73.9,51.85,1,1,0,0,0,6.8,10.2);
	this.instance_8.alpha = 0.75;
	this.instance_8.compositeOperation = "screen";

	this.instance_9 = new lib.Group_2_0_4();
	this.instance_9.setTransform(53.85,84.05,1,1,0,0,0,7.4,1.7);
	this.instance_9.compositeOperation = "screen";

	this.instance_10 = new lib.Group_3_0_1();
	this.instance_10.setTransform(25.95,76.6,1,1,0,0,0,5.6,1.4);
	this.instance_10.compositeOperation = "screen";

	this.instance_11 = new lib.Group_4_5();
	this.instance_11.setTransform(27.7,27.15,1,1,0,0,0,2.8,5.7);
	this.instance_11.compositeOperation = "screen";

	this.instance_12 = new lib.Group_5_5();
	this.instance_12.setTransform(42.75,29.9,1,1,0,0,0,2.6,7.3);
	this.instance_12.compositeOperation = "screen";

	this.instance_13 = new lib.Group_6_4();
	this.instance_13.setTransform(24.2,45.35,1,1,0,0,0,16.2,8.6);
	this.instance_13.compositeOperation = "screen";

	this.instance_14 = new lib.Group_7_3();
	this.instance_14.setTransform(29.4,32.7,1,1,0,0,0,6.4,8.1);
	this.instance_14.compositeOperation = "multiply";

	this.instance_15 = new lib.Group_8_3();
	this.instance_15.setTransform(87.55,54.7,1,1,0,0,0,8.6,13.8);
	this.instance_15.alpha = 0.3984;
	this.instance_15.compositeOperation = "multiply";

	this.instance_16 = new lib.Group_9_3();
	this.instance_16.setTransform(58.5,88.6,1,1,0,0,0,8.3,4.2);
	this.instance_16.alpha = 0.3984;
	this.instance_16.compositeOperation = "multiply";

	this.instance_17 = new lib.Group_10_2();
	this.instance_17.setTransform(35.1,83.9,1,1,0,0,0,5.1,7.8);
	this.instance_17.alpha = 0.3984;
	this.instance_17.compositeOperation = "multiply";

	this.instance_18 = new lib.Group_11_1();
	this.instance_18.setTransform(68.7,19.2,1,1,0,0,0,20.8,6);
	this.instance_18.alpha = 0.5508;
	this.instance_18.compositeOperation = "multiply";

	this.instance_19 = new lib.Group_12_1();
	this.instance_19.setTransform(56.4,52.65,1,1,0,0,0,39.6,40.6);
	this.instance_19.alpha = 0.5;
	this.instance_19.compositeOperation = "multiply";

	this.instance_20 = new lib.Group_13_1();
	this.instance_20.setTransform(27.7,78.15,1,1,0,0,0,8.5,3.1);
	this.instance_20.compositeOperation = "screen";

	this.instance_21 = new lib.Group_14_1();
	this.instance_21.setTransform(36.5,43.1,1,1,0,0,0,31.4,24.2);
	this.instance_21.alpha = 0.75;
	this.instance_21.compositeOperation = "screen";

	this.instance_22 = new lib.Group_15_1();
	this.instance_22.setTransform(19.1,43.65,1,1,0,0,0,12.2,6.4);
	this.instance_22.alpha = 0.5508;
	this.instance_22.compositeOperation = "multiply";

	this.instance_23 = new lib.Group_16_1();
	this.instance_23.setTransform(48.1,52.65,1,1,0,0,0,48.1,40.6);
	this.instance_23.alpha = 0.1992;
	this.instance_23.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20,this.instance_21,this.instance_22,this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_9, new cjs.Rectangle(1.7,12.1,94.39999999999999,81.2), null);


(lib.ClipGroup_3_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AnuHpIAAvRIPdAAIAAPRg");
	mask_9.setTransform(49.45,49.775);

	// Layer_3
	this.instance_1 = new lib.Group_22();
	this.instance_1.setTransform(39.7,38.2,1,1,0,0,0,37.8,38.2);
	this.instance_1.alpha = 0.6484;
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.Group_1_6();
	this.instance_2.setTransform(48.95,55.6,1,1,0,0,0,46.5,39.5);
	this.instance_2.alpha = 0.6484;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Group_2_6();
	this.instance_3.setTransform(50.65,49.75,1,1,0,0,0,48.2,48.9);
	this.instance_3.compositeOperation = "screen";

	this.instance_4 = new lib.Group_3_5();
	this.instance_4.setTransform(50.65,49.75,1,1,0,0,0,48.2,48.9);
	this.instance_4.alpha = 0.3984;
	this.instance_4.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_9, new cjs.Rectangle(1.9,0.9,97,97.8), null);


(lib.ClipGroup_87 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AntHpIAAvRIPcAAIAAPRg");
	mask_4.setTransform(51.15,49.775);

	// Layer_3
	this.instance_102 = new lib.ClipGroup_10_9();
	this.instance_102.setTransform(50.3,49.75,1,1,0,0,0,50.3,48.9);

	this.instance_103 = new lib.ClipGroup_1_0_3();
	this.instance_103.setTransform(80.8,54.75,1,1,0,0,0,15.2,15.2);

	this.instance_104 = new lib.ClipGroup_2_0();
	this.instance_104.setTransform(48.9,54.15,1,1,0,0,0,47.2,40.1);

	this.instance_105 = new lib.ClipGroup_3_9();
	this.instance_105.setTransform(51.2,49.4,1,1,0,0,0,49.5,49.4);

	this.instance_106 = new lib.ClipGroup_4_2();
	this.instance_106.setTransform(52.35,49.75,1,1,0,0,0,48.2,48.9);

	var maskedShapeInstanceList = [this.instance_102,this.instance_103,this.instance_104,this.instance_105,this.instance_106];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_87, new cjs.Rectangle(1.7,0.9,98.89999999999999,97.8), null);


(lib.Group_6_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_5 = new lib.ClipGroup_25_5();
	this.instance_5.setTransform(32.6,49,1,1,0,0,0,32.6,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6_5, new cjs.Rectangle(0,0,65.4,98), null);


(lib.Group_5_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_6 = new lib.ClipGroup_21_6();
	this.instance_6.setTransform(51.6,51.5,1,1,0,0,0,51.6,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5_6, new cjs.Rectangle(0,0,103.2,103), null);


(lib.Group_4_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_6 = new lib.ClipGroup_2_6();
	this.instance_6.setTransform(16.6,15.8,1,1,0,0,0,16.6,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_6, new cjs.Rectangle(0,0,33.3,31.6), null);


(lib.Group_3_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_6 = new lib.ClipGroup_4_7();
	this.instance_6.setTransform(9.7,6.4,1,1,0,0,0,9.7,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_6, new cjs.Rectangle(0,0,19.4,12.8), null);


(lib.Group_2_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_7 = new lib.ClipGroup_15_7();
	this.instance_7.setTransform(5.6,5.2,1,1,0,0,0,5.6,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_7, new cjs.Rectangle(0,0,11.2,10.4), null);


(lib.Group_1_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_6 = new lib.ClipGroup_17_10();
	this.instance_6.setTransform(7.5,4.9,1,1,0,0,0,7.5,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_7, new cjs.Rectangle(0,0,15.1,9.8), null);


(lib.Group_0_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_5 = new lib.ClipGroup_19_10();
	this.instance_5.setTransform(23.8,7.1,1,1,0,0,0,23.8,7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_5, new cjs.Rectangle(0,0,47.5,14.3), null);


(lib.Group_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_7 = new lib.ClipGroup_0_6();
	this.instance_7.setTransform(9.6,9,1,1,0,0,0,9.6,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,0,19.2,18.1), null);


(lib.ClipGroup_23_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("ApaIxIAAxhIS1AAIAARhg");
	mask_9.setTransform(60.275,56.05);

	// Layer_3
	this.instance_2 = new lib.Group_6_5();
	this.instance_2.setTransform(41.5,50.85,1,1,0,0,0,32.6,49);
	this.instance_2.compositeOperation = "screen";

	this.instance_3 = new lib.CachedBmp_10();
	this.instance_3.setTransform(0,-0.05,0.5,0.5);

	this.instance_4 = new lib.Group_1_0();
	this.instance_4.setTransform(65.7,43.5,1,1,0,0,0,43.2,41.1);
	this.instance_4.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23_9, new cjs.Rectangle(0,0,120.5,112), null);


(lib.ClipGroup_10_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("ApaIxIAAxhIS1AAIAARhg");
	mask_10.setTransform(60.275,56.05);

	// Layer_3
	this.instance_24 = new lib.Group_23();
	this.instance_24.setTransform(26.8,31.95,1,1,0,0,0,9.6,9);
	this.instance_24.alpha = 0.7109;
	this.instance_24.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_10, new cjs.Rectangle(17.2,23,19.2,18), null);


(lib.ClipGroup_5_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("ApaIxIAAxhIS1AAIAARhg");
	mask_10.setTransform(60.275,56.05);

	// Layer_3
	this.instance_4 = new lib.Group_0_5();
	this.instance_4.setTransform(56.05,85.55,1,1,0,0,0,23.8,7.1);
	this.instance_4.alpha = 0.7109;
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.Group_1_7();
	this.instance_5.setTransform(64.55,65.1,1,1,0,0,0,7.5,4.9);
	this.instance_5.alpha = 0.7109;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.Group_2_7();
	this.instance_6.setTransform(20.25,56.1,1,1,0,0,0,5.6,5.2);
	this.instance_6.alpha = 0.7109;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Group_3_6();
	this.instance_7.setTransform(71.9,13.95,1,1,0,0,0,9.7,6.4);
	this.instance_7.alpha = 0.7109;
	this.instance_7.compositeOperation = "multiply";

	this.instance_8 = new lib.Group_4_6();
	this.instance_8.setTransform(85.65,40.85,1,1,0,0,0,16.6,15.8);
	this.instance_8.alpha = 0.7109;
	this.instance_8.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_10, new cjs.Rectangle(14.7,7.6,87.7,85.10000000000001), null);


(lib.ClipGroup_2_0_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("ApaIxIAAxhIS1AAIAARhg");
	mask_6.setTransform(68.775,73.35);

	// Layer_3
	this.instance_2 = new lib.Group_5_6();
	this.instance_2.setTransform(51.6,51.5,1,1,0,0,0,51.6,51.5);
	this.instance_2.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_6, new cjs.Rectangle(8.5,17.3,94.7,85.7), null);


(lib.ClipGroup_88 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("ApaIxIAAxhIS1AAIAARhg");
	mask_5.setTransform(68.775,73.35);

	// Layer_3
	this.instance_107 = new lib.ClipGroup_23_9();
	this.instance_107.setTransform(68.7,73.3,1,1,0,0,0,60.2,56);

	this.instance_108 = new lib.ClipGroup_1_0_4();
	this.instance_108.setTransform(93,34.5,1,1,0,0,0,18.4,15.8);

	this.instance_109 = new lib.ClipGroup_2_0_6();
	this.instance_109.setTransform(64.5,64.7,1,1,0,0,0,64.5,64.7);

	this.instance_110 = new lib.ClipGroup_3_0_2();
	this.instance_110.setTransform(68,69.05,1,1,0,0,0,50.8,50.8);

	this.instance_111 = new lib.ClipGroup_4_0_2();
	this.instance_111.setTransform(23.05,78.2,1,1,0,0,0,5.2,10);

	this.instance_112 = new lib.ClipGroup_5_10();
	this.instance_112.setTransform(68.7,73.4,1,1,0,0,0,60.2,56.1);

	this.instance_113 = new lib.ClipGroup_6_2();
	this.instance_113.setTransform(35.9,95.4,1,1,0,0,0,8.6,8.8);

	this.instance_114 = new lib.ClipGroup_7_4();
	this.instance_114.setTransform(74.4,85,1,1,0,0,0,7.6,7.2);

	this.instance_115 = new lib.ClipGroup_8_2();
	this.instance_115.setTransform(28.75,53.35,1,1,0,0,0,8.7,14.6);

	this.instance_116 = new lib.ClipGroup_9_4();
	this.instance_116.setTransform(65.6,111.75,1,1,0,0,0,23.4,7.9);

	this.instance_117 = new lib.ClipGroup_10_10();
	this.instance_117.setTransform(68.7,73.4,1,1,0,0,0,60.2,56.1);

	this.instance_118 = new lib.ClipGroup_11_3();
	this.instance_118.setTransform(96.9,61.15,1,1,0,0,0,19.9,17.2);

	this.instance_119 = new lib.ClipGroup_12_3();
	this.instance_119.setTransform(68,69.05,1,1,0,0,0,44.4,44.4);

	this.instance_120 = new lib.ClipGroup_13_2();
	this.instance_120.setTransform(68,69.8,1,1,0,0,0,54.1,51.1);

	var maskedShapeInstanceList = [this.instance_107,this.instance_108,this.instance_109,this.instance_110,this.instance_111,this.instance_112,this.instance_113,this.instance_114,this.instance_115,this.instance_116,this.instance_117,this.instance_118,this.instance_119,this.instance_120];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_88, new cjs.Rectangle(8.5,17.3,120.6,112.10000000000001), null);


(lib.Group_7_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_43_3();
	this.instance_4.setTransform(8.5,4.8,1,1,0,0,0,8.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7_4, new cjs.Rectangle(0,0,17.1,9.7), null);


(lib.Group_6_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_6 = new lib.ClipGroup_36_2();
	this.instance_6.setTransform(11.8,9.7,1,1,0,0,0,11.8,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6_6, new cjs.Rectangle(0,0,23.8,19.3), null);


(lib.Group_5_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_7 = new lib.ClipGroup_34_2();
	this.instance_7.setTransform(4.3,3,1,1,0,0,0,4.3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5_7, new cjs.Rectangle(0,0,8.6,5.9), null);


(lib.Group_4_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_7 = new lib.ClipGroup_30_3();
	this.instance_7.setTransform(2.1,2.3,1,1,0,0,0,2.1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_7, new cjs.Rectangle(0,0,4.4,4.7), null);


(lib.Group_3_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_7 = new lib.ClipGroup_28_2();
	this.instance_7.setTransform(4,4.5,1,1,0,0,0,4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_7, new cjs.Rectangle(0,0,8.2,9), null);


(lib.Group_2_0_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_5 = new lib.ClipGroup_39_3();
	this.instance_5.setTransform(5.7,3.1,1,1,0,0,0,5.7,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0_5, new cjs.Rectangle(0,0,11.4,6.3), null);


(lib.Group_2_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_8 = new lib.ClipGroup_0_7();
	this.instance_8.setTransform(11.8,17.2,1,1,0,0,0,11.8,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_8, new cjs.Rectangle(0,0,23.6,34.4), null);


(lib.Group_1_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_41_3();
	this.instance_2.setTransform(14,11.6,1,1,0,0,0,14,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1_2, new cjs.Rectangle(0,0,27.9,23.1), null);


(lib.Group_1_0_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_6 = new lib.ClipGroup_32_2();
	this.instance_6.setTransform(10.4,7.4,1,1,0,0,0,10.4,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0_6, new cjs.Rectangle(0,0,20.9,14.8), null);


(lib.Group_1_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_7 = new lib.ClipGroup_2_7();
	this.instance_7.setTransform(18.1,21.5,1,1,0,0,0,18.1,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_8, new cjs.Rectangle(0,0,36.2,43.1), null);


(lib.Group_0_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_6 = new lib.ClipGroup_6_8();
	this.instance_6.setTransform(11.3,7.2,1,1,0,0,0,11.3,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_6, new cjs.Rectangle(0,0,22.7,14.6), null);


(lib.Group_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_8 = new lib.ClipGroup_4_8();
	this.instance_8.setTransform(31.1,46.6,1,1,0,0,0,31.1,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0,0,62.1,93.1), null);


(lib.ClipGroup_38_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("An3IHIAAwNIPvAAIAAQNg");
	mask_3.setTransform(50.375,51.9);

	// Layer_3
	this.instance_1 = new lib.Group_7_4();
	this.instance_1.setTransform(50.75,4.8,1,1,0,0,0,8.5,4.8);
	this.instance_1.alpha = 0.7109;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Group_1_1_2();
	this.instance_2.setTransform(76.5,56.45,1,1,0,0,0,14,11.6);
	this.instance_2.alpha = 0.7109;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.CachedBmp_9();
	this.instance_3.setTransform(3.45,10.55,0.5,0.5);

	this.instance_4 = new lib.Group_2_0_5();
	this.instance_4.setTransform(74.7,15.05,1,1,0,0,0,5.7,3.1);
	this.instance_4.alpha = 0.3984;
	this.instance_4.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38_3, new cjs.Rectangle(3.5,0,86.9,100.1), null);


(lib.ClipGroup_25_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("An3IHIAAwNIPvAAIAAQNg");
	mask_8.setTransform(50.375,51.9);

	// Layer_3
	this.instance_4 = new lib.Group_24();
	this.instance_4.setTransform(35.3,49.65,1,1,0,0,0,31.1,46.6);
	this.instance_4.compositeOperation = "screen";

	this.instance_5 = new lib.Group_1_8();
	this.instance_5.setTransform(79.05,61.5,1,1,0,0,0,18.1,21.5);
	this.instance_5.alpha = 0.8906;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.Group_2_8();
	this.instance_6.setTransform(17.8,30.65,1,1,0,0,0,11.8,17.2);
	this.instance_6.alpha = 0.5;
	this.instance_6.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25_8, new cjs.Rectangle(4.2,3.1,92.89999999999999,93.10000000000001), null);


(lib.ClipGroup_21_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("An3IHIAAwNIPvAAIAAQNg");
	mask_9.setTransform(50.375,51.9);

	// Layer_3
	this.instance_5 = new lib.Group_0_6();
	this.instance_5.setTransform(51.85,15.4,1,1,0,0,0,11.3,7.2);
	this.instance_5.alpha = 0.5;
	this.instance_5.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21_9, new cjs.Rectangle(40.6,8.2,22.6,14.600000000000001), null);


(lib.ClipGroup_8_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("An3IHIAAwNIPvAAIAAQNg");
	mask_10.setTransform(50.375,51.9);

	// Layer_3
	this.instance_21 = new lib.Group_3_7();
	this.instance_21.setTransform(15.2,65.05,1,1,0,0,0,4,4.5);
	this.instance_21.alpha = 0.3984;
	this.instance_21.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_10, new cjs.Rectangle(11.2,60.6,8.2,8.899999999999999), null);


(lib.ClipGroup_6_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("An3IHIAAwNIPvAAIAAQNg");
	mask_3.setTransform(50.375,51.9);

	// Layer_3
	this.instance = new lib.Group_4_7();
	this.instance.setTransform(29.75,22.15,1,1,0,0,0,2.1,2.3);
	this.instance.alpha = 0.3984;
	this.instance.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0_3, new cjs.Rectangle(27.7,19.9,4.300000000000001,4.600000000000001), null);


(lib.ClipGroup_4_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("An3IHIAAwNIPvAAIAAQNg");
	mask_4.setTransform(50.375,51.9);

	// Layer_3
	this.instance = new lib.Group_5_7();
	this.instance.setTransform(63.5,87.4,1,1,0,0,0,4.3,3);
	this.instance.alpha = 0.3984;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Group_1_0_6();
	this.instance_1.setTransform(36.3,62.15,1,1,0,0,0,10.4,7.4);
	this.instance_1.alpha = 0.5;
	this.instance_1.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0_4, new cjs.Rectangle(25.9,54.8,41.9,35.5), null);


(lib.ClipGroup_2_0_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("An3IHIAAwNIPvAAIAAQNg");
	mask_7.setTransform(50.375,51.9);

	// Layer_3
	this.instance_3 = new lib.Group_6_6();
	this.instance_3.setTransform(34.1,50.95,1,1,0,0,0,11.8,9.7);
	this.instance_3.alpha = 0.3984;
	this.instance_3.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_7, new cjs.Rectangle(22.3,41.3,23.8,19.300000000000004), null);


(lib.ClipGroup_89 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("An3IHIAAwNIPvAAIAAQNg");
	mask_6.setTransform(65.175,59.9);

	// Layer_3
	this.instance_121 = new lib.ClipGroup_38_3();
	this.instance_121.setTransform(65.2,59.9,1,1,0,0,0,50.4,51.9);

	this.instance_122 = new lib.ClipGroup_1_0_5();
	this.instance_122.setTransform(89.8,24.9,1,1,0,0,0,10.2,10.1);

	this.instance_123 = new lib.ClipGroup_2_0_7();
	this.instance_123.setTransform(65.2,59.9,1,1,0,0,0,50.4,51.9);

	this.instance_124 = new lib.ClipGroup_3_0_3();
	this.instance_124.setTransform(48.9,64.6,1,1,0,0,0,25.2,25.5);

	this.instance_125 = new lib.ClipGroup_4_0_4();
	this.instance_125.setTransform(65.2,59.9,1,1,0,0,0,50.4,51.9);

	this.instance_126 = new lib.ClipGroup_5_0_1();
	this.instance_126.setTransform(78.4,96.45,1,1,0,0,0,4.5,3.6);

	this.instance_127 = new lib.ClipGroup_6_0_3();
	this.instance_127.setTransform(65.2,59.9,1,1,0,0,0,50.4,51.9);

	this.instance_128 = new lib.ClipGroup_7_0_1();
	this.instance_128.setTransform(44.75,31.05,1,1,0,0,0,4.5,4.6);

	this.instance_129 = new lib.ClipGroup_8_10();
	this.instance_129.setTransform(65.2,59.9,1,1,0,0,0,50.4,51.9);

	this.instance_130 = new lib.ClipGroup_9_5();
	this.instance_130.setTransform(30.7,74.75,1,1,0,0,0,9.8,9.8);

	this.instance_131 = new lib.ClipGroup_10_1();
	this.instance_131.setTransform(21.65,30.75,1,1,0,0,0,7.8,8);

	this.instance_132 = new lib.ClipGroup_11_4();
	this.instance_132.setTransform(20.7,30.05,1,1,0,0,0,4.8,6.8);

	this.instance_133 = new lib.ClipGroup_12_4();
	this.instance_133.setTransform(44.85,103,1,1,0,0,0,6.5,3.6);

	this.instance_134 = new lib.ClipGroup_13_3();
	this.instance_134.setTransform(42.05,104.9,1,1,0,0,0,11,6.2);

	this.instance_135 = new lib.ClipGroup_14_4();
	this.instance_135.setTransform(43.05,105.15,1,1,0,0,0,13.4,9);

	this.instance_136 = new lib.ClipGroup_15_2();
	this.instance_136.setTransform(22.2,32.2,1,1,0,0,0,8.5,10.7);

	this.instance_137 = new lib.ClipGroup_16_2();
	this.instance_137.setTransform(65.55,16.35,1,1,0,0,0,8.5,6.8);

	this.instance_138 = new lib.ClipGroup_17_4();
	this.instance_138.setTransform(65.15,16.45,1,1,0,0,0,17.4,16);

	this.instance_139 = new lib.ClipGroup_18_2();
	this.instance_139.setTransform(66.25,18.7,1,1,0,0,0,20.1,18.7);

	this.instance_140 = new lib.ClipGroup_19_4();
	this.instance_140.setTransform(91.75,69.95,1,1,0,0,0,30.9,30.9);

	this.instance_141 = new lib.ClipGroup_20_3();
	this.instance_141.setTransform(87.75,72.55,1,1,0,0,0,25.9,27.9);

	this.instance_142 = new lib.ClipGroup_21_9();
	this.instance_142.setTransform(65.2,59.9,1,1,0,0,0,50.4,51.9);

	this.instance_143 = new lib.ClipGroup_22_3();
	this.instance_143.setTransform(87.8,68.65,1,1,0,0,0,41,41.1);

	this.instance_144 = new lib.ClipGroup_23_3();
	this.instance_144.setTransform(27.4,36.4,1,1,0,0,0,27.4,27.4);

	this.instance_145 = new lib.ClipGroup_24_3();
	this.instance_145.setTransform(50.55,98.3,1,1,0,0,0,26.8,19.8);

	this.instance_146 = new lib.ClipGroup_25_8();
	this.instance_146.setTransform(65.2,59.9,1,1,0,0,0,50.4,51.9);

	this.instance_147 = new lib.ClipGroup_26_3();
	this.instance_147.setTransform(66.4,58.45,1,1,0,0,0,47.4,47.4);

	this.instance_148 = new lib.ClipGroup_27_2();
	this.instance_148.setTransform(104.6,34.15,1,1,0,0,0,15.5,17.9);

	var maskedShapeInstanceList = [this.instance_121,this.instance_122,this.instance_123,this.instance_124,this.instance_125,this.instance_126,this.instance_127,this.instance_128,this.instance_129,this.instance_130,this.instance_131,this.instance_132,this.instance_133,this.instance_134,this.instance_135,this.instance_136,this.instance_137,this.instance_138,this.instance_139,this.instance_140,this.instance_141,this.instance_142,this.instance_143,this.instance_144,this.instance_145,this.instance_146,this.instance_147,this.instance_148];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_89, new cjs.Rectangle(14.8,8,100.8,103.8), null);


(lib.Group_17_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_29_6();
	this.instance.setTransform(27.4,26.2,1,1,0,0,0,27.4,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_17_1, new cjs.Rectangle(0,0,55,52.5), null);


(lib.Group_3_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_8 = new lib.ClipGroup_8_7();
	this.instance_8.setTransform(42.6,40.5,1,1,0,0,0,42.6,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_8, new cjs.Rectangle(0,0,85.4,81), null);


(lib.Group_2_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_25_6();
	this.instance.setTransform(31.1,46.6,1,1,0,0,0,31.1,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_1_1, new cjs.Rectangle(0,0,62.1,93.1), null);


(lib.ClipGroup_28_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AnqHeIAAu7IPUAAIAAO7g");
	mask_6.setTransform(49.05,47.775);

	// Layer_3
	this.instance_4 = new lib.Group_17_1();
	this.instance_4.setTransform(48.15,44.3,1,1,0,0,0,27.4,26.2);
	this.instance_4.compositeOperation = "screen";

	this.instance_5 = new lib.CachedBmp_7();
	this.instance_5.setTransform(3,4.2,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28_6, new cjs.Rectangle(3,4.2,94,90), null);


(lib.ClipGroup_4_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AnqHeIAAu7IPUAAIAAO7g");
	mask_10.setTransform(49.05,47.775);

	// Layer_3
	this.instance_5 = new lib.Group_16();
	this.instance_5.setTransform(8.7,4.85);

	this.instance_6 = new lib.Group_1_1();
	this.instance_6.setTransform(44.9,30.65,1,1,0,0,0,37.6,21.7);
	this.instance_6.alpha = 0.3984;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.Group_2_1_1();
	this.instance_7.setTransform(32.9,46.6,1,1,0,0,0,31.1,46.6);
	this.instance_7.compositeOperation = "screen";

	this.instance_8 = new lib.Group_3_8();
	this.instance_8.setTransform(51.05,48.05,1,1,0,0,0,42.6,40.5);
	this.instance_8.alpha = 0.6992;

	this.instance_9 = new lib.Group_4();
	this.instance_9.setTransform(42.6,20.7,1,1,0,0,0,29.2,10);
	this.instance_9.alpha = 0.3984;
	this.instance_9.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_10, new cjs.Rectangle(1.8,0,92,93.1), null);


(lib.ClipGroup_90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AnqHeIAAu7IPUAAIAAO7g");
	mask_7.setTransform(49.05,47.775);

	// Layer_3
	this.instance_149 = new lib.ClipGroup_28_6();
	this.instance_149.setTransform(49.1,47.8,1,1,0,0,0,49.1,47.8);

	this.instance_150 = new lib.ClipGroup_1_0_6();
	this.instance_150.setTransform(49.1,61.45,1,1,0,0,0,49.1,34);

	this.instance_151 = new lib.ClipGroup_2_0_1();
	this.instance_151.setTransform(18.1,76.75,1,1,0,0,0,14.8,15.3);

	this.instance_152 = new lib.ClipGroup_3_0_4();
	this.instance_152.setTransform(43.55,28.25,1,1,0,0,0,42.1,24.4);

	this.instance_153 = new lib.ClipGroup_4_10();
	this.instance_153.setTransform(49.1,47.8,1,1,0,0,0,49.1,47.8);

	this.instance_154 = new lib.ClipGroup_5_5();
	this.instance_154.setTransform(35.8,34.4,1,1,0,0,0,34,34.4);

	this.instance_155 = new lib.ClipGroup_6_9();
	this.instance_155.setTransform(49.1,47.8,1,1,0,0,0,49.1,47.8);

	this.instance_156 = new lib.ClipGroup_7_6();
	this.instance_156.setTransform(49.2,47.4,1,1,0,0,0,47.4,47.4);

	var maskedShapeInstanceList = [this.instance_149,this.instance_150,this.instance_151,this.instance_152,this.instance_153,this.instance_154,this.instance_155,this.instance_156];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_90, new cjs.Rectangle(0,0,98.1,95.6), null);


(lib.Group_9_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_32_3();
	this.instance_4.setTransform(35.9,35.6,1,1,0,0,0,35.9,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_9_4, new cjs.Rectangle(0,0,71.8,71.3), null);


(lib.Group_8_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_25_7();
	this.instance_4.setTransform(9.2,9.2,1,1,0,0,0,9.2,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_8_4, new cjs.Rectangle(0,0,18.4,18.3), null);


(lib.Group_7_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_5 = new lib.ClipGroup_0_8();
	this.instance_5.setTransform(21.9,13.2,1,1,0,0,0,21.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7_5, new cjs.Rectangle(0,0,43.9,26.6), null);


(lib.Group_6_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_7 = new lib.ClipGroup_2_8();
	this.instance_7.setTransform(31.1,46.6,1,1,0,0,0,31.1,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6_7, new cjs.Rectangle(0,0,62.1,93.1), null);


(lib.Group_5_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_8 = new lib.ClipGroup_4_9();
	this.instance_8.setTransform(29.9,21.1,1,1,0,0,0,29.9,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5_8, new cjs.Rectangle(0,0,60,42.2), null);


(lib.Group_4_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_8 = new lib.ClipGroup_6_10();
	this.instance_8.setTransform(42.3,29.4,1,1,0,0,0,42.3,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_8, new cjs.Rectangle(0,0,84.7,58.7), null);


(lib.Group_3_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_9 = new lib.ClipGroup_8_8();
	this.instance_9.setTransform(42.2,29.9,1,1,0,0,0,42.2,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_9, new cjs.Rectangle(0,0,84.5,59.7), null);


(lib.Group_2_0_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_6 = new lib.ClipGroup_28_3();
	this.instance_6.setTransform(11.5,10.8,1,1,0,0,0,11.5,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0_6, new cjs.Rectangle(0,0,23.1,21.6), null);


(lib.Group_2_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_9 = new lib.ClipGroup_10_6();
	this.instance_9.setTransform(41.5,33.5,1,1,0,0,0,41.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_9, new cjs.Rectangle(0,0,83,67.1), null);


(lib.Group_1_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_30_4();
	this.instance_3.setTransform(16.9,14.3,1,1,0,0,0,16.9,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1_3, new cjs.Rectangle(0,0,33.9,28.7), null);


(lib.Group_1_0_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_7 = new lib.ClipGroup_23_8();
	this.instance_7.setTransform(8.3,8.3,1,1,0,0,0,8.3,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0_7, new cjs.Rectangle(0,0,16.7,16.7), null);


(lib.Group_1_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_8 = new lib.ClipGroup_12_9();
	this.instance_8.setTransform(0.6,0.1,1,1,0,0,0,0.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_9, new cjs.Rectangle(0,0,1.2,0.2), null);


(lib.Group_0_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_7 = new lib.ClipGroup_21_7();
	this.instance_7.setTransform(7.8,12,1,1,0,0,0,7.8,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_7, new cjs.Rectangle(0,0,15.6,24), null);


(lib.Group_25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_9 = new lib.ClipGroup_14_9();
	this.instance_9.setTransform(0.1,0.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(0,0,0.3,0.1), null);


(lib.ClipGroup_27_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AnZH6IAAvzIOzAAIAAPzg");
	mask_7.setTransform(55.275,59.95);

	// Layer_3
	this.instance_1 = new lib.Group_9_4();
	this.instance_1.setTransform(35.9,35.6,1,1,0,0,0,35.9,35.6);
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.Group_1_1_3();
	this.instance_2.setTransform(82.95,29.05,1,1,0,0,0,16.9,14.3);
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Group_2_0_6();
	this.instance_3.setTransform(69.75,86.2,1,1,0,0,0,11.5,10.8);
	this.instance_3.alpha = 0.3984;
	this.instance_3.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27_7, new cjs.Rectangle(7.9,9.4,92.1,87.6), null);


(lib.ClipGroup_15_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AnZH5IAAvyIOzAAIAAPyg");
	mask_10.setTransform(47.375,50.55);

	// Layer_3
	this.instance_13 = new lib.Group_25();
	this.instance_13.setTransform(3.05,52.65,1,1,0,0,0,0.1,0.1);
	this.instance_13.alpha = 0.3984;
	this.instance_13.compositeOperation = "multiply";

	this.instance_14 = new lib.Group_1_9();
	this.instance_14.setTransform(62.1,31.55,1,1,0,0,0,0.6,0.1);
	this.instance_14.alpha = 0.3984;
	this.instance_14.compositeOperation = "multiply";

	this.instance_15 = new lib.Group_2_9();
	this.instance_15.setTransform(41.5,38.45,1,1,0,0,0,41.5,33.5);
	this.instance_15.alpha = 0.3984;
	this.instance_15.compositeOperation = "multiply";

	this.instance_16 = new lib.Group_3_9();
	this.instance_16.setTransform(47.3,50.4,1,1,0,0,0,42.2,29.9);
	this.instance_16.alpha = 0.3984;
	this.instance_16.compositeOperation = "multiply";

	this.instance_17 = new lib.Group_4_8();
	this.instance_17.setTransform(52.4,67.75,1,1,0,0,0,42.3,29.4);
	this.instance_17.alpha = 0.3984;
	this.instance_17.compositeOperation = "multiply";

	this.instance_18 = new lib.Group_5_8();
	this.instance_18.setTransform(30.3,23.5,1,1,0,0,0,29.9,21.1);
	this.instance_18.alpha = 0.3984;
	this.instance_18.compositeOperation = "multiply";

	this.instance_19 = new lib.Group_6_7();
	this.instance_19.setTransform(31.1,49,1,1,0,0,0,31.1,46.6);
	this.instance_19.compositeOperation = "screen";

	this.instance_20 = new lib.Group_7_5();
	this.instance_20.setTransform(72.25,79.35,1,1,0,0,0,21.9,13.2);
	this.instance_20.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19,this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15_10, new cjs.Rectangle(0,2.4,94.8,94.69999999999999), null);


(lib.ClipGroup_10_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AnZH5IAAvyIOzAAIAAPyg");
	mask_1.setTransform(47.375,50.55);

	// Layer_3
	this.instance = new lib.Group_0_7();
	this.instance.setTransform(21.15,78.4,1,1,0,0,0,7.8,12);
	this.instance.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_0_1, new cjs.Rectangle(13.4,66.4,15.6,24), null);


(lib.ClipGroup_2_0_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AnZH5IAAvyIOzAAIAAPyg");
	mask_8.setTransform(47.375,52.35);

	// Layer_3
	this.instance_4 = new lib.Group_8_4();
	this.instance_4.setTransform(71.45,9.2,1,1,0,0,0,9.2,9.2);
	this.instance_4.compositeOperation = "screen";

	this.instance_5 = new lib.Group_1_0_7();
	this.instance_5.setTransform(70.05,49,1,1,0,0,0,8.3,8.3);
	this.instance_5.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0_8, new cjs.Rectangle(61.8,1.8,18.799999999999997,55.6), null);


(lib.ClipGroup_91 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AnZH6IAAvzIOzAAIAAPzg");
	mask_8.setTransform(55.275,59.95);

	// Layer_3
	this.instance_157 = new lib.ClipGroup_27_7();
	this.instance_157.setTransform(51.3,55.2,1,1,0,0,0,51.3,55.2);

	this.instance_158 = new lib.ClipGroup_1_0_7();
	this.instance_158.setTransform(83.5,18.8,1,1,0,0,0,10.7,8.6);

	this.instance_159 = new lib.ClipGroup_2_0_8();
	this.instance_159.setTransform(55.3,59.1,1,1,0,0,0,47.4,51.5);

	this.instance_160 = new lib.ClipGroup_3_0_5();
	this.instance_160.setTransform(79.55,21.2,1,1,0,0,0,22.2,20.8);

	this.instance_161 = new lib.ClipGroup_4_0_3();
	this.instance_161.setTransform(62.5,58.9,1,1,0,0,0,8.8,9.1);

	this.instance_162 = new lib.ClipGroup_5_0_2();
	this.instance_162.setTransform(61.3,58.7,1,1,0,0,0,10.8,11.1);

	this.instance_163 = new lib.ClipGroup_6_0_1();
	this.instance_163.setTransform(25.2,84.65,1,1,0,0,0,7.8,12.1);

	this.instance_164 = new lib.ClipGroup_7_0_2();
	this.instance_164.setTransform(23.1,85.15,1,1,0,0,0,9.8,12.6);

	this.instance_165 = new lib.ClipGroup_8_0_1();
	this.instance_165.setTransform(62.15,106.3,1,1,0,0,0,13.1,4.2);

	this.instance_166 = new lib.ClipGroup_9_0_1();
	this.instance_166.setTransform(26.7,83.8,1,1,0,0,0,16.9,18.2);

	this.instance_167 = new lib.ClipGroup_10_0_1();
	this.instance_167.setTransform(55.3,60,1,1,0,0,0,47.4,50.6);

	this.instance_168 = new lib.ClipGroup_11_0_1();
	this.instance_168.setTransform(80.65,63.95,1,1,0,0,0,18.7,16.2);

	this.instance_169 = new lib.ClipGroup_12_0_1();
	this.instance_169.setTransform(82.05,72,1,1,0,0,0,35.1,36.5);

	this.instance_170 = new lib.ClipGroup_13_0_1();
	this.instance_170.setTransform(75.35,72,1,1,0,0,0,33.5,35.7);

	this.instance_171 = new lib.ClipGroup_14_0_1();
	this.instance_171.setTransform(79.55,21.2,1,1,0,0,0,15.2,11.8);

	this.instance_172 = new lib.ClipGroup_15_10();
	this.instance_172.setTransform(55.3,60,1,1,0,0,0,47.4,50.6);

	this.instance_173 = new lib.ClipGroup_16_4();
	this.instance_173.setTransform(41.9,46.2,1,1,0,0,0,34,34.4);

	this.instance_174 = new lib.ClipGroup_17_6();
	this.instance_174.setTransform(55.3,59.2,1,1,0,0,0,47.4,47.4);

	this.instance_175 = new lib.ClipGroup_18_4();
	this.instance_175.setTransform(23.75,25.1,1,1,0,0,0,13.1,12.8);

	this.instance_176 = new lib.ClipGroup_19_6();
	this.instance_176.setTransform(23.75,25.55,1,1,0,0,0,8.5,8.2);

	var maskedShapeInstanceList = [this.instance_157,this.instance_158,this.instance_159,this.instance_160,this.instance_161,this.instance_162,this.instance_163,this.instance_164,this.instance_165,this.instance_166,this.instance_167,this.instance_168,this.instance_169,this.instance_170,this.instance_171,this.instance_172,this.instance_173,this.instance_174,this.instance_175,this.instance_176];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_91, new cjs.Rectangle(7.9,9.4,94.8,101.1), null);


(lib.Group_11_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.ClipGroup_0_9();
	this.instance_2.setTransform(11.2,12.3,1,1,0,0,0,11.2,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_11_2, new cjs.Rectangle(0,0,22.4,24.7), null);


(lib.Group_10_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_3 = new lib.ClipGroup_2_9();
	this.instance_3.setTransform(4.4,4.3,1,1,0,0,0,4.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_10_3, new cjs.Rectangle(0,0,8.7,8.6), null);


(lib.Group_9_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_5 = new lib.ClipGroup_8_9();
	this.instance_5.setTransform(4.5,3.7,1,1,0,0,0,4.5,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_9_5, new cjs.Rectangle(0,0,9.2,7.5), null);


(lib.Group_8_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_5 = new lib.ClipGroup_10_7();
	this.instance_5.setTransform(11.2,7,1,1,0,0,0,11.2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_8_5, new cjs.Rectangle(0,0,22.5,14), null);


(lib.Group_7_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_6 = new lib.ClipGroup_12_10();
	this.instance_6.setTransform(20.2,9.8,1,1,0,0,0,20.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7_6, new cjs.Rectangle(0,0,40.5,19.6), null);


(lib.Group_6_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_8 = new lib.ClipGroup_14_10();
	this.instance_8.setTransform(24.4,19.6,1,1,0,0,0,24.4,19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6_8, new cjs.Rectangle(0,0,48.8,39.3), null);


(lib.Group_1_0_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_8 = new lib.ClipGroup_26_7();
	this.instance_8.setTransform(3.6,8.2,1,1,0,0,0,3.6,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0_8, new cjs.Rectangle(0,0,7.2,16.5), null);


(lib.Group_1_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_9 = new lib.ClipGroup_20_8();
	this.instance_9.setTransform(43,31.1,1,1,0,0,0,43,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_10, new cjs.Rectangle(0,0,86,62.3), null);


(lib.Group_0_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_8 = new lib.ClipGroup_28_4();
	this.instance_8.setTransform(15.3,20.8,1,1,0,0,0,15.3,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_8, new cjs.Rectangle(0,0,30.8,41.6), null);


(lib.Group_26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_10 = new lib.ClipGroup_22_8();
	this.instance_10.setTransform(39.4,14.6,1,1,0,0,0,39.4,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0,0,78.8,29.1), null);


(lib.ClipGroup_24_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AnvHpIAAvRIPfAAIAAPRg");
	mask_7.setTransform(49.6,48.9);

	// Layer_3
	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(5.85,23.5,0.5,0.5);

	this.instance_3 = new lib.Group_0_8();
	this.instance_3.setTransform(20.4,39.55,1,1,0,0,0,15.3,20.8);
	this.instance_3.alpha = 0.5;
	this.instance_3.compositeOperation = "screen";

	this.instance_4 = new lib.Group_1_0_8();
	this.instance_4.setTransform(24.35,32.55,1,1,0,0,0,3.6,8.2);
	this.instance_4.alpha = 0.5;
	this.instance_4.compositeOperation = "screen";

	this.instance_5 = new lib.CachedBmp_5();
	this.instance_5.setTransform(15.4,18.25,0.5,0.5);

	this.instance_6 = new lib.Group_2_0_1();
	this.instance_6.setTransform(54.35,69.7,1,1,0,0,0,43.6,17.6);
	this.instance_6.alpha = 0.5;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.CachedBmp_4();
	this.instance_7.setTransform(7.45,2.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_7, new cjs.Rectangle(5.1,2.6,92.9,88.2), null);


(lib.ClipGroup_3_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AnvHpIAAvRIPfAAIAAPRg");
	mask_10.setTransform(49.65,48.9);

	// Layer_3
	this.instance_5 = new lib.Group_26();
	this.instance_5.setTransform(58.5,75.3,1,1,0,0,0,39.4,14.6);
	this.instance_5.compositeOperation = "screen";

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3AC0F0").s().p("AjVFFIgRgGIgSgGIgUgFQgIgCgMgBQgbgBgKgPQgKgNgHgUIgOgzQgHgXgNgUIgKgQQgIgKgDgFQgJgUABgZQAAgGAEgSQADgPAHgNIAPgZQAVgkAOgSQAWgcAhghQAJgJAcgWQALgIAUgRQAOgKAugXQArgVAhgMQAvgRAugKQAugJBDABIAfgBQASABAMAFQAdAMAFADIAEAEIACAEQADAHAAAGIgBAMIgCASQAAAFgDANQgEAagFALIgJAZIgKAaIgJAOIgGANQgJARgGAHQgYAigPALQgWATglAUIhPAnQgmARg/AUQgWAGgHABIgdAFQgNgBgRgFQgLgEgFgMQgCgHgBgPQgCgXgCgJIgFgaQgDgQAAgLQAAgIACgIIAFgRIAFgWQAGgOAPgMIAZgXQAEgEALgIQALgIATgKQAIgEAOgMIAZgPIAXgJIASgIIARgFIARgGQANgEAGgBQASAAAFATQADAMgCANQgCAIgGAPIgPAmQgEALgKALIgUARQgVATgbAMIgQAGIgNAHIgIAEIgHAEQgLAIgIADQgGADgHAAQgIgBgDgFIgBgEQACADAFgBQAGAAANgFIAOgHQAHgCAQgFIASgJQATgJAXgbQAHgJASgPQAGgFAEgJIAIgPQAIgNAEgUIAFgQQACgKgCgHQgCgHgJgCQgHgCgIACQgPACgIADIgpARQgNAFgRALIgcATIgeASIgUARQgIAJgGADQgNAKgFAHQgIAKgDAIIAAAPQABAHgDAOIAAAVIgCArIAEAcIADAKIACAKQAAALAFADIAHADIAKADIACACQADABAGgBIARgDIAWgDQANgCAIgDQAQgGAegPIAkgNQAWgIAOgIIAegPIAlgQQAVgKAOgLQAHgFAPgPIAMgNQARgWALgWIAKgUQAMgTAFgKQAEgIAIgXQADgMAAgIQgBgWAIgQQAIgSgDgIQgBgDgJgDIgYgIIgUgIIgJgBQgDAAgHADQgHADgEgBIgHgBIgMAAIgagCIg6ABQgEABgMAFIgPAFQgHADgGAAIgUABQgJACgOAGQgqAVgWAHIgRAEIgPAFIgLAGIgWAOQgYAQgWARQgiAZgRASQg4BCgTAaQgYAkgGANIgBABQgHAQACAPIAAABQABALAIAQIALAYIAIAMIAHANQAHARAEARQAEAOAHAeQADATAEAIQAEAIAJAGIARAJQAHAFAJABQANAAAPAFQAiALAZgBQAMAAAYgFIAhgEIAegEQAPAAAPAEQAfAIATgBQALAAAUgDQAHAAAWACQATABAfgKQANgEARgLQAGgDATgFQAagHAYgNQAKgGASgOQATgPAJgGIASgJIARgKQAOgJALgMIAbgbQAEgFADgHIAGgMQAHgPADgZQACgLAMgbQAOgeACgSIADgpQAAgJgDgRIgEgYQgBgFgBgJIgCgPQgBgKgFgQIgGgRQgHgQgLgNIgKgHQgDgEgDgBIgNgHQgOgEgGgEIgSgMQgOgHgGgFQgJgNgGgGIgKgHIgKgHQgHgGgLgDIgUgGIgTgFQgNgGgIgBIgWgDQgHgCgFAAQgJgBgRACIgWAAIgTAAQgZgEgdADQgfACgSAGIgpAOIgaANIg7AnQgPAKgxAlIg6AuQASgXAYgZQBCg/BTgjQBXgkBeAAIBKAGIABAAIBzAlIAXAKQALAGAWARQAKAHALALQAPAPAJAPQAbAoAIAqQAGAcgCAxQgBAPgFAaIgFAVQgEAMAAAJIgBAWIgFASQgEAVgIAPQgHAOgWAcIgoAsQgSAVgcAQIgVANQgMAHgJAEIgVAJQgNAEgJABQgOACgPAKQgGAEgJAKQgEADgMAEQgIADgLAAIgUAAQgUAAgmAEQgTACgKAAIgagEIgdgDQgMgCgJABIgTABIgTADIgrAJQgOADgLAAQgKAAgIgCgAigABIgBgOIACgOIAEgOQADgJAHgJIANgRIAQgVQALgMAXgFQAbgHAMAHQAGAEgCAIIgEANIgFANIgDAJQgCAEgGAEIgJAIQgGAFgDABIgMACQgDACgCAAQgDgCABgEIACgGIAAgBQABgEAEgGIAHgIQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAIgCAEIgBAGQgCAGABABIAHgCQAPgFAHgXQACgGgBgHQgBgIgGgDQgEgBgGAAIgKAAQgPAAgOAOIgVAbQgLAOgJAWQgDAJgEATQgCAHABADg");
	this.shape_8.setTransform(42.8719,32.7139);

	this.instance_6 = new lib.Group_1_10();
	this.instance_6.setTransform(43,36.3,1,1,0,0,0,43,31.1);
	this.instance_6.compositeOperation = "screen";

	this.instance_7 = new lib.Group_2_1();
	this.instance_7.setTransform(35.35,16.85,1,1,0,0,0,27.2,12);
	this.instance_7.alpha = 0.3984;
	this.instance_7.compositeOperation = "multiply";

	this.instance_8 = new lib.Group_3();
	this.instance_8.setTransform(31.7,24.65,1,1,0,0,0,13.5,11.1);
	this.instance_8.alpha = 0.3984;
	this.instance_8.compositeOperation = "multiply";

	this.instance_9 = new lib.Group_4_1();
	this.instance_9.setTransform(42.7,27.6,1,1,0,0,0,22.7,18.4);
	this.instance_9.alpha = 0.3984;
	this.instance_9.compositeOperation = "multiply";

	this.instance_10 = new lib.Group_5_1();
	this.instance_10.setTransform(43.55,39.05,1,1,0,0,0,39.2,25.9);
	this.instance_10.alpha = 0.5;
	this.instance_10.compositeOperation = "multiply";

	this.instance_11 = new lib.Group_6_8();
	this.instance_11.setTransform(42.5,28.3,1,1,0,0,0,24.4,19.6);
	this.instance_11.compositeOperation = "screen";

	this.instance_12 = new lib.Group_7_6();
	this.instance_12.setTransform(31.5,17.8,1,1,0,0,0,20.2,9.8);
	this.instance_12.compositeOperation = "screen";

	this.instance_13 = new lib.Group_8_5();
	this.instance_13.setTransform(32.35,21.5,1,1,0,0,0,11.2,7);
	this.instance_13.compositeOperation = "screen";

	this.instance_14 = new lib.Group_9_5();
	this.instance_14.setTransform(32.8,24.7,1,1,0,0,0,4.5,3.7);
	this.instance_14.compositeOperation = "screen";

	this.instance_15 = new lib.Group_10_3();
	this.instance_15.setTransform(36.35,26.35,1,1,0,0,0,4.4,4.3);
	this.instance_15.compositeOperation = "screen";

	this.instance_16 = new lib.Group_11_2();
	this.instance_16.setTransform(37.25,24.6,1,1,0,0,0,11.2,12.3);
	this.instance_16.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance_5,this.shape_8,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_8},{t:this.instance_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_10, new cjs.Rectangle(0.1,0,97.80000000000001,89.8), null);


(lib.ClipGroup_92 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AnvHpIAAvRIPfAAIAAPRg");
	mask_9.setTransform(49.65,48.9);

	// Layer_3
	this.instance_177 = new lib.ClipGroup_24_7();
	this.instance_177.setTransform(49.65,48.9,1,1,0,0,0,49.6,48.9);

	this.instance_178 = new lib.ClipGroup_1_0_8();
	this.instance_178.setTransform(97.6,56.6,1,1,0,0,0,1.7,4.5);

	this.instance_179 = new lib.ClipGroup_2_0_2();
	this.instance_179.setTransform(19.4,84.2,1,1,0,0,0,3.2,2.8);

	this.instance_180 = new lib.ClipGroup_3_10();
	this.instance_180.setTransform(49.6,48.9,1,1,0,0,0,49.6,48.9);

	this.instance_181 = new lib.ClipGroup_4_3();
	this.instance_181.setTransform(50.45,47.4,1,1,0,0,0,47.4,47.4);

	this.instance_182 = new lib.ClipGroup_5_7();
	this.instance_182.setTransform(50.75,51.4,1,1,0,0,0,50.7,46.4);

	this.instance_183 = new lib.ClipGroup_6_3();
	this.instance_183.setTransform(50.75,51.4,1,1,0,0,0,50.7,46.4);

	var maskedShapeInstanceList = [this.instance_177,this.instance_178,this.instance_179,this.instance_180,this.instance_181,this.instance_182,this.instance_183];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_92, new cjs.Rectangle(0.1,0,99.2,97.8), null);


(lib.Group_9_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_6 = new lib.ClipGroup_45_1();
	this.instance_6.setTransform(14.7,15.1,1,1,0,0,0,14.7,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_9_6, new cjs.Rectangle(0,0,29.4,30.1), null);


(lib.Group_8_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_6 = new lib.ClipGroup_42_3();
	this.instance_6.setTransform(32.5,32.5,1,1,0,0,0,32.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_8_6, new cjs.Rectangle(0,0,65.1,65), null);


(lib.Group_7_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_7 = new lib.ClipGroup_28_5();
	this.instance_7.setTransform(34.1,27,1,1,0,0,0,34.1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7_7, new cjs.Rectangle(0,0,68.3,54), null);


(lib.Group_6_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_9 = new lib.ClipGroup_30_5();
	this.instance_9.setTransform(17.2,17.2,1,1,0,0,0,17.2,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6_9, new cjs.Rectangle(0,0,34.5,34.5), null);


(lib.Group_5_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_9 = new lib.ClipGroup_32_4();
	this.instance_9.setTransform(12.2,12.2,1,1,0,0,0,12.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5_9, new cjs.Rectangle(0,0,24.5,24.5), null);


(lib.Group_4_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_9 = new lib.ClipGroup_34_3();
	this.instance_9.setTransform(10.9,10.8,1,1,0,0,0,10.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4_9, new cjs.Rectangle(0,0,21.8,21.8), null);


(lib.Group_3_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_10 = new lib.ClipGroup_36_3();
	this.instance_10.setTransform(12.6,12.6,1,1,0,0,0,12.6,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_10, new cjs.Rectangle(0,0,25.2,25.2), null);


(lib.Group_2_0_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_7 = new lib.ClipGroup_38_2();
	this.instance_7.setTransform(8.6,8.6,1,1,0,0,0,8.6,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0_7, new cjs.Rectangle(0,0,17.1,17.1), null);


(lib.Group_2_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_10 = new lib.ClipGroup_7_9();
	this.instance_10.setTransform(31.1,46.6,1,1,0,0,0,31.1,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_10, new cjs.Rectangle(0,0,62.1,93.1), null);


(lib.Group_1_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_4 = new lib.ClipGroup_40_2();
	this.instance_4.setTransform(11.8,11.8,1,1,0,0,0,11.8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1_4, new cjs.Rectangle(0,0,23.7,23.7), null);


(lib.Group_1_0_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_9 = new lib.ClipGroup_5_8();
	this.instance_9.setTransform(14,15.2,1,1,0,0,0,14,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0_9, new cjs.Rectangle(0,0,28,30.3), null);


(lib.Group_1_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_10 = new lib.ClipGroup_3_8();
	this.instance_10.setTransform(17.9,17.6,1,1,0,0,0,17.9,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_11, new cjs.Rectangle(0,0,35.9,35.1), null);


(lib.Group_0_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_9 = new lib.ClipGroup_1_10();
	this.instance_9.setTransform(21.2,18.2,1,1,0,0,0,21.2,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_9, new cjs.Rectangle(0,0,42.3,36.4), null);


(lib.ClipGroup_44_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AnpHsIAAvXIPTAAIAAPXg");
	mask_3.setTransform(57.175,49.175);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBF392").s().p("AANAPQgegCgXgcIAcANQAfANAVABQgIAEgLAAIgIgBg");
	this.shape_3.setTransform(18.3,68.7688);

	this.instance = new lib.Group_9_6();
	this.instance.setTransform(14.7,50.95,1,1,0,0,0,14.7,15.1);
	this.instance.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.shape_3,this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44_3, new cjs.Rectangle(8.2,35.9,21.2,34.50000000000001), null);


(lib.ClipGroup_24_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AnpHsIAAvXIPTAAIAAPXg");
	mask_8.setTransform(49.025,49.175);

	// Layer_3
	this.instance_8 = new lib.Group_0_9();
	this.instance_8.setTransform(48.2,75.75,1,1,0,0,0,21.2,18.2);
	this.instance_8.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24_8, new cjs.Rectangle(27,57.6,42.3,36.300000000000004), null);


(lib.ClipGroup_22_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AnpHsIAAvXIPTAAIAAPXg");
	mask_9.setTransform(49.025,49.175);

	// Layer_3
	this.instance_3 = new lib.Group_1_11();
	this.instance_3.setTransform(66.5,25.75,1,1,0,0,0,17.9,17.6);
	this.instance_3.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22_9, new cjs.Rectangle(48.6,8.2,35.9,35.099999999999994), null);


(lib.ClipGroup_20_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AnpHsIAAvXIPTAAIAAPXg");
	mask_9.setTransform(49.025,49.175);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#044A59").s().p("AgoBfQgggDgLgaQgOgeAng7QAog8AogKQAigJAUAdQAJAPADAQIhjCIQgJACgJAAIgLgBg");
	this.shape_6.setTransform(83.2764,74.015);

	this.instance_3 = new lib.Group_2_10();
	this.instance_3.setTransform(34.4,47.15,1,1,0,0,0,31.1,46.6);
	this.instance_3.compositeOperation = "screen";

	this.instance_4 = new lib.Group_1_0_9();
	this.instance_4.setTransform(80.4,43.1,1,1,0,0,0,14,15.2);
	this.instance_4.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.shape_6,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.shape_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20_9, new cjs.Rectangle(3.3,0.6,91.10000000000001,93.10000000000001), null);


(lib.ClipGroup_4_0_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AnpHsIAAvXIPTAAIAAPXg");
	mask_5.setTransform(49.025,60.175);

	// Layer_3
	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(23.15,19.65,0.5,0.5);

	this.instance_3 = new lib.Group_8_6();
	this.instance_3.setTransform(44.8,93.65,1,1,0,0,0,32.5,32.5);
	this.instance_3.compositeOperation = "screen";

	this.instance_4 = new lib.Group_1_1_4();
	this.instance_4.setTransform(85.25,81.6,1,1,0,0,0,11.8,11.8);
	this.instance_4.compositeOperation = "screen";

	this.instance_5 = new lib.Group_2_0_7();
	this.instance_5.setTransform(90.75,35,1,1,0,0,0,8.6,8.6);
	this.instance_5.compositeOperation = "screen";

	this.instance_6 = new lib.Group_3_10();
	this.instance_6.setTransform(85.65,47.1,1,1,0,0,0,12.6,12.6);
	this.instance_6.compositeOperation = "screen";

	this.instance_7 = new lib.Group_4_9();
	this.instance_7.setTransform(46.8,28.9,1,1,0,0,0,10.9,10.8);
	this.instance_7.compositeOperation = "screen";

	this.instance_8 = new lib.Group_5_9();
	this.instance_8.setTransform(27.25,17.65,1,1,0,0,0,12.2,12.2);
	this.instance_8.compositeOperation = "screen";

	this.instance_9 = new lib.Group_6_9();
	this.instance_9.setTransform(65.4,17.2,1,1,0,0,0,17.2,17.2);
	this.instance_9.compositeOperation = "screen";

	this.instance_10 = new lib.Group_7_7();
	this.instance_10.setTransform(35.6,38.8,1,1,0,0,0,34.1,27);
	this.instance_10.compositeOperation = "screen";

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0_5, new cjs.Rectangle(1.5,11,96.6,98.4), null);


(lib.ClipGroup_93 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AnpHsIAAvXIPTAAIAAPXg");
	mask_10.setTransform(57.175,60.175);

	// Layer_3
	this.instance_184 = new lib.ClipGroup_44_3();
	this.instance_184.setTransform(53.1,60.1,1,1,0,0,0,53.1,49.1);

	this.instance_185 = new lib.ClipGroup_1_0_9();
	this.instance_185.setTransform(18.9,67.9,1,1,0,0,0,18.1,20.6);

	this.instance_186 = new lib.ClipGroup_2_0_3();
	this.instance_186.setTransform(57.15,60.1,1,1,0,0,0,49,49.1);

	this.instance_187 = new lib.ClipGroup_3_0_6();
	this.instance_187.setTransform(24.4,62.45,1,1,0,0,0,10.7,12.7);

	this.instance_188 = new lib.ClipGroup_4_0_5();
	this.instance_188.setTransform(57.75,63.1,1,1,0,0,0,49.6,63.1);

	this.instance_189 = new lib.ClipGroup_5_0_3();
	this.instance_189.setTransform(94.55,38.65,1,1,0,0,0,3.1,4.5);

	this.instance_190 = new lib.ClipGroup_6_0_2();
	this.instance_190.setTransform(54.5,85.25,1,1,0,0,0,18.5,3.9);

	this.instance_191 = new lib.ClipGroup_7_0_3();
	this.instance_191.setTransform(54.25,32,1,1,0,0,0,10.8,6.9);

	this.instance_192 = new lib.ClipGroup_8_0_2();
	this.instance_192.setTransform(38.55,19.2,1,1,0,0,0,10.9,8.2);

	this.instance_193 = new lib.ClipGroup_9_9();
	this.instance_193.setTransform(93.35,86.05,1,1,0,0,0,10.5,9.5);

	this.instance_194 = new lib.ClipGroup_10_3();
	this.instance_194.setTransform(51.6,97.45,1,1,0,0,0,28.1,11.8);

	this.instance_195 = new lib.ClipGroup_11_8();
	this.instance_195.setTransform(98.9,37.6,1,1,0,0,0,6.4,6.2);

	this.instance_196 = new lib.ClipGroup_12_6();
	this.instance_196.setTransform(93.25,54.85,1,1,0,0,0,8.4,13);

	this.instance_197 = new lib.ClipGroup_13_7();
	this.instance_197.setTransform(74.75,26.9,1,1,0,0,0,17,15.1);

	this.instance_198 = new lib.ClipGroup_14_6();
	this.instance_198.setTransform(57.15,60.1,1,1,0,0,0,49,49.1);

	this.instance_199 = new lib.ClipGroup_15_5();
	this.instance_199.setTransform(40.9,22,1,1,0,0,0,9.6,6.2);

	this.instance_200 = new lib.ClipGroup_16_6();
	this.instance_200.setTransform(57.15,60.1,1,1,0,0,0,49,49.1);

	this.instance_201 = new lib.ClipGroup_17_8();
	this.instance_201.setTransform(56.3,36.9,1,1,0,0,0,7.6,3.1);

	this.instance_202 = new lib.ClipGroup_18_6();
	this.instance_202.setTransform(57.15,60.1,1,1,0,0,0,49,49.1);

	this.instance_203 = new lib.ClipGroup_19_8();
	this.instance_203.setTransform(71.65,31.25,1,1,0,0,0,14.1,11.1);

	this.instance_204 = new lib.ClipGroup_20_9();
	this.instance_204.setTransform(57.15,60.1,1,1,0,0,0,49,49.1);

	this.instance_205 = new lib.ClipGroup_21_4();
	this.instance_205.setTransform(88.4,83.8,1,1,0,0,0,6.2,8.4);

	this.instance_206 = new lib.ClipGroup_22_9();
	this.instance_206.setTransform(57.15,60.1,1,1,0,0,0,49,49.1);

	this.instance_207 = new lib.ClipGroup_23_6();
	this.instance_207.setTransform(45.45,45.95,1,1,0,0,0,34,34.4);

	this.instance_208 = new lib.ClipGroup_24_8();
	this.instance_208.setTransform(57.15,60.1,1,1,0,0,0,49,49.1);

	this.instance_209 = new lib.ClipGroup_25_3();
	this.instance_209.setTransform(91,57.7,1,1,0,0,0,7.2,15.6);

	this.instance_210 = new lib.ClipGroup_26_8();
	this.instance_210.setTransform(57.15,60.1,1,1,0,0,0,49,49.1);

	this.instance_211 = new lib.ClipGroup_27_5();
	this.instance_211.setTransform(58.85,58.95,1,1,0,0,0,47.4,47.4);

	var maskedShapeInstanceList = [this.instance_184,this.instance_185,this.instance_186,this.instance_187,this.instance_188,this.instance_189,this.instance_190,this.instance_191,this.instance_192,this.instance_193,this.instance_194,this.instance_195,this.instance_196,this.instance_197,this.instance_198,this.instance_199,this.instance_200,this.instance_201,this.instance_202,this.instance_203,this.instance_204,this.instance_205,this.instance_206,this.instance_207,this.instance_208,this.instance_209,this.instance_210,this.instance_211];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_93, new cjs.Rectangle(8.2,11,98,98.4), null);


(lib.colorstar9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_93();
	this.instance.setTransform(45.55,52.1,1,1,0,0,0,53.7,63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colorstar9, new cjs.Rectangle(-8.1,-11,107.39999999999999,126.2), null);


(lib.colorstar8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_47();
	this.instance.setTransform(45,54.4,1,1,0,0,0,88.4,88.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colorstar8, new cjs.Rectangle(-43.4,-34,176.70000000000002,176.7), null);


(lib.colorstar7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_86();
	this.instance.setTransform(50.3,51.8,1,1,0,0,0,50.3,51.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colorstar7, new cjs.Rectangle(0,0,100.6,103.6), null);


(lib.colorstar6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_88();
	this.instance.setTransform(56,47.4,1,1,0,0,0,64.5,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colorstar6, new cjs.Rectangle(-8.5,-17.3,129.1,129.4), null);


(lib.colorstar5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_89();
	this.instance.setTransform(49.5,51,1,1,0,0,0,64.3,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colorstar5, new cjs.Rectangle(-14.8,-8,128.70000000000002,118.1), null);


(lib.colorstar4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_92();
	this.instance.setTransform(50.75,48.9,1,1,0,0,0,50.8,48.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colorstar4, new cjs.Rectangle(0,0,101.5,97.8), null);


(lib.colorstar3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_90();
	this.instance.setTransform(49.1,47.8,1,1,0,0,0,49.1,47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colorstar3, new cjs.Rectangle(0,0,98.3,95.6), null);


(lib.colorstar1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_87();
	this.instance.setTransform(48.6,48.55,1,1,0,0,0,50.3,49.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colorstar1, new cjs.Rectangle(-1.7,-0.8,100.60000000000001,98.7), null);


(lib.colorstar0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_51();
	this.instance.setTransform(48.6,46.25,1,1,0,0,0,48.8,46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colorstar0, new cjs.Rectangle(-0.2,-0.1,97.7,92.69999999999999), null);


(lib.astrona = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(2));

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(127.5,346.8,1,1,0,0,0,97.5,66.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:327.6},0).to({x:148.95,y:334.1},1).to({x:286.55,y:305.4},4).to({x:656,y:320},13).to({x:938.95,y:300.5},13).to({x:1112.85,y:334.05},8).to({x:1223.65,y:358.2},9).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,233.7,1193.6,186.90000000000003);


(lib.star3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.ClipGroup_91();
	this.instance_1.setTransform(50.7,45.8,1,1,0,0,0,58.6,55.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star3, new cjs.Rectangle(-7.9,-9.4,117.2,110.5), null);


(lib.colorstar2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.star3();
	this.instance.setTransform(50.7,45.9,1,1,0,0,0,50.7,45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colorstar2, new cjs.Rectangle(-7.9,-9.4,117.2,110.5), null);


// stage content:
(lib.מסעביןכוכביםגלמרדכיחןכהןועדןאברמוביץ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {bigbubble:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		init_Sound();
		var self = this;
		var stageH = parseInt(canvas.style.height); //גובה במה
		var stageW = parseInt(canvas.style.width);; //רוחב במה
		var btn = 0; //כפתור בדוק
		var current = []; //מערך לסידור המסיחים
		var Qlength = 0; //כמות מסיחים נוכחית
		var Completed = 0; //שאלות שהושלמו
		var setCLOCK = "";
		var clockSUM = 0; //סהכ זמן
		var clocking = 0; //זמן שאלה נוכחי
		var qnum = 0; //משתנה מספר השאלה
		var finalScore = 0; //ניקוד סופי
		var mistake = 0; //מספר טעויות
		var z = 0;
		var soundOn = true; // משתנה אשר שומר את הסאונד מופעל
		var gameNum = 0; //משתנה למספר משחק
		var mychoice = 0; //משתנה לקומבו בוקס
		var sumcom = 0;
		var gameName;
		var forcombo;
		var totalLength = "";
		var astrona="";
		var questions = []; //הגדרת המערך
		var photoBackground = [
			["image", lib.background0],
			["image", lib.background1],
			["image", lib.background2],
			["image", lib.background3],
			["image", lib.background4],
			["image", lib.background5],
			["image", lib.background6],
			["image", lib.background7],
			["image", lib.background8],
			["image", lib.background9]
			
		];
		var colorstar = [
			
			["image", lib.colorstar0],
			["image", lib.colorstar1],
			["image", lib.colorstar2],
			["image", lib.colorstar3],
			["image", lib.colorstar4],
			["image", lib.colorstar5],
			["image", lib.colorstar6],
			["image", lib.colorstar7],
			["image", lib.colorstar8],
			["image", lib.colorstar9],
			["image", lib.colorstar10]
			
			
		];
		
		//לצורך הפעלת הגרירה
		stage.enableMouseOver(24);
		
		
		
		
		gameManu();
		
		
		function gameManu() {
				if (Completed > 1) {
				stage.removeChild(stage.getChildByName("newGame"));
				stage.removeChild(stage.getChildByName("restart"));
				stage.removeChild(stage.getChildByName("button"));
				for(i=0;i<photoBackground.length;i++){
					stage.removeChild(stage.getChildByName("background"+i));
					
					}
					for(i=0;i<colorstar.length;i++){
					stage.removeChild(stage.getChildByName("colorstars"+i));
					
					}
				
				
				mistake=0;
				finalScore=0;
				Completed = 0;
				clockSUM = 0;
					clearall();
		
			}
		
			//הוספת הקומבו לבמה
			forcombo = new lib.forcomb();
			forcombo.x = 600;
			forcombo.y = 300;
			forcombo.name = "forcombo";
			forcombo.scaleX = 1.5;
			forcombo.scaleY = 1.5;
			stage.addChild(forcombo);
			forcombo.startbtn.alpha = 0.3;
			forcombo.startbtn.btnTxt.text = "למשחק";
		
		
			//מאזין לשינוי ערכים בקומבו
			$("#dom_overlay_container").on("change", "#mycb", cb_change);
		}
		
		
		
		//בעת שינוי ערך בקומבו
		function cb_change(evt) {
		
			mychoice = evt.currentTarget.value;
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.removeEventListener("click", opengame);
			} //משחק ראשון
			if (mychoice == 1) {
				gameNum = 0;
				forcombo.startbtn.alpha = 1;
				gameName = "ידע כללי";
				forcombo.startbtn.addEventListener("click", opengame);
			} //משחק שני
			if (mychoice == 2) {
				gameNum = 1;
				forcombo.startbtn.alpha = 1;
				gameName = "לוח הכפל";
		
				forcombo.startbtn.addEventListener("click", opengame);
			}
		}
		
		function opengame(){
			stage.removeChild(forcombo);
			var opengame = new lib.opengame;
			opengame.x = 200;
			opengame.y = 80;
			stage.addChild(opengame);
			opengame.name = "opengame";
			opengame.scaleX = 0.6;
			opengame.scaleY = 0.6;
			
			var Openbutton = new lib.button;
			Openbutton.y = 600;
			Openbutton.x = 550;
			stage.addChild(Openbutton);
			Openbutton.name = "Openbutton";
			stage.getChildByName("Openbutton").btnTxt.text = "התחל";
			
			stage.getChildByName("Openbutton").addEventListener("click", launch);
			
			
			}
		
		function createQustions(){
			questions = [
			[
				[
					//                                             ימין  
					[false, "גרור את אבני החלל לפי סדר המצאתן", 60, "ראשון", "אחרון", 20],
					[
						["image", lib.linkdin, 0],
						["image", lib.facebook, 0],
						["image", lib.twitter, 0],
						["image", lib.waze, 0],
						["image", lib.tiktok, 0]
					]
				],
				[
					[false, "גרור את אבני החלל לפי סדר הכרזתם כעיר", 60, "ראשון", "אחרון", 20],
					[
						["text", "בת ים", 0],
						["image", lib.holon, 0],
						["image", lib.eilat, 0],
						["image", lib.kfarsaba, 0],
						["text", "יבנה", 0],
					]
		
				],
				[
					[false, "גרור את אבני החלל לפי סדר כהונתם של ראשי הממשלה", 60, "ראשון", "אחרון", 20],
					[
						["text", "דוד בן גוריון", 0],
						["text", "משה שרת", 0],
						["image", lib.golda, 0],
						["text", "יצחק רבין", 0],
						["text", "יצחק שמיר", 0],
						["image", lib.bibi, 0]
					]
				],
				[
					[false, "גרור את אבני החלל לפי סדר התרחשותן של המלחמות והמבצעים", 60, "ראשון", "אחרון", 20],
					[
						["text", "מלחמת ששת הימים", 0],
						["text", "מלחמת יום כיפור", 0],
						["text", "מלחמת לבנון השנייה", 0],
						["text", "מבצע עופרת יצוקה", 0],
						["text", "מבצע עמוד ענן", 0],
						["text", "מבצע צוק איתן", 0],
						["text", "מבצע שומר החומות", 0]
		
					]
				],
				[
					[false, "גרור את אבני החלל לפי סדר המנצחים באירוויזיון ", 60, "ראשון", "אחרון", 20],
					[
						["text", "יזהר כהן", 0],
						["text", "להקת חלב ודבש", 0],
						["image", lib.dana, 0],
						["text", "נטע ברזילי", 0]
					]
				]
		
		
			], //סוף משחקון ראשון
			[
				[
					[false, "גרור את אבני החלל לפי הסדר על מנת שהאסטרונאוט יוכל להגיע לחללית ", 60, "קטן", "גדול", 10],
					[
						["text", "4x2", 0],
						["text", "5x3", 0],
						["text", "6x4", 0],
						["text", "8x8", 0],
						["text", "10x9", 0]
		
					]
				],
				[
					[false, "גרור את אבני החלל לפי הסדר על מנת שהאסטרונאוט יוכל להגיע לחללית ", 60, "קטן", "גדול", 10],
					[
						["text", "6x1", 0],
						["text", "8x2", 0],
						["text", "5x9", 0],
						["text", "9x9", 0],
						["text", "10x10", 0]
		
					]
				],
		
				[
					[false, "גרור את אבני החלל לפי הסדר על מנת שהאסטרונאוט יוכל להגיע לחללית ", 60, "קטן", "גדול", 10],
					[
						["text", "3x3", 0],
						["text", "5x4", 0],
						["text", "8x4", 0],
						["text", "7x6", 0],
						["text", "6x9", 0],
						["text", "10x8", 0]
		
					]
				],
		
				[
					[false, "גרור את אבני החלל לפי הסדר על מנת שהאסטרונאוט יוכל להגיע לחללית ", 60, "קטן", "גדול", 10],
					[
						["text", "2x2", 0],
						["text", "3x6", 0],
						["text", "5x8", 0],
						["text", "9x8", 0]
		
		
					]
				],
				[
					[false, "גרור את אבני החלל לפי הסדר על מנת שהאסטרונאוט יוכל להגיע לחללית ", 60, "קטן", "גדול", 10],
					[
						["text", "1x7", 0],
						["text", "2x9", 0],
						["text", "3x8", 0],
						["text", "6x6", 0],
						["text", "5x9", 0],
						["text", "10x6", 0],
						["text", "7x10", 0]
		
					]
				],
				[
					[false, "גרור את אבני החלל לפי הסדר על מנת שהאסטרונאוט יוכל להגיע לחללית ", 60, "קטן", "גדול", 10],
					[
						["text", "1x10", 0],
						["text", "3x9", 0],
						["text", "7x4", 0],
						["text", "4x9", 0],
						["text", "8x5", 0],
						["text", "9x7", 0]
		
		
					]
				],
				[
					[false, "גרור את אבני החלל לפי הסדר על מנת שהאסטרונאוט יוכל להגיע לחללית ", 60, "קטן", "גדול", 10],
					[
						["text", "2x6", 0],
						["text", "2x9", 0],
						["text", "4x5", 0],
						["text", "6x8", 0]
					]
				],
				[
					[false, "גרור את אבני החלל לפי הסדר על מנת שהאסטרונאוט יוכל להגיע לחללית ", 60, "קטן", "גדול", 10],
					[
						["text", "5x2", 0],
						["text", "4x8", 0],
						["text", "7x5", 0],
						["text", "8x6", 0],
						["text", "7x9", 0]
		
					]
				],
				[
					[false, "גרור את אבני החלל לפי הסדר על מנת שהאסטרונאוט יוכל להגיע לחללית ", 60, "קטן", "גדול",10],
					[
						["text", "2x3", 0],
						["text", "3x4", 0],
						["text", "5x5", 0],
						["text", "9x9", 0]
		
		
					]
				],
				[
					[false, "גרור את אבני החלל לפי הסדר על מנת שהאסטרונאוט יוכל להגיע לחללית ", 60, "קטן", "גדול", 10],
					[
						["text", "1x3", 0],
						["text", "4x6", 0],
						["text", "5x7", 0],
						["text", "9x6", 0]
		
		
					]
				]
		
		
			]
		
		];
			}
		
		
		
		
		
		//יצירת אלמנטים למשחק
		function launch() {
			
			if (Completed > 1) {
				stage.removeChild(stage.getChildByName("newGame"));
				stage.removeChild(stage.getChildByName("restart"));
				stage.removeChild(stage.getChildByName("button"));
				for(i=0;i<photoBackground.length;i++){
					stage.removeChild(stage.getChildByName("background"+i));
					
					}
					for(i=0;i<colorstar.length;i++){
					stage.removeChild(stage.getChildByName("colorstars"+i));
					
					}
				
				
				mistake=0;
				finalScore=0;
				Completed = 0;
				clockSUM = 0;
					clearall();
		
			}
			
			stage.removeChild(stage.getChildByName("Openbutton"));
			stage.removeChild(stage.getChildByName("opengame"));
			
			
			
			createQustions();
			totalLength=questions[gameNum].length;
			photo();
			
		
			var earthFinal = new lib.earthFinal;
			stage.addChild(earthFinal);
			earthFinal.name = "earthFinal";
			stage.getChildByName("earthFinal").alpha = 0;
			
			color();
		
		
			var pauseStop = new lib.pauseStop;
			pauseStop.x = 250;
			pauseStop.y = 150;
			stage.addChild(pauseStop);
			pauseStop.name = "pauseStop";
			pauseStop.scaleX = 0.6;
			pauseStop.scaleY = 0.6;
			stage.getChildByName("pauseStop").alpha = 0;
		
			var timeout = new lib.timeout;
			timeout.x = 250;
			timeout.y = 150;
			stage.addChild(timeout);
			timeout.name = "timeout";
			timeout.scaleX = 0.6;
			timeout.scaleY = 0.6;
			stage.getChildByName("timeout").alpha = 0;
		
			var shipstone = new lib.shipstone;
			shipstone.x = 1060;
			shipstone.y = 150;
			stage.addChild(shipstone);
			shipstone.name = "shipstone";
			stage.getChildByName("shipstone").gotoAndPlay(0);
		
			var title = new lib.title;
			title.x = 400;
			title.y = 140;
			stage.addChild(title);
			title.name = "title";
		
			var bigbutton = new lib.bigbutton;
			bigbutton.x = 1000;
			bigbutton.y = 200;
			stage.addChild(bigbutton);
			bigbutton.name = "bigbutton";
		
		
			var smallbubble = new lib.smallbubble;
			smallbubble.x = 200;
			smallbubble.y = 200;
			stage.addChild(smallbubble);
			smallbubble.name = "smallbubble";
		
			var music = new lib.musicgame;
			music.x = 1200;
			music.y = 20;
			stage.addChild(music);
			music.name = "music";
			music.scaleX = 0.6;
			music.scaleY = 0.6;
			music.addEventListener("click", stopSound);
			
			var pausegame = new lib.pausegame;
			pausegame.x = 1200;
			pausegame.y = 60;
			stage.addChild(pausegame);
			pausegame.name = "pausegame";
			pausegame.scaleX = 0.6;
			pausegame.scaleY = 0.6;
			pausegame.addEventListener("click", stopClicked);
			
			var firstStone = new lib.firstStone;
			firstStone.x = -30;
			firstStone.y = 300;
			stage.addChild(firstStone);
			firstStone.name = "firstStone";
			stage.getChildByName("firstStone").gotoAndPlay(1);
		
			var button = new lib.button;
			button.y = 320;
			button.x = 510;
			button.alpha = 0;
			stage.addChild(button);
			button.name = "button";
		
		
			//הוראה, ניקוד משוב
			var messageTitle = new createjs.Text();
			messageTitle.color = "grey";
			messageTitle.font = "16px Arial";
			messageTitle.x = 320;
			messageTitle.y = 100;
			messageTitle.name = "messageTitle";
			stage.addChild(messageTitle);
		
			//סמל שעון
			var clock = new lib.clock;
			clock.name = "clock";
			stage.addChild(clock);
			clock.x = 800;
			clock.y = 20;
			clock.scaleX = 0.7;
			clock.scaleY = 0.7;
		
			//תצוגת שעון
			var clockTEXT = new createjs.Text();
			clockTEXT.name = "clockTEXT";
			clockTEXT.font = "20px Rubik";
			clockTEXT.color = "white";
			clockTEXT.x = 855;
			clockTEXT.y = 30;
			stage.addChild(clockTEXT);
			start();
		}
		
		//החלפת תמונת רקע
		function photo() {
			for (i = 0; i < totalLength; i++) {
				var background = new(photoBackground[i][1])();
				stage.addChild(background);
				background.name = "background" + i;
				stage.getChildByName("background" + (i)).alpha = 0;
			}
		}
		//יצירת מד התקדמות
		function color() {
			for (i =0 ; i< colorstar.length; i++) {
				colorstars = new(colorstar[i][1])();
				colorstars.x = (40 * i)+5;
				colorstars.y = 30;
				colorstars.scaleX = 0.3;
				colorstars.scaleY = 0.3;
				stage.addChild(colorstars);
				colorstars.name = "colorstars" + i;
				stage.getChildByName("colorstars" + (i)).alpha = 0;
				
				
			if( colorstar.length-1==i){
				if(totalLength<colorstar.length-1){
					stage.getChildByName("colorstars" + (i)).x=40 * (totalLength)
					}
					
				stage.getChildByName("colorstars" + (i)).alpha = 1;
					stage.getChildByName("colorstars" + (i)).scaleX = 0.5;
				stage.getChildByName("colorstars" + (i)).scaleY = 0.5;
					stage.getChildByName("colorstars" + (i)).y = 20;
			}
			
		}
			for (i =0 ; i<totalLength; i++) {
				stage.getChildByName("colorstars" + (i)).alpha = 0.3;
				
			}
			
				
			
		}
		
		//הצגת שאלה
		function start() {
		
			qnum = Math.floor(Math.random() * questions[gameNum].length);
			
			// לקוח שניות קבועות מהשאלה
			clocking = questions[gameNum][qnum][0][2];
			//מפעיל ספירת זמן באינטרוול
		
			setCLOCK = setInterval(ticking, 1000);
			//תצוגת השעון בשנייה הראשונה, בגלל שהאינטרוול מראה רק מהשנייה השנייה שירדה
			stage.getChildByName("clockTEXT").text = clocking;
		
			Qlength = (questions[gameNum][qnum][1]).length;
			stage.getChildByName("title").titleTxt.text = questions[gameNum][qnum][0][1];
			stage.getChildByName("bigbutton").bigTxt.text = questions[gameNum][qnum][0][4];
			stage.getChildByName("smallbubble").smallTxt.text = questions[gameNum][qnum][0][3];
			stage.getChildByName("button").btnTxt.text = "בדוק";
			stage.getChildByName("pauseStop").alpha = 0;
		
			//יצירת מקומות הקוד
			for (i = 0; i < Qlength; i++) {
				var blacks = new lib.black();
				blacks.name = "blacks" + i;
				stage.addChild(blacks);
				blacks.scaleX = 0.5;
				blacks.scaleY = 0.5;
				current[i] = i;
				if (i % 2 == 0) {
					blacks.y = 320;
					blacks.x = ((1300 / Qlength) + (130 * i))+50;
				} else {
					blacks.y = 470;
					blacks.x = ((1300 / Qlength) + (130 * i))+50;
				}
		
			}
		
		
		
			//יצירת פריטים על המסך ורנדומליות
			for (i = 0; i < Qlength; i++) {
				var x = Math.floor(Math.random() * (current.length));
				//מסיחים
				var white = new lib.white();
				white.name = "white" + i;
				white.y = 600;
				stage.addChild(white)
				white.x = (1280 / (Qlength)) + (150 * current[x]);
				white.scaleX = 0.5;
				white.scaleY = 0.5;
				current.splice(x, 1);
				white.addEventListener("pressmove", dragFunc);
				white.addEventListener("pressup", up);
				questions[gameNum][qnum][1][i][2] = white.x;
				stage.getChildByName("white" + i).whiteTxt.text = questions[gameNum][qnum][1][i][1]
				
		
				if (questions[gameNum][qnum][1][i][0] == "image") {
					var image = new questions[gameNum][qnum][1][i][1];
					image.x = 41.15;
					image.y = -3.9;
					image.name = "image" + i;
					white.addChild(image);
					stage.getChildByName("white" + i).whiteTxt.text = "";
		
					zoom = new lib.zoom;
					zoom.scaleX = 1;
					zoom.scaleY = 1;
					white.addChild(zoom);
					zoom.addEventListener("mouseover", expend);
					zoom.addEventListener("mouseout", minimize);
					zoom.alpha=1;
					zoom.x = 0;
					zoom.y = -8;
					zoom.name = i;
				}
		
			}
		
			astrona = new lib.astrona;
			/*astrona.x = 30;
			astrona.y = 300;*/
			stage.addChild(astrona);
			astrona.name = "astrona";
		stage.getChildByName("astrona").gotoAndStop(0);
		}
		
		//הגדלת התמונה
		function expend(evt) {
			var i = evt.currentTarget.name;
			var img = new questions[gameNum][qnum][1][i][1];
			img.scaleX = 3;
			img.scaleY = 3;
			img.x = 400;
			img.y = 250;
			img.name = "img" + i;
			stage.addChild(img);
			stage.getChildByName("white" + i).alpha = 0.5;
		}
		//הקטנת תמונה
		function minimize(evt) {
			var i = evt.currentTarget.name;
			stage.removeChild(stage.getChildByName("img" + i));
		
			if (clocking > 0) {
				stage.getChildByName("white" + i).alpha = 1;
		
			} else {
				stage.getChildByName("white" + i).alpha = 0.5;
		
			}
		
		}
		//אינטרוול של השעון
		function ticking() {
			//תנאי שבודק אם נגמר הזמן
			if (clocking > 0) {
				//מוריד שניות ומציג בכל פעימה של האינטרוול
				clocking--;
				stage.getChildByName("clockTEXT").text = clocking;
			} else {
				clockSUM += (questions[gameNum][qnum][0][2]) - clocking;
				//עצירת האינטרוול
				clearInterval(setCLOCK);
				stage.getChildByName("timeout").alpha = 1;
				//הדפסת משוב שנגמר הזמן
				stage.getChildByName("button").btnTxt.text = "המשך לשחק";
				stage.getChildByName("clockTEXT").color = "red";
				stage.getChildByName("button").addEventListener("click", nextQuestionPrep);
				stage.getChildByName("button").alpha = 1;
				stage.getChildByName("button").y = 500;
				stage.getChildByName("button").x = 540;
				remove();
			}
		}
		
		//הסרת פריטים מהמסך
		function remove() {
			for (i = 0; i < Qlength; i++) {
				stage.removeChild(stage.getChildByName("white" + i));
				stage.removeChild(stage.getChildByName("blacks" + i));
				
			}
			stage.getChildByName("smallbubble").alpha = 0;
			stage.getChildByName("bigbutton").alpha = 0;
			stage.getChildByName("firstStone").alpha = 0;
			stage.getChildByName("shipstone").alpha = 0;
			stage.getChildByName("title").alpha = 0;
			stage.removeChild(stage.getChildByName("astrona"));
		}
		
		//הצמדה 
		function up(evt) {
			var items = 0;
			//מתשתנים להצמדה לתבניות
			var hasIntersect = false;
			var getX;
			var getY;
			// משתנים לזריקת מסיח לדוק
			var ylocation;
			var xlocation;
			var t;
			var on = false;
		
			for (var i = 0; i < Qlength; i++) {
				var box = stage.getChildByName("blacks" + i);
		
				if (intersect(evt.currentTarget, stage.getChildByName("blacks" + i))) {
					hasIntersect = true;
					getX = box.x - 25;
					getY = box.y;
					//btn++;
					evt.currentTarget.gotoAndStop(1);
					
				}
		
				if (evt.currentTarget.name.slice(5) != i) {
					if (intersect(evt.currentTarget, stage.getChildByName("white" + i))) {
		
						t = i;
						xlocation = stage.getChildByName("white" + i).x - 25;
						ylocation = stage.getChildByName("white" + i).y;
						on = true;
		
					}
				}
		
			}
		
			// מה שקורה במקרה של פגיעה בתבנית
		
			if (hasIntersect) {
				evt.currentTarget.x = getX;
				evt.currentTarget.y = getY;
		
			} else {
				evt.currentTarget.y = 600;
				evt.currentTarget.x = questions[gameNum][qnum][1][evt.currentTarget.name.slice(5)][2];
				evt.currentTarget.gotoAndStop(0);
			}
			// מה שקורה עם מסיח שפגע בתנית אבל קיים מסיח
			if (on) {
				stage.getChildByName("white" + t).x = questions[gameNum][qnum][1][t][2];
				stage.getChildByName("white" + t).y = 600;
				stage.getChildByName("white" + t).gotoAndStop(0);
		
			}
			activeteButton();
		}
		
		//מפעילה בדיקה אם כל המסיחים במקום להפעלת הכפתור
		function activeteButton() {
			var items = 0;
		
			for (var i = 0; i < Qlength; i++) {
		
				if (stage.getChildByName("white" + i).y == 320 || stage.getChildByName("white" + i).y == 470) {
					items++;
				}
		
			}
		
			if (items == (Qlength)) {
				stage.getChildByName("button").alpha = 1;
				stage.getChildByName("button").addEventListener("click", check);
			} else {
		
				stage.getChildByName("button").alpha = 0;
			}
		
		}
		
		function check() {
			//במקרה של לחיצה על בדיקה עצירת האינטרוול
			clearInterval(setCLOCK);
			///חישוב הזמן לשאלה והוספתו לספירה הכוללת
			clockSUM += (questions[gameNum][qnum][0][2]) - clocking;
			console.log(clockSUM);
			var orderCheck = 0;
		
			for (i = 0; i < Qlength; i++) {
				if ((stage.getChildByName("blacks" + i).x - 25) == (stage.getChildByName("white" + i).x)) {
					orderCheck++
				}
			}
			///תשובה נכונה
			if (orderCheck == Qlength) {
				finalScore += questions[gameNum][qnum][0][5];
				console.log("ציון" + finalScore);
				questions[gameNum][qnum][0][0] = true;
				questions[gameNum].splice([qnum], 1);
				Completed++;
				
		
				for (i = 0; i < Qlength; i++) {
					stage.getChildByName("white" + i).gotoAndStop(2);
					
				}
				stage.getChildByName("astrona").gotoAndPlay(1);
				
				myRight();
				stage.getChildByName("button").btnTxt.text = "לכוכב הבא";
		
				//טעות
			} else {
				myWrong();
				questions[gameNum][qnum][0][5] = questions[gameNum][qnum][0][5] / 2;
				mistake++;
				console.log("mistake" + mistake);
				questions[gameNum][qnum][0][0] = false;
				stage.getChildByName("button").btnTxt.text = "שאלה הבאה";
		
				for (i = 0; i < Qlength; i++) {
					if ((stage.getChildByName("blacks" + i).x - 25) != (stage.getChildByName("white" + i).x)) {
						stage.getChildByName("white" + i).x = questions[gameNum][qnum][1][i][2];
						stage.getChildByName("white" + i).y = 600;
						stage.getChildByName("white" + i).gotoAndStop(3);
						
					} else {
						stage.getChildByName("white" + i).gotoAndStop(2);
						stage.getChildByName("button").btnTxt.text = "שאלה הבאה";
						
					}
				}
		
			}
			
			stage.getChildByName("button").removeEventListener("click", check);
			stage.getChildByName("button").addEventListener("click", nextQuestionPrep);
		
		}
		
		function clearall(){
			stage.removeChild(stage.getChildByName("astrona"));
			stage.removeChild(stage.getChildByName("title"));
			stage.removeChild(stage.getChildByName("button"));
			stage.removeChild(stage.getChildByName("clockTEXT"));
			stage.removeChild(stage.getChildByName("clock"));
			stage.removeChild(stage.getChildByName("smallbubble"));
			stage.removeChild(stage.getChildByName("finalPhoto"));
			stage.removeChild(stage.getChildByName("earthFinal"));
			stage.removeChild(stage.getChildByName("opengame"));
			stage.removeChild(stage.getChildByName("pauseStop"));
			stage.removeChild(stage.getChildByName("timeout"));
			stage.removeChild(stage.getChildByName("shipstone"));
			stage.removeChild(stage.getChildByName("firstStone"));
			stage.removeChild(stage.getChildByName("bigbutton"));
			stage.removeChild(stage.getChildByName("timer"));
			
			
			
			}
		
		function finalFeedback() {
		remove();
			stage.getChildByName("earthFinal").alpha = 1;
			stage.getChildByName("clockTEXT").alpha = 0;
			stage.getChildByName("clock").alpha = 0;
			stage.getChildByName("pausegame").removeEventListener("click", stopClicked);
		
		
			var finalPhoto = new lib.finalPhoto;
			finalPhoto.x = 220;
			finalPhoto.y = 150;
			stage.addChild(finalPhoto);
			finalPhoto.name = "finalPhoto";
			finalPhoto.scaleX = 0.6;
			finalPhoto.scaleY = 0.6;
			stage.getChildByName("finalPhoto").timeTxt.text = clockSUM.toString(); //מציג זמן סופי
			stage.getChildByName("finalPhoto").gradeTxt.text = Math.floor(((finalScore)).toString()); //מציג ציון סופי
			stage.getChildByName("finalPhoto").mistakeTxt.text = mistake.toString(); //מציג מספר טעיות
			
				var restart = new lib.button;
				restart.y = 600;
				restart.x = 500;
				restart.name = "restart";
				stage.addChild(restart);
				stage.getChildByName("restart").btnTxt.text= "שחק שוב";
		
				var newGame = new lib.button;
				newGame.y = 600;
				newGame.x = 680;
				newGame.name = "newGame";
				stage.addChild(newGame);
				stage.getChildByName("newGame").btnTxt.text ="בחר משחק";
				
				
				
				stage.getChildByName("colorstars" + (sumcom+1)).alpha = 1;
				
				clearInterval(setCLOCK);
			
			restart.addEventListener("click", launch);
			newGame.addEventListener("click", gameManu);
			
			/*for (i = 0; i < totalLength + 1; i++) {
				stage.getChildByName("colorstars" + (i)).alpha = 1;
				if (colorstar.length - 1 == i) {
					stage.getChildByName("colorstars" + (i)).alpha = 1;
				}
		
			}*/
		}
		
		//פונקצייה שמכינה את הבמה לשאלה חדשה, מורידה את כל האלמנטים של השאלה הקודמת
		function nextQuestionPrep() {
			stage.removeChild(stage.getChildByName("astrona"));
			stage.getChildByName("clockTEXT").color = "white";
			btn = 0;
			stage.getChildByName("button").alpha = 0;
			stage.getChildByName("button").removeEventListener("click", nextQuestionPrep);
			for (i = 0; i < Qlength; i++) {
				stage.removeChild(stage.getChildByName("white" + i));
				stage.removeChild(stage.getChildByName("blacks" + i));
			}
		
			if (Completed == totalLength) {
				finalFeedback();
				clearInterval(setCLOCK);
		
			} else {
				sumcom = Completed - 1;
				if (sumcom == -1) {
					console.log(sumcom + "sumcom")
				} else {
					i = sumcom;
					stage.getChildByName("background" + (sumcom)).alpha = 1;
					stage.getChildByName("colorstars" + (sumcom)).alpha = 1;
				}
				start();
				stage.getChildByName("smallbubble").alpha = 1;
				stage.getChildByName("bigbutton").alpha = 1;
				stage.getChildByName("firstStone").alpha = 1;
				stage.getChildByName("shipstone").alpha = 1;
				stage.getChildByName("title").alpha = 1;
				stage.getChildByName("timeout").alpha = 0;
				stage.getChildByName("button").x = 510;
				stage.getChildByName("button").y = 320;
		
			}
		
		}
		
		function stopClicked() {
			stage.getChildByName("pauseStop").alpha = 1;
		
			remove();
			stage.getChildByName("button").btnTxt.text= "המשך לשחק";
			stage.getChildByName("button").addEventListener("click", nextQuestionPrep);
			stage.getChildByName("button").alpha = 1;
			stage.getChildByName("button").y = 500;
			stage.getChildByName("button").x = 540;
			clearInterval(setCLOCK);
		}
		
		function init_Sound() {
			// טעינת הסאונד + נתיב ושם
			createjs.Sound.registerSound("sounds/rightmp3.mp3", "right");
			createjs.Sound.registerSound("sounds/wrongwav.mp3", "wrong");
		
		}
		
		// פונקציה המפעילה את הסאונד של הכפתור "נכון"
		function myRight() {
			var myVolume = createjs.Sound.play("right");
		}
		
		// פונקציה המפעילה את הסאונד של הכפתור "טעות"
		function myWrong() {
			var myVolume = createjs.Sound.play("wrong");
		}
		
		// פונקציה להשתקת הסאונד
		function stopSound(event) {
			// אם הסאונד מופעל
			if (soundOn == true) {
				//השתקת הסאונד
				createjs.Sound.muted = true;
				// שינוי הצגת הכפתור ומעבר לפריים 1
				event.currentTarget.gotoAndStop(1);
				//עדכון שהסאונד לא מופעל
				soundOn = false;
		
			} else { //אם הסאונד לא מופעל
				// החזרת הקול
				createjs.Sound.muted = false;
				//שינוי הצגת הכפתור ומעבר לפריים 0
				event.currentTarget.gotoAndStop(0);
				//עדכון שהסאונד מופעל
				soundOn = true;
			}
		}
		
		//move Drager
		function dragFunc(evt) {
			//היכן בוצעה הלחיצה ביחס לבמה כולה
			var p = stage.globalToLocal(stage.mouseX, stage.mouseY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		}
		
		function intersect(obj1, obj2) {
		
			var obj1W = obj1.nominalBounds;
			var obj2W = obj2.nominalBounds;
		
			if (obj1.x + ((obj1W.width - 100) / 2) <= obj2.x - ((obj1W.width - 100) / 2)) {
				return false;
			} else if (obj1.y + ((obj1W.height - 100) / 2) <= obj2.y - ((obj2W.height - 100) / 2)) {
				return false;
			} else if (obj1.x - ((obj1W.width - 100) / 2) > obj2.x + ((obj2W.width - 100) / 2)) {
				return false;
			} else if (obj1.y - ((obj1W.height - 100) / 2) > obj2.y + ((obj2W.height - 100) / 2)) {
				return false;
			}
			return true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// layer_1
	this.instance = new lib.background();
	this.instance.setTransform(-5,0,0.6538,0.6575);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Ehljg5zMDLHAAAMAAABznMjLHAAAg");
	this.shape.setTransform(640,360);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhljA50MAAAhznMDLHAAAMAAABzng");
	this.shape_1.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(629,349,673.7,390.70000000000005);
// library properties:
lib.properties = {
	id: '896C3EB76474AA47AF5B612EF4F664EE',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/viewblueplanetearthspace3drendering.jpg?1644169831903", id:"viewblueplanetearthspace3drendering"},
		{src:"images/רקע1.png?1644169831903", id:"רקע1"},
		{src:"images/רקע2.png?1644169831903", id:"רקע2"},
		{src:"images/רקע3.png?1644169831903", id:"רקע3"},
		{src:"images/רקע6.png?1644169831903", id:"רקע6"},
		{src:"images/רקע7.png?1644169831903", id:"רקע7"},
		{src:"images/רקע8.png?1644169831903", id:"רקע8"},
		{src:"images/רקע9.png?1644169831903", id:"רקע9"},
		{src:"images/מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_1.png?1644169831002", id:"מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_1"},
		{src:"images/מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_2.png?1644169831002", id:"מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_2"},
		{src:"images/מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_3.png?1644169831002", id:"מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_3"},
		{src:"images/מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_4.png?1644169831002", id:"מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_4"},
		{src:"images/מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5.png?1644169831003", id:"מסע בין כוכבים_ גל מרדכי_ חן כהן ועדן אברמוביץ_atlas_5"},
		{src:"sounds/rightmp3.mp3?1644169831903", id:"rightmp3"},
		{src:"sounds/wrongwav.mp3?1644169831903", id:"wrongwav"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1644169831903", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1644169831903", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1644169831903", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['896C3EB76474AA47AF5B612EF4F664EE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;