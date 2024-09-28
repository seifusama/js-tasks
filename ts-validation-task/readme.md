Validation Task

Implement a simple express application which includes a registration form. The form contains these fields:

- Full Name (Can't contain numbers)

- Email (Must be valid and @gmail.com)

- Password (Must be between 8 and 64 characters, contain at least one number, one uppercase character and one lowercase character)

- Password Confirm (Must be same as password)

- Birthdate (Must be a date)

Perform server-side validation with express-validator or any other package, if there are any validation errors, send them back to the client. otherwise, send "SUCCESSFUL".

Note: Don't assign the port number directly to your code. Configure a .env file to carry the port number in a PORT variable. Don't forget to add the .env file to the ignored files by git. Use 5000 as a default value if the variable is not assigned.