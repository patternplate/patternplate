import * as React from "react";
import styled from "styled-components";
import * as URL from "url";
import * as querystring from "querystring";

export interface MarkdownVideoProps {
  provider: string;
  src: string;
  autoPlay?: boolean;
  controls?: string;
  playsInline?: boolean;
  muted?: boolean;
  loop?: boolean;
  width: string;
}

const StyledVideo = styled.video`
  width: auto;
  max-width: 100%;
`;

const StyledEmbed = styled.div<{ width: string }>`
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	height: 0;
  max-width: 100%;
  margin-bottom: 16px;
  width: ${props => props.width};
`;

const StyledFrame = styled.iframe`
  position: absolute;
	top: 0;
  right: 0;
  bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
  border: none;
  margin-bottom: 16px;
`;

export const MarkdownVideo: React.SFC<MarkdownVideoProps> = props => {
  const controls = flag(props.controls, true);
  const autoPlay = def(props.autoPlay, false);
  const loop = def(props.loop, false);
  const playsInline = def(props.playsInline, false);
  const muted = def(props.muted, false);

  if (props.provider === "youtube") {
    const frags = props.src.split('/').filter(Boolean);
    const id = (frags[frags.length - 1] || '').split('?')[0];

    return (
      <StyledEmbed width={props.width}>
        <StyledFrame src={`https://www.youtube-nocookie.com/embed/${id}/`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
      </StyledEmbed>
    );
  }

  if (props.provider === "vimeo") {
    const frags = props.src.split('/').filter(Boolean);
    const id = (frags[frags.length - 1] || '').split('?')[0];

    return (
      <StyledEmbed width={props.width}>
        <StyledFrame src={`https://player.vimeo.com/video/${id}/`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
      </StyledEmbed>
    );
  }

  const {provider: _, src: __, controls: ___, ...p} = props;

  return <StyledVideo
    src={props.src}
    controls={controls}
    autoPlay={autoPlay}
    loop={loop}
    playsInline={playsInline}
    muted={muted}
    />;
};

function def(input: boolean | undefined, fb: boolean): boolean {
  if (typeof input === 'undefined') {
    return fb;
  }
  return input;
}

function flag(input: string, fb: boolean): boolean {
  return typeof input === "undefined"
    ? fb
    : input === "true";
}
