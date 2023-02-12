import { ErrorInfo, PureComponent } from "react";
import { NotFound } from "sad-landing-lib";

import { Props, State } from "@/components/ErrorBoundary/interfaces";

import { config } from "./mock";

class ErrorBoundary extends PureComponent<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <NotFound {...config} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
