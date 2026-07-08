import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { LoadingScreen } from '@/components/common/LoadingScreen'
import { AppRoutes } from '@/routes/AppRoutes'
import { useLocaleDirection } from '@/hooks/useLocaleDirection'
import { muiTheme } from '@/theme/muiTheme'

function AppShell() {
  useLocaleDirection()
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{initialLoading && <LoadingScreen />}</AnimatePresence>
      <AppRoutes />
    </>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider>
          <BrowserRouter>
            <AppShell />
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    </ErrorBoundary>
  )
}

export default App
