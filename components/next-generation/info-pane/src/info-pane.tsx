import * as React from "react";
import { omit } from "lodash";
import { Flag } from "@patternplate/component-flag";
import * as S from "./info-pane.styles";
import { has } from "./info-pane.utils";
import { SearchTrigger } from "./search-trigger";
import { InfoPaneVersion } from "./info-pane-version";
import { InfoPaneToggle } from "./info-pane-toggle";

export interface InfoPaneProps extends InnerInfoPaneProps {
  className?: string;
}

export const InfoPane: React.SFC<InfoPaneProps> = function InfoPane(props) {
  const { className } = props;
  const innerProps = omit(props, ["className"]);

  return (
    <S.StyledInfoPane className={className} hermit={props.hermit}>
      <InnerInfoPane {...innerProps} />
    </S.StyledInfoPane>
  );
}

export interface InnerInfoPaneProps {
  name: string;
  id: string;
  version: string;
  flag: string;
  tags?: string[];
  hermit: boolean;
  className?: string;
  manifestEnabled: boolean;
  manifest: string;
}

export const InnerInfoPane: React.SFC<InnerInfoPaneProps> = function InnerInfoPane(props) {
  return (
    <S.StyledInnerPane className={props.className}>
      <S.StyledName>
        <S.StyledDisplayName>{props.name}</S.StyledDisplayName>
        <S.StyledId>{props.id}</S.StyledId>
      </S.StyledName>
      {props.children && <S.StyledToolbar>{props.children}</S.StyledToolbar>}
      <S.StyledData>
        <tbody>
          <tr>
            <S.StyledDataCell>
              <S.StyledKey>Version</S.StyledKey>
            </S.StyledDataCell>
            <S.StyledDataCell>
              <InfoPaneVersion search={props.version}>
                {props.version}
              </InfoPaneVersion>
            </S.StyledDataCell>
          </tr>
          <tr>
            <S.StyledDataCell>
              <S.StyledKey>Flag</S.StyledKey>
            </S.StyledDataCell>
            <S.StyledDataCell>
              <SearchTrigger field="flag" search={props.flag}>
                <Flag>{props.flag}</Flag>
              </SearchTrigger>
            </S.StyledDataCell>
          </tr>
          {has(props.tags) && (
            <tr>
              <S.StyledDataCell>
                <S.StyledKey>Tags</S.StyledKey>
              </S.StyledDataCell>
              <S.StyledDataCell>
                {props.tags.map(t => <S.StyledTag key={t}>{t}</S.StyledTag>)}
              </S.StyledDataCell>
            </tr>
          )}
        </tbody>
      </S.StyledData>
      <InfoPaneToggle head="Manifest" enabled={props.manifestEnabled} name="manifest">
        <S.StyledCode block language="json">
          {props.manifest}
        </S.StyledCode>
      </InfoPaneToggle>
    </S.StyledInnerPane>
  );
}
