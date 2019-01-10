# Restaurant Application [![Build Status](https://travis-ci.org/nursh/Restaurant-Application.svg?branch=master)](https://travis-ci.org/nursh/Restaurant-Application)

A web application for ordering food from a Restaurant

## Description

The project is a website for a restaurant. A user goes to the site to place an order from the menu. The menu is placed into several categories where each category has several items. The user can increase or reduce the quantity of the items to be added to the order. The user can review the order before checking out. In the order review, items can be removed from the order and the quantity can also be changed.


The menu categories and items in each category are stored in a GraphQL server(Apollo-Server with Heroku hosted MySQL accessed by typeORM). The payment is implemented using Stripe. The front-end uses React and Apollo-client to query and mutate the GraphQL server. Redux is used to handle the items list; adding items, removing items and changing the quantity. The NodeJS server handles creating charges after it has received a token from the front-end after an order has been paid for.

### Built with

* React (create-react-app)
* Redux
* Apollo-Client (front-end GraphQL)
* Sass using tools like CSS Grid and flexbox - for styling front-end
* Apollo-Server (backend GraphQL)
* Server-side is built with TypeScript
* Heroku hosted MySQL DB
* NodeJS - Express
* TypeORM - ORM to handle data from DB
* Stripe Payment using React-Stripe-Elements
* Nginx for reverse proxy
* TravisCI for Continuous Integration
* Docker
* Deployed with Amazon


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
