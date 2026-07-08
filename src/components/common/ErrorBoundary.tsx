import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('BTech app error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-6 text-center dark:bg-ink-950">
          <AlertTriangle className="text-primary-600" size={48} />
          <h1 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">
            Something went wrong.
          </h1>
          <p className="max-w-md text-ink-500 dark:text-ink-300">
            Please refresh the page. If the problem persists, contact our support team.
          </p>
          <Button onClick={() => window.location.reload()}>Refresh page</Button>
        </div>
      )
    }
    return this.props.children
  }
}
