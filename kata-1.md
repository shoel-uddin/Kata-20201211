
# Express kata: from hello-world to HTML forms

If pairing:

- One developer creates the repo, adds the second developer as a collaborator.
- Let a developer be the "driver" (who does the coding), while the other developer "navigates" (advises on how to do the next step).
- When it's time to switch: the driver pushes their commits, the navigator pulls

## Steps

- [X] Set up express app

- [X] Add a home route that shows hello world text

- [X] Install and configure templating engine

- [X] Create a home template

- [X] Pass a local to the home template (i.e., a String to display in an `<h1>`)

- [X] Create an array of objects (global variable) in your `index.js`

- [X] Add an `/list` route that sends the whole array using `res.json()`

- [X] Add a template for `/list`

- [X] In the template, .map() the array in the template, showing 1 property in a `<li>`

- [X] Modify the .map(), showing a 2nd property

- [X] Add a route with a param for details (corresponding to one of the obj properties, like an id)

- [X] `res.send()` back the route param (so that when you go to `/items/:id`, you see the id)

- [X] Use res.json() to send the obj from the array, specified by the param

- [X] Update the list template (that appears on `/items`) so that each `<li>` has `<a>` that goes to details route

- [X] Add a template for the details page

- [X] Show the obj props in the template for the details page

- [X] Add `app.use(express.urlencoded ({extended: true}))` so express can decode form submissions

- [X] Add a pair of routes (.get and .post) for the same path: `/create`

- [X] Create a template for the `/create` form, with a form element that starts with `<form method="post">`

- [X] `res.render()` the create form at the `app.get()` route

- [X] In `app.post()` route, use values from `req.body` to `.push()` the new value to global array

- [X] `res.send()` the text "thank you" from the `.post()` route

- [X] Add a `/thank-you` route

- [X] Add a `/thank-you` template

- [X] `res.redirect()` to /thank-you from the .post route


