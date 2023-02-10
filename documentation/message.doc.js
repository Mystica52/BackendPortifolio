/**
 * @openapi
 * 
 * /messages/createMessage:
 *      post:
 *          tags: [Message]
 *          summary: This helps to create a message. 
 *          description: Fill out all required inputs.
 *          requestBody:
 *              description: Provide message details
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                              address:
 *                                  type: string
 *                              message:
 *                                  type: string
 * 
 *          responses:
 *                  201:
 *                     description: message created successfully!
 *                  400:
 *                     description: Bad Request
 *                  404:
 *                     description: Not Found
 *                  500:
 *                     description: Internal server error
 * 
 * 
 * /messages:
 *      get:
 *          tags: [Message]
 *          summary: This request list all messages from database
 *          description: List all messages
 * 
 *          responses:
 *                  200:
 *                      description: messages retrieved successfully
 * 
 * /messages/{id}:
 *      get:
 *          tags: [Message]
 *          summary: This request list a single message
 *          description: List a message
 *          parameters:
 *            - name: id
 *              in: path
 *              description: Provide a message id
 *              required: true
 *          responses:
 *                  200:
 *                      description: A message retrieved successfully
 * 
 * /messages/update/{id}:
 *      patch:
 *              tags: [Message]
 *              summary: This request will update a message
 *              description: Update a message
 *              parameters:
 *                - name: id
 *                  in: path
 *                  description: Provide a message id
 *                  required: true
 *              requestBody:
 *                  description: Provide message details
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  name:
 *                                      type: string
 *                                  address:
 *                                      type: string
 *                                  message:
 *                                      type: string
 *              
 *              responses:
 *                      200:
 *                          description: A message deleted successfully

 * /messages/delete/{id}:
 *      delete:
 *              tags: [Message]
 *              summary: This request will delete a message
 *              description: Delete a message
 *              parameters:
 *                - name: id
 *                  in: path
 *                  description: Provide a message id
 *                  required: true
 *              responses:
 *                      200:
 *                          description: A message deleted successfully
 */