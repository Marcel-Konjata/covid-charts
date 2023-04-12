import { FC } from "react";
import { ContentWrapper } from "@/features/layout/ContentWrapper";
import styled from "@emotion/styled";
import { Button } from "antd";

interface MenuBarProps {
  pageTitle?: string;
  navigationComponent?: JSX.Element;
}

/**
 * @description
 * Menu Bar is universal extensible component always displaying page title and optionally whatever second component at the right
 * Keep in mind that this component should follow open close principle - do not bake in any custom logic
 * */
export const MenuBar: FC<MenuBarProps> = ({
  pageTitle = "Page title",
  navigationComponent,
}) => {
  return (
    <StyledContentWrapper>
      <StyledPageTitle>{pageTitle}</StyledPageTitle>
      {navigationComponent}
    </StyledContentWrapper>
  );
};

const StyledContentWrapper = styled(ContentWrapper)`
  display: flex;
  padding: 28px 5px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  flex-wrap: wrap;

  @media (min-width: 650px) {
    padding: 28px 60px;
    flex-direction: row;
  }
  @media (min-width: 1450px) {
    padding: 28px 20px;
  }
`;

const StyledPageTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
`;
