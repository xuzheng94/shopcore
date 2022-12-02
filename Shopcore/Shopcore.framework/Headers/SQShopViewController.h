//
//  SQShopViewController.h
//  shopcore
//
//  Created by Sunny on .
//

#import <UIKit/UIKit.h>
#import <shopcore/SPViewController.h>

NS_ASSUME_NONNULL_BEGIN

@interface SQShopViewController : SPViewController

+ (instancetype)initWithOnHeight:(void (^)(CGFloat))onHeight;

@property (assign, nonatomic) BOOL scrollEnable;

@end

NS_ASSUME_NONNULL_END
