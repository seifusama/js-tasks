# GitHub User Repositories Fetcher

## Description

This is a Node.js CLI application that interacts with the GitHub API to fetch repositories of a specified GitHub user. The application prompts the user to input a GitHub username, retrieves the list of repositories for that user, and saves the repository data in a file named `USERNAME.txt` within a `users` directory.

---

## Features

- **User Input**: Accepts a GitHub username from the console.
- **API Integration**: Fetches repositories using the GitHub API.
- **File Storage**: Saves the repository data in a structured JSON format to a file named `USERNAME.txt` in the `users` directory.
- **Directory Management**: Ensures the `users` directory exists before saving the file.

---

## Requirements

- Node.js installed on your machine.
- Internet connection to access the GitHub API.

---

## Installation

1. Clone this repository or save the code to a file, e.g., `github-fetcher.js`.
2. Install Node.js if you haven't already: [Node.js Downloads](https://nodejs.org/).
3. Navigate to the directory containing the file.

---

## Usage

1. Run the application:

   ```bash
   node github-fetcher.js
   ```

2. Input a GitHub username when prompted.

3. The application will:
   - Fetch the repositories for the provided username.
   - Save the data in a file named `USERNAME.txt` inside a `users` directory.
   - Log `done!!` upon successful completion.

---

## Example

**Input**:

```
input username
octocat
```

**Output**:

- A file named `octocat.txt` is created in the `users` directory containing the repositories in JSON format.

---

## Code

```javascript
const readline = require('node:readline');
const fs = require("fs");
const fetch = require("node-fetch");

fs.mkdir('./users', { recursive: true }, (err) => {
  if (err) {
    return console.error(`Error creating directory: ${err}`);
  }
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('input username\n', username => {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(json => {
            fs.writeFile(`./users/${username}.txt`, JSON.stringify(json, null, 2), function(err) {
                if (err) {
                    console.error(`Error writing file: ${err}`);
                } else {
                    console.log("done!!");
                }
            });
        })
        .catch(err => console.error(`Error fetching data: ${err}`));
    rl.close();
});
```

---

## Notes

- **Dependencies**:
  - This application uses the `node-fetch` library to make API calls. Install it using:

    ```bash
    npm install node-fetch
    ```

- **Error Handling**:
  - The application logs errors if the directory creation, API fetch, or file write operations fail.
  - If the username is invalid or the user has no repositories, appropriate messages may be logged.

---

## Limitations

- Rate limits of the GitHub API may apply. For unauthenticated requests, the limit is 60 requests per hour. Use a token for higher limits.

---
