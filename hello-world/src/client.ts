/*
A Temporal Client is a component available in each Temporal SDK that provides a set of APIs to communicate with a Temporal Service. A Temporal Client is used to start a Workflow, send data to a Workflow, and more. It enables you to perform various operations such as:

- Start a business process.
- Get the result of a business process.
- List business processes or entities.
- Query the state of your business process.
- Send data into a running business process.

*/

import { Connection, Client } from '@temporalio/client';
import { example } from './workflows';

async function run() {
  // Connect to the default Server location
  const connection = await Connection.connect({ address: 'localhost:7233' });

  const client = new Client({
    connection,
  });

  // We are starting the `example` Workflow
  const handle = await client.workflow.start(example, {
    // We are placing the `example` Workflow on the `hello-world` task queue. We have a Worker configured to poll for tasks on the `hello-world` task-queue in `worker.ts`.
    taskQueue: 'hello-world',
    // `Temporal` will be the argument provided to the `example` Workflow.
    args: ['Temporal'],
    workflowId: 'hello-world-workflow'
  });
  console.log(`Started workflow ${handle.workflowId}`);

  // optional: wait for client result
  console.log(await handle.result()); // Hello, Temporal!
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
