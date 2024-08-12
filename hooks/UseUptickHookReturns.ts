export interface UseUptickHookReturn {
  loginSubmit: () => void;
  loading: boolean;
  error: { data: { error: string } } | null;
  form: {
    handleSubmit: (
      callback: (data: any) => void
    ) => (event: React.FormEvent) => void;
    control: any;
    register: (name: string) => void;
  };
}
