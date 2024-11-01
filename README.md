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


//  hosting the app on firebase
    - for backend, we will be using google firebase
    - add project, use web
    - install firebase sdk, install configuration in firebase.js
    - enable authentication inside firebase (project overview)
    - use sign in method as your authentication
    - install firebase cli- npm install -g firebase-tools
    - do firebase login
    - firebase init
    - github hosting for the local
    - public directory is build folder
    - configure to index.html -> no
    - setup automatic deploy -> no
    - then do npm build
    - then firebase deploy


// Authentication
- Go to the documentation- go to web- manage users
- if the error message is null, then only do the authentication
- if the error exits, just return
- import getAuth and createUserWithEmail&PAssword
- copy paste sign up code from docs
- console the response
- check on firebase whether user is registered
- do sign in logic
- console the sign in user object

- redux- to change the state of the loggin in user
    - install 2 libraries->  npm i -d @redux/toolkit
    - npm i react redux
    - in utils, create appstore.js
        - const appStore= configureStore({
            reducer: {
                user: userReducer (or the name you imported)
            }
        })
        export default appStore

    - Then we will create a UserSlice in utils as well
        - const userSlice=createSlice({
            name: "user",
            initialState: null,
            reducers: {
                addUser: (state, action)=>{
                    return action.payload
                },
                removeUser: (state, action)=>{
                    return null
                }
            }
        })

        export const {addUser, removeUser} from userSlice.actions
        export default userSlice.reducer

-  Now import this reducer and put it up at store
- Provide the store to app at the root- where body is. wrap the body inside provider
- provider will take a store, which will in turn take app store

- Now as soon as a user logs in, update the
store with that user info
- We will dispatch using a utility provided
by fireBase, onAuthStateChange
- you can find it on docs, manage users
and initialise it on root level in body

- That API is like an event listner and we dont want to call it again and again. we need to call it only once. So we would add it in a useEffect hook.

- use dispatch hook inside onAuthState change to add someone to cart or remove them.

- dispatch(addUser(id, userName, displayName))

- when user is signed in, navigate them to the browse page. for that, use useNavigate hook.
if user sign out, navigate to main or login page. nagivate through login.js.

// sign out Feature
- add header to browse page
- give it w-screen
- add usericon in header and button
- add tailwind
- add signout api to the button. navigate to login page. 
- add update user profile api- do this when a user is created.
-  display photo on icon by useSelector.
const user=useSelector((store)=>store.user)



Part-9
- The browse should only be shown to authenticated users
- same as vice-versa. If a logged in user wanna go to the login page, they should be redirected to browse page
- put the useeffect in body to header so that we can use navigate

Part-10 - unsubscribing on auth change
- This means we have to remove event listners on header since it will be called multiple times 
and event listeners will be added multiple times.
- OnAuthState changed returns an unscubscribe function which we need to put in the return value.

Part-11
- Put strings in a constant variable so that it can be reused later.

Part-12
- set up TMDB.
- Get API_KEY and API_ACCESS_TOKEN
- API call will be made in the browse page. Get data from nowPlaying movies.


Part-13
- Adding movie data to the store with the help of redux
- create a movieSlice.js
- add moviesSlice to appStore.js
- add results to the movie slice by using dispatch

Part 14
- Creating the custom hook
- browse component is getting overloaded. SO dislocating redux go to a new place.

Part-15
- Making the browsePage
- This is divided into 2 section, main movie section and different movies recommendation sections.
- Main component will have video background and video title
- Let the first movie in the array be the main movie


Part-16
- Building the video title
- Pass title and desciption to video component with the help of props.
- Now give the video background
- There is video API in the TMDb section. It takes an id and give video of the particular movie
- Get type trailer from it.
- Key is youtube key which will help us fetch the trailer
- send movie id to video component so that the trailer is fetched.
- get type trailer with the help of filter method.
- if there are no videos of type trailer, then take the first video. If that exist, then use 1st trailer video
- Put embed code in videoBackground
- Put trailer inside redux store. Add it in movies slice in reducers.

- Creating custom hook for trailer video- make component clean
