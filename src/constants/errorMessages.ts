import { ErrorInfo } from 'react'

export const errorMessages = {
  fetchContactsError: 'Ошибка при получении контактов:',
  fetchGroupContactsError: 'Ошибка при получении групп контактов:',
  networkError: 'Сетевая ошибка',
  fetchError: 'Ошибка при выполнении fetch:',
  localStorageSaveError: 'Не удалось сохранить данные в localStorage:',
  localStorageReadError: 'Не удалось прочитать данные из localStorage:',
  getDerivedStateFromError: (error: Error) =>
    `Error message from getDerivedStateFromError: ${error.message}`,
  componentDidCatch: (error: Error, errorInfo: ErrorInfo) =>
    `Error message from componentDidCatch: ${error.message}\nError info from componentDidCatch: ${errorInfo.componentStack}`,
}
