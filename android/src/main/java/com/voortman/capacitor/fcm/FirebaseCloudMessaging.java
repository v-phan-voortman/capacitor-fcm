package com.voortman.capacitor.fcm;

import com.getcapacitor.Logger;

public class FirebaseCloudMessaging {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}
