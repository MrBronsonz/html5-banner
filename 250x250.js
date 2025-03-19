(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={}, ss={}, img={};
lib.ssMetadata = [];

lib.properties = {
    id: 'B3EEFF8251532141B44C8B178343BFF9',
    width: 250,
    height: 250,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.00,
    manifest: [
        {src:"image_12.png", id:"image_12"},
        {src:"image_1.jpg", id:"image_1"},
        {src:"image_2.jpg", id:"image_2"},
        {src:"image_3.jpg", id:"image_3"},
        {src:"Logo_BONMARK.png", id:"Logo_BONMARK"}
    ],
    preloads: []
};

// Ensure images are correctly initialized
(lib.image_12 = function() {
    this.initialize(img.image_12);
}).prototype = p = new cjs.Bitmap();

(lib.image_1 = function() {
    this.initialize(img.image_1);
}).prototype = p = new cjs.Bitmap();

(lib.image_2 = function() {
    this.initialize(img.image_2);
}).prototype = p = new cjs.Bitmap();

(lib.image_3 = function() {
    this.initialize(img.image_3);
}).prototype = p = new cjs.Bitmap();

(lib.Logo_BONMARK = function() {
    this.initialize(img.Logo_BONMARK);
}).prototype = p = new cjs.Bitmap();

// MovieClip to handle animation
(lib.AnMovieClip = function(){
    this.actionFrames = [];
    this.ignorePause = false;
}).prototype = p = new cjs.MovieClip();

// Fix stage initialization
(lib.Stage = function(canvas) {
    createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
    this.tickEnabled = autoPlay;
};
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()); };
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; };
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); };
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; };

an.bootcompsLoaded = an.bootcompsLoaded || [];
if (!an.bootstrapListeners) {
    an.bootstrapListeners=[];
}

an.bootstrapCallback = function(fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if(an.bootcompsLoaded.length > 0) {
        for(var i=0; i<an.bootcompsLoaded.length; ++i) {
            fnCallback(an.bootcompsLoaded[i]);
        }
    }
};

an.compositions = an.compositions || {};
an.compositions['B3EEFF8251532141B44C8B178343BFF9'] = {
    getStage: function() { return exportRoot.stage; },
    getLibrary: function() { return lib; },
    getSpriteSheet: function() { return ss; },
    getImages: function() { return img; }
};

// Handle responsive scaling
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
    var lastW, lastH, lastS = 1;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
        var w = lib.properties.width, h = lib.properties.height;
        var iw = window.innerWidth, ih = window.innerHeight;
        var pRatio = window.devicePixelRatio || 1, xRatio = iw/w, yRatio = ih/h, sRatio = 1;
        if(isResp) {
            if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                sRatio = lastS;
            } else if (!isScale) {
                if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
            } else if (scaleType == 1) {
                sRatio = Math.min(xRatio, yRatio);
            } else if (scaleType == 2) {
                sRatio = Math.max(xRatio, yRatio);
            }
        }
        domContainers[0].width = w * pRatio * sRatio;
        domContainers[0].height = h * pRatio * sRatio;
        domContainers.forEach(function(container) {
            container.style.width = w * sRatio + 'px';
            container.style.height = h * sRatio + 'px';
        });
        stage.scaleX = pRatio * sRatio;
        stage.scaleY = pRatio * sRatio;
        lastW = iw; lastH = ih; lastS = sRatio;
        stage.tickOnUpdate = false;
        stage.update();
        stage.tickOnUpdate = true;
    }
};

// Handle animations and interactions
an.handleSoundStreamOnTick = function(event) {
    if (!event.paused) {
        var stageChild = stage.getChildAt(0);
        if (!stageChild.paused || stageChild.ignorePause) {
            stageChild.syncStreamSounds();
        }
    }
};

an.handleFilterCache = function(event) {
    if (!event.paused) {
        var target = event.target;
        if (target && target.filterCacheList) {
            for (var index = 0; index < target.filterCacheList.length; index++) {
                var cacheInst = target.filterCacheList[index];
                if (cacheInst.startFrame <= target.currentFrame && target.currentFrame <= cacheInst.endFrame) {
                    cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                }
            }
        }
    }
};

})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
