export interface FirebaseCloudMessagingPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
