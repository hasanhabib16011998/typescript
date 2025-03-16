# Setting Up a TypeScript Project with Node.js

Node.js comes with **NPM**, a package manager that helps manage project dependencies and orchestrate the build process. In this guide, we will set up a TypeScript project and install **TSC** (TypeScript Compiler) and **TSLint** (a linter for TypeScript).

## Step 1: Initialize a New Project

Open your terminal and create a new project folder, then initialize a new NPM project:

```sh
# Create a new folder
mkdir chapter-2
cd chapter-2

# Initialize a new NPM project (follow the prompts)
npm init

# Install TSC, TSLint, and type declarations for Node.js
npm install --save-dev typescript tslint @types/node
```

## Step 2: Configure TypeScript

Every TypeScript project should include a `tsconfig.json` file in its root directory. This file defines settings such as which files to compile, where to output the compiled files, and which JavaScript version to use.

### Create `tsconfig.json`

Run the following command to create the file:

```sh
touch tsconfig.json
```

Then, open `tsconfig.json` in your code editor and add the following configuration:

```json
{
  "compilerOptions": {
    "lib": ["es2015"],
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "target": "es2015"
  },
  "include": [
    "src"
  ]
}
```

## Step 3: Configure TSLint

Your project should also include a `tslint.json` file that contains your TSLint configuration. This file helps enforce coding styles, such as tab vs. space indentation.

While using **TSLint** is optional, it is **highly recommended** to maintain a consistent coding style across the project.

### Generate `tslint.json`

Run the following command to generate a default `tslint.json` file:

```sh
./node_modules/.bin/tslint --init
```

You can then customize the configuration. For example, here is a simple `tslint.json`:

```json
{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "rules": {
    "semicolon": false,
    "trailing-comma": false
  }
}
```

## Step 4: Create Your First TypeScript File

Now that we have set up TypeScript and TSLint, let’s create a source folder and our first TypeScript file:

```sh
mkdir src
touch src/index.ts
```

Your project structure should now look like this:

```
chapter-2/
├── node_modules/
├── src/
│   └── index.ts
├── package.json
├── tsconfig.json
└── tslint.json
```

Open `src/index.ts` and add the following code:

```ts
console.log('Hello TypeScript!');
```

## Step 5: Compile and Run Your Code

Now, compile and run your TypeScript code:

```sh
# Compile TypeScript with TSC
./node_modules/.bin/tsc

# Run the compiled JavaScript file with Node.js
node ./dist/index.js
```

If everything is set up correctly, your console should output:

```
Hello TypeScript!
```

Congratulations! You have successfully set up a TypeScript project with Node.js.

