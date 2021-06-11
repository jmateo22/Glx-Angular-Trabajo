import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlxComponentsModule } from '@galaxy/components';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkshopListView } from './view/workshop-list/workshop-list.view';
import { WorkshopDetailView } from './view/workshop-detail/workshop-detail.view';
import { GlxCardModule } from '@galaxy/components/card';
import { GlxIconModule } from '@galaxy/components/icon';
import { GlxButtonModule } from '@galaxy/components/button';
import { GlxFooterModule } from '@galaxy/components/footer';
import { ImgPathPipe } from './commons/pipes/img-path.pipe';
import { AppInterceptorsModule } from './commons/interceptors/interceptors.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WorkshopListView,
    WorkshopDetailView,
    ImgPathPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlxComponentsModule,
    GlxCardModule,
    GlxIconModule,
    GlxButtonModule,
    GlxFooterModule,
    HttpClientModule,
    AppInterceptorsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
