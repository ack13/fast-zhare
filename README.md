
# Fazt Zhare 
File Upload and Short Link Generation Platform

```href
https://fast-zhare.web.app/
```

*API*: ```https://file-share-api-cmfs.onrender.com```


## Tech Stack

**Client:** React, Ant Design, Axios

**Server:** Node, Express, MongoDB, JWT

**Cloud:** Google Firebase


### How to Use:

1. Open the application.
2. If you're a registered user, log in. If not, you can upload files publicly.
3. Select a file from your device.
4. Upload the file.
5. A short link will be generated for easy sharing.
6. You can view and use the generated download link.
7. Authenticated users can manage their files.

### How Short URLs are Generated:

Short URLs are created by combining the upload time and public URL using MD5 (Message Digest Algorithm).
## API Reference


### Implementation Choices:

- **Backend Framework**: We chose Node.js and Express for their efficiency in developing RESTful APIs, along with MongoDB and Mongoose for database storage.

- **Short URL Generation**: We implemented the MD5 hashing algorithm to generate unique short URLs based on file upload timestamps and public URLs.

- **API Security**: JWT authentication is used for securing the API, ensuring user authentication and authorization.

- **File Storage**: Firebase Storage is utilized for secure and scalable cloud storage.

### Challenges Faced:

- Hosting the frontend on remote servers led to routing issues, which were resolved by deploying static files via Firebase.

- Generating unique and collision-resistant short URLs with MD5 hashing was addressed through the combination of file properties and timestamps.

### Improvements with More Time:

- Enhanced short link generation to handle scalability in a multi-server system and prevent URL collisions.

- Implemented an automatic file removal mechanism using `node-cron` to delete expired files from Firebase Storage.
  
