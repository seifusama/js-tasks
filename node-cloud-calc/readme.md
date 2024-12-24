# Cloud Calculator

## Description

This project implements a simple cloud-based calculator using Node.js's HTTP module. The calculator performs basic arithmetic operations (addition, subtraction, multiplication, division) and returns the result based on the request URL.

---

## Task Statement

You need to create an HTTP server that:

1. Parses the request URL to extract the operation and operands.
2. Performs the specified operation:
   - **Add**: `a + b`
   - **Subtract**: `a - b`
   - **Multiply**: `a * b`
   - **Divide**: `a / b`
3. Responds with the result as plain text.

### Request URL Format

```
/[operation]?a=[num1]&b=[num2]
```

- **operation**: One of `add`, `sub`, `multiply`, `div`.
- **a**: First operand (integer).
- **b**: Second operand (integer).

### Example

**Request**:  
`http://localhost:3000/add?a=3&b=6`  

**Response**:  
`9`

---

## Code

```javascript
let http = require("http");
let url = require("url");

let server = http.createServer(function(req, res){

    let parsedUrl = url.parse(req.url, true);
    let pathName = parsedUrl.pathname;
    let query = parsedUrl.query;

    let a = parseInt(query.a);
    let b = parseInt(query.b);
    
    let x;
    switch(pathName){
        case "/add":
            x = a + b;
            break;
        case "/sub":
            x = a - b;
            break;
        case "/multiply":
            x = a * b;
            break;
        case "/div":
            x = a / b;
            break;
        default:
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.end("Invalid operation");
            return;
    }
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(x.toString());
});

server.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});
```

---

## How It Works

1. **Request Parsing**:
   - The `url` module is used to parse the incoming request.
   - The operation is extracted from the URL's path (`/add`, `/sub`, etc.).
   - Query parameters (`a` and `b`) are parsed to retrieve the operands.

2. **Switch Statement**:
   - Depending on the operation (`pathName`), the corresponding arithmetic operation is performed.

3. **Response**:
   - The result is sent back to the client as plain text.

4. **Error Handling**:
   - If the requested operation is not valid, a `404 Invalid operation` response is sent.

---

## How to Use

1. Save the code to a file, e.g., `cloud-calculator.js`.
2. Run the file using Node.js:

   ```bash
   node cloud-calculator.js
   ```

3. Open your browser or use a tool like `curl` to send requests to the server:
   - `http://localhost:3000/add?a=3&b=6` -> Returns `9`
   - `http://localhost:3000/sub?a=10&b=4` -> Returns `6`
   - `http://localhost:3000/multiply?a=5&b=7` -> Returns `35`
   - `http://localhost:3000/div?a=20&b=4` -> Returns `5`

---

## Features

- Supports addition, subtraction, multiplication, and division.
- Parses query parameters dynamically.
- Returns plain text responses.
- Provides a 404 error for invalid operations.

---

## Example Usage

**Request**:

```bash
curl "http://localhost:3000/multiply?a=4&b=5"
```

**Response**:

```
20
```

---

## Notes

- Ensure that `a` and `b` are valid integers in the query parameters.
- Division by zero will return `Infinity` as per JavaScript's behavior.

---
