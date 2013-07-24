cc.AudioEngine.getInstance().setEffectsVolume(1.0);
cc.AudioEngine.getInstance().setMusicVolume(1.0);

var shareLayer = cc.Layer.extend({
    init:function () {

        this._super();

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
