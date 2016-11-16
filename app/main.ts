import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log("The application is working"))
  .catch(err => console.log(err));
  /*
  const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
*/
