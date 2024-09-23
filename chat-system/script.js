function Chat() {
    let users = [];
    const login = function(user) {
        users.push(user);
    }
    const logout = function(user) {
        const idx = users.indexOf(user);
        if(idx > -1) {
            users.splice(idx,1);
        }
    }
    const isOnline = function(user) {
        return users.indexOf(user) > -1;
    }
    const countOnline = function() {
        let n = users.length;
        return n;
    }
    const countLogins = function() {}
  
    return {
      login,
      logout,
      isOnline,
      countOnline,
      countLogins
    }
  }
  
  const myChat = Chat();
  myChat.login(3);
  myChat.login(2);
  myChat.logout(3);
  console.log(myChat.countOnline()); // 1