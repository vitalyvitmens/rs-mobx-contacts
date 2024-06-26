import { Suspense } from 'react'
import { routes } from '../../routes/routes'
import { BrowserRouter, Routes } from 'react-router-dom'
import ErrorBoundary from 'src/components/ErrorBoundary/ErrorBoundary'
import { renderRoutes } from 'src/utils/renderRoutes'
import { ThemeProvider } from 'react-bootstrap'
import './MainApp.scss'

export const MainApp = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense>
            <Routes>{renderRoutes(routes)}</Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  )
}
