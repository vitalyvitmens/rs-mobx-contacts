import { Component, ErrorInfo, ReactNode } from 'react'
import { Colors } from 'src/constants/colors'
import { errorMessages } from 'src/constants/errorMessages'
import { Card } from 'react-bootstrap'

interface ErrorBoundaryState {
  hasError: boolean
}

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    alert(errorMessages.getDerivedStateFromError(error))

    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    alert(errorMessages.componentDidCatch(error, errorInfo))
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card style={{ margin: 'auto', paddingTop: '25%' }}>
          <Card.Title
            style={{
              color: Colors.red,
              fontSize: '5rem',
              fontWeight: '800',
            }}
          >
            Что-то пошло не так!
          </Card.Title>
        </Card>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
