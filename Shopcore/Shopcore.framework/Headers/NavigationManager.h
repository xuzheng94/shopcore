//
//  NavigationManager.h
//  shopcore
//
//  Created by Sunny on 2022/2/28.
//

#import <UIKit/UIKit.h>
#import <shopcore/TabBarController.h>

NS_ASSUME_NONNULL_BEGIN

@interface NavigationManager : NSObject

+ (UIWindow *)rootWindow;

/**
 获取跟视图控制器
 装修门脸的商家为门脸  --> FacadeViewController
 其他 --> TabBarViewController
 */
+ (UIViewController *)rootViewController;

/**
 重设跟视图控制器
 */
+ (void)resetRootViewControllerWithViewController: (UIViewController *)viewController;

/**
 重新进入tabBar页
 */
+ (void)reLaunchToTabBarController;

/**
 获得当前活动窗口控制器
 */
+ (UIViewController *)currentViewController;

+ (void)switchTabWithUrl:(NSString *)url;

@end

NS_ASSUME_NONNULL_END
