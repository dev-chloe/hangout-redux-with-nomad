# Vanilla-Redux and React-Redux

Learning Vanilla-Redux and React-Redux

## Project

### How to run?

```bash
# Clone repository
git clone https://github.com/dev-chloe/hangout-redux-with-nomad.git
cd hangout-redux-with-nomad

# Install node_modules
npm install

# Run application
npm start
```

## History

### Initiation

```bash
# Create new react project
npx create-react-app hangout-redux-with-nomad
```

### Set dependencies

1. [**redux**](https://redux.js.org/)

    ```bash
    # Install Redux Toolkit and React-Redux
    npm install @reduxjs/toolkit react-redux
    ```

    > state를 mutate(변형)하지 말아야된다.
    > mutate 하는 것이 아니라 새로운 objcts(새로운 상태)를 리턴해야 된다.

    ```javascript
        // mutation 예시
        const friends = ["dal"];

        friends.push("lynn");
    ```
