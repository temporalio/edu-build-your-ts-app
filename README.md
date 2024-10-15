# Build Your Own Temporal Application in TypeScript!

You are going to build your own Temporal application in TypeScript! But first, as a prerequisite, let's run through a simple application that prints "Hello, Temporal!". Follow the steps below to run the _Hello World_ sample:

## How to Navigate to Your Files

1. Before you begin, you need to know how to navigate to certain files using git.    
- **Listing Files in a Directory**: In your terminal window, enter `ls` to list the contents of the current folder that you are in. Go ahead and try it now! You should see `README.md`, `hello-world`, `create-your-app`.
- **Entering a Folder**: To go into a folder, type `cd` followed by the folder name. For example, if you do `cd hello-world`, you will now enter the `hello-world` folder.   
    - Try it now and you will see that you have entered the `hello-world` directory. 
    - Type `ls` again to list all the files in your `hello-world` folder.
- **Going Backwards**: Enter `cd ..` to navigate back out to the previous directory. Try it now, and you will see you are back in the root directory.

## Hello World Sample:

### Setup

1. We need to begin by installing the dependencies you need for this project. First, navigate into the `hello-world` subdirectory.
2. In the same terminal window, run `npm install` to install the dependencies you need to run this application.
3. **If you're using the Gitpod environment to run this exercise, you can skip this step.**: For the exercises, make sure to run `temporal server start-dev --ui-port 8080 --db-filename clusterdata.db` in one terminal window to start the Temporal server.  

### Run a Worker

1. List all the files in this directory with `ls`. You should see `src`. This is the folder that is used to contain all your application logic. Enter into this folder with `cd src`. You need to enter into this folder so that you can run your Temporal Workflow code and Worker.
2. Now, you will start a Temporal Worker. In a terminal window separate from running the server if you have one running, run `npm run start.watch` to start the Worker.
    - In the terminal window, you should see: `Worker state changed { sdkComponent: 'worker', taskQueue: 'hello-world', state: 'RUNNING' }` which shows that the Worker is now running.
    - Workers are responsible for running your Temporal code. When you start a Workflow in Temporal, tasks get placed into a Task Queue. The Task Queue helps route tasks to the appropriate Worker, which executes the tasks. Workers continuously poll this queue for tasks and execute them. The Workflow doesn't proceed until a Worker picks up and processes the Workflow Task from the Task Queue.

### Run a Workflow

1. Now, you will run a Workflow. You will need to do this in a separate terminal window. To add more terminal windows in Gitpod, right click a terminal window and click `New Terminal`.
2. To run the Workflow, run `npm run workflow`.
    - In the terminal window, you should see: `Hello, Temporal!`.
    - A Workflow is a sequence of steps defined by writing code, known as a Workflow Definition. These steps are executed as a Workflow Execution. A Workflow Definition is essentially a function, which can store state and orchestrates the execution of Activities. Workflows manage the coordination and logic of your application's processes, while Activities perform the tasks which interact with external services. As mentioned, the Workflow will orchestrate the sequence of Activities such as sending welcome emails, charging customers, and handling cancellations.
    - Activities are the building blocks of a Temporal Workflow. They encapsulate the logic for tasks that interact with external services such as querying a database or calling a third-party API. One of the key benefits of using Activities is their built-in fault tolerance. If an Activity fails, Temporal can automatically retry it until it succeeds or reaches a specified retry limit. This ensures that transient issues, like network glitches or temporary service outages, don't result in data loss or incomplete processes.

Now that you've run a basic `hello world` application, it's time for you to try creating your own application.

### Create Your Own Application Setup

1. Kill the Worker from the `hello-world` project. In the terminal window where your Worker is running, do `CTRL C`, right click the terminal window, and click `Kill Terminal`. This terminal window will now be removed.
1. In the terminal window where your `hello world` Workflow was running, navigate into the `create-your-app` folder where some boiler code is already provided for you to get started.
    - Enter `cd ..` to navigate back out to the parent directory. You should now be back in the root directory.
    - Enter `ls` to see all the directories. You should see a `create-your-app` directory.
    - Enter the `create-your-app` directory by entering `cd create-your-app`.
2. Install your dependencies by running `npm install` in the same terminal window you used to navigate into this directory.
3. Start a Temporal Worker that will listen for any work that needs to be performed by running `npm run start.watch` in the same terminal window.
4. Now open a new terminal window where you will run your workflow with `npm run workflow` once you've created your own workflow.

Have fun building!
