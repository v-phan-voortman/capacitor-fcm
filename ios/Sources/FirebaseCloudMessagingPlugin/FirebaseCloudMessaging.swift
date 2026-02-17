import Foundation

@objc public class FirebaseCloudMessaging: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
