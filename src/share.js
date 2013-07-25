var shareLayer = cc.Layer.extend({
    init:function () {
        this._super();

        var size = cc.Director.getInstance().getWinSize();

        var idLanguage=-1;
        var currentLanguageType = cc.Application.getCurrentLanguage();
        switch (currentLanguageType) {
            case cc.LANGUAGE_ENGLISH:
                idLanguage= idEnglish;
                break;
            default:
                idLanguage= idEnglish;
        }

        var frameSprite=cc.Sprite.create(frame);
        frameSprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(frameSprite, 0);


        var backgroundSprite=cc.Sprite.create(shareImages[idLanguage]);
        backgroundSprite.setAnchorPoint(cc.p(0.5,1.0));



        var menuItemImageFacebook = cc.MenuItemImage.create(btnFacebookNormal,btnFacebookSelected,
            function () {

            },this);

        var menuItemImageMail = cc.MenuItemImage.create(btnMailNormal,btnMailSelected,
            function () {

            },this);
        var menuItemImageTwitter = cc.MenuItemImage.create(btnTwitterNormal,btnTwitterSelected,
            function () {

            },this);


        var sumHeight=menuItemImageFacebook.getContentSize().height + backgroundSprite.getContentSize().height;
        backgroundSprite.setPosition(cc.p(size.width / 2, (size.height / 2) +sumHeight/2));
        this.addChild(backgroundSprite, 0);

        var menuShare = cc.Menu.create(menuItemImageFacebook,menuItemImageMail,menuItemImageTwitter);
        menuShare.setAnchorPoint(cc.p(0.5,1.0));
        menuShare.setPosition(cc.p(size.width / 2, backgroundSprite.getPosition().y-backgroundSprite.getContentSize().height) );
        this.addChild(menuShare, 0);


        var menuItemImageHome = cc.MenuItemImage.create(btnHomeNormal,btnHomeSelected,
            function () {
                if(soundStatus)cc.AudioEngine.getInstance().playEffect(soundBtnStandard);
                currentPage=0;
                var director = cc.Director.getInstance();
                director.replaceScene(cc.TransitionProgressRadialCW.create(transitionTime,new bookScene()));
            },this);

        menuItemImageHome.setAnchorPoint(cc.p(0,0.5));
        menuItemImageHome.setPosition(cc.p(0+btnPaddingWidth,size.height-(((size.height-backgroundSprite.getContentSize().height)/2)/2)));

        var menuHome = cc.Menu.create(menuItemImageHome);
        menuHome.setPosition(cc.PointZero());
        this.addChild(menuHome, 0);

        return true;
    }
});

var shareScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var size = cc.Director.getInstance().getWinSize();
        this.addChild(cc.LayerColor.create(cc.c4b(255, 255, 255, 255), size.width,size.height),0);

        var shareL = new shareLayer();
        shareL.init(this);
        this.addChild(shareL,1);

    }
});
