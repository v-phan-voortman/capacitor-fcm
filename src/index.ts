import { registerPlugin } from '@capacitor/core';

import type { FirebaseCloudMessagingPlugin } from './definitions';

const FirebaseCloudMessaging = registerPlugin<FirebaseCloudMessagingPlugin>('FirebaseCloudMessaging', {
  web: () => import('./web').then((m) => new m.FirebaseCloudMessagingWeb()),
});

export * from './definitions';
export { FirebaseCloudMessaging };
