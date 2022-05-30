import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicClientApplication, InteractionType, BrowserCacheLocation, IPublicClientApplication } from "@azure/msal-browser";
export function MSALInstanceFactory():IPublicClientApplication
{
  return new PublicClientApplication(
    {
      auth:{
        clientId:'f3798c7e-82a5-4de5-a1d3-11370cf8c11c',
        redirectUri:'https://629484e5b6a95f044846a16c--beautiful-douhua-bd6f94.netlify.app/',
      }
    }
  )
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [{
    provide:MSAL_INSTANCE,
    useFactory:MSALInstanceFactory
  },
  MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
