import { queues } from './queues'
import { Job } from './Job'
import { JobData, PullEthereumEvents } from './PullEthereumEvents'

export class SchedulePullEthereumEvents extends Job<JobData> {
  public queue = queues.scheduler

  public async handle() {
    const { contractAddress, abi, initialStartFromBlock, startFromBlockNumber, blocksPerFetch, markAsProcessed } = this.data

    await new PullEthereumEvents({
      contractAddress,
      abi,
      initialStartFromBlock,
      startFromBlockNumber,
      blocksPerFetch,
      markAsProcessed,
    }).schedule()
  }
}
