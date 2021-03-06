import { AppErrorHandler } from './globle-error-handeler/error-handeler';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';


import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { LikeComponent } from './like/like.component';
import { CommentComponent } from './comment/comment.component';
import { ServiceService } from './service/service.service';
import { StockManageComponent } from './data-table/stock-manage/stock-manage.component';
import { ProductsComponent } from './data-table/products/products.component';
import { ZippyComponent } from './zippy/zippy.component';
import { AmericonStanderedDirective } from './derecives/americon-standered.directive';
import { AmericanPhoneComponent } from './american-phone/american-phone.component';
import { ResgisterComponent } from './template-driven-forms/resgister/resgister.component';
import { ContactFormComponent } from './reactive-form/contact-form/contact-form.component';
import { PasswordChangeComponent } from './reactive-form/password-change/password-change.component';
import { HttpPostComponent } from './http-services/http-post/http-post.component';
import { from } from 'rxjs';
import { GithubFollowersComponent } from './http-services/github-followers/github-followers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoComponent } from './todo/todo.component';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';






@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LikeComponent,
    CommentComponent,
    StockManageComponent,
    ProductsComponent,
    ZippyComponent,
    AmericonStanderedDirective,
    AmericanPhoneComponent,
    ResgisterComponent,
    ContactFormComponent,
    PasswordChangeComponent,
    HttpPostComponent,
    GithubFollowersComponent,
    TodoComponent,
    AngularmaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatChipsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '**', component : PageNotFoundComponent }
    ])
  ],
  providers: [
    ServiceService,
    { provide: ErrorHandler , useClass : AppErrorHandler}  // interception
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
