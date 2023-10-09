import { queues } from './queues'
import { contracts } from '@app/contracts'
import { getChainId } from '../lib/getChainId'
import { Job } from './Job'
import { PullEthereumEvents } from './PullEthereumEvents'
import { ScheduleProcessAllEthereumEvents } from './ScheduleProcessAllEthereumEvents'

export class SchedulePullAllEthereumEvents extends Job<{}> {
  public queue = queues.scheduler

  public async handle() {
    const chainId = getChainId()

    await new PullEthereumEvents({
      contractAddress: contracts.Subscription.addresses[chainId],
      abi: 'event Subscribed(address user, uint when)',
    }).schedule()

    await new ScheduleProcessAllEthereumEvents().schedule()
  }
}
