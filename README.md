# Chatbots API

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## Getting Started


### Prerequisites

The following technologies must be installed before setting up the project.

- Node.js
- npm
- Postman (Testing Purposes)

### Installation

A step-by-step guide on how to install and set up your project.

1. Clone the repository.

   ```bash
   git clone https://github.com/fjorn-x/Chatbot-API.git
   ```

1. Change the current directory to th project directory.

   ```bash
   cd chatbotApi
   ```

1. Install the project dependencies

   ```bash
   npm install
   ```

1. Start the Server

   ```bash
   npm start
   ```

## Usage

### API Endpoints

Test all the following API Endpoints using the Postman Collection Included or Manually through a similar API testing Platform :

#### Users

- POST /users - Create a new user
- GET /users - List all users
- GET /users/:id - Retrieve a single user
- PUT /users/:id - Update a user
- DELETE /users/:id - Delete a user

#### Chatbots

- POST /users/:userId/chatbots - Create a new chatbot for a user
- GET /users/:userId/chatbots - List all chatbots for a user
- GET /chatbots/:chatbotId - Retrieve a single chatbot
- PUT /chatbots/:chatbotId - Update a chatbot
- DELETE /chatbots/:chatbotId - Delete a chatbot

#### Conversations

- POST /chatbots/:chatbotId/conversations - Start a new conversation for a chatbot
- GET /chatbots/:chatbotId/conversations - List all conversations for a chatbot
- GET /conversations/:conversationId - Retrieve a single conversation
- PUT /conversations/:conversationId - Update a conversation (for instance, to mark it as completed)
- DELETE /conversations/:conversationId - End/delete a conversation

#### EndUsers

- POST /endusers - Register a new end user
- GET /endusers - List all end users
- GET /endusers/:endUserId - Retrieve details of a single end user
- PUT /endusers/:endUserId - Update end user details
- DELETE /endusers/:endUserId - Delete an end user
