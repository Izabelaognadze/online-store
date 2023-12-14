# Online store

You are building an online store platform. The app has three types of users:  
1. Admins - managing the platform  
2. Store employees - representatives of stores selling on the platform and managing their storefront  
3. Customers - users ordering goods using your app  

The application should work in all major web browsers (chrome, safari, firefox, edge).  

Initially, there is a single admin user.
Admin users manage stores registered on the platform via the store management page. On the management page list of currently registered stores is displayed. Admin users can temporarily block the store and later reactivate it if required. Blocked store's products are removed from the product listing page seen by customers. All newly registered stores require initial approval by the admin, which is also done on this page.

A store employee can register his store on the platform using the store registration form.
The registration form for the store contains the following fields: store name, store tax id, employee email, employee name, and password.
After registering on the platform, the store employee can manage store product listings by adding, removing, or editing store products using the product management form.
The following information is required for adding a new product: name, category (predefined list, dropdown), summary, detailed description, product image thumbnail, product image, and price. (product image and thumbnail can be specified as URLs from third-party image hosting platforms)
Store users can temporarily disable the product and later enable it if required.
Store user manages customer orders via the order management page. On the management page list of orders is displayed. It should be possible to search orders by date, status, and code. Store users can reject orders if items are out of stock or mark orders as shipped.

Customers (buyers) can register on the platform to buy goods from different stores. The following information is required for registration: name, last name, and email.
Customers can search for products from different stores using the product search page. It should be possible to search products by name (partial match), category (exact match), the seller (store, typeahead dropdown), and price (range). Users can add products to the cart from search results or from the product details page. Each search result contains a thumbnail, product name, and link to the product details page, where a detailed description and larger image are displayed.
Customers can submit an order by navigating to the shopping cart, reviewing its contents, and pressing the "Create order" button.
Customers can view current and previous orders using the "my orders" page. It should be possible to search orders by date (range), status, and by code.



General notes:  
The landing page contains registration and sign-in page links for all types of users.  
The application should contain a header, footer, and navigation menu.  
The website header should display a name with greeting text and a signout button for an authenticated user.  
After signing in, the user is navigated to the home page, which has a dashboard with useful links and information.  
All lists containing potentially  more than ten items should use paging  
All forms, except popups, should be linkable (bookmarkable)  
All descriptions may include formatted text and require a WYSIWYG editor  
