import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  AngularFireDatabase } from '@angular/fire/database';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private basePath: string = '/Users';
/*
  users = null; //  list of objects
  user = null; //   single object

  constructor(private db: AngularFireDatabase) { }
  getItemsList(query={}): any {
    this.users = this.db.list(this.basePath, {
      query: query
    });
    return this.users
  }

  // Return a single observable user
  getItem(key: string): FirebaseObjectObservable<User> {
    const userPath =  `${this.basePath}/${key}`;
    this.user = this.db.object(userPath)
    return this.user
  }
  createUser(item: User): void  {
    this.users.push(User)
      .catch(error => this.handleError(error))
  }


  // Update an existing user
  updateUser(key: string, value: any): void {
    this.users.update(key, value)
      .catch(error => this.handleError(error))
  }

  // Deletes a single user
  deleteUser(key: string): void {
      this.users.remove(key)
        .catch(error => this.handleError(error))
  }

  // Deletes the entire list of users
  deleteAll(): void {
      this.users.remove()
        .catch(error => this.handleError(error))
  }

  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }
  */
}
