import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  padding: 2rem 0;
  background-color: var(--saintBlue);
  color: var(--lightClr);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 2rem;
    align-items: center;
    flex-direction: column;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  width: 8rem;
  color: var(--lightClr);
  margin: 1rem;
  text-align: left;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 420px) {
    width: 100%;
    margin: 0;
    align-items: center;
    padding: 0.75rem;
    text-align: center;
  }
`;

export const FooterLinkTitle = styled.h3`
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  color: var(--lightClr);
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: var(--ctaClr);
    transition: 0.5s ease;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1200px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 3.5rem auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: var(--ctaClr);
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const WebsiteRights = styled.small`
  color: var(--lightClr);
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10rem;
`;

export const SocialIconLink = styled.a`
  color: var(--saintOrange);
  font-size: 36px;
  margin-right: 2rem;

  &:hover {
    color: var(--ctaClr);
    transform: scale(1.3);
    transition: all 0.5s ease;
  }
`;
