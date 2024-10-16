/*
Workers are responsible for running your Temporal code. When you start a Workflow in Temporal, tasks get placed into a Task Queue. 

The Task Queue helps route tasks to the appropriate Worker, which executes the tasks. 

Workers continuously poll this queue for tasks and execute them. The Workflow doesn't proceed until a Worker picks up and processes the Workflow Task from the Task Queue.
*/

import { NativeConnection, Worker } from '@temporalio/worker';
import * as activities from './activities';

async function run() {
  // Step 1: Establish a connection with Temporal server.
  const connection = await NativeConnection.connect({
    address: 'localhost:7233',
  });
  // Step 2: Register Workflows and Activities with the Worker.
  const worker = await Worker.create({
    connection,
    // Your Worker is polling the `hello-world` task queue looking for work to be done. We will add tasks to this task queue in `client.ts`.
    taskQueue: 'hello-world',
    workflowsPath: require.resolve('./workflows'),
    activities,
  });

  // Step 3: Start accepting tasks on the `hello-world` queue
  //
  // The worker runs until it encounters an unexpected error or the process receives a shutdown 
  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});