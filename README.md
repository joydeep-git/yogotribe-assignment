# Yogotribe Assignment

## Setup Installation

Follow these steps to set up the project locally:

1. Clone the repo  
2. Create a `.env` file outside the `src` folder and add `PORT=5000` to it  
3. Run `npm install`  
4. Run `npm run dev`  


## Paste this code in console or terminal

```bash
# Clone the repository
git clone git@github.com:joydeep-git/yogotribe-assignment.git

# Navigate to the project directory
cd yogotribe-assignment

# Create .env file and add the port=5000 to it
echo "PORT=5000" > .env

# Install dependencies
npm install

# Run the development server
npm run dev

```


#API Usage

# Route to check prime number

```POST```  ```http://localhost:5000/api/check ```

# Body
```
{
  "number": any_number
}
```


# Response
```
{
  "is_prime_number": true,
  "message": "61 is a prime number!"
}
```