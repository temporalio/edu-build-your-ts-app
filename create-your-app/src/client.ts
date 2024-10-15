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

  const handle = await client.workflow.start(example, {
    taskQueue: 'hello-world',
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
