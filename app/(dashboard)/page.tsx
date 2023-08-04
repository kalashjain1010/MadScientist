import Image from 'next/image'
import DashboardClient from './dashboardClient'
import { getProjections } from '@/actions/getProjections'
export const revalidate = 0

export default async function Home() {
  const posts = await getProjections()
  if(posts === null || posts.length === 0){
    return (
      <div>
          No posts available
      </div>
    )
  }
  return (
    <div>
      <DashboardClient data={posts} />
    </div>
  )
}
