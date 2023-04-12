import styled from "@emotion/styled";
import { Button } from "antd";
import {
  AlignLeftOutlined,
  DownloadOutlined,
  FunnelPlotFilled,
} from "@ant-design/icons";
import { dummyClick } from "@/features/dummyClick";

/**
 * @description displays Home navigation Buttons
 * use as closed component, if there is usage on multiple pages, try to deter if the component is same, if not do not extend this and create more compact one
 * */
export const HomeMenuBarNavigation = () => {
  const mockNumOfNotes = 2;
  const mockNumOfActiveFilters = 2;

  return (
    <StyledNav>
      <StyledAntdButton onClick={dummyClick}>
        Export to pdf
        <DownloadOutlined />
      </StyledAntdButton>
      <StyledAntdButton onClick={dummyClick}>
        <NotesText>
          <span>Notes</span>
          <NotesCount>({mockNumOfNotes})</NotesCount>
        </NotesText>
        <AlignLeftOutlined />
      </StyledAntdButton>
      <StyledAntdButton onClick={dummyClick}>
        Filters
        <CircleBadge>9+</CircleBadge>
        <FunnelPlotFilled />
      </StyledAntdButton>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const StyledAntdButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const NotesText = styled.span`
  display: flex !important;
  gap: 4px;
`;

const NotesCount = styled.span`
  not:hover {
    color: gray;
  }
`;

const CircleBadge = styled.div`
  border-radius: 100%;
  display: flex;
  background-color: deepskyblue;
  color: white;
  padding: 4px;
  font-size: 12px;
  width: 22px;
  height: 22px;
  justify-content: center;
  align-items: center;
`;
