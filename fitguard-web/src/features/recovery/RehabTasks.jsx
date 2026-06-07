import useRecoveryStore from '../../store/recoveryStore'
import TaskStats from '../../components/TaskStats'
import TaskList from '../../components/TaskList'
import RedFlagWarning from '../../components/RedFlagWarning'

export default function RehabTasks() {
  const { tasks, completeTask, getProgress } = useRecoveryStore()

  const done = tasks.filter(t => t.completed).length

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium text-slate-900 mb-1">Daily rehab tasks</h1>
      <p className="text-slate-500 text-sm mb-6">Complete all tasks to progress your recovery</p>

      <TaskStats done={done} total={tasks.length} progress={getProgress()} />
      <TaskList tasks={tasks} onComplete={completeTask} />
      {done === tasks.length && <RedFlagWarning />}
    </div>
  )
}