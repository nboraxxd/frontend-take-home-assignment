import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const STATUSES = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
] as const

type StatusValue = (typeof STATUSES)[number]['value']

const Index = () => {
  const [currentStatus, setCurrentStatus] = useState<StatusValue>('all')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-10">
          <Tabs.Root
            defaultValue="all"
            onValueChange={(value) => setCurrentStatus(value as StatusValue)}
          >
            <Tabs.List className="space-x-2">
              {STATUSES.map((status) => (
                <Tabs.Trigger key={status.value} value={status.value} asChild>
                  <button className="rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-gray-700 transition-colors hover:border-gray-300 data-[state=active]:border-none data-[state=active]:bg-gray-700 data-[state=active]:text-white data-[state=active]:hover:bg-gray-800">
                    {status.label}
                  </button>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <Tabs.Content value={currentStatus}>
              <TodoList status={currentStatus} />
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
