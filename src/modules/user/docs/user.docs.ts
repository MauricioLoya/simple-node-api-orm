export const getUsersDoc = {
  tags: ['User'],
  description: "Returns all pets from the system that the user has access to",
  operationId: 'getPets',
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    "200": {
      description: "A list of pets.",
      "content": {
        "application/json": {
          schema: {
            type: "array",
            items: {
              pet_name: {
                type: 'string',
                description: 'Pet Name'
              },
              pet_age: {
                type: 'string',
                description: 'Pet Age'
              }
            }
          }
        }
      }
    }
  }
}

export const postUsersDoc = {
  tags: ['User'],
  description: "Returns all pets from the system that the user has access to",
  operationId: 'getPets',
  security: [
    {
      bearerAuth: []
    }
  ],
  requestBody: {
    description: 'dsadasd',
    required: true,
    "content": {
      "application/json": {
        "schema": {
          type: 'object',
          properties: {
            username: {
              type: 'string'
            }
          },
          required: ['username']
        }
      }
    }
  },
  responses: {
    "201": {
      description: "Created",
      "content": {
        "application/json": {
          schema: {
            type: "array",
            items: {
              pet_name: {
                type: 'string',
                description: 'Pet Name'
              },
              pet_age: {
                type: 'string',
                description: 'Pet Age'
              }
            }
          }
        }
      }
    }
  }
}
