import { WebPlugin } from '@capacitor/core';

import type { FirebaseCloudMessagingPlugin } from './definitions';

export class FirebaseCloudMessagingWeb extends WebPlugin implements FirebaseCloudMessagingPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
