const jwt = require('jsonwebtoken');

const secret = 'long secret';

const token = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiaWF0IjoxNjAyMjI4NjU5LCJleHAiOjE2MDIzMTUwNTl9.MVuqKjdWa2hUJFQlOqzbIozb_VW-QhXb_V2VKInTxKg"

const valid = jwt.verify(token, secret);

console.log(valid);