const UiComponentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="py-[100px] px-[150px] shadow-md shadow-[rgba(0,0,0,0.05)]">
        {children}
      </div>
    </div>
  );
};

export default UiComponentsLayout;
