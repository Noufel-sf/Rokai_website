// components/registration/RegistrationTrigger.tsx
import React from "react";
import RegistrationModal from "../RegestretionModel";

interface RegistrationTriggerProps {
  children: (props: { onClick: () => void }) => React.ReactNode;
}

const RegisterationTrigger: React.FC<RegistrationTriggerProps> = ({
  children,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {children({ onClick: () => setOpen(true) })}
      <RegistrationModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default RegisterationTrigger;
