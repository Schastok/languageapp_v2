import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'authenticate',
    pathMatch: 'full'
  },

  {
    path: 'lessons',
    children: [
      {
        path: '',
        loadChildren: () => import('./lessons/lessons.module').then( m => m.LessonsPageModule)
      },

      {
        path: ':lessonId/:lessonImage/:lessonName/:lessonDescription/overview',
        loadChildren: () => import('./lessons/main/main.module').then( m => m.MainPageModule)
      },

      {
        path: 'learn',
        children:[
            {
            path: ':lessonId',
            loadChildren: () => import('./lessons/learn/learn.module').then( m => m.LearnPageModule)
             },
            {
            path: ':lessonId/section/:sectionId',
            loadChildren: () => import('./lessons/learn/section/section.module').then( m => m.SectionPageModule)
             },

        ]

      },
      {
        path: 'study',
        children:[
            {
            path: ':lessonId',
            //redirectTo: ':lessonId/do_set',
            loadChildren: () => import('./lessons/study/study.module').then( m => m.StudyPageModule)
             },
            {
            path: ':lessonId/do_set',
            loadChildren: () => import('./lessons/study/do-set/do-set.module').then( m => m.DoSetPageModule),
             },
             {
             path: ':lessonId/view_set',
             loadChildren: () => import('./lessons/study/view-set/view-set.module').then( m => m.ViewSetPageModule),
              },
        ],
        runGuardsAndResolvers: 'always'

      },
      {
        path: 'quiz',
        children:[
            {
            path: ':lessonId',
            loadChildren: () => import('./lessons/quiz/quiz.module').then( m => m.QuizPageModule)
             },
            {
            path: ':lessonId/do_quiz/:quizId',
            loadChildren: () => import('./lessons/quiz/do-quiz/do-quiz.module').then( m => m.DoQuizPageModule)
             },

        ]
      },
    ]
  },
  {
    path: 'authenticate',
    loadChildren: () => import('./authenticate/authenticate.module').then( m => m.AuthenticatePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
