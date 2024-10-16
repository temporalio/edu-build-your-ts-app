/*
A Workflow is a sequence of steps defined by writing code, known as a Workflow Definition. 
These steps are executed as a Workflow Execution.
A Workflow Definition is essentially a function, which can store state and orchestrates the execution of Activities. 
Workflows manage the coordination and logic of your application's processes, while Activities perform the tasks which interact with external services.
As mentioned, the Workflow will orchestrate the sequence of Activities such as sending welcome emails, charging customers, and handling cancellations.
*/

import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

// You can find this Activity in `activities.ts`
const { greet } = proxyActivities<typeof activities>({
  // The Start to Close Timeout is the maximum time allowed for a single Activity Task Execution, from when the Activity Task Execution gets polled by a Worker to when the server receives a successfull completion for that Activity Task.
  startToCloseTimeout: '1 minute',
});

/** A workflow that simply calls an activity */
export async function example(name: string): Promise<string> {
  return await greet(name);
}
