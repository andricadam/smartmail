'use client'
import { useState } from 'react'
import { Nav } from './nav'
import { Calendar as UiCalendar } from '@/components/ui/calendar' // alias to avoid name clash

import {
  File,
  Inbox,
  Send,
  Calendar as CalendarIcon, // icon for the Calendar button
} from 'lucide-react'
import { useLocalStorage } from 'usehooks-ts'
import { api } from '@/trpc/react'

type Props = { isCollapsed: boolean }

const SideBar = ({ isCollapsed }: Props) => {
  const [tab] = useLocalStorage<'inbox' | 'drafts' | 'sent' | 'calendar'>(
    'normalhuman-tab',
    'inbox'
  )
  const [accountId] = useLocalStorage('accountId', '')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const refetchInterval = 5000
  const { data: inboxThreads } = api.mail.getNumThreads.useQuery(
    { accountId, tab: 'inbox' },
    { enabled: !!accountId, refetchInterval }
  )
  const { data: draftsThreads } = api.mail.getNumThreads.useQuery(
    { accountId, tab: 'drafts' },
    { enabled: !!accountId, refetchInterval }
  )
  const { data: sentThreads } = api.mail.getNumThreads.useQuery(
    { accountId, tab: 'sent' },
    { enabled: !!accountId, refetchInterval }
  )

  return (
    <>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: 'Inbox',
            label: inboxThreads?.toString() || '0',
            icon: Inbox,
            variant: tab === 'inbox' ? 'default' : 'ghost',
          },
          {
            title: 'Drafts',
            label: draftsThreads?.toString() || '0',
            icon: File,
            variant: tab === 'drafts' ? 'default' : 'ghost',
          },
          {
            title: 'Sent',
            label: sentThreads?.toString() || '0',
            icon: Send,
            variant: tab === 'sent' ? 'default' : 'ghost',
          },
          {
            title: 'Calendar',
            icon: CalendarIcon,
            variant: tab === 'calendar' ? 'default' : 'ghost',
          },
        ]}
      />

      {/* Show the calendar picker only when the Calendar tab is active */}
      {!isCollapsed && tab === 'calendar' && (
        <div className="px-2 mt-4">
          <UiCalendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
        </div>
      )}
    </>
  )
}

export default SideBar
