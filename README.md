Netflix GPT
- create react app
- install tailwind

- Features
Login/sign up page. Once signed up, go to the browse page.

- Browse
	-header
	- main movie
		- trailer, background,
		- movie details
	-movie suggestions 
		- movie list

	-netflix gpt	
		-search bar
		- movie suggestions 

Do setup first such as routing and all that

For router, first create appRouter from createBrowserROuter and we supply that via Router provider which sits in the return of body.
RouterProvider router={appRouter}


// build the header, add it in login page and then create login form. Make it interactive with respect to sign out.

// Add validation to the form
    - add eventlistner to button
    - add the validation logic inside utils
        - if string is returned, it means error
        - if null is returned, this means no error.
        - we can extract the value of email and pw by creating a reference using useref hook.
        - useRef give reference of the inputbox in the form of an object


// building the authentication
