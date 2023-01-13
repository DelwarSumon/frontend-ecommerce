<p align="center"><a href="https://delwar-ecommerce.netlify.app/" target="_blank" ><img src="https://github.com/DelwarSumon/fs13-CSS-SASS/blob/main/logo.png?raw=true" style="width:150px; height:auto;"></a></p>

## Getting Started with Front-end Project 

This is an online store portal. Made with React JS, Redux, TypeScript and FakeApi for data. Used MUI, SCSS for design. 

## Featurs

- Cover slider, Most Recommended Products slider in Home page
- In products page user can see all the products by pagination, other functionalities like search product by title, change per page view, sort product, filter product list by category, price.
- Product detail page has image slide and detail information
- User can add product to cart, remove from cart, increase/decrease product quantity from cart and can make the cart empty
- User can create an account, login to the portal
- User can see profile after login
- Admin user can see the product list page and can create, edit, delete product
- 404 page if route is not exists

### Installation Procedure

- git clone https://github.com/DelwarSumon/frontend-ecommerce.git
- change your directory to frontend-ecommerce (Ex: `cd frontend-ecommerce`)
- `npm install`

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Folder/File Structure of `src` Folder

```CLEA
.
│   App.tsx
│   index.tsx
│   reportWebVitals.ts
│   setupTests.ts
│
└───common
    └───axiosInstance.ts
|
└───components
    └───auth
        |   Signin.tsx
        └───Signup.tsx
    |
    └───cart
        └───DrawerCart.tsx
    |
    └───footer
        └───Footer.tsx
    |
    └───header
        └───Header.tsx
    |
    └───home
        |   HomeSlider.tsx
        └───NewProducts.tsx
    |
    └───product
        |   AddToCartButton.tsx
        |   ProductAddDrawer.tsx
        |   ProductBox.tsx
        |   ProductEditDrawer.tsx
        └───ProductSideFilter.tsx
|
└───hooks
    └───reduxHook.ts
|
└───pages
    |   Cart.tsx
    |   Home.tsx
    |   NotFound.tsx
    |   ProductDetail.tsx
    |   ProductList.tsx
    |   Products.tsx
    |   Profile.tsx
    └───Root.tsx
|
└───redux
    |   store.ts
    └───methods
        |   cartMethods.ts
        └───productMethods.ts
    |
    └───reducers
        |   cartReducer.ts
        |   categoryReducer.ts
        |   productReducer.ts
        └───userReducer.ts
|
└───routes
    |   ProtectedRoute.tsx
    └───ProtectedRouteAdmin.tsx
|
└───styles
    └───style.scss
|
└───types
    |   cart.ts
    |   category.ts
    |   error.ts
    |   product.ts
    └───user.ts
|
└─── validations
    |   loginSchema.ts
    |   productSchema.ts
    └───registrationSchema.ts
```

## Live site

[Netlify](https://delwar-ecommerce.netlify.app/)
