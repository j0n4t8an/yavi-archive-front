import { Component } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.scss'
})
export class LibraryListComponent {
  constructor() { 
  }

  getToken() {
    const token = sessionStorage.getItem('token');
  
    if (token) {
      try {
        const decodedToken:any = jwt_decode.jwtDecode(token);
  
        console.log('Decoded Token:', decodedToken);
  
        if (decodedToken) {
          console.log('User ID:', decodedToken.id || 'No ID in token');
          console.log('User Email:', decodedToken.email || 'No Email in token');
          console.log('User Name:', decodedToken.firstName || 'No Name in token');
        } else {
          console.log('Decoded token is null or undefined');
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.log('No token found in sessionStorage');
    }
  }
}
