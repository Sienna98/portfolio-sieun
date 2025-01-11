const UiComponentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="md:py-[100px] md:px-[150px] md:shadow-md md:shadow-[rgba(0,0,0,0.05)]">
        {children}
      </div>
    </div>
  );
};

export default UiComponentsLayout;
