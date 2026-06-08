// src/features/notifications/NotificationCenter.jsx
import useUIStore from '../../store/uiStore'
import NotificationList from '../../components/NotificationList'

export default function NotificationCenter() {
  const {
    notifications,
    markAsRead,
    markAllAsRead,
    removeNotification,
    unreadCount,
    showToast,
  } = useUIStore()

  const handleMarkRead = (id) => {
    markAsRead(id)
    showToast({ message: 'Notification marked as read', type: 'info' })
  }

  const handleMarkAll = () => {
    markAllAsRead()
    showToast({ message: 'All notifications marked as read', type: 'info' })
  }

  const handleRemove = (id) => {
    removeNotification(id)
    showToast({ message: 'Notification removed', type: 'warning' })
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-medium text-slate-900 mb-1">Notifications</h1>
          <p className="text-slate-500 text-sm">
            {unreadCount() > 0 ? `${unreadCount()} unread` : 'All caught up'}
          </p>
        </div>
        <button
          onClick={handleMarkAll}
          disabled={unreadCount() === 0}
          className="text-sm font-medium text-emerald-500 hover:underline
            disabled:opacity-40 disabled:cursor-not-allowed disabled:no-underline"
        >
          Mark all as read
        </button>
      </div>

      <NotificationList
        notifications={notifications}
        onMarkRead={handleMarkRead}
        onRemove={handleRemove}
      />
    </div>
  )
}