//Language Resources
/*******************************/

var introductionImageEnglish="res/introduction.png";
var introductionSoundEnglish="res/introduction.mp3";

var shareImageEnglish="res/share.png";

var imgEnglishPage0 = "res/page0.png";
var imgEnglishPage1 = "res/page1.png";
var imgEnglishPage2 = "res/page2.png";
var imgEnglishPage3 = "res/page3.png";
var imgEnglishPage4 = "res/page4.png";
var imgEnglishPage5 = "res/page5.png";
var imgEnglishPage6 = "res/page6.png";
var imgEnglishPage7 = "res/page7.png";
var imgEnglishPage8 = "res/page8.png";
var imgEnglishPage9 = "res/page9.png";
var imgEnglishPage10 = "res/page10.png";

var soundEnglishPage0= "";
var soundEnglishPage1= "res/page0.mp3";
var soundEnglishPage2= "res/page2.mp3";
var soundEnglishPage3= "res/page3.mp3";
var soundEnglishPage4= "res/page4.mp3";
var soundEnglishPage5= "res/page5.mp3";
var soundEnglishPage6= "res/page6.mp3";
var soundEnglishPage7= "res/page7.mp3";
var soundEnglishPage8= "res/page8.mp3";
var soundEnglishPage9= "res/page9.mp3";
var soundEnglishPage10= "res/page10.mp3";

//Normal Resources
/*******************************/
var soundSplash="res/splash.mp3";
var splash= "res/splash.png";
var logo= "res/logo.png";
var frame= "res/frame.png";

var btnHomeNormal= "res/btnHomeNormal.png";
var btnHomeSelected= "res/btnHomeSelected.png";
var btnForwardNormal= "res/btnForwardNormal.png";
var btnForwardSelected= "res/btnForwardSelected.png";
var btnBackwardNormal= "res/btnBackwardNormal.png";
var btnBackwardSelected= "res/btnBackwardSelected.png";

var btnSoundNormal= "res/btnSoundNormal.png";
var btnSoundSelected= "res/btnSoundSelected.png";
var btnSoundDisabledNormal= "res/btnSoundDisabledNormal.png";
var btnSoundDisabledSelected= "res/btnSoundDisabledSelected.png";

var btnSoundReplayNormal= "res/btnSoundReplayNormal.png";
var btnSoundReplaySelected= "res/btnSoundReplaySelected.png";

var btnFacebookNormal= "res/btnFacebookNormal.png";
var btnFacebookSelected= "res/btnFacebookSelected.png";
var btnTwitterNormal= "res/btnTwitterNormal.png";
var btnTwitterSelected= "res/btnTwitterSelected.png";
var btnMailNormal= "res/btnMailNormal.png";
var btnMailSelected= "res/btnMailSelected.png";

var soundBtnStandard= "res/soundBtnStandard.mp3";

var fntArialRoundedMTBold= "res/ArialRoundedMTBold.ttf";


//Global constants
/*******************************/

var pages=12;
var idEnglish=0;
var transitionTime=1.0;
var btnPaddingWidth=10;
var fntArialRoundedMTBoldStr="Arial Rounded MT Bold";
var fntSize=24;
var wordColors=new Array(cc.c3b(66,173,73),cc.c3b(236,0,140),cc.c3b(0,174,239),cc.c3b(255,203,5),cc.c3b(123,46,111),cc.c3b(37,64,143),cc.c3b(250,148,30),cc.c3b(210,35,42));
var highlightTime=0.5;
var highlightColor=cc.c3b(0, 178, 149);
var tickTime=1.0;
var btnFadeTime=0.1;

//Tags
/*****************/
menuSoundReplayTag=1;

