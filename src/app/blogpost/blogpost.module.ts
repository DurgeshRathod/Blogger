import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { CategoriesComponent } from './categories/categories.component';
import { BlogpostFeaturedComponent } from './blogpost-featured/blogpost-featured.component';

@NgModule({
  declarations: [BlogpostListComponent, BlogpostDetailComponent, BlogpostFeaturedComponent, BlogpostRecentComponent, CategoriesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BlogpostFeaturedComponent
  ]
})
export class BlogpostModule { }
