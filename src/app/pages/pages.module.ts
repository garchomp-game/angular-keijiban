import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIndexComponent } from './user/user-index/user-index.component';
import { UserShowComponent } from './user/user-show/user-show.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { BoardIndexComponent } from './board/board-index/board-index.component';
import { BoardShowComponent } from './board/board-show/board-show.component';
import { BoardEditComponent } from './board/board-edit/board-edit.component';
import { BoardCreateComponent } from './board/board-create/board-create.component';
import { ChatIndexComponent } from './chat/chat-index/chat-index.component';
import { ChatShowComponent } from './chat/chat-show/chat-show.component';
import { ChatEditComponent } from './chat/chat-edit/chat-edit.component';
import { ChatCreateComponent } from './chat/chat-create/chat-create.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';



@NgModule({
  declarations: [
    UserIndexComponent,
    UserShowComponent,
    UserEditComponent,
    UserCreateComponent,
    BoardIndexComponent,
    BoardShowComponent,
    BoardEditComponent,
    BoardCreateComponent,
    ChatIndexComponent,
    ChatShowComponent,
    ChatEditComponent,
    ChatCreateComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    UserIndexComponent,
    UserShowComponent,
    UserEditComponent,
    UserCreateComponent,
    BoardIndexComponent,
    BoardShowComponent,
    BoardEditComponent,
    BoardCreateComponent,
    ChatIndexComponent,
    ChatShowComponent,
    ChatEditComponent,
    ChatCreateComponent,
    LoginComponent,
    SignupComponent
  ],
})
export class PagesModule { }
