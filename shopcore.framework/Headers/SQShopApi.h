//
//  SQShopApi.h
//  shopcore
//
//  Created by Sunny on .
//

#import <UIKit/UIKit.h>
#import <shopcore/shopcore.h>

@interface SQShopApi : NSObject

/**
 注册
 */
+ (void)registerWithShopModel:(SQShopModel *)shopModel;

/**
 获取一个楼层view
 */
+ (UIView *)cellViewWithWidth:(CGFloat)width
         parentViewController:(UIViewController *)viewController
                     onHeight: (void (^)(CGFloat height))onHeight;
+ (void)cellViewScrollEnable: (BOOL)enable;

/**
 push一个新页面
 */
+ (void)pushWithViewController:(UIViewController *)viewController
                          page:(SQ_SHOP_PAGE)page
                         query:(NSString *)query;

/**
 初始化一个新页面
 */
+ (UIViewController *)initWithPage:(SQ_SHOP_PAGE)page
                             query:(NSString *)query;

/**
 sso授权登录
 */
+ (void)ssoWithAppId:(NSString *)appId userId:(NSString *)userId accessToken:(NSString *)accessToken;
/**
 获取token
 */
+ (NSString *)getAccessToken;
/**
 登出
 */
+ (void)logout;

@end

