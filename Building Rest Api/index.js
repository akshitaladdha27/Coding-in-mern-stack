const express = require("express");// imports the Express framework
const users = require("./MOCK_DATA.json")//imports a JSON file named MOCK_DATA.json
const app = express();//This creates an instance of an Express application. The app variable will be used to define routes and handle requests.
const PORT = 8000;// sets the port number

//routes

app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});//This defines a route for handling GET requests to /users. When a request is made to this route, the callback function is executed (line1), A HTML string that contains a list of all users' first names(line2), 'users.map(...)': creates a list item (<li>) for each user's first name, (last line)The generated HTML string is sent as a response to the client.


// REST API
app.get('/api/users', (req, res) => {
    return res.json(users);
});//This route handles GET requests to /api/users. It sends the entire users array as a JSON response and The res.json() method automatically converts the JavaScript object (or array) into a JSON-formatted string and sends it to the client.

app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);//parseInt => insuring id is number
    const user = users.find((user) => user.id === id);
    return res.json(user);
})//we can give any name like :id or :userid

app.post('/api/users', (req, res) => {
    //TOOD: Create new user
    return res.json({ status: "pending"});
});

app.patch('/api/users/:id', (req, res) => {
    //TOOD: Edit the user id
    return res.json({ status: "pending"});
});

app.delete('/api/users/:id', (req, res) => {
    // TOOD: Delete the user with id
    return res.json({ status: "pending"});
});

/*As we can se there /api/users/:id (address) is conntinously callin three time so we can do write the code one for more than one function like as we see there is get, patch and delete func have same add. so we write 
=> app
.route("/api/users/:id")
.get((req, res) => {
    const id = parseInt(req.params.id);//insuring id is number
    const user = users.find((user) => user.id === id);
    return res.json(user);
    })
.patch((req, res) => {
    return res.json({ status: "pending"});
    })
.delete((req, res) => {
    return res.json({ status: "pending"});
    })
$this is because we don't have to edit every single function individually
*/

app.listen(PORT, () => console.log('Server Started at PORT:${}'))
