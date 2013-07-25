//Language Resources
/*******************************/

var introductionImageEnglish="res/introduction.png";
var introductionSoundEnglish="res/introduction.wav";

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

var soundEnglishPage0= "res/page0.mp3";
var soundEnglishPage1= "";
var soundEnglishPage2= "res/page2.wav";
var soundEnglishPage3= "res/page3.wav";
var soundEnglishPage4= "res/page4.wav";
var soundEnglishPage5= "res/page5.wav";
var soundEnglishPage6= "res/page6.wav";
var soundEnglishPage7= "res/page7.wav";
var soundEnglishPage8= "res/page8.wav";
var soundEnglishPage9= "res/page9.wav";
var soundEnglishPage10= "res/page10.wav";

//Normal Resources
/*******************************/
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

var pages=11;
var idEnglish=0;
var transitionTime=1.0;
var btnPaddingWidth=10;
var fntArialRoundedMTBoldStr="Arial Rounded MT Bold";
var fntSize=24;
var colorWord=cc.c3b(237,20,91);
var highlightTime=0.5;
var highlightColor=cc.c3b(255, 244, 80);
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
languageEnglish [2]  = "Lucy is a girl that has a puppy with lots of colours.\n Its name is Timmy!";
languageEnglish [3]  = "Lucy has breakfast with Timy and at night she sleeps with Timy.";
languageEnglish [4]  = "Every day, when she comes from the school,\n she goes to her bedroom to kiss Timmy.";
languageEnglish [5]  = "– Oh! Oh! Timy is not here! – cries Lucy. \n– Mummy, daddy, Timy is not in the bedroom!\n Where is it? What happens with it?";
languageEnglish [6]  = "Her mother asks Lucy where she has left Timy this morning\n and Lucy, very sad, answers: - On my bed! ";
languageEnglish [7]  = "- Hey, Lucy ! – says her mother. Let’s go and look for it!\n But I think you have to be tidier.";
languageEnglish [8]  = "When they arrive at the bedroom Timy is not on the bed \nand the mother looks around the bedroom.";
languageEnglish [9]  = "- Look! Here is Timy, little hidden or little lost! What do you think, Lucy?";
languageEnglish [10]  = "- Oh, mummy!, thank you mummy! – I love you Timy – says Lucy.\n – Now, every day, Lucy and Timy take some minutes to tidy up the toys.";

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
highlightsEnglish [2]  = new Array(1.0,1.5,2.0,2.5,3.0,3.5,4.0,4.5,5.0,5.5,6.0);
highlightsEnglish [3]  = new Array();
highlightsEnglish [4]  = new Array();
highlightsEnglish [5]  = new Array();
highlightsEnglish [6]  = new Array();
highlightsEnglish [7]  = new Array();
highlightsEnglish [8]  = new Array();
highlightsEnglish [9]  = new Array();
highlightsEnglish [10]  = new Array();


var coloredWordsEnglish = new Array(pages);
coloredWordsEnglish [0]  = new Array(2,7,12);
coloredWordsEnglish [1]  = new Array();
coloredWordsEnglish [2]  = new Array(7,-1);
coloredWordsEnglish [3]  = new Array(12,-1);
coloredWordsEnglish [4]  = new Array(2,7,12);
coloredWordsEnglish [5]  = new Array(5,-1);
coloredWordsEnglish [6]  = new Array(9,-1);
coloredWordsEnglish [7]  = new Array(2,7,12);
coloredWordsEnglish [8]  = new Array();
coloredWordsEnglish [9]  = new Array();
coloredWordsEnglish [10]  = new Array(6,-1);

/*******************************/
var languages = new Array(languageEnglish);
var sounds = new Array(soundsEnglish);
var images = new Array(imgsEnglish);
var highlights = new Array(highlightsEnglish);
var coloredWords= new Array(coloredWordsEnglish);
var introductionImages=new Array(introductionImageEnglish);
var introductionSounds=new Array(introductionSoundEnglish);
var shareImages=new Array(shareImageEnglish);