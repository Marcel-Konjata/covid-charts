import { Avatar, Button, Card } from "antd";
import { FC, PropsWithChildren, useId } from "react";
import styled from "@emotion/styled";
import { MessageOutlined } from "@ant-design/icons";

interface ChartCardProps extends PropsWithChildren {
  numberOfMessages: number;
  onMessageClick?: () => void;
  avatarImageSrc?: string;
  chartTitle: string;
}
export const ChartCard: FC<ChartCardProps> = ({
  children,
  numberOfMessages,
  onMessageClick,
  avatarImageSrc,
  chartTitle,
}) => {
  const id = useId();
  //note: in ideal scenario you want separate functionality of chat bubble
  return (
    <Card
      title={chartTitle}
      actions={[
        <BottomContent key={id}>
          <Avatar
            src={avatarImageSrc ?? "https://i.pravatar.cc/150?img=3"}
          ></Avatar>
          <StyledButton
            onClick={() => {
              onMessageClick?.();
            }}
          >
            <span>{numberOfMessages}</span>
            <MessageOutlined />
          </StyledButton>
        </BottomContent>,
      ]}
    >
      {children}
    </Card>
  );
};

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: grey;
  :hover {
    color: grey;
  }
  cursor: auto;
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  gap: 6px;
`;
