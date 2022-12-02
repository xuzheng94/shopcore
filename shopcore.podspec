Pod::Spec.new do |s|
    # 项目的名称
    s.name             = "Shopcore"   
    # 项目的版本号，通过项目git的tag标签进行对应，这里的标签代表的版本 
    s.version          = "1.0.5"    
    # 项目简单的描述信息        
    s.summary          = "5 Version"  
    # 项目的详细描述信息，注意，这里的文字的长度，一定要比上面的s.summary长，不然会认为格式不合格
    s.description  = "<<-DESC this project provide all kind of KeychainDeviceID for iOS developer DESC"
    # 项目的网页主页信息，这里可以直接写自己的远程仓库的主页的地址
    s.homepage         = "https://github.com/xuzheng94/shopcore.git"
    # 开源协议
    s.license          = "MIT"   
    # 作者信息          
    s.author             = { "sunny" => "18763895318@163.com" }                   
    # 这个比较重要，指的就是git的对应的远程仓库的地址以及版本号，版本号直接获取的是上面的s.version
    # 项目地址，这里不支持ssh的地址，验证不通过，只支持HTTP和HTTPS，最好使用HTTPS
    # Supported Keys:
    # :git => :tag, :branch, :commit, :submodules
    # :svn => :folder, :tag, :revision
    # :hg => :revision
    # :http => :flatten, :type, :sha256, :sha1
    s.source       = { :git => "https://github.com/xuzheng94/shopcore.git", :tag => s.version }                      
    # s.source = { :git => "https://github.com/xuzheng94/shopcore.git", 
    #     :tag => "#{s.version}"}
        # :submodules => true 
  
    # 如果是 Swift 的话指定 Swift 编译版本
    # s.swift_version = "4.0"
    
    # 必备项，代码源文件地址，如果有多个目录下则用逗号分开,否则"public_header_files"等不可用
    # s.source_files  = "GSLXYKeychainDeviceID/KeychainDeviceID/**/*.{h,m}"                               
    # s.resources  = "Shopcore/Shopcore.framework/*.bundle","*.xib","Shopcore.framework/Libs/*"
    # s.source_files  = "Shopcore/Shopcore.framework/Headers/*.{h,m}"
    # ,"Shopcore/Shopcore.framework/Libs/Cordova.framework/Headers/*.h"
    # 公开头文件地址
    # s.public_header_files = "Shopcore/Shopcore.framework/Headers/*.h"
    # ,"Shopcore/Shopcore.framework/Libs/Cordova.framework/Headers/*.h"
    # 所需的系统framework，多个用逗号隔开，不需要后缀名
    # s.framework  = "SomeFramework"
    s.frameworks = "UIKit"
    # 需要弱链接的框架
    # s.weak_framework = "Twitter"
    # s.weak_frameworks = "Twitter", "SafariServices"
    #项目依赖的库文件(这个是系统的库文件),不需要后缀名,比如sqlite,libz等.以lib开头的需要省略掉lib这三个字母.例如:libz需要简写为z否则报错
    # s.library   = "iconv"
    # s.libraries = "iconv", "xml2"
    # 第三方或自己创建的 .Framework的名称
    s.vendored_frameworks = "Shopcore/shopcore.framework"
    # "Shopcore/Shopcore.framework/Libs/*.framework"
    # 
    # 第三方或自己创建的 .a静态库的名称
    # s.vendored_libraries = "libYostarStaticLib.a"
    # 添加资源文件
    # s.resource = "XXX/XXXX/**/*.bundle"
    # s.resources = "XXX/XXXX/**/*.bundle"
    # CocoaPods会把这个库配置成static framework，同时支持Swift和Objective-C
    # s.static_framework = true
    # 依赖关系，该项目所依赖的其他，当在加载的时候也会一块把相关的依赖的库加载下来，如果有多个需要填写多个
    # s.dependency "Shopcore-Cordova-iOS", '~>1.0.2'
    # 是否使用ARC，如果指定具体文件，则具体的文件使用ARC      
    s.requires_arc = true
    # 指定项目配置，如HEADER_SEARCH_PATHS、OTHER_LDFLAGS等
    s.xcconfig = {"OTHER_LDFLAGS" => "-ObjC"}
    
    # s.pod_target_xcconfig = {'DEFINES_MODULE' => 'YES'}
    s.ios.deployment_target = "11.0"
  end