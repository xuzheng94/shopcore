cordova.define("cordova-plugin-api.api", function(require, exports, module) {

function Api () {
}

// for temp test
Api.prototype.test = function (msg) {
    console.log('hello', msg)
};
    
Api.prototype.getSystemInfo = function() {
    return cordova.device
}

function MiniProgram () {
}

// 路由

let lastNavToTime = null
MiniProgram.prototype.navigateTo = function(obj) {
    if (lastNavToTime && new Date().getTime() - lastNavToTime < 100) {
        return
    }
    lastNavToTime = new Date().getTime()

    plus.jsbridge.navigateTo(obj.url)
}

MiniProgram.prototype.navigateBack = function(obj) {
    plus.jsbridge.navigateBack()
}

MiniProgram.prototype.switchTab = function(obj) {
    plus.jsbridge.switchTab(obj.url)
}

MiniProgram.prototype.reLaunch = function(obj) {
    plus.jsbridge.reLaunch(obj.url)
}

MiniProgram.prototype.redirectTo = function(obj) {
    plus.jsbridge.redirectTo(obj.url)
}

// 设备信息
MiniProgram.prototype.getEnv = function() {
    return cordova.device
}

// 发送消息给宿主
MiniProgram.prototype.postMessage = function() {

}

Api.prototype.miniProgram = new MiniProgram()

// 图片

Api.prototype.previewImage = function(obj) {
    plus.jsbridge.previewImage(obj)
}

Api.prototype.chooseImage = function(obj) {
    plus.jsbridge.chooseImage(obj)
}
    
Api.prototype.getLocalImgData = function(obj) {
    plus.jsbridge.getLocalImgData(obj)
}

Api.prototype.saveImageToPhotosAlbum = function(obj) {
    plus.jsbridge.saveImageToPhotosAlbum(obj)
}
    
Api.prototype.getLocation = function(obj) {
    plus.jsbridge.getLocation(obj)
}

Api.prototype.scanCode = function(obj) {
    plus.jsbridge.scanCode(obj)
}
    
Api.prototype.requestPayment = function(obj) {
    plus.jsbridge.requestPayment(obj)
}
    
Api.prototype.login = function(obj) {
    plus.jsbridge.login(obj)
}

Api.prototype.loginWithApple = function(obj) {
    plus.jsbridge.loginWithApple(obj)
}
    
Api.prototype.isWXAppInstalled = function(obj) {
    plus.jsbridge.isWXAppInstalled(obj)
}
    
Api.prototype.setLocale = function(obj) {
    plus.jsbridge.setLocale(obj)
}
    
Api.prototype.setMchId = function(obj) {
    plus.jsbridge.setMchId(obj)
}
 
Api.prototype.getMchId = function(obj) {
    plus.jsbridge.getMchId(obj)
}
    
Api.prototype.reloadPage = function(obj) {
    plus.jsbridge.reloadPage(obj)
}
    
Api.prototype.setStorage = function(obj) {
    plus.jsbridge.setStorage(obj)
}
    
Api.prototype.openMiniProgram = function(obj) {
    plus.jsbridge.openMiniProgram(obj)
}
    
Api.prototype.exitApp = function(obj) {
    plus.jsbridge.exitApp(obj)
}

Api.prototype.reloadPreviousPage = function(obj) {
    plus.jsbridge.reloadPreviousPage(obj)
}
    
Api.prototype.getResInfo = function(obj) {
    plus.jsbridge.getResInfo(obj)
}
Api.prototype.getNetworkType = function(obj) {
    plus.jsbridge.getNetworkType(obj)
}
Api.prototype.share = function(obj) {
    plus.jsbridge.share(obj)
}
Api.prototype.setStatusBarStyle = function(obj) {
    plus.jsbridge.setStatusBarStyle(obj)
}
Api.prototype.adjustSdkWindowSize = function(obj) {
    plus.jsbridge.adjustSdkWindowSize(obj)
}

    
module.exports = new Api();

});
