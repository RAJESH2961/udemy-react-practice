export default function Tabs({ children, buttons, ButtonsContainer }) {
    return (
      <>
      //Here the ButtonContainer name is menu passed from props if you want to verify indpect the tools
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
      </>
    );
  }
  