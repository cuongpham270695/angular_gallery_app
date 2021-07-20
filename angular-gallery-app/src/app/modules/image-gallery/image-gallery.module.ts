import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageGalleryComponent} from "../../components/image-gallery/image-gallery.component";
import {ImageCardComponent} from "../../components/image-gallery/image-card/image-card.component";



@NgModule({
  declarations: [
    ImageGalleryComponent,
    ImageCardComponent
  ],
  exports: [
    ImageGalleryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImageGalleryModule { }
