
import { jwtDecode } from 'jwt-decode';


class AuthService {
   
  
    loggedIn() {
      const token = this.getToken();
      return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp < Date.now() / 1000) {
          return true;
        } 
        return false;

      } catch (err) {
        return false;
      }
    }
  
  
    getToken() {
      return localStorage.getItem('id_token');
    }
  
    login(idToken) {
      localStorage.setItem('id_token', idToken);
  
      window.location.assign('/');
    }
  
    logout() {
      console.log("in lgoout")
      localStorage.removeItem('id_token');
      window.location.assign('/');
    }
  }
  
  export default new AuthService();