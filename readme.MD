# StampDeck

Building a national web community for philatelists, for all their stamp collecting needs.

> The following are detailed steps for contributing, to the best of my knowledge. Please let me know if I've missed something. Feel free to consult if needed.

## Steps to get the project running on your machine

> Step 0: Ensure that you have git, node and npm installed on your machine

> 1. Create a fork

> 2. Get the link to your fork from the code section of your repo. You'll see a green color code button, click on that and copy the https link

> 3. Open terminal on your machine and cd to the folder you want the project in. Run the following command. In case someone else has made some commits to the main repo, make sure you sync your fork before doing this.

```sh
 git clone <link-to-your-fork> 
```

> 4. If you're already in StampDeck and see 2 folders- frontend and backend on runnning ls or dir, ignore this step. Else, 

```sh
cd StampDeck
```

> 5. To run frontend, 

```sh
cd frontend

npm install

npm run dev 
```

> You'll see a localhost:5173 or something link in your terminal, click on that and the website should be running for you locally.

## Steps to push to repo after you've made your changes

> Push to your own fork first unless you're 100% sure what you're doing.

> Check that node_modules and other files that are not to be pushed are in your .gitignore, or deleted if you had created any temporary files.

> In your terminal, in the StampDeck folder, 

```sh
git add .

git commit -m "this is my commit message"
```

> Keep the commit message useful and informative

```sh
git push <link-to-your-fork>
```


