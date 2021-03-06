/* NOTE: The angular-in-memory-web-api is to be used only for creatging mock API endpoints 
* and returning mock data for UI design purposes! We need to remove this class once we want
* to start hitting real APIs on other servers!
*/
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let coins = [
      {id: 11, name: 'Ethereal'},
      {id: 12, name: 'Bitecoin'},
      {id: 13, name: 'Golemy'},
      {id: 14, name: 'Nosys'},
      {id: 15, name: 'HeavyCoin'}
    ]; // creates an in-memory table called 'coins' with a route called 'api/coins'

    let btcPrice = 1569.93; // creates an in-memory table called 'btcPrice' with a route called 'api/btcPrice'

    let mcPrice = 0.00000369; // creates an in-memory table called 'mcPrice' with a route called 'api/mcPrice'

    let transactions = [
      {id: 1009, txId: 'e89792dc69dd3a04472d5c6a1e41666c5d7675ae7836e8dba2d40e70199f53fc', dateInitiated: new Date("2017-05-08T22:00:00Z"), mcPurchased: 8000, btcSent: 0.02952, mcPriceBtc: 0.00000369, btcAddress: '1D9KSxezUn2YktFBHGbsy9L8r4xhNbZvvs', mcAddress: '0xbe6564eb3becd561762823598da5ce29e4587638', status: 'Pending' },
      {id: 1008, txId: 'ff9792dc69dd3a04472d5c6a1e41666c5d7675ae7836e8dba2d40e70199f53fc', dateInitiated: new Date("2017-05-07T09:31:00Z"), dateConfirmed: new Date("2017-05-07T09:57:00Z"), mcPurchased: 5000, btcSent: 0.01845, mcPriceBtc: 0.00000369, btcAddress: '1LSXSxezUn2YktFBHGbsy9L8r4xhNbZvvs', mcAddress: '0xbe6564eb3becd561762823598da5ce29e4587638', status: 'Confirmed' },
      {id: 1007, txId: 'xzw792dc69dd3a04472d5c6a1e41666c5d7675ae7836e8dba2d40e70199f53fc', dateInitiated: new Date("2017-05-06T12:28:00Z"), dateConfirmed: new Date("2017-05-06T13:01:00Z"), mcPurchased: 10000, btcSent: 0.03690, mcPriceBtc: 0.00000369, btcAddress: '1PQRSxezUn2YktFBHGbsy9L8r4xhNbZvvs', mcAddress: '0xbe6564eb3becd561762823598da5ce29e4587638', status: 'Confirmed' },
      {id: 1006, txId: 'pdq792dc69dd3a04472d5c6a1e41666c5d7675ae7836e8dba2d40e70199f53fc', dateInitiated: new Date("2017-05-05T18:04:00Z"), dateConfirmed: new Date("2017-05-05T18:42:00Z"), mcPurchased: 2000, btcSent: 0.00738, mcPriceBtc: 0.00000369, btcAddress: '1LKHSxezUn2YktFBHGbsy9L8r4xhNbZvvs', mcAddress: '0xbe6564eb3becd561762823598da5ce29e4587638', status: 'Confirmed' }
    ]; // creates an in-memory table called 'transactions' with a route called 'api/transactions'


    return { coins, btcPrice, mcPrice, transactions };  // returns the memory service object populated with the specified mock data
  }
}
