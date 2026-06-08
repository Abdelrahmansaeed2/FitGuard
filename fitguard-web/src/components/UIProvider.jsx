// src/components/UIProvider.jsx
import Toast from './Toast'
import Alert from './Alert'
import Modal from './Modal'

export default function UIProvider({ children }) {
  return (
    <>
      {children}
      <Alert />
      <Toast />
      <Modal />
    </>
  )
}