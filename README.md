# NodeJS Mars-Rover

Mars-Rover written in Node [NodeJS](https://nodejs.org/en/) 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](deployment) for notes on how to deploy the project on a live system.

### Prerequisites

You'll need [Docker](https://www.docker.com/products/docker-desktop) installed

### Installing

A step by step series of examples that tell you how to get a development env running

Orchestrate the dev env

```
docker-compose up --build
```

That's it! The webserver is listening on [http://localhost:5000](http://localhost:5000)

## Running the tests

Testing is done using Jest

Run the tests with:

```
npm test
```

To run the tests in watch mode:
```
npm test -- --watch
```

### Coding style

Mars-Rover uses:

- [Eslint](https://eslint.org/)
- [Prettier](https://github.com/prettier/prettier)

to ensure code style cohesion throughout the project.
### Git Hooks

Git Hooks are triggered by [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) on:

**precommit**: will try to automatically fix any eslint errors, run the tests for staged files and will re-stage all the fixed/tested files

**prepush**: will run the tests before pushing

## Authors

* **Ollie Batchelor** - *Initial work* - [olliebatch](https://github.com/olliebatch)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
