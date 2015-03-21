## Front End Code Test for ZipfWorks Engineering Candidates ##

### Introduction ###

[ZipfWorks](http://www.zipfworks.com/) is currently seeking a talented front end engineer
to join our growing team. More information about our company and the position are available
at our [Stack Overflow careers page](http://careers.stackoverflow.com/jobs/83061/javascript-engineer-zipfworks).

This repository contains the instructions and assets for completing the code test,
which involves building a web app that covers some of the basic use cases for our coupon product,
[BluePromoCode](https://bluepromocode.com/), and makes use of our RESTful API endpoints.

### Requirements ###

Your mission is to write a web app with the below views.

1. Coupons:
  - Show coupons from our REST API
  - Resource: `http://api.bluepromocode.com/v2/promotions`
  - Method: `GET`

2. Login:
  - Login using our REST API
  - Resource: `http://api.bluepromocode.com/v2/users/login`
  - Method: `POST`
  - JSON Encoded Parameters: `email`, `password`
  - We have a test account you can use: email: `a@a.com`, password: `12345678`

3. Bonus - Signup:
  - Signup using our REST API
  - Resource: `http://api.bluepromocode.com/v2/users/register`
  - Method: `POST`
  - JSON Encoded Parameters: `fullName`, `email`, `password`

4. Bonus - Personalized Coupons:
  - Show personalized coupons from our REST API (requires authentication)
  - Resource: `http://api.bluepromocode.com/v2/users/self/promotions/suggestions`
  - Method: `GET`

### Tech Stack ###

You're welcome to use any Javascript and CSS frameworks or libraries of your choosing
and the JS can be client-side (Ember, Angular, React, Knockout, Polymer, jQuery,
vanilla Javascript, etc), server-side (Node.js - Express, Koa, etc) or a combination.

For the purposes of this test, we'd like you to focus on the internal structure of the
project more than how it looks - basic markup and CSS is fine and the
overall design is open-ended.

### Developing ###

1. Fork or copy this repository to your Github account
2. Implement the above requirements - we'd like to see at least several commits to
   get an idea of your development process
3. You may use any 3rd party frameworks of libraries - keep in mind that
   we may ask how you might implement the same functionality without the
   use of said libraries
4. If you have any questions, don't hesitate to contact us at any time
   at web@zipfworks.com

### Submitting Your Code ###

1. Include in this README (or a separate markdown file) any steps needed
   for us to compile and run your code
2. Send the link for your repository to web@zipfworks.com
3. After we receive your submission, we'll schedule a follow-up
   interview to go over your project
