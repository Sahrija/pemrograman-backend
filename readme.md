## Run
```
cd ./task
npx nodemon app.js
```
or
```
npm run start
```

## Endpoints
- Read
```
http://localhost:3000/students/
```

- Create
```
http://localhost:3000/students/

{
	  "nama": "new student",
	  "email": "new student@gmail.com",
	  "nim": "0109",
	  "jurusan": "TI"
}
```

- Update
```
http://localhost:3000/students/{id}

{
  // "Optional columns can be skipped in updates."
	  "email": "edited_email@gmail.com"
}
```

- Delete
```
http://localhost:3000/students/{id}
```