//English
/*******************************/
var languageEnglish = new Array(pages);
languageEnglish [0]  = "";
languageEnglish [1]  = "";
languageEnglish [2]  = "Lucy is a girl that has a teddy bear\nwith lots of colours. Its name is Timmy!";
languageEnglish [3]  = "Lucy has breakfast with Timmy and\nat night she sleeps with him.";
languageEnglish [4]  = "Every day, when she comes home from school,\nshe goes to her bedroom to kiss Timmy.";
languageEnglish [5]  = "– Oh! Oh! Timmy is not here! – cries Lucy.\n– Mummy, Daddy, Timmy is not in the bedroom!\nWhere is he? What has happened to him?";
languageEnglish [6]  = "Her mother asks Lucy where she left\nTimmy this morning and Lucy, very sad, answers:\n – On my bed!";
languageEnglish [7]  = "– Hey, Lucy! – says her mother. – Let’s go\nand look for him! But I think you have to be tidier.";
languageEnglish [8]  = "When they go into the bedroom Timmy is not\non the bed and Lucy’s mother looks around the room.";
languageEnglish [9]  = "– Look! Here is Timmy, half hidden\nor half lost! What do you think, Lucy?";
languageEnglish [10]  = "– I love you Timmy – says Lucy.\nNow, every day, Lucy and Timmy take\nsome time to put away the toys.";

var soundsEnglish = new Array(pages);
soundsEnglish  [0]  = soundEnglishPage0;
soundsEnglish [1]  = soundEnglishPage1;
soundsEnglish [2]  = soundEnglishPage2;
soundsEnglish [3]  = soundEnglishPage3;
soundsEnglish [4]  = soundEnglishPage4;
soundsEnglish [5]  = soundEnglishPage5;
soundsEnglish [6]  = soundEnglishPage6;
soundsEnglish [7]  = soundEnglishPage7;
soundsEnglish [8]  = soundEnglishPage8;
soundsEnglish [9]  = soundEnglishPage9;
soundsEnglish [10]  = soundEnglishPage10;

var imgsEnglish = new Array(pages);
imgsEnglish  [0]  = imgEnglishPage0;
imgsEnglish  [1]  = imgEnglishPage1;
imgsEnglish  [2]  = imgEnglishPage2;
imgsEnglish  [3]  = imgEnglishPage3;
imgsEnglish  [4]  = imgEnglishPage4;
imgsEnglish  [5]  = imgEnglishPage5;
imgsEnglish  [6]  = imgEnglishPage6;
imgsEnglish  [7]  = imgEnglishPage7;
imgsEnglish  [8]  = imgEnglishPage8;
imgsEnglish  [9]  = imgEnglishPage9;
imgsEnglish  [10]  = imgEnglishPage10;

var highlightsEnglish=new Array(pages);
highlightsEnglish [0]  = new Array();
highlightsEnglish [1]  = new Array();
highlightsEnglish [2]  = new Array(0.15,0.525,0.88,1.15,1.30,1.42,1.48,1.61,1.77,1.9,2.3,2.66,3.08,3.28,4.25);
highlightsEnglish [3]  = new Array();
highlightsEnglish [4]  = new Array();
highlightsEnglish [5]  = new Array();
highlightsEnglish [6]  = new Array();
highlightsEnglish [7]  = new Array();
highlightsEnglish [8]  = new Array();
highlightsEnglish [9]  = new Array();
highlightsEnglish [10]  = new Array();

//new Array(0.15,0.525,0.88,1.15,1.30,1.42,1.48,1.61,1.77,1.9,2.3,2.66,3.08,3.28,4.25,4.35,4.45,5.0,5.27,5.38);

var coloredWordsEnglish = new Array(pages);
coloredWordsEnglish [0]  = new Array();
coloredWordsEnglish [1]  = new Array();
coloredWordsEnglish [2]  = new Array(3,7,8);
coloredWordsEnglish [3]  = new Array(2,9);
coloredWordsEnglish [4]  = new Array(7,12);
coloredWordsEnglish [5]  = new Array(8,12);
coloredWordsEnglish [6]  = new Array(9,18);
coloredWordsEnglish [7]  = new Array(6,16);
coloredWordsEnglish [8]  = new Array(15,16);
coloredWordsEnglish [9]  = new Array(2,10);
coloredWordsEnglish [10]  = new Array(1,2,3,10,21);

/*******************************/
var languages = new Array(languageEnglish);
var sounds = new Array(soundsEnglish);
var images = new Array(imgsEnglish);
var highlights = new Array(highlightsEnglish);
var coloredWords= new Array(coloredWordsEnglish);
var introductionImages=new Array(introductionImageEnglish);
var introductionSounds=new Array(introductionSoundEnglish);
var shareImages=new Array(shareImageEnglish);