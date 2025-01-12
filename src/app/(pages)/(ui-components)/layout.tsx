const UiComponentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100dvh] flex items-center justify-center">
      <div className="md:py-[100px] md:px-[150px] md:shadow-md">{children}</div>
    </div>
  );
};

export default UiComponentsLayout;
