# Restaurant Application [![Build Status](https://travis-ci.org/nursh/Restaurant-Application.svg?branch=master)](https://travis-ci.org/nursh/Restaurant-Application)

A web application for ordering food from a Restaurant(Ruby Continental)

## Description

The project is a website for a restaurant. A user goes to the site to place an order from the menu. The menu is divided into several categories, each category has several items. The user can increase or reduce the quantity of the items in the order or remove them entirely. The user can review the order before checking out. 


## Technical Implementation

* The schema for application is implemented using GraphQL(Apollo-Server)
* Application is using a MySQL database provisioned by Heroku
* Apollo-Client is used in the frontend to query schema from the backend
* Redux handles the state of the order items(increasing and decreasing quantity) in the front end
* Stripe handles payment in the backend and was implemented using React-Stripe-Elements
* Sass was used for styling the application

### Tools

* React (create-react-app)
* Redux
* Apollo-Client (front-end GraphQL)
* Sass - for styling front-end
* Apollo-Server (backend GraphQL)
* TypeScript
* Heroku hosted MySQL DB
* NodeJS - Express
* TypeORM - ORM to handle data from DB
* Stripe Payment using React-Stripe-Elements
* Nginx for reverse proxy between frontend and backend
* TravisCI for Continuous Integration
* Docker
* Deployed with Amazon ElasticBeanStalk

### Deployment Links

* [Ruby Continental App](http://ruby-continental.us-east-2.elasticbeanstalk.com/)
* [GraphQL Apollo API](http://ruby-continental.us-east-2.elasticbeanstalk.com/graphql)

### Credits 

* Icons from Flaticon authors:
  * [Freepik](https://www.flaticon.com/authors/freepik)
  * [Smashicons](https://www.flaticon.com/authors/smashicons)
  * [Eucalyp](https://www.flaticon.com/authors/eucalyp)
  * [Adil Sulthon](https://www.flaticon.com/authors/adib-sulthon)
  * [Pause08](https://www.flaticon.com/authors/pause08)
  * [Iconnice](https://www.flaticon.com/authors/iconnice)
  * [turkkub](https://www.flaticon.com/authors/turkkub)
  * [Wichaiwi.wi](https://www.flaticon.com/authors/wichaiwi)
  * [Monkik](https://www.flaticon.com/authors/monkik)
  * [Vignesh Oviyan](https://www.flaticon.com/authors/vignesh-oviyan)
  * [Lyolya](https://www.flaticon.com/authors/lyolya)
  * [Dinosoftlabs](https://www.flaticon.com/authors/dinosoftlabs)

* Illustrations from [unDraw](https://undraw.co/), created by Katerina Limpistouni
