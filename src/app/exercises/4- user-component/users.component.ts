import { OnInit, OnDestroy } from '@angular/core';

import { UserService } from './user.service';
import { Subscription } from 'rxjs/internal/Subscription';

export class UsersComponent implements OnInit, OnDestroy {
  users: any[];
  subscription: Subscription;

  constructor(private _service: UserService) {	}

	ngOnInit() {
    // @ts-ignore
		this.subscription = this._service.getUsers().subscribe(users => this.users = users);
  }

  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
  }

  deleteUser(user) {
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			let index = this.users.indexOf(user)
      this.users.splice(index, 1);

			this._service.deleteUser(user.id).subscribe(
        null, 
        err => {
          alert("Could not delete the user.");
          this.users.splice(index, 0, user);
        });
		}
	}
}
