// src/features/recovery/RehabTasks.jsx
import useRecoveryStore from '../../store/recoveryStore'
import useUIStore from '../../store/uiStore'
import TaskStats from '../../components/TaskStats'
import TaskList from '../../components/TaskList'
import RedFlagWarning from '../../components/RedFlagWarning'

export default function RehabTasks() {
  const { getCurrentPhaseTasks, completeTask, getProgress } = useRecoveryStore()
  const { showToast } = useUIStore()

  const tasks = getCurrentPhaseTasks()
  const done = tasks.filter(t => t.completed).length

  const handleComplete = (taskId) => {
    const task = tasks.find(t => t.id === taskId)
    completeTask(taskId)
    showToast({ message: `✓ ${task.title} completed!`, type: 'success' })
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium text-slate-900 mb-1">Daily rehab tasks</h1>
      <p className="text-slate-500 text-sm mb-6">Complete all tasks to progress your recovery</p>

      <TaskStats done={done} total={tasks.length} progress={getProgress()} />
      <TaskList tasks={tasks} onComplete={handleComplete} />
      {done === tasks.length && <RedFlagWarning />}
    </div>
  )
}