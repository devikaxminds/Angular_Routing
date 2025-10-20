import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<EditProfileComponent> {

  canDeactivate(component: EditProfileComponent): boolean {
    if (component.hasUnsavedChanges()) {
      return confirm('You have unsaved changes! Are you sure you want to leave this page?');
    }
    return true;
  }
}
