# Express Registration Form with Validation

This project demonstrates a simple registration form using Express.js with server-side validation using the `express-validator` package. It validates various user input fields such as name, email, password, and birthdate before submission. If any validation fails, errors are sent back to the client. Otherwise, the form submission is considered successful.

## Features

- Validates **Full Name** (Only letters, no numbers)
- Validates **Email** (Must be a valid Gmail address)
- Validates **Password** (Must contain at least one number, one uppercase letter, and one lowercase letter, length between 8 and 64 characters)
- Validates **Password Confirm** (Must match the original password)
- Validates **Birthdate** (Day, Month, and Year must be valid integers within specific ranges)

## Folder Structure

- **index.ts**: Main server-side logic.
- **views/index.ejs**: Frontend template that renders the registration form.
- **.env**: Environment variables (e.g., server port).
- **.gitignore**: Ignore unnecessary files (e.g., `node_modules`, `.env`).

## .env Example

```env
PORT=5000
```

## Technologies Used

- **Express.js**: Framework for building the server.
- **express-validator**: Middleware for server-side form validation.
- **EJS**: Templating engine for rendering views.
- **dotenv**: Loads environment variables from the `.env` file.
- **morgan**: HTTP request logger middleware.

## Notes

- The validation ensures that only valid data is submitted and provides feedback to the user when an error occurs.
- The server runs on port `5000` by default, but this can be changed via the `.env` file.
