# Blogmania

## Description

This application represents my first attempt at application development using the MVC paradigm. The models leverage a MySQL database that is connected through sequelize. The views are handled through handlebars templates and the controllers and API routes are built using express. The application also leverages authentication using express sessions to ensure that the user is logged in before they are able to access certain features.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath) ![license](https://img.shields.io/github/license/Cleave13/blogmania)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

There is no installation required for the application. You can access the live application at https://aqueous-crag-90801.herokuapp.com/.

## Usage

Users can use this application to view blog posts about various javascript concepts and leave their comments. Users must be logged in to perform certain functions and when they are, the navigation links change from "login" to "logout".

![homepage](../blogmania/public/images/blogmania.png)

In addition users can click into a single post to view the related comments.

![homepage](../blogmania/public/images/post.png)

## License

This project is licensed under the terms of the [MIT license](https://choosealicense.com/licenses/mit/).

## Contributing

There were a variety of challenges that I was unable to overcome in this application. Dynamically merging information from related records and connecting the API routes for creation and deletion of posts. Any technical insight into how to better accomplish those items would be welcomed.

## Tests

There are no tests associated with the application.

## Questions

This application was created by [Chris Leavengood](https://github.com/Cleave13). Any questions related to this application can be sent to chrisleavengood@gmail.com