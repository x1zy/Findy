import { makeAutoObservable } from "mobx";

export default class UserStore {
  _isAuth = false;
  _user = {}; 
  static instance = new UserStore(); 

  constructor() {
    makeAutoObservable(this);
    
    if (localStorage.getItem('isAuth')) {
        this._isAuth = JSON.parse(localStorage.getItem('isAuth'));
    }
    
    if (localStorage.getItem('userId')) {
        this._user.id = localStorage.getItem('userId');
    }
    
    if (localStorage.getItem('username')) {
        this._user.username = localStorage.getItem('username');
    }
}


  static getInstance() {
    return this.instance;
  }

  setIsAuth(bool) {
    this._isAuth = bool;
    localStorage.setItem('isAuth', bool); // Сохранение в Local Storage
  }
  

  isAuthenticated() {
    return this._isAuth;
  }

  setUser(user_data) {
    this._user = {
        ...this._user,
        id: user_data.id,
        username: user_data.username
    };
    localStorage.setItem('userId', user_data.id);
    localStorage.setItem('username', user_data.username); // Сохранение имени пользователя в Local Storage
}




  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}
