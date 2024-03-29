# Rails 6 + Create React App Boilerplate

## Key Features

#### Rails Devise handles user authentications 🔑
- This allows us to utilize [Devise](https://github.com/heartcombo/devise)'s modules (Email Confirmation, Forget password, Remember Me, etc)
- Since CRA will share the same domain with Rails, it can access logged in user via cookie

#### ActiveAdmin on Rails side 👩‍💼
- [ActiveAdmin](https://activeadmin.info/) makes it simple for developers to implement beautiful and elegant admin interfaces with very little effort

#### styled-components 😍
- While user authentiation pages will consume the good ol' SCSS from asset piplines (we omit webpacker from rails), the react pages will use the very best [styled-components](https://styled-components.com/) to keep the concerns of styling and element architecture separated and make components more readable.

#### Best of both worlds 🔥
- We get to keep everything that we love about [create-react-app](https://github.com/facebook/create-react-app), and the ability to scale front and back ends accordingly

#### And all the important things...
- Redux + Thunk
- React Router
- Bootstrap
- Axios
- React Toastify


## Getting Started

1. `git clone git@github.com:itdev-1210/create-react-app-with-rails-login.git` then `cd create-react-app-with-rails-login`
2. Set up PostgreSQL: `rails db:create` then `rails db:migrate`
3. Set up CRA installation: `yarn install` (This will execute `yarn --cwd client install` which does yarn install in client folder)
4. To see how everything works together, run `yarn build && rails s`
  - `yarn build` trigger CRA build and copy the static files into rails `/public` folder, so we only need start Rails server for it to serve the react pages
5. To start development, run `foreman start -f Procfile.dev`
  - This will start Rails on port 3000 and CRA on port 3001
  - Use `localhost:3001` to develop in CRA, api calls to `/api/v1/` will be proxied to Rails (port 3000)
  - Logged out users will get redirected to `localhost:3001/users/sign_in` which doesnt exist on CRA, you will need to manually change the URL to 3000 to login. But this process only needs to happen once when you log out
6. To add new JS packages, make sure to do `yarn add <package-name>` inside `/client` folder


#### Active Admin

1. Since AA is on Rails, in development, you need to visit `localhost:3000/admin`
2. run `rails db:seed` to seed a sample admin user, log in to AA dashboard with `admin@example.com` and `password`
