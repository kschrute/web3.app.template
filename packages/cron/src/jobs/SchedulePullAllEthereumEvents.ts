import { subscriptionAddress, wNatAddress } from '@app/contracts'
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
      contractAddress: subscriptionAddress[chainId as keyof typeof subscriptionAddress],
      abi: 'event Subscribed(address user, uint when)',
    }).schedule()

    await new PullEthereumEvents({
      contractAddress: wNatAddress[chainId as keyof typeof wNatAddress],
      abi: 'event Deposit(address indexed dst, uint wad)',
    }).schedule()

    await new PullEthereumEvents({
      contractAddress: wNatAddress[chainId as keyof typeof wNatAddress],
      abi: 'event Withdrawal(address indexed src, uint wad)',
    }).schedule()

    await new ScheduleProcessAllEthereumEvents().schedule()
  }
}
