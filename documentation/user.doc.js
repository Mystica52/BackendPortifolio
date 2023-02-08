/**
 * @openapi
 * 
 * /auth:
 *      post:
 *          tags: [User]
 *          summary: This helps to create  an account. 
 *          description: Fill out all required inputs.
 *          requestBody:
 *              description: Provide account details
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                              email:
 *                                  type: string
 *                              password:
 *                                  type: string
 * 
 *          responses:
 *                  201:
 *                     description: user created successfully!
 *                  400:
 *                     description: Bad Request
 *                  404:
 *                     description: Not Found
 *                  500:
 *                     description: Internal server error
 * 
 * 
 * /auth/login:
 *      post:
 *          tags: [User]
 *          summary: This helps to sign in. 
 *          description: Fill out all required inputs.
 *          requestBody:
 *              description: Provide sign in  details
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              username:
 *                                  type: string
 *                              password:
 *                                  type: string
 *                              
 * 
 *          responses:
 *                  201:
 *                     description: login successfully!
 *                  400:
 *                     description: Bad Request
 *                  404:
 *                     description: Not Found
 *                  500:
 *                     description: Internal server error
 */