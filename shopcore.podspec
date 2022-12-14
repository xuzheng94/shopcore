Pod::Spec.new do |s|
    s.name             = "Shopcore"   
    s.version          = "1.2.0"    
    s.summary          = "1.2.0 Version"  
    s.description  = "<<-DESC this project provide all kind of KeychainDeviceID for iOS developer DESC"
    s.homepage         = "https://github.com/xuzheng94/shopcore.git"
    s.license          = "MIT"        
    s.author             = { "sunny" => "18763895318@163.com" }                   
    s.source       = { :git => "https://github.com/xuzheng94/shopcore.git", :tag => s.version }                          
    s.frameworks = "UIKit"
    s.vendored_frameworks = "shopcore.framework"
    s.dependency "Shopcore-Cordova-iOS", '~>1.1.0'
    s.requires_arc = true
    s.xcconfig = {"OTHER_LDFLAGS" => "-ObjC"}
    s.ios.deployment_target = "11.0"
    s.pod_target_xcconfig = { 'EXCLUDED_ARCHS[sdk=iphonesimulator*]' => 'arm64' }
    s.user_target_xcconfig = { 'EXCLUDED_ARCHS[sdk=iphonesimulator*]' => 'arm64' }
  end