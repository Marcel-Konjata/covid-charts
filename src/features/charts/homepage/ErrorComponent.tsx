import { Button, Card } from "antd";
import { FC } from "react";
import styled from "@emotion/styled";

interface ErrorComponentProps {
  retry?: () => void;
  errorText: string;
}
export const ErrorComponent: FC<ErrorComponentProps> = ({
  retry,
  errorText,
}) => {
  return (
    <StyledCard>
      <StyledText>{errorText}</StyledText>
      {retry && <Button onClick={retry}>Retry</Button>}
    </StyledCard>
  );
};

const StyledText = styled.p`
  font-weight: bold;
  font-size: 13px;
`;

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
