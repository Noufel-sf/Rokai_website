// components/ErrorBoundary.tsx
import React from "react";

type Props = {
  fallback?: React.ReactNode;
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorFallback extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex h-screen items-center justify-center text-center">
            <div>
              <img src="/Customer-support.svg" alt="error in loading the page" className="w-50 md:w-100" />
              <h2 className="text-2xl font-bold">
                حدث خطأ ما.
              </h2>
              <p className="text-slate-500 mt-2">
                يرجى تحديث الصفحة.
              </p>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorFallback;
