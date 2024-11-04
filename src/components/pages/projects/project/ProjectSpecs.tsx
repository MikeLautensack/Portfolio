import { Box } from "@mui/material";
import React from "react";
import SpecItem from "../../../misc/SpecItem";

export type Stack = {
  lang: { name: string; icon: React.ReactNode };
  database?: { name: string; icon: React.ReactNode };
  infrastructure: { name: string; icon: React.ReactNode };
  frontendFramework?: { name: string; icon: React.ReactNode };
  backendFramework?: { name: string; icon: React.ReactNode };
  metaFramework?: { name: string; icon: React.ReactNode };
};

type ProjectSpecsProps = {
  stack: Stack;
};

const ProjectSpecs = ({ stack }: ProjectSpecsProps) => {
  return (
    <Box
      component="div"
      className="flex flex-col justify-start items-start gap-4"
    >
      {stack.lang && (
        <SpecItem
          heading="Language"
          name={stack.lang.name}
          icon={stack.lang.icon}
        />
      )}
      {stack.database && (
        <SpecItem
          heading="Database"
          name={stack.database.name}
          icon={stack.database.icon}
        />
      )}
      {stack.infrastructure && (
        <SpecItem
          heading="Infrastructure"
          name={stack.infrastructure.name}
          icon={stack.infrastructure.icon}
        />
      )}
      {stack.frontendFramework && (
        <SpecItem
          heading="Frontend Framework"
          name={stack.frontendFramework?.name}
          icon={stack.frontendFramework?.icon}
        />
      )}
      {stack.backendFramework && (
        <SpecItem
          heading="Backend Framework"
          name={stack.backendFramework?.name}
          icon={stack.backendFramework?.icon}
        />
      )}
      {stack.metaFramework && (
        <SpecItem
          heading="Meta Framework"
          name={stack.metaFramework?.name}
          icon={stack.metaFramework?.icon}
        />
      )}
    </Box>
  );
};

export default ProjectSpecs;
