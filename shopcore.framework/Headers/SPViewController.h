//
//  SPViewController.h
//  shopcore
//
//  Created by ethan on 2021/8/13.
//

#import <UIKit/UIKit.h>
#import <Cordova/Cordova.h>

NS_ASSUME_NONNULL_BEGIN

@interface SPViewController : CDVViewController


@property (strong, nonatomic) NSString *tag;
@property (strong, nonatomic) NSString *statusBarStyle;
@property NSString* titleStyle;

/**
 是否需要刷新页面
 1. 有新的package时
 */
@property (assign, nonatomic) BOOL needReload;

+ (instancetype) create:(NSString*)url;
+ (SPViewController*) create:(NSString*)url titleStyle:(nullable NSString *)titleStyle;
+ (SPViewController*) enter:(UIViewController*)fromVC loadUrl:(NSString*)url;
+ (SPViewController*) enter:(UIViewController*)fromVC loadUrl:(NSString*)url titleStyle:(nullable NSString *)titleStyle;

- (void)createWithUrl:(NSString*)url titleStyle:(nullable NSString *)titleStyle;

- (void)reloadWebview;

- (void)reloadWebviewWithUrl:(NSString *)url;

@end

NS_ASSUME_NONNULL_END
