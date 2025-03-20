import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatalogItemComponent } from './features/catalog/catalog-item/catalog-item.component';
import { CatalogComponent } from './features/catalog/catalog.component';

export const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  {
    path: 'item-profile',
    component: CatalogItemComponent,
  },
];
