declare namespace Utility {
  type TableColumns = {
    title: string;
    dataIndex: string;
    key: string;
    render?: (...args: unknown[]) => JSX.Element | JSX.Element[];
  };

  type JSONValue = Record<string, any>;
}
