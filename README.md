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

    ```javascript
        // mutation 없이 사용하는 방법
        const reducer = (state = [], action) => {
            switch (action.type) {
                case ADD_TODO:
                const newToDoObj = {text: action.text, id: Date.now() }
                return [newToDoObj, ...state];
                case DELETE_TODO:
                const cleaned = state.filter(toDo => toDo.id !== action.id);
                return cleaned;
                default:
                return state;
            }
        };
    ```

    [예제 코드 블럭](https://github.com/dev-chloe/hangout-redux-with-nomad/blob/af82a84fcf8eb1fdade26bbec6edc4c63e9d24f2/src/index.js#L18-L77)

2. [**ReactRouter**](https://reactrouter.com/)

    ```bash
    # react router
    npm install react-router-dom
    ```

    ```javascript
    // v6 
    <Route path="*" element={<Navigate replace to="/" />} />
    ```

3. [**eslint**](https://eslint.org/docs/latest/)

    ```bash
    eslint --init

    You can also run this command directly using 'npm init @eslint/config'.
    ✔ How would you like to use ESLint? · problems
    ✔ What type of modules does your project use? · esm
    ✔ Which framework does your project use? · react
    ✔ Does your project use TypeScript? · No / Yes
    ✔ Where does your code run? · browser
    ✔ What format do you want your config file to be in? · JavaScript
    Local ESLint installation not found.
    The config that you've selected requires the following dependencies:

    eslint-plugin-react@latest eslint@latest
    ✔ Would you like to install them now? · No / Yes
    ✔ Which package manager do you want to use? · npm
    Installing eslint-plugin-react@latest, eslint@latest
    ```

    - check [`.eslintrc.js`](./.eslintrc.js)
