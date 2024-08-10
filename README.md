
# Gemini Time Complexity Project

Welcome to the Gemini Time Complexity Project!, Previously known as Gemini API Project, This project aims to provide a robust and efficient website to find the time complexity of any program 
you can access the website through this link : https://gemini-time-complexity-project.onrender.com/

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Contact](#contact)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- [Node.js](https://nodejs.org/) (version 22.4.1)
- [npm](https://www.npmjs.com/) (version 10.8.1)

### Installation

A step-by-step guide to get a development environment running:

1. Clone the repository:
   ```sh
   git clone https://github.com/matrixton02/gemini_api_project.git
   cd gemini_api_project
   ```

2. Install dependencies:
   ```sh
   npm install @google/generative-ai body-parser cors dotenv express path --save
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following :
   note you can get your gemini api by heading to https://ai.google.dev/aistudio and sign-in and click on "get api key" and copy that and put that value in between " " as shown below
   ```
   GEMINI_API_KEY = "AI..."
   ```

4. Start the server:
   \`\`\`sh
   npm start
   \`\`\`

## Usage

Explain how to use the API, including code snippets, if necessary.

## API Endpoints

A comprehensive list of API endpoints:

- `GET /` - Lands you at the main home page of the program
- `POST /send-text` - send request to the server which in turn sends request to the gemini ai servers and return a response 

(Include detailed descriptions, request parameters, and example responses for each endpoint.)

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## Contact

Maintained by [Soumyajyoti Mohanta](https://github.com/HelloSniperMonkey) & [Yashasvi Kumar Tiwari](https://github.com/matrixton02).

For any queries, please contact soumyajyotimohanta@gmail.com or yashasvikumartiwari@gmail.com.
