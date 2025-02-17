import SectionBanner from '@/components/HomeComonents/SectionBanner'
import CartTable from '../../components/Table/CartTable'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

const bookingCart = async () => {
  const serverUrl = process.env.SERVER_HTTP;
  const session = await getServerSession(authOptions)
  const res = await fetch(`${serverUrl}/api/service/?email=${session?.user?.email}`)
  const data = await res.json()
 
  return (
    <div>
        <div className="mb-12">
         <SectionBanner title="My Cart"></SectionBanner>
        </div>
        <CartTable data={data}></CartTable>
    </div>
  )
}

export default bookingCart