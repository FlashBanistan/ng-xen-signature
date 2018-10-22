import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormBuilderContainerComponent } from './form-builder-container.component';
import { ThumbnailViewerComponent } from './components/thumbnail-viewer/thumbnail-viewer.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
  ],
  exports: [
    FormBuilderContainerComponent
  ],
  declarations: [
    FormBuilderContainerComponent,
    ThumbnailViewerComponent,
    ImageViewerComponent,
    ComponentViewerComponent
  ]
})
export class FormBuilderModule { }
