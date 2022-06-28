# tictactoe
**tictactoe** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

Ignite CLI has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Ignite front-end development](https://github.com/ignite/web).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/username/tictactoe@latest! | sudo bash
```
`username/tictactoe` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)

## Player 1 First
0. ignite chain serve
1. tictactoed tx tictactoe game-create dave --from alice
2. tictactoed tx tictactoe game-join 0 alice --from alice
3. tictactoed q tictactoe game-info 0

## Player 2 First
0. ignite chain serve
1. tictactoed tx tictactoe game-create alice --from alice
2. tictactoed tx tictactoe game-join 0 dave --from alice
3. tictactoed q tictactoe game-info 0

## Player 1 Wins
0. ignite chain serve
1. tictactoed tx tictactoe game-create dave --from alice
2. tictactoed q tictactoe game-info 0
3. tictactoed tx tictactoe game-join 0 alice --from alice
4. tictactoed tx tictactoe game-play 0 dave 0 0 --from alice
5. tictactoed tx tictactoe game-play 0 alice 1 0 --from alice
6. tictactoed tx tictactoe game-play 0 dave 0 1 --from alice
7. tictactoed tx tictactoe game-play 0 alice 1 1 --from alice
8. tictactoed tx tictactoe game-play 0 dave 0 2 --from alice
9. tictactoed q tictactoe game-info 0

## Player 2 Wins
0. ignite chain serve
1. tictactoed tx tictactoe game-create dave --from alice
2. tictactoed q tictactoe game-info 1
3. tictactoed tx tictactoe game-join 1 alice --from alice
4. tictactoed tx tictactoe game-play 1 dave 0 0 --from alice
5. tictactoed tx tictactoe game-play 1 alice 1 0 --from alice
6. tictactoed tx tictactoe game-play 1 dave 0 1 --from alice
7. tictactoed tx tictactoe game-play 1 alice 1 1 --from alice
8. tictactoed tx tictactoe game-play 1 dave 2 2 --from alice
9. tictactoed tx tictactoe game-play 1 alice 1 2 --from alice
10. tictactoed q tictactoe game-info 1

## Draw
0. ignite chain serve
1. tictactoed tx tictactoe game-create dave --from alice
2. tictactoed q tictactoe game-info 2
3. tictactoed tx tictactoe game-join 2 alice --from alice
4. tictactoed tx tictactoe game-play 2 dave 0 0 --from alice
5. tictactoed tx tictactoe game-play 2 alice 1 0 --from alice
6. tictactoed tx tictactoe game-play 2 dave 2 0 --from alice
7. tictactoed tx tictactoe game-play 2 alice 0 1 --from alice
8. tictactoed tx tictactoe game-play 2 dave 2 1 --from alice
9. tictactoed tx tictactoe game-play 2 alice 1 1 --from alice
10. tictactoed tx tictactoe game-play 2 dave 0 2 --from alice
11. tictactoed tx tictactoe game-play 2 alice 2 2 --from alice
12. tictactoed tx tictactoe game-play 2 dave 1 2 --from alice
13. tictactoed q tictactoe game-info 2
