import { appName } from '../../lib/app-info'
import Connect from '../auth/connect/Connect'

const Public = () => (
  <div
    className="min-h-[calc(100vh-96px)] flex flex-col items-start justify-center max-w-[700px] m-auto gap-6 pb-5 text-sm"
  >
    <h1 className="text-xl">Welcome to the {appName}</h1>

    <div className="max-w-[590px]">
      <p className="mb-5">
      Using this you cant just put your storage at fission but the whole web3
      </p>

      <ul className="mb-6 pl-6 list-disc">
        <li>
          <span className="font-bold">save everywhere</span>
          , your file is saved not only on fission but IPFS, nft.storage, spheron, you name it
        </li>
        <li>
          <span className="font-bold">user-controlled data</span>
          , your data is yours
        </li>
        <li>
          <span className="font-bold">why i named it Super Storage Attack</span>
          , coz i love attack on titan nothing else
        </li>
      </ul>

      <Connect />
    </div>
  </div>
)

export default Public;
