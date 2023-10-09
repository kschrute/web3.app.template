import { contracts } from '@app/contracts'
import { queues } from './queues'
import { getChainId } from '../utils/getChainId'
import { Job } from './Job'
import { PullEthereumEvents } from './PullEthereumEvents'
import { ScheduleProcessAllEthereumEvents } from './ScheduleProcessAllEthereumEvents'

export class SchedulePullAllEthereumEvents extends Job<object> {
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
