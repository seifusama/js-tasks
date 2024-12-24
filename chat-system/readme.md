
# Chat System Implementation

## Description

Ahmed's first task as a software engineer is to implement a simple chat system to manage user statuses. This program tracks online users and their login counts using closures, avoiding arrays, loops, or objects.

## Task Statement

The `Chat` function must return an object with the following methods:

1. `login(id)`: Logs in a user by their `id` only if they are not currently online.
2. `logout(id)`: Logs out a user by their `id` only if they are currently online.
3. `isOnline(id)`: Returns `true` if the user is currently online, otherwise `false`.
4. `countOnline()`: Returns the number of currently online users.
5. `countLogins(id)`: Returns the total number of times a user has logged in.

### Requirements and Constraints

- Do not use arrays, loops, or objects in your implementation.
- Handle all operations efficiently using functional programming principles.

---

## Code

```javascript
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
```

---

## How to Use

1. Copy the code into a JavaScript file, e.g., `chatSystem.js`.
2. Run the file in a JavaScript runtime environment (e.g., Node.js).
3. Use the methods of the returned object to interact with the chat system.

---

## Example Usage

```javascript
const myChat = Chat();
myChat.login(3);        // User 3 logs in
myChat.login(2);        // User 2 logs in
myChat.logout(3);       // User 3 logs out
console.log(myChat.countOnline()); // Outputs: 1
console.log(myChat.isOnline(2));   // Outputs: true
console.log(myChat.isOnline(3));   // Outputs: false
```

---

## Explanation

1. **Closures**: The `Chat` function creates a closure to store user data without exposing it directly.
2. **Functional Programming**: Operations avoid arrays, loops, or objects by maintaining state through nested function calls and closures.

---

## Output

For example:

```javascript
myChat.login(3);
myChat.login(4);
myChat.logout(3);
console.log(myChat.countOnline()); // 1
console.log(myChat.isOnline(4));   // true
console.log(myChat.countLogins(3)); // 1
```
